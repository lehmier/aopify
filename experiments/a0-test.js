var aopify = require('./a0.js');

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

square(3);

/**
 * Output:
 *
 * Before calling square
 * About the invoke the original function
 * Value returned by the original function:  9
 * After calling square
 *
 */