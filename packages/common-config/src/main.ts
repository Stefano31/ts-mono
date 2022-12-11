/**
 * Jest configuration
 */
export const JestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'node'
}

/**
 * Tsup configuration
 */
export const TsupConfig = {
  entry: [
    'src/main.ts'
  ],
  splitting: false,
  sourcemap: true,
  clean: true
}
