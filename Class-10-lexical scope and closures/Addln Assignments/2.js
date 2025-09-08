function createCounter() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}

// Example usage:
const myCounter = createCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
/*

Create a function in JavaScript that utilizes 
closures to maintain a private counter. The function should 
return an inner function that, when called, increments and returns
 the current value of the counter.

function createCounter() {
  let counter = 0;
  // Implement the closure here and return the counter value from the closure
}

*/

