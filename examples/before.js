var aopify = require('../lib/index.js');

var strcat = function(s1, s2) {
  return s1 + s2;
};

strcat = aopify(strcat);
strcat.before = function() {
  return [
    '*' + arguments[0] + '*',
    '$' + arguments[1] + '$'
  ];
};

console.log(strcat('bananas', 'nuts'));