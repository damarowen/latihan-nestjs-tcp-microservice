# TCP Microservices with NestJS

This repository contains two microservices built with NestJS that communicate via TCP.

## Services

- **Producer (hello-api)**: A REST API that sends requests to the Consumer service to get "Hello, World!" messages identified by an ID passed in the API request.

- **Consumer (hello-world)**: A TCP microservice that listens to incoming messages from the Producer service and responds with "Hello, World!" messages identified by ID.
