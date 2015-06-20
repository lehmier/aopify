var aopify = require('./a1.js');

/* Square the argument. */
var square = function(n) {
  return n * n;
};

/* aopify the square function and attach before and after advice. */
square = aopify(square);
square.before = function() {
  console.log('Before calling square');
};
square.after = function() {
  console.log('After calling square');
};
square.around = function() {
  console.log('Hijack the square function.');
  return arguments[0] + 100;
};

console.log(square(3));

/**
 * Output:
 *
 * Hijack the square function.
 * 103
 */