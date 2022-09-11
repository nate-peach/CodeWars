// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// We're taking in an array, containing integers only.
// We'll be returning a string, either "odd" or "even", depending on whether the sum of the input array is odd or even. Can I print to the console?
// Ex. [0, -1, -5] would return "even"
// First, need to find the sum of the array, probably with reduce. Second, set up a conditional using modulus to determine which string to return

const oddOrEven = function(array) {
    const sum = array
        .reduce((a, b) => 
            a + b, 0
        );
    
    return sum % 2 == 0 ? 
        'even':
        'odd';
};