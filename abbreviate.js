// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// So we're taking in a string, that includes two words with a space in between. This format is all we'll see?
// We'll be outputting a string of two uppercase letters seperated by a period.
// For example, if we see input 'sylvan brackett', we would output 'S.B'
// 1. First we need to read the first letters of each word 2. Then change them to uppercase 3. Finally seperate with a period

function abbrevName(name){
    return name
      .split(' ')
      .map(a =>
           a[0].toUpperCase())
           .join('.');
  }