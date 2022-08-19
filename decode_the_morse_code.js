// In this kata you have to write a simple Morse code decoder. You'll be given a "converter object": MORSE_CODE[] which can take a string in its brackets and convert it to the english character.

// We're going to take in a string of spaces, "." and "-" there won't be any errors, each input will contain only valid Morse characters
// We have to return the English translation of the Morse code. The function will be case insensitive, and must account for correct spaces. Can I print to the console?
// For example, an input of '.... . -.--   .--- ..- -.. .' should return 'HEY JUDE'
// 1. We can use the MORSE_CODE[] object in a loop / .map() to convert the Morse code 2. We need to include the correct spaces in our output

const decodeMorse = function(morseCode){
    morseCode = morseCode.split(' ');
    let english = '';
    for (let i = 0; i < morseCode.length; i++) {
      if (morseCode[i] === '' && morseCode[i + 1] === '') {
        english += ' ';
      }
      else if (morseCode[i] !== '') {
        english += MORSE_CODE[morseCode[i]];
      }
    }
    return english.trim();
  }