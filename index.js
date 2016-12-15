var curry = require('curry')
var filter = require('poly-filter')

function exclude(excludeKeys, object) {
  return filter((value, key) => excludeKeys.indexOf(key) < 0, object)
}

module.exports = curry(exclude)
