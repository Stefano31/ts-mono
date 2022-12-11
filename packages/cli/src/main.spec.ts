import { getPortsFromDirPackages } from './main'
import path from 'node:path'

describe('main', () => {
  it('should return a ports map', async () => {
    const mapPorts = await getPortsFromDirPackages(path.join(__dirname, '__test__', 'packages'))
    const port1 = mapPorts.get('9232')
    const port2 = mapPorts.get('9229')
    expect(port1).toEqual(1)
    expect(port2).toEqual(1)
  })
})
