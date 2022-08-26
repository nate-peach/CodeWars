// Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.

// We're taking in a string of letters a - z, special characters, and spaces. There will be multiple cases
// We'll be returning a string that contains the positions 

const alphabetPosition = function(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return text.toLowerCase()
        .split('')
        .filter(a => alphabet.indexOf(a) !== -1)
        .map(letter => alphabet.indexOf(letter) + 1)
        .join('');
  }