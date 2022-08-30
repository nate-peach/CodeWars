// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// So we're taking in a string, that will contain letters from a-z, both cases, spaces
// We'll be returning a boolean, whether each letter of the alphabet is present in the string, case insensitive. Can I print to the console?
// For example, "The quick brown fox jumps over the lazy dog" would return true
// 1. I think I can put the alphabet in a variable 2. Use .indexOf() to check if a letter is present 3. Use a loop and a conditional

const pangramOrNot = function(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabet.length; i++) {
        if (sentence.toLowerCase().indexOf(alphabet[i]) == -1) {
            return false;
        }
    }
    return true;
}