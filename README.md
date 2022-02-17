# Contentful Gatsby Starter Blog

This is just me testing out using Contentful Gatsby Starter Blog with TypeScript & Styled Components.

GitHub page [here](https://github.com/contentful/starter-gatsby-blog).

Gatsby page [here](https://www.gatsbyjs.com/starters/contentful/starter-gatsby-blog).

## Post Intall Cleanup Checklist

Testing what can / cannot be removed (assuming setup of TypeScript, Styled Components, Contentful, and Gatsby Cloud) after step 'Testing the Workflow Pt. 2 - Simple Contentful Change':

✓ --> CAN be removed

✕ --> CANNOT be removed

- [✓] .cache --> can be deleted, but is regenerated each time you rebuild, and is ignored by git anyways
- [✓] /bin & package.json scripts --> used for running `npm run dev` to setup contentful
- [✓] /contentful --> used for running `npm run dev` to setup contentful
- [✓] /node_modules --> can be deleted, but is regenerated each time you install packages, and is ignored by git anyways
- [✓] /public --> can be deleted, but is regenerated each time you rebuild, and is ignored by git anyways
- [✕] /src --> essential
- [✕] /static --> used to house files like robots.txt
- [✓] \_config.yml --> used for GitHub pages
- [✕] .babelrc --> babel config file
- [✓] .contentful.json.sample --> sample contentful data file
- [✕] .gitignore --> used to intentionally ignore/not track specific files/folders
- [✕] .npmrc --> configuration file for NPM, defines the settings on how NPM should behave when running commands
- [✕] .nvmrc --> specify which node version the project should use
- [✓] .prettierrc --> config for prettier, this is entirely subjective so up to you (i use prettier settings in vs code)
- [✓] .travis.yml --> config file for Travis CI (a hosted continuous integration service)
- [✓] app.json --> unsure, not used anywhere
- [✕] gatsby-config.js --> will convert to typescript later on
- [✕] gatsby-node.js --> will convert to typescript later on
- [✕] LICENSE --> ok to leave, no harm
- [✓] package-lock.json --> can be deleted, but is regenerated each time you install packages
- [✕] package.json --> essential
- [✕] README.md --> essential
- [✓] screenshot.png --> was used in the README, no longer needed
- [ ] static.json
- [✓] WHATS-NEXT.md --> Simple markdown file
