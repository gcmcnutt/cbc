# Replicant Chatbot Challenge

## Work
- authentication
- maybe some logging too
- consider shared state to re-establish sessions
- reconnect or migrate off websockets
- figure out the kustomize pattern for managed certs and fixed ips for ingress

## Stuff
- gke
- TLS ingress
- github CICD
- dd metrics
- app.restart alarms -> incident reporting
- dev/prod envs

## Rest of the stuff
Hello. If you're reading this, it means you've made it part way through Replicant's hiring process. Congratulations and welcome! This next bit should be fun. 🙂

This repository contains a skeleton of a chatbot web app. The rest of this document describes how to run this skeleton. For your challenge, we are asking you to make certain changes to this code; the precise nature of the changes depends on the role that you're applying for. You should have received those details in a separate email; if not, reach out to your hiring manager for help.

A working copy of this project can be found at https://chatbot-challenge.dev.replicant.ai.

### Running in Docker

The easiest way to run this code is with Docker. Build the Docker image as follows:

```shell
docker build -t chatbot-challenge .
```

This will take a few minutes the first time you run it. Once the image is built, you can run it locally as follows:

```shell
docker run -p 4444:4444 chatbot-challenge
```

You should then be connect to `http://localhost:4444` and interact with the chatbot.

### Local development

To facilitate rapid local development, you can run both the server and the client in auto-reloading dev server mode. To start the server:

```shell
cd server
npm install
npm run start
```

To start the client:

```shell
cd client
npm install
npm run start
```

Once both are running, you can connect to `http://localhost:7777` (note the port!) to interact with the chatbot. Any change to the server or client code will automatically recompile and restart the appropriate process.
