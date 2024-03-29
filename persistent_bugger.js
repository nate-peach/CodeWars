// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// We'll be taking in an integer. Negative? Zero? Falsy?
// We'll be returning an integer, the number of times we must multiply the digits of the input until the product reaches a single digit.
// For example: 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
//   999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//   4 --> 0 (because 4 is already a one-digit number)
// Convert to array, create variable & for loop, use recursion?

const persistence = num => {

    var digits = Array.from(String(num), Number);
    let counter = 0;
    var start = 1;

    while (digits.length > 1) {
        for (let digit of digits) {
            start *= digit;
        }
        digits = Array.from(String(start), Number);
        start = 1;
        counter++;
    }
    return counter;
}

console.log(persistence(39));

// Wanted to use recursion for this, couldn't think of a way to do it. But found this solution after finishing the challenge. They assigned counter = 0 in the parameters, which I thought of but got the syntax wrong.s

// const persistence = (num, counter = 0) => {
    
//     if (num.toString().length === 1)
//         return counter;
    
//     let product = num
//         .toString()
//         .split('')
//         .reduce((a, b) => a * b);
    
//     counter++;
    
//     return persistence(product, counter)
// }