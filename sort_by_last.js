// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each. If two words have the same last letter, they returned array should show them in the order they appeared in the given string. All inputs will be valid.
// We'll be taking in a string, containing words seperated by a single space, letters only no special chars
// We'll be returning an array of those same words, organized by last letter. If two words have the same last letter, place them in the order they appear in the string. Can I print to the console?
// Ex:
// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to']
// Was thinking of using a brute force method, but seems like .sort() is only way here, need to think of how to create the function inside .sort()

const last = x => x
    .split(' ')
    .sort((a, b) => 
        a.charCodeAt(a.length - 1) - 
        b.charCodeAt(b.length - 1));

console.log(last('man i need a taxi up to ubud'))
console.log(last('what time are we climbing up the volcano'))
console.log(last('take me to semynak'))