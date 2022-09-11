// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// So we'll be taking in an array of integers, with random order and values
// And we'll return the two larges numbers of that array. Can I print to the console?
// For example: [1, 2, 10, 8] --> [8, 10]
// 1. I can think of a few ways to solve this one, think I'll try Math.max() first (ended up using .sort() and .slice(), but could have used Math.max() and .splice(), also saw a cool solution using -Infinity and a loop, which would be much faster than .sort)

const twoOldestAges = ages =>
    ages.sort((a, b) => 
        a - b)
        .slice(-2);

twoOldestAges([1, 2, 10, 6, 1, 8])