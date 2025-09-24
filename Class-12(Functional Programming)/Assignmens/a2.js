/*
Write a JavaScript function named findFirstNegative that finds and returns the first negative number in an array using the find() method.
return undefined if there are no negative numbers in the array.

Inputs:
An array of numbers.

Outputs:
A number representing the first negative number in the array or undefined if there are no negative numbers.
*/

function findFirstNegative(arr) {
    return arr.find(num => num < 0);
}