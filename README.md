## Utilities - Nginx - Hello World

Hello, world! application with nginx . Contains Kubernetes manifests, implementation using Pulumi, and Jenkinsfile pipeline.

It is a Deployment with 3 replicas and a Service exposing port 8080.

## How to get started

1. Install kubectl and pulumi.
2. Clone this repo.
3. Run `$ npm install`
4. Run `$ pulumi up` to create the kubernetes resources.
5. Run `$ kubectl get pods` 
6. Forward a local port to a port on the Pod. e.g. `$ kubectl port-forward <pod-name>  8080:8080`
7. Open a browser and navigate to http://localhost:8080
8. Run `$ pulumi destroy` to delete the kubernetes resources.

Alternatively, you can use kubectl directly:

```
$ kubectl apply -f path/to/kubernetes/manifests/nginx-hello.yaml
$ kubectl get pods
$ kubectl port-forward <pod-name>  8080:8080
open http://localhost:8080
$ kubectl delete -f path/to/kubernetes/manifests/nginx-hello.yaml
```

Alternatively, you can use the Jenkinsfile to run the pipeline:

| Jenkinsfile                        | Description                                |
|------------------------------------|--------------------------------------------|
| jenkins/Jenkinsfile-pulumi-up      | This will create the kubernetes resources. |
| jenkins/Jenkinsfile-pulumi-destroy | This will delete the kubernetes resources. |

Other requirements:
1. A jenkins agent with pulum and kubectl installed and configured to connect to the kubernetes cluster.
2. The agent must have the "pulumi" label
3. Global tool configuration: add a NodeJS 16.17.0 installation with the name "node 16.17.0"
4. Configure the SCM Pipeline script with this repository, select the branch and change the Jenkins file path to the corresponding option to deploy.


## Output 

This shows when opening in a web browser.

```
Hello, world!
Version: 1.0.0
Hostname: hello-v1-abcdef-ghijkl
```



## Resources and Dependencies

| Name       | Version | Required |
|------------|---------|----------|
| kubernetes | 1.23    | no       |
| pulumi     | 3.38.0  | no       |




