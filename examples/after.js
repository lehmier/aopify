var aopify = require('../lib/index.js');

/* Doubler */
var double = function(n) {
  return n * 2;
};
console.log(double(6));

/* aopify and log if the result is divisible by 3 */
double = aopify(double);
double.after = function(options) {
  if (options.returning % 3 === 0) {
    console.log(3 + ' divides ' + options.returning);
  }
};
console.log(double(20));
console.log(double(30));

// Output:
//
// 12
// 40
// 3 divides 60
// 60
