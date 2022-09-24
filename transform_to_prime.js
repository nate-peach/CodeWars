// Given an array of n integers, find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number.

// We'll be inputting an array of only positive integers, we may see repetitions
// We'll be returning an integer, the number we'd need to add to the sum of the array to get to the nearest prime number (prime numbers are integers that are only divisible by one / themselves) Can I print to the console?
// Examples, [3,1,2] would return 1
//   [2,12,8,4,6] would return 5
//   [50,39,49,6,17,28] would return 2
// I honestly didn't know what a prime number is, or how to approach writing code to check for one, so I looked it up! Found some code to use as a "prime number checker" and I'm going to combine it with .reduce() and some conditionals - see where that gets me

const checkPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i == 0) return false; 
    return num > 1;
};

const minimumNumber = numbers => {
    let arraySum = numbers.reduce((a, b) => a + b);
    let numToAdd = 0;
    
    while (checkPrime(arraySum) == false) {
        arraySum++;
        numToAdd++;
    }
  
    return numToAdd;
};