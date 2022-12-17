import inquirer from 'inquirer'
import path from 'node:path'
import { getPortsFromDirPackages } from '../main'

async function main (): Promise<void> {
  const dirPackages = path.join(__dirname, '..', '..', '..')
  const ports = await getPortsFromDirPackages(dirPackages)
  const freePort = ports.getFreePort(9000, 9999)
  console.log('freePort', freePort)
  console.log('PORTS', ports)

  const asnwers = await inquirer
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
        default: freePort,
        validate: (input) =>
          (typeof input === 'number' && ports.get(input.toString()) === undefined)
      }
    ])
  console.log(asnwers)
}

main().catch((e) => console.error(e))
