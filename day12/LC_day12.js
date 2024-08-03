//Q1
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let get_curr_val=0
    return function(x){
      for(let i=functions.length-1;i>=0;i--){
        let func=functions[i]
        get_curr_val=func(x)
        x=get_curr_val
      }
      return x
    }
  };
  
  /**
   * const fn = compose([x => x + 1, x => 2 * x])
   * fn(4) // 9
   */

//Q2
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    return function(...args){
        if(!called){
            called = true;
            return fn(...args);
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
