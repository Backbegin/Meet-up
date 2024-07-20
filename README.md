# Meet Up (Webpage)

## Developing

Requirements: [Node 20](https://nodejs.org/en/download/package-manager) and [Git](https://git-scm.com/downloads)

Then you can clone the repo and install dependencies

```bash
git clone https://github.com/Backbegin/Meet-up.git
git checkout dev
npm ci
```

Once you've done that, you can start a development server:

```bash
npm run dev
```

> If something breaks, it might be fixed by nuking the `.svelte-kit` folder

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

### Building with Containers

The following commands build **production container image** and runs it.

> Podman uses less resources due to daemonless architecture.

#### Docker

Requires [Docker Engine](https://docs.docker.com/engine/install/)

```bash
docker compose up -d
```

#### Podman (with docker-compose)

Requires [Podman CLI](https://podman.io/docs/installation) and [docker-compose [linux]](https://docs.docker.com/compose/install/linux/) or install both with [Podman Desktop](https://podman-desktop.io/downloads/)

```bash
podman compose up -d
```
