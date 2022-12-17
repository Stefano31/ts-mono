const config = require('common-config')

module.exports = {
  ...config.TsupConfig,
  entry: [
    'src'
  ],
  format: 'esm',
  shims: true
}
