# Installing datadog agent in k8s cluster
Each k8s cluster that gets datadog-agent as a daemon set needs to run this workload:

```
helm install datadog -f datadog-values.yaml --set datadog.site='datadoghq.com' --set datadog.apiKey=<<your key>> datadog/datadog 
```