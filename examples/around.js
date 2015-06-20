var aopify = require('../lib/index.js');

/* Very generic string concat */
var parseJson = function(str) {
  return JSON.parse(str);
};
console.log(parseJson('{"x":3}'));

/* aopify and wrap in a try-catch */
parseJson = aopify(parseJson);
parseJson.around = function(options) {
  try {
    return options.proceed.apply(this, options.args);
  } catch (e) {
    console.log(e);
    return null;
  }
};

/* Parse malformed JSON. */
console.log(parseJson('{'));

// Output:
//
// { x: 3 }
// [TypeError: Cannot call method 'apply' of undefined]
// null
