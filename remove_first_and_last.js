// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// !! We will be taking in a string.
// !! We'll be returning a string as well
// !! For example, if we take in '1jd83lskd', we would expect to see 'jd83lsk'
// !! 1. We need to seperate the characters 2. We need to remove the first and last character 3. We need to return a string

const str = str => str.slice(1, -1);
