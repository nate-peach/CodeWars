// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// We're taking in an array of numbers? Only numbers? Are they in random order?
// We're returning the maximun and minimum values of the array. Can we print to the console?
// For example, [4,6,2,1,9,63,-134,566] would return min -134 and max 566
// 1. We can approach by sorting the array with .sort()  2. We can return the first / last items in the sorted array

const min = list =>
    list.sort((a, b) => 
              a - b)[0];

const max = list =>    
    list.sort((a, b) => 
              b - a)[0];