# WP + Next.js blog

Dev (with local WP instance):

- clone
- run `cp .env.example .env`
- run `cd frontend && cp .env.development.example .env.development`
- run `docker-compose up -d`
- add the following entries to `/etc/hosts`:
  ```
  127.0.0.1 devedu-test.rs
  127.0.0.1 www.devedu-test.rs
  127.0.0.1 db-admin.devedu-test.rs
  127.0.0.1 api.devedu-test.rs
  ```
- open `api.devedu-test.rs`
- go through wp wizard
- go to settings/permalinks, set post name and save changes

Dev (with staging WP)

- put `WORDPRESS_API_URL=https://api.devedu.rs/graphql` in `.env.development`
- run `cd frontend`
- run `yarn` to install dependencies
- run `yarn dev` to start the development server

Setup app on server:

(Setup domain name and dns config with subdomain entries according to the `/etc/hosts` file entries mentioned above)

- install `Docker` and `docker-compose` on a server
- create `devedu` folder on server
- run `cd devedu`
- create `.env` with values from `.env.prod.example`
- create `docker-compose.yml` from `docker-compose.prod.yml`
- run `mkdir user_conf.d`
- run `cd user_conf.d`
- create `devedu.conf` from `prod.conf`
- run `cd ..`
- run `docker-compose up -d`
- open `api.${domain}`
- go through wp wizard
- go to settings/permalinks, set post name and save changes

CI:

- github actions are setup on the `master` branch - push or crate pull request to reflect changes
