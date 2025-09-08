/*
Write a function that takes in a string and returns the longest word in that string.
If there are multiple words with the same length, return the first one you encounter.

Example:


Input:

"JavaScript is a fun programming language"


Output:

"programming"
*/

// Function to return the longest word in a string

function longestWord(str) {
	let words = str.split(/\s+/);
	let maxWord = words[0] || "";
	for (let i = 1; i < words.length; i++) {
		if (words[i].length > maxWord.length) {
			maxWord = words[i];
		}
	}
	return maxWord;
}

// Example usage:
console.log(longestWord("JavaScript is a fun programming language")); // Output: programming


