// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// We will take in a string
// We will return a string with - seperations
// We can see examples in the given instructions
// 1. We need to figure out how to add letters to each other 2. We need to do that multiple times 3. We need to return the string

function accum(s) {
    return s.split('').map((letter, index) => (letter.toUpperCase() + letter.toLowerCase().repeat(index))).join('-');
  }