/*
Create a JavaScript function that uses closures to implement 
caching (memoization). The function should cache the results 
of complex calculations and return the cached result when 
the same inputs occur again.

function cachingFunction(complexCalculation) {
  // Modify this cache object and store data in the arg
  // also perform the complexCalculation on the arg
  window.cache = {};
  // Implement the closure-based caching mechanism here
  return function (arg) {};
}

*/
function cachingFunction(complexCalculation) {


 window.cache = window.cache || {};
  return function (arg) {
    if (window.cache.hasOwnProperty(arg)) {
      return window.cache[arg];
    } else {
      const result = complexCalculation(arg);
      window.cache[arg] = result;
      return result;
    }
  };

}