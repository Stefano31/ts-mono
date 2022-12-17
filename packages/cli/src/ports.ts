export class Ports extends Map<string, number> {
  getFreePort (min: number, max: number): number {
    let newPort: number
    do {
      newPort = Ports.getRandomPort(min, max)
    } while (this.has(newPort.toString()))
    return newPort
  }

  static getRandomPort (min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min)
  }
}
