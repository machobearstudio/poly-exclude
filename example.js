var exclude = require('./index');

var object = {
  a: 100,
  b: 200,
  c: 'blah, blah'
};

var array = [
  100,
  200,
  'blah, blah'
];

// Complete application
console.log(exclude(['a', 'c'], object)); // => { b: 200 }
console.log(exclude([0, 2], array)); // => [200]

// Partial application (not relly polymorphic)
var removeB = exclude('b');
console.log(removeB(object)); // => { a: 100, c: 'blah, blah' }

var remove2 = exclude(2);
console.log(remove2(array)); // => [100, 'blah, blah']
