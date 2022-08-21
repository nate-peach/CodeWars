// Complete the solution so that the function will break up camel casing, using a space between words.

// We'll be taking in a string, with characters from a - z? Will we see only correct camel case, no odd upper/lower casing? No numbers or special characters? maybe doesn't matter
// We'll be returning a string containing the same characters as the input, with camel casing broken up with spaces. Can I print to the console?
// Ex. "camelCasing" would return "camel Casing"
// 1. Seems like a .split() and .map() would work here 2. Should set up a conditional in the .map to check for uppercase

const breakCamelCase = string =>
    string
        .split('')
        .map(a => 
            a === a.toUpperCase() ? 
            ' ' + a : a)
        .join('');