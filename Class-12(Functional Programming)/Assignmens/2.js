
/*
Write a JavaScript function named filterOutOdd that uses the filter() method to filter out odd numbers from an array.

Example:

Inputs:
An array of numbers.

Outputs:
An array of numbers without odd numbers.
*/

// Function to filter out odd numbers from an array
function filterOutOdd(numbers) {
	return numbers.filter(function(num) {
		return num % 2 === 0;
	});
}

// Example usage:
console.log(filterOutOdd([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]