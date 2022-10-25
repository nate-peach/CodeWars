// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'.


// So we'll be taking in an integer, will be greater than 1. Would we ever see other types/empty inputs?
// We'll be returning an array of integers, the divisors of the input. Can I print to the console?
/// Example:

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
// Can use a for loop, empty variable, modulo

const divisors = integer => {
    let nums = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i == 0) 
            nums.push(i);
    }
    
    return nums.length ? nums : `${integer} is prime`;
};

console.log(divisors(13))