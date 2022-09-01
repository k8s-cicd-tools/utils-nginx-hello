import * as k8s from "@pulumi/kubernetes";
import * as kx from "@pulumi/kubernetesx";

const appLabels = { app: "hello-v1" };
const deployment = new k8s.apps.v1.Deployment("hello-v1", {
    metadata: {
        labels: appLabels,
        namespace: "default",
    },
    spec: {
        replicas: 3,
        selector: { matchLabels: appLabels },
        template: {
            metadata: { labels: appLabels },
            spec: {
                containers: [{
                    name: "hello-v1",
                    image: "gcr.io/google-samples/hello-app:1.0",
                    ports: [{ containerPort: 8080 }],
                }],
                },
            },
        },
    });

const service = new k8s.core.v1.Service("hello-v1", {
    metadata: {
        labels: appLabels,
        namespace: "default",
    },
    spec: {
        ports: [{ port: 8080, targetPort: 8080 }],
        selector: appLabels,
    },
});

export const name = deployment.metadata.name;
export const namespace = deployment.metadata.namespace;
export const labels = deployment.metadata.labels;


