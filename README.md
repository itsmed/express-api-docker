# Express API Docker

This repo provides an example of setting up [MongoDB][] with [Express][] and
[Docker Compose][] to be used as for local development. Please don't use this in
production.

[MongoDB]: https://www.mongodb.com/
[Express]: https://expressjs.com/
[Docker Compose]: https://docs.docker.com/compose/

## Running Locally

1. Clone the repository.
1. Run `pnpm install`.
1. Ensure that `$HOME/tmp/datadir` exists.
1. Copy the `.env.example` to `.env`
1. Run `docker-compose up`.

This will bring up the `mongodb` and `server` services and corresponding containers.

To stop the running containers run `docker-compose down`.
