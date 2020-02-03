Testing building/deploying node babel app in heroku


# Starting up
- clone
- `npm install`
- run with [`nodemon`](https://github.com/remy/nodemon)


# scripts
- `npm run develop` - use in development
- `npm run start` - run prod execution


# deploy
- via heroku
- runs the command found in `Procfile`: `npm run start`
- `git push heroku master`
- also deploys automatically on merge to master branch


# route handlers
- infrastructure to handle separations of concern
- handler code should be separated to deal with a specific feature (discord, jira, slack, etc)
- connected via the `/src/index.js and app.use()`
  - note: can also add a callback middleware for auth

## packages
- **NOTE** - installing new packages require normally dev-dependent packages to be installed to regular dependencies in order to be correctly deployed to heroku (where it's hosted)
- uses [babel-node](https://babeljs.io/docs/en/next/babel-node.html) for develop
- uses babel to compile to es5 code


## database
- todo
- https://devcenter.heroku.com/articles/heroku-postgresql#provisioning-heroku-postgres


# TODO

## discord
  - add a anime bio inserter
    - command: give <user> a anime bio
    - result: return a funny anime bio and change user's description to include that bio
