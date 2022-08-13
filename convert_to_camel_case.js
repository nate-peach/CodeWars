// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 

// So we're taking in a string of words, seperated by either underscores or hyphens. Will we see words with letters in multiple cases?
// We're returning those words with the non-letter characters removed, and the first letters of each word (except the first) capitalized
// For example, "the-stealth-warrior" gets converted to "theStealthWarrior", and "The_Stealth_Warrior" gets converted to "TheStealthWarrior". Curious to know what something like "THESTEalthWarriOR" would get converted to
// 1. First I think we can use .split("-") or .split("_") 2. Then iterate through the array using .toUpperCase() and .toLowerCase() where appropriate

function toCamelCase(str) {
    if (str.includes('-')) {
        str = str.split('-');
    }
    else if (str.includes('_')) {
        str = str.split('_');
    }
    else {
        return '';
    }
    
    return str.map((word, index) =>
        index < 1 ? word : word
        .split('')[0]
        .toUpperCase() + word
        .slice(1))
        .join('');
}