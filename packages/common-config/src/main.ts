export const JestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'node'
}

export const TsupConfig = {
  entry: [
    'src/main.ts'
  ],
  splitting: false,
  sourcemap: true,
  clean: true
}
