var exclude = require('./index.js');

test('Excludes keys from object preserving its structure', function () {
  var testData = {
    a: 100,
    b: 200,
    c: 'blah, blah',
    d: true,
    e: null
  }

  var result = { c: 'blah, blah', e: null };
  expect(exclude(['a', 'b', 'd'], testData)).toEqual(result);
  expect(exclude(['a', 'b', 'd'])(testData)).toEqual(result);

  var result = { a: 100, d: true, e: null };
  expect(exclude(['b', 'c'], testData)).toEqual(result);
  expect(exclude(['b', 'c'])(testData)).toEqual(result);

  var result = { a: 100, b: 200, c: 'blah, blah', d: true }
  expect(exclude(['e'], testData)).toEqual(result);
  expect(exclude(['e'])(testData)).toEqual(result);
});

test('Excludes items from array based on their indexes preserving the rest items in their original order', function () {
  var testData = [
    100,
    200,
    'blah, blah',
    true,
    null
  ]

  var result = ['blah, blah', null];
  expect(exclude([0, 1, 3], testData)).toEqual(result);
  expect(exclude([0, 1, 3])(testData)).toEqual(result);

  var result = [100, true, null];
  expect(exclude([1, 2], testData)).toEqual(result);
  expect(exclude([1, 2])(testData)).toEqual(result);

  var result = [100, 200, 'blah, blah', true]
  expect(exclude([4], testData)).toEqual(result);
  expect(exclude([4])(testData)).toEqual(result);
});
