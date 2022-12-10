# Monorepository

## Tools
- [Docker](https://www.docker.com/)
- Monorepository handler: [LernaJS](https://lerna.js.org/)
- Package templater: [Lerna-templater](https://github.com/rdarida/lerna-templater)
- Linter: [TS-standard](https://github.com/standard/ts-standard)
- Test: [Jest](https://jestjs.io/)
- Build: [Tsup](https://github.com/egoist/tsup)

## Setup
```bash
docker-compose run app npm run setup
```

## Create new package
```bash
docker-compose run app npm run create -- -n "Name of the new package" -d "Description of the new package"
```

## Package common-config

This package contains shared configurations between the other packages inside the monorepository.
