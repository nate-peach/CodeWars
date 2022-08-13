// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// We're taking in an array, the array will contain exactly 10 numbers
// We'll be returning a string, the numbers from the array formatted in a way that looks like a phone number. Can I print to the console?
// For example, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] would return "(012) 345-6789"
// Seems like there's a couple ways to go about this. Could return array items in a template literal? Might be able to use .map() and conditionals? 1. I'll try the template literals first (it works but ugly so I refactored lol using 3 variables, .slice(), and temlate literls

function createPhoneNumber(numbers){
    const areaCode = numbers.slice(0, 3).join('');
    const firstThree = numbers.slice(3, 6).join('');
    const lastFour = numbers.slice(6, 10).join('');
    
    return `(${areaCode}) ${firstThree}-${lastFour}`;
    }