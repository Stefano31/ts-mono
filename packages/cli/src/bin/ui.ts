import inquirer from 'inquirer'
import path from 'node:path'
import { getPortsFromDirPackages } from '../main'

async function main () {
  const ports = await getPortsFromDirPackages(path.join(__dirname, '..', '..', '..', '..'))

  const asnwers = inquirer
    .prompt([
      {
        name: 'package.name',
        type: 'input'
      },
      {
        name: 'package.description',
        type: 'input'
      },
      {
        name: 'debug.port',
        type: 'number',
        validate: (input) =>  (typeof input === 'string' && ports.get(input) === undefined)
      }
    ])
  console.log(asnwers)
}

main()