// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// So we'll be taking in a string. It will contain letters of the alphabet, lowercase, no special characters.
// We'll be returning a string, the word with the highest "value". Each letter of a word coresponds to a number value, and we'll add all the values in the word together.
// For example, "All dogs go to heaven" would return "heaven"
// 1. I think there's probably a way to use unicode here, and there is, String.fromCharCode(), seems like if we subtract 60 from the value, we'll get what we want 2. can probably use .map() and .split()

const scoreWord = function(str) {
    
}