// Create a function that takes in a string so that each lowercase letter in the string becomes uppercase and each uppercase letter becomes lowercase.

// So we'll be taking in a string. Will the string only contain letters? Will the string ever be empty?
// So we're returning a string. Will it be a new sting or will we be editing the original string? Can I console.log() the result?
// For example 'Nate Peach' 'nATE pEACH'
// 1. Check if a letter is uppercase, using a conditional and case method 2. We could use .map() or a loop to repeat for each letter.

String.prototype.toAlternatingCase = function () {
    return this.split('').map(letter => letter == letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('');
  }