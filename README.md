## Real - Course Sign up Back End

This project consists of the Node back end for the course registration exercise as well as the docker file to create a postGres image for use locally.

The course API does a majority of the heavy lifting here and the `courses` object carries most of what we see displayed in the front end of this application.

This has been my first time interacting with `TypeOrm` and thanks to this project I have become a huge fan.

An improvement left to make here would be much more robust typing, though this concept falls into the Typescript knowledge realm and focus was put on concepts and functionality.

No new dependencies have been added to this project and the server/database can be setup and run as outlined below.

## Getting Started

- Make sure you have `yarn` installed on your machine. If you do not, please look at the following [installation instructions](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

- The server will require Docker. You can download and set up Docker [here](https://www.docker.com/get-started).

### Server

- There is a basic NodeJS server set up(`src/server.ts`). It utilizes:
  - [express](https://expressjs.com/)
  - [Typescript](https://www.typescriptlang.org/)
  - [PostgreSQL](https://www.postgresql.org/)
  - [TypeOrm](https://typeorm.io/#/)


### To Get DB & Server Running
To set up the server, make sure you're in the `real-be/` directory.

There is some test data included in `real-be/src/data/` as a starting point to seed your database. Feel free to add or change data.

The database is setup via Docker. There is already a `docker-compose.yml` file in the server directory, so if you have Docker installed, just run:
```bash
docker-compose up -d
```

To create the DB Tables and Seed the Database, we need to install all our server packages. First run:
```bash
yarn
```

Then to create DB Tables, run:
```bash
yarn db:run
```

Then to seed the DB, run:
```bash
yarn db:seed
```

To start the server, run:
```bash
yarn start
```