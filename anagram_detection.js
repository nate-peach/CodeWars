// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// !! We'll be taking in two strings, they're case insensitive. Will the two strings always be the same length?
// !! We'll be returning a boolean, true or false
// !! For example, if we take in 'Jar' & 'flower', we'd expect to see false returned. If we took in 'leon' and 'noel', we'd expect a true return
// !! 1. We need to see if one letter exists in both strings, and we need to do that as many times as there are letters in the words

const isAnagram = function(test, original) {
    const stringA = test.toLowerCase().split('').sort().join('');
    const stringB = original.toLowerCase().split('').sort().join('');
    return (stringA == stringB) ? true : false;
  };