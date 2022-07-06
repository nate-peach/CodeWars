// Given a string str, reverse it omitting all non-alphabetic characters.
// Example
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".

// !! For inputs, we'll see a string containing letters, numbers, characters.
// !! We'll be outputting a string with only alphabetic characters. Will it be case-sensitive?
// !! 1. We need a way to determine if an element is a letter 2. We need to repeat that for each character 3. We need to remove everything but letters 4. We need to reverse the result, and return it

function reverseLetter(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].toLowerCase() === str[i].toUpperCase()) {
            continue;
        }
        reversedString += str[i];
    }
    return reversedString;
}