// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// !! Sounds like we will be taking in a string every time, with only lowercase letters and spaces.
// !! We'll be returning an integer
// !! For example, inputting the string 'I ate cereal for breakfast' would return the number 10
// !! 1. Maybe we can use the iteration of .indexOf() and a conditional trick 2. Choose a way to iterate through the string 3. Use the .length property to return a number

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return str.split('').map((a) => vowels.indexOf(a) >= 0 ? a : '').join('').length;
  }