var aopify = require('../lib/index.js');

/* Parse a string as JSON */
var parseJson = function(str) {
  return JSON.parse(str);
};
console.log(parseJson('{"x":3}'));

/* aopify and wrap in a try-catch */
parseJson = aopify(parseJson);
parseJson.catch = function(e) {
  console.log('[ERROR] ' + e);
};

/* Parse malformed JSON. */
console.log(parseJson('{'));

// Output:
//
// { x: 3 }
// [ERROR] SyntaxError: Unexpected end of input
// null
