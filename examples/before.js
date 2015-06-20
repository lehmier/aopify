var aopify = require('../lib/index.js');

/* Very generic string concat */
var strcat = function(s1, s2) {
  return s1 + s2;
};
console.log(strcat('bananas, ', 'nuts'));

/* aopify and change the arguments. */
strcat = aopify(strcat);
strcat.before = function() {
  return [
    '*' + arguments[0] + '*',
    '$' + arguments[1] + '$'
  ];
};
console.log(strcat('bananas, ', 'nuts'));

// Output:
// bananas, nuts
// *bananas, *$nuts$
