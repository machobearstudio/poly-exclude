var curry = require('curry');
var filter = require('poly-filter');

function exclude(keys, object) {
  const excludeKeys = (keys instanceof Array) ? keys : [keys];

  return filter(function (value, key) {
    return excludeKeys.indexOf(key) < 0
  }, object);
}

module.exports = curry(exclude);
