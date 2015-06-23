var aopify = require('../lib/index.js');

// aopify and change the return value to -2 when it would have been -1
// This demonstrates applying advice within the context of an instance.
// Obviously don't do this in production.
String.prototype.indexOf = aopify(String.prototype.indexOf);
String.prototype.indexOf.around = function(options) {
  var index = options.proceed.apply(this, options.args);
  return index === -1 ? -2 : index;
};

// Examples borrowed from Mozilla
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
console.log('Blue Whale'.indexOf('Blue'));
console.log('Blue Whale'.indexOf('Blute'));
console.log('Blue Whale'.indexOf('Whale', 0));
console.log('Blue Whale'.indexOf('Whale', 5));
console.log('Blue Whale'.indexOf('Banana', 7));
console.log('Blue Whale'.indexOf('', 9));
console.log('Blue Whale'.indexOf('', 10));
console.log('Blue Whale'.indexOf('', 11));

// Output:
// 
// 0
// -2
// 5
// 5
// -2
// 9
// 10
// 10