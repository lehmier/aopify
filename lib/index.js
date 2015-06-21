var aopify = function(fn) {
  var wrapper = function() {

    /* Prevent a previously aopified function to be re-aopified. */
    if (fn._aopified) {
      return fn;
    }
    
    var args = arguments;
    
    /* Around-advice takes precedence over everything. */
    if (wrapper.around && typeof wrapper.around === 'function') {
      return wrapper.around.call(this, {
        args: args,
        proceed: fn
      });
    }
    
    /* Invoke before-advice */
    if (wrapper.before && typeof wrapper.before === 'function') {
      args = wrapper.before.apply(this, args) || args;
    }

    /* Invoke the original function */
    /* TODO: Maybe break this part out into a helper function. */
    var retVal = null,
        err = null;
    if (wrapper.catch) {
      try {
        retVal = fn.apply(this, args);
      } catch (e) {
        err = e;
        wrapper.catch.call(this, e);
      }
    } else {
      retVal = fn.apply(this, args);
    }

    /* Invoke after-advice */
    if (wrapper.after && typeof wrapper.after === 'function') {
      wrapper.after.call(this, {
        err: err,
        args: args,
        returning: retVal
      });
    }
    
    /* Return the value returned by invoking the original function. */
    return retVal;
  };
  wrapper._aopified = true;
  return wrapper;
};

module.exports = aopify;