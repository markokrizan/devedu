# WP + Next.js blog

Dev:

- clone
- run `cp .env.example .env`
- run `cd frontend && cp .env.development.example .env.development`
- run `docker-compose up -d`
- run `cd frontend`
- run `yarn`
- run `yarn dev`
- open `localhost:8000`
- go through wp wizard
- go to settings/permalinks, set post name and save changes
- open `localhost:3000`

Setup app on server:

- install `Docker` and `docker-compose` on a server
- create `devedu` folder on server
- run `cd devedu`
- create `.env` with values from `.env.prod.example`
- create `docker-compose.yml` from `docker-compose.prod.yml`
- create `devedu_conf.d` from `example.conf`
- run `docker-compose up -d`
- open `domain:8000`
- go through wp wizard
- go to settings/permalinks, set post name and save changes

Site is running on `domain:80`

CI:

- github actions are setup on the `master` branch - push or crate pull request to reflect changes
