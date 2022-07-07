// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// We're taking an array of integers and strings. No special characters? Spaces?
// We're the array minus the strings? Any particular order? Can print to console? Case sensitive?
// Ex. for [4, 2, '3', 'Nate', 'iphone'] we'd only return [4, 2]
// 1. Select only numbers 2. Move those numbers to a new array

const filter_list = list => 
  list
   .filter(a => 
            a === Number(a));