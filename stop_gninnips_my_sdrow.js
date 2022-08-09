// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// We're taking in a string, it will contain only letters a-z and spaces.
// We're going to return the same string, but with all 5+ letter words reversed. Function should be case-sensitive. Should we return a new string? Can I print to the console?
// For example, 'Nate goes to the store' would return 'Nate goes to the erots'
// 1. Using the methods  .split(' ').forEach() 2. Should use a conditional combined with the .length method 3. Need to reverse the letters 

// I ended up taking some more time with this one, and used a loop instead of .forEach(). Could have used .map() though.

function spinWords(string){
  
    // First, we reassign the parameter to an array of substrings (words), split by any spaces.
    string = string.split(' ');
    
    // Second, we set up a loop to iterate through each word in this array
    for (let i = 0; i < string.length; i++) {
      
    // Third, we set up a conditional in the loop that determines if a word has at least 5 letters
      if (string[i].length > 4) {
        
    // Fourth, if the condition is met, we reverse the order of the letters in the word
        string[i] = string[i].split('').reverse().join('');
      }
    }
    
    // Finally, we join the words (substrings) in the array back into a string, and return it
    return string.join(' ');
  }