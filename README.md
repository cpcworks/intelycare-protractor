## Example Protractor project that:
* Makes use of page objects
* Runs multiple browsers at once
* Runs tests sharded (parallel)
* Uses [protractor-flake](https://github.com/NickTomlin/protractor-flake) to re-run failed tests
* is written using es6

## Setup:
* Install [Node](http://nodejs.org) (v8.x.x or later)
* `git clone git@github.com:cpcworks/intelycare.git`
*  nvm use <- only run this command if you have nvm
* `npm i` to install the project dependencies

## Run tests:
* run tests via plain Protractor `node_modules/.bin/protractor conf.js`
* run tests `npm test` (runs via flake, which re-runs failed tests)
* run with flake `./flake conf.js`

## Troubleshooting
* run `node -v` and make sure your node version is 8.x.x or greater
* `webdriver-manager` _should_ have updated on install, but if not, run `npm run update` to be sure
