
// Function to count vowels in a string
function countVowels(str) {
	let count = 0;
	const vowels = "aeiouAEIOU";
	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			count++;
		}
	}
	return count;
}

// Example usage:
console.log(countVowels("Hello World")); // Output: 3