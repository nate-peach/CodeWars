// In this challenge we'll be given a secret message we have to decode, the last and first letters being switched, and the first letter replaced by its unicode value.

// We'll be taking in a string, containing only spaces, alphabet characters, and integers. Would we ever see more than one space between words, or spaces at the beginning/end of the string?
// We'll be returning the decoded version of the input, the unicode digits into their letter, the first and last letters swapped. Can I print to the console?
// Ex. decipherThis('72olle 103doo 100ya'); // 'Hello good day'
//     decipherThis('82yade 115te 103o'); // 'Ready set go'
// Split string into words. Seperate numbers from letters. Use a loop, and a variable. Use fromCharCode(). 

function decipherThis(str) {

    let letters = '';
    let digits = '';
    let decryption = [];

    for (let character of str) {
        if (isNaN(character))
            letters += character;
        else if (character == ' ')
            letters += ' ',
            digits += ' ';
        else
            digits += character;
    }
  
    let length = letters.split(' ').length;
    let words;
    let numbers;

    for (let i = 0; i < length; i++) {
        
        words = letters.split(' ');
        numbers = digits.split(' ');

        if (words[i] == '')
            decryption.push( 
                String.fromCharCode(numbers[i])
                );
        else if (words[i].length == 1)
            decryption.push( 
              String.fromCharCode(numbers[i]) +
              words[i]);
        else if (words[i].length == 2)
            decryption.push(
                String.fromCharCode(numbers[i]) +
                words[i][1] +
                words[i][0]
            );
        else
            decryption.push(
                String.fromCharCode(numbers[i]) +
                words[i].slice(-1) +
                words[i].slice(1, words[i].length - 1) +
                words[i][0]
            );
    }
    return decryption.join(' ');
};

console.log(decipherThis('82yade 115te 103o'));