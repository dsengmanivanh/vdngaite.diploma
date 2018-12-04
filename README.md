# Inno Starter pack

A React app using webpack, sass and hot reloading with browsersync.

[demo](http://159.122.183.120:31055)

## Installation

```
$ npm install
```

## Running Locally

```
$ npm start
```

It is for dev environment and you can see some statistics with visualize (http://localhost:8080/statistics.html)


## Prod

```
$ npm run build
```

This command line create a dist with your bundle

## Add a new bundle

Add on webpack.common.js an entry and copy on plugins a new HtmlWebpackPlugin with your entry on chunks.

example:
```
new HtmlWebpackPlugin({
  template: "./src/new.html",
  filename: "./new.html",
  chunks: ['entry']
})
```

## Vulnerabilities

```
$ npm update request --depth 3
```

It still 5 vulnerabilities with [node sass](https://github.com/sass/node-sass/issues/2355)

## Docker

To create the image
```
docker build -t <your username>/innostarterkit .
```

To run the image
```
docker run -p 3000:8080 -d <your username>/innostarterkit
```

To check inside the container
```
docker exec -it <containerId> bash
```

Build docker compose
```
docker-compose build
```

To up docker compose
```
docker-compose up
```

## IBM CLOUD

#### Step 1

[IBM Cloud Container Registry](https://console.bluemix.net/containers-kubernetes/registry/start)

Choose a name for your first namespace, and create that namespace. Use this namespace for the rest of the Quick Start.
```
ibmcloud cr namespace-add inno
```

Choose a repository and tag by which you can identify the image.
```
docker tag innostarterkit_app1 registry.eu-de.bluemix.net/inno/innostarterkit_app1:latest
```

Push the image.
```
docker push registry.eu-de.bluemix.net/inno/innostarterkit_app1:latest
```

[Verify that your image is in your private registry.](https://console.bluemix.net/containers-kubernetes/registry/private
)

```
ibmcloud cr image-list
```

#### Step 2

[Deploying apps into Kubernetes clusters](https://console.bluemix.net/docs/containers/cs_tutorials_apps.html#cs_apps_tutorial)

[example](https://github.com/IBM/container-service-getting-started-wt/tree/master/Lab%201)


```
ibmcloud login -a https://api.eu-de.bluemix.net
bx cr login
docker build --tag registry.eu-de.bluemix.net/inno/innostarterkit:v2 .
docker push registry.eu-de.bluemix.net/inno/innostarterkit:v2
bx cs cluster-config mycluster
kubectl run innostarterkit --image=registry.eu-de.bluemix.net/inno/innostarterkit:v2 --record
kubectl get pods
kubectl expose deployment/innostarterkit --type="NodePort" --port=8080
kubectl describe service innostarterkit
bx cs workers mycluster
curl 159.122.183.120:31055
kubectl delete deployment hello-world
```

See pods, rs and deployments
```
kubectl get pods,rs,deployments
```

[Updates](https://www.linux.com/learn/rolling-updates-and-rollbacks-using-kubernetes-deployments)

```
docker build --tag registry.eu-de.bluemix.net/inno/innostarterkit:v3 .
docker push registry.eu-de.bluemix.net/inno/innostarterkit:v3
bx cs cluster-config mycluster
kubectl set image deployment/innostarterkit innostarterkit=registry.eu-de.bluemix.net/inno/innostarterkit:v3 --record
kubectl rollout history deployments innostarterkit
kubectl get rs
```

Revert

```
kubectl rollout undo deployments innostarterkit --to-revision=2
```

## Link

- [Atom](https://www.sitepoint.com/10-essential-atom-add-ons/)

- [Webpack](http://putaindecode.io/fr/articles/js/webpack/)

- [Node JS and Docker](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)