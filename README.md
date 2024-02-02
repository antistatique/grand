# Grand 🐘

Static website built using 📰 [Astro](https://astro.build/)

## Setup
Be sure to have a working prettier/eslint configuration and that you handle `.astro` files in your IDE:
- VSCode : https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode which handles both Prettier and Astro
- PHP Storm: Be sure to have at least the 2023.1 version so the astro plugin is available. For Prettier, just activate it on save in the preferences

## 🔧 Installation and usage
You first need to setup the work environment by running

```bash
yarn install
```

You can run your dev environment by running:

```bash
yarn dev
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
|:---------------------------| :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn lint`            | Run eslint on all js(x)/ts(x)/astro files        |
| `yarn fix`             | Fix eslint on all js(x)/ts(x)/astro files        |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |
