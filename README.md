## About Big Ten Ebooks Collection
This is the brochureware/about informational website for the Big Ten Open Books collection on Fulcrum.

It uses GatsbyJS, Netlify hosting, and Decap CMS.

View it at https://bigtenopenbooks.org

## Local development

This site requires Node.js 24.15.0 and npm 11.12.x. With
[nodenv](https://github.com/nodenv/nodenv), the committed `.node-version` file
selects the correct Node.js version.

Install dependencies and start Gatsby:

```sh
npm ci
npm run develop
```

Other common commands:

```sh
npm run clean
npm run build
npm run serve
```

The Gatsby CLI is installed in this project. A global Gatsby installation is
not required.

## Content management

Decap CMS is available at `/admin/`. Local builds target the `main` branch.
Netlify sets `GATSBY_CMS_BRANCH` from its `HEAD` (source branch) build variable so deploy
previews edit the branch being previewed.

## Netlify

Select Node 24 in Netlify Dependency Management. The committed `.node-version`
pins builds to Node.js 24.15.0, so a separate `NODE_VERSION` environment
variable is unnecessary. This project has no Python dependencies and does not
require a `PYTHON_VERSION` environment variable.
