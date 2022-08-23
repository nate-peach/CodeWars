// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// We're taking in a string, that will contain only characters from a-z with multiple cases, and integers. No special characters
// We'll be returning an integer, the count of unique repeating characters in the input string. Can I print to the console?
// For example, "soijCnabdIbcbx" would return 3, since "b", "c", "i" are all repeating
// 1. The way I'm thinking about approaching this is to declare a new Set object 2. Then use a loop and .indexOf() .lastIndexOf() 3. And a conditional to add unique characters to the Set 4. Also need to use .toLowerCase()

function duplicateCount(text){
    let duplicates = new Set;
    lower = text.toLowerCase();
    for (let i = 0; i < lower.length; i++) {
      if (lower.indexOf(lower[i]) !== lower.lastIndexOf(lower[i])) {
        duplicates.add(lower[i]);
      }
    }
    return duplicates.size;
  }
  