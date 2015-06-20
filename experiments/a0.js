var aopify = function(fn) {
  var wrapper = function() {

    /* Invoke before-advice */
    if (wrapper.before) {
      wrapper.before.apply(this, arguments);
    }

    /* Invoke the original function */
    console.log('About to invoke the original function');
    var retVal = fn.apply(this, arguments);
    console.log('Value returned by the original function:  ' + retVal);

    /* Invoke after-advice */
    if (wrapper.after) {
      wrapper.after.apply(this, arguments);
    }

    return retVal;
  };
  return wrapper;
};

module.exports = aopify;