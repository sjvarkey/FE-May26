/*
Write a function that checks if a given string is a palindrome.
A palindrome is a word, phrase, number, or other sequences of characters which reads the same backward as forward (ignoring spaces, punctuation, and capitalization).

Example:

Input:
"Madam"

Output:
true
*/

function isPalindrome(str) {
  // Write your code here
  // return the result

    // Remove all non-alphanumeric characters and convert to lowercase
	let cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	// Compare the cleaned string to its reverse
	return cleaned === cleaned.split('').reverse().join('');
    
}

console.log(isPalindrome("Madam "))


