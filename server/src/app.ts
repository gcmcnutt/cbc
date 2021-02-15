import express from 'express';
import path from 'path';
import { dogstatsd } from './ddservice';
import {handleMessage} from "./bot";

export const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

dogstatsd.increment('app.restart');

app.use(express.static(path.join(__dirname, "../../client/build")));

// In local dev mode, we have to run the WS server on a different port than the main HTTP server,
// because the client skeleton bundled with this challenge is built on top of Create React App,
// whose dev server takes ownership of all websocket connections on the port it's running on.
// TODO: Get rid of CRA.

const httpPort = Number(process.env.HTTP_PORT) || 4444;
const jwksUri = process.env.JWKS_URI || 'https://dev-zib1jbv0.us.auth0.com/.well-known/jwks.json';
const audience = process.env.AUDIENCE || 'https://cbc.accelero.com';
const issuer = process.env.ISSUER || 'https://dev-zib1jbv0.us.auth0.com/';

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: jwksUri
  }),
  audience: audience,
  issuer: issuer,
  algorithms: ['RS256']
});

app.use(express.json()); // for parsing application/json

app.post('/message', jwtCheck, function (req, res) {
  let rawMessage = req.body.message;
  let userId = "1";
  res.send(handleMessage(userId, rawMessage));
});

app.listen(httpPort, () => {
  console.log(`Listening on port ${httpPort}`)
});
