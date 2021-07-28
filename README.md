# WP + Next.js blog

Dev:

- clone
- run `cp .env.example .env`
- run `cd frontend && cp .env.development.example .env.development`
- run `docker-compose up -d`
- add this entry to `/etc/hosts` - `127.0.0.1 devedu-test.rs`
- open `devedu-test.rs/wordpress`
- go through wp wizard
- go to settings/permalinks, set post name and save changes

Setup app on server:

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
- open `domain:8000`
- go through wp wizard
- go to settings/permalinks, set post name and save changes

wp-admin issue (temporary fix):

- put `$_SERVER['REQUEST_URI'] = str_replace("/wp-admin/", "/wordpress/wp-admin/", $_SERVER['REQUEST_URI']);` at the start of `wp-config.php` in the wordpress container

Site is running on `domain:80`

CI:

- github actions are setup on the `master` branch - push or crate pull request to reflect changes
