// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]


// !! ok so, all inputs will be positive numbers greater than 0. Will they always be whole numbers? Will the input ever be a string?
// !! when making the return, we want it to be an array of numbers? Should it just be returned or could it say, be printed to the console?
// !! and for example, let's say I call the function letsCount(), if I passed in letsCount(4, 2) then we should expect to see an array of [4, 8]?
// !! create an empty array, store it in a variable, set up a loop, push each iteration into the array

function letsCount(baseNum, numToCountBy) {
    let numArray = [];
    for (let i = 1; i <= numToCountBy; i++) {
        numArray.push(baseNum * i);
    }
    return numArray;
}
