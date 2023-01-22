# Monorepository

This is a awesome boilerplate for a monorepository in Typescript using LernaJS.

The goal is to solve quickly these points:
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
- Package templater: [Plop](https://plopjs.com/)
- Linter: [TS-standard](https://github.com/standard/ts-standard)
- Commit checker: [Husky + Conventional commit](https://github.com/conventional-changelog/commitlint)
- Test: [Jest](https://jestjs.io/)
- Build: [Tsup](https://github.com/egoist/tsup)
- Doc: [Typedoc](https://typedoc.org/guides/overview/)

## Package common-config

This package contains shared configurations between the other packages inside the monorepository.

## Commands

Before start to use the commands make sure give the following permit

```
chmod +x dc-run.sh
```

### Setup
```bash
./dc-run npm run setup
```

### Create new package
```bash
./dc-run npm run plop library
```

### Build
```bash
./dc-run npm run build
```

### Test
```bash
./dc-run npm run test
```

### Generate documentation
```bash
./dc-run npm run gen-doc
```
