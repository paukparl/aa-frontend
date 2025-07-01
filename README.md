# AA (front-end)

This repository contains a Next.js app that is used as the front-end for the Architectural Association School of Architecture's website. It consumes data from Strapi. You can configure this application to pull data from a local Strapi instance, if you so choose.

## Set up

- Clone the repo and add remotes for Gitlab

```sh
git clone git@github.com:linkedbyair/aa-frontend.git
```

- Create an `.env` file

```sh
# It can be helpful to begin with our starter. Then fill out real values.
cp env.example .env
```

- Install dependencies

```sh
yarn
```

- Run the app

```sh
yarn dev
```

### Getting data from a Strapi instance

- Make sure your `.env` file points to the correct host name.

```
# Local
# NOTE: If you want to get data from your local Strapi instance, it needs to be up and running
BACKEND_API_URL="http://localhost:1337/"

# Production
BACKEND_API_URL="https://fresh-novelty-41882c35fc.strapiapp.com/"
```

- Visit your Strapi instance in the browser and log in
- [Generate an API token](https://docs.strapi.io/dev-docs/configurations/api-tokens)
- Paste the API token in your `.env` file

```
BACKEND_API_TOKEN="<paste-here>"
```

- [Update your "authenticated" role](https://docs.strapi.io/dev-docs/plugins/users-permissions#manage-role-permissions) so that you allow permission to your various data types
  - _NOTE:_ If you add new models/actions later, you will need to return update your "authenticated" role again to allow permission for the additions.
- _Temporary NOTE:_ This repo was created from a starter template. Therefore some data is required for the front-end to load. For now, you may have some issues running the front-end until you add some data to the targeted Strapi instance. Eventually we will remove those dependencies, so that the app knows how to fail when data is missing.

### Setting up a connection to GitLab

While Linked by Air uses GitHub for version control, AA uses GitLab. A GitHub Action automatically synchronizes the `main` branch from GitHub to GitLab. If you need to manually push/pull from GitLab, you will have to do the following:

- Go to https://gitlab.com and log in as `linkedbyair`. Credentials can be found [in 1password](https://start.1password.com/open/i?a=ASC7UYYYRBFSNM44PHWM3ONKUE&v=txihzb4klwtysc6gh2u74umovq&i=lf3adwfqwstjs6celc2y44nbui&h=linkedbyair.1password.com).
- [Add your SSH key to the account.](https://docs.gitlab.com/user/ssh/)
- Add a git remote for gitlab to this repo.

```sh
git remote add gitlab git@gitlab.com:p9255/aaschool-strapi-front-end.git
```

## Developing this site with Docker

Note that the AA website uses different repositories for front-end and back-end. We unfortunately do not have a setup that will run both of them in a shared Docker environment. You will have trouble making your local dockerized front-end query your local dockerized back-end.

### Setup

> **NOTE:** If you are using VS Code, you don't need to do much set up at all! Use the Dev Containers extension to open the app in a dev container. These instructions are devs who are not using VS Code.

> **NOTE:** If you are using a hosted dev environment such as GitHub Codespaces, you will need to edit the `vite.config.js` to include your hostname. You may also have to update the IDP's OAuth settings (which probably has an allowlist of origins) if you want to use SSO locally.

- Build the image

```sh
docker build -f ./.devcontainer/Dockerfile -t aa_frontend .
```

- Create an `.env` file, based off the `.env.example`

### Running

- Run the container

```sh
docker run -b -p 3000:3000 --env-file .env -v $(pwd):/workspace --name aa_frontend aa_frontend
```

- Exec into the container

```sh
docker exec -it aa_frontend zsh
```

- Run any Strapi commands you need, like starting the dev server.

```sh
yarn dev
```

### Using git

Your Docker container will probably not have your git configuration, unless you set it up. So make commits, branches, etc from a normal terminal window.
