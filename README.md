# Monorepository

## Setup
- Monorepo handler: [LernaJS](https://lerna.js.org/)
- Package templater: [Lerna-templater](https://github.com/rdarida/lerna-templater)
- Linter: [TS-standard](https://github.com/standard/ts-standard)
- Test: [Jest](https://jestjs.io/)
- Build: [Tsup](https://github.com/egoist/tsup)

## Create new package
```bash
npx lerna-templater -n "Name of the new package" -d "Description of the new package"
```