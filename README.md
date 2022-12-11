# Monorepository

This is a awesome boilerplate for a monorepository enterelly in Typescript using LernaJS.

The goal is to solve quickly this points:
- Have a templater for generating a new package inside the monorepository (zero thinkings, only coding)
- Have a linter that checks your code
- Have a standard for your commits
- Have a fast builder for your packages
- Have an omogenous documentation
- Have a base for Docker
- Have a tool for testing
- Have a common configurations (jest, tsup, etc) shared between other packages
- Have debugger configurated for VS code

Let's fork and try it!
Any suggest is welcome!

## Requirements
Only docker.

## Tools
- [Docker](https://www.docker.com/)
- Monorepository handler: [LernaJS](https://lerna.js.org/)
- Package templater: [Lerna-templater](https://github.com/rdarida/lerna-templater)
- Linter: [TS-standard](https://github.com/standard/ts-standard)
- Commit checker: [Husky + Conventional commit](https://github.com/conventional-changelog/commitlint)
- Test: [Jest](https://jestjs.io/)
- Build: [Tsup](https://github.com/egoist/tsup)
- Doc: [Typedoc](https://typedoc.org/guides/overview/)

## Package common-config

This package contains shared configurations between the other packages inside the monorepository.

## Setup
```bash
docker-compose run app npm run setup
```

## Create new package
```bash
docker-compose run app npm run create -- -n "Name of the new package" -d "Description of the new package"
```

## Build
```bash
docker-compose run app npm run build
```

## Test
```bash
docker-compose run app npm run test
```

## Generate documentation
```bash
docker-compose run app npm run gen-doc
```
