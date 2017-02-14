# poly-exclude
Excludes given keys from an object or array

## Motivation
It's a common task in data transformation pipelines to remove certain keys from incoming objects or arrays.

## Features
- Works with objects and arrays
- Automatically curried

## Installation

```
npm install poly-exclude
```

## Testing
```
npm test
```

## Usage

```javascript
var exclude = require('poly-exclude');

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

// Partial application
var removeB = exclude('b');
console.log(removeB(object)); // => { a: 100, c: 'blah, blah' }

var remove1 = exclude(1);
console.log(remove1(array)); // => [100, 'blah, blah']
```
