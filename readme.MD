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


## packages
- uses [babel-node](https://babeljs.io/docs/en/next/babel-node.html) for develop
- uses babel to compile to es5 code
