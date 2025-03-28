# Express API Docker

This repo provides an example of setting up MongoDB with Express and Docker
Compose to be used as for local development. Please don't use this in production.

## Running Locally

1. Clone the repository.
1. Run `pnpm install`.
1. Run `docker-compose up`.

This will ensure that the `${HOME}/tmp/datadir` directory exists to mount as a
Docker Volume, and bring up the MongoDB and application containers.

To stop the running containers run `docker-compose down`.
