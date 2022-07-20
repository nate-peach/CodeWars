// You are going to be given a word. Your job is to return the middle character of 
//the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// So we're taking in a string, containing any character? Numbers, null, empty?
// We'll return a string, the middle character of the input if input is odd, two middle characters if even. Can we print to the console?
// Ex. 'Nathan' would return 'th', 'telephone' => 'p'
// 1. Need to test for odd / even strings and set up a conditional 2. Select middle array element(s) (divide input.length by 2?)

function getMiddle(s) {
  
    const lowMiddle = 
            (s.length / 2) - 1;
    const highMiddle = 
          s.length / 2;
    
    const middle = 
          Math.floor(
            s.length / 2);
    
    return s.length % 2 == 0 ? 
      (s[lowMiddle] + s[highMiddle]) :
      s[middle];
  }