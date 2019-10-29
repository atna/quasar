const cssVariables = require('../helpers/css-variables')

const ext = cssVariables.appFile.scss
  ? 'scss'
  : (cssVariables.appFile.sass ? 'sass' : false)

const prefix = ext !== false
  ? `@import '~src/css/quasar.variables.${ext}', '@horoshop/ui/src/css/variables.sass';\n`
  : `@import '@horoshop/ui/src/css/variables.sass';\n`

module.exports = function (content) {
  return content.indexOf('$') !== -1
    ? prefix + content
    : content
}
