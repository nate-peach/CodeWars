// Your task is to convert strings to how they would be written by Jaden Smith. When writing on Twitter, he is known for almost always capitalizing every word. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// So, we'll be taking in a string
// We'll be expected to return a string, after they've been edited
// For example, if we take in "I just went to the amas and it was lit" we should return "I Just Went To The Amas And It Was Lit"
// We'll need to seperate the individual words into seperate indices 2. We'll need to edit the first letter of each word / repeat a set of instructions 3. We need to convert the array back to a string and return it

const toJadenCase = str =>
    str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');