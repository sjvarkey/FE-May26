
// Function to calculate the sum of all numbers in an array
function sumArray(arr) {
	return arr.reduce((acc, val) => acc + val, 0);
}

// Example usage:
console.log(sumArray([1, 2, 3, 4])); // Output: 10

