# WP + Next.js blog

Manually run the stack on a server:

- install `Docker` and `docker-compose` on a server
- clone
- run `cd frontend && cp .env.production.example .env.production`
- edit domain name
- run `docker-compose up`
- open `domain:8000`
- go through wp wizard
- go to settings/permalinks, set post name and save changes

Site is running on `domain:80`

Dev:

- clone
- run `cd frontend && cp .env.development.example .env.development`
- run `docker-compose up -d db phpmyadmin wordpress`
- run `cd frontend`
- run `yarn`
- run `yarn dev`
- open `localhost:8000`
- go through wp wizard
- go to settings/permalinks, set post name and save changes
- open `localhost:3000`
