var aopify = require('../lib/index.js');

/* Parse a string as JSON */
var parseJson = function(str) {
  return JSON.parse(str);
};
console.log(parseJson('{"x":3}'));

/* aopify and wrap in a try-catch */
parseJson = aopify(parseJson);

/* Attach a catch handler */
parseJson.catch = function(e) {
  console.log('[ERROR] ' + e);
};

/* Attach an after handler and inspect the error. */
parseJson.after = function(options) {
  console.log('About to return: ' + options.returning);
  if (options.err) {
    console.log('There was an error invoking this function.');
  }
};

/* Parse malformed JSON. */
console.log(parseJson('{'));

// Output:
//
// { x: 3 }
// [ERROR] SyntaxError: Unexpected end of input
// About to return: null
// There was an error invoking this function.
// null
