# PointlessCorp.com

|Environment|URL|
|-----|-----|
|Production (Live)|https://pointlesscorp.com/|
|Production (Netlify)|https://pointlesscorp.netlify.app/|
|Branch Deploys|https://[branch name]--pointlesscorp.netlify.app/|
|Local Development|http://localhost:4321/|

## Storyblok CMS

Storyblok is used for the CMS. Credentials are in 1Password under **[VGT] Storyblok**. _Edits in Storyblok only trigger production builds._ To refresh content in a branch or PR build, a build of that environment must be manually triggered.

## Setup

```sh
nvm use && npm install
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── layouts/
│       └── Application.astro
│   └── pages/
│       └── index.astro
│   └── storyblok/
│       └── bloks/
│       └── components/
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal. Make sure to `nvm use`!

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
