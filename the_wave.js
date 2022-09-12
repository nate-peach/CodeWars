// In this simple Kata your task is to create a function that turns a string into The Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// So we'll be taking in a string of all lowercase letters and spaces.
// We want to return the same string with letters changed to uppercase in a consecutive order, simulating a wave. We'll return the string with the appropriate letter changed to uppercase in an array. Can I print to the console?
// For example, "nathan" would return [Nathan, nAthan, naThan, natHan, nathAn, nathaN]
// 1. Can definitely use .toUpperCase() to change cases 2. Probably use .map() and .split() to apply uppercase appropriately and create array 3. Think I can use a conditional to skip over spaces

// Spent way too long on this one, and had to look up the solution. Chose this one:

const wave = function(str) {
    let theWave = [];

    for (let i = 0; i < str.length; i++) {
        let strArray = str.split(''); 
        if (strArray[i] !== ' ') {
            strArray[i] = strArray[i].toUpperCase();
            theWave.push(strArray.join(''));
        }
    }

    return theWave;
};