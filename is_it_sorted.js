// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

// We're taking in an array, which will contain integers. Will we ever see anything other than an array? Or will the array ever have anything other than integers?
// We'll be returning a string, "yes, ascending", "yes, descending", or "no" depending on the input. Can I print to the console?
// For example, [15, 7, 3, -8] would return 'yes, descending'
//  [4, 2, 30] would return "no"
// This seems like a simple challenge when using .sort() and conditionals. Let's see.

const isSortedAndHow = array =>
    array === array.sort((a, b) => a - b) ?
        'yes, ascending' :
    array === array.sort((a, b) => b - a) ?
        'yes, descending' :
        'no';

console.log(isSortedAndHow(['asdfasdfasdf']));