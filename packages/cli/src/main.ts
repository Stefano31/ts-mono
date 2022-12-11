import { readdir } from 'node:fs/promises'
import nodeFs from 'node:fs/promises';
import path from 'node:path'
import { option as O, function as F } from 'fp-ts'

interface IPackage {
  scripts: {
    'test:debug'?: string
  }
}

function extractPortFromPackage (packageJson: IPackage): O.Option<number> {
  const extractPortFromCommand = (command: string) => {
    const procedure = F.pipe(
      command,
      (c) => {
        const regex = new RegExp('--inspect-brk=0.0.0.0:(\\d+)', 'gm')
        return regex.exec(c)
      },
      O.fromNullable,
      O.filter(item => item[1] !== undefined),
      O.map(item => F.pipe(item[1], O.fromNullable, O.map(stringNum => Number(stringNum)))),
      O.flatten
    )
    return procedure
  }

  const procedure = F.pipe(
    packageJson.scripts['test:debug'],
    O.fromNullable,
    O.map(command => extractPortFromCommand(command)),
    O.flatten
  )
  return procedure
}

async function readPackageFile (packageFilePath: string): Promise<IPackage | null> {
  try {
    const fileContent = await nodeFs.readFile(packageFilePath, { encoding: 'utf-8'})
    return JSON.parse(fileContent)
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getPortsFromDirPackages (dirPath: string): Promise<Map<string, number>> {
  const files = await readdir(dirPath)
  const packagesContent = await Promise.all(files.map(file => readPackageFile(path.join(dirPath, file, 'package.json'))))
  const pcontent = packagesContent.filter(result => result !== null) as IPackage[]
  const result = pcontent
    .map(p => extractPortFromPackage(p))
    .reduce((m, port) => {
      const key = O.toUndefined(port)?.toString() ?? 'none'
      const value = m.get(key) ?? 0
      m.set(key, value + 1)
      return m
    }, new Map<string, number>())
  return result
}
