// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// So we're taking in a string of words, with each word containing a single number.
// We'll be returning the words in the string, sorted so that they'll appear in order of the numbers they contain. The numbers appear consecutively? Can I print to the console?
// Ex. "is2 Thi1s T4est 3a"  would return  "Thi1s is2 3a T4est"
// 1. Going to try .find() to select the number in each word 2. Might be able to use .map() to change the order

// Spent a long time trying to sort this one out, ended up looking at the solutions. This one made the most sense to me:

function order(words){
    // Split the string into an array of words
    var array = words.split(' ');

    // Declare an empty array
    var sortedArray = [];

    // Set up two loops, one that runs the full length of the array, one that ends 1 index before
    for(i = 0; i <= array.length; i++) {
      for(j = 0; j < array.length; j++) {

        // Set up a conditional that checks each word for a number, starting from 0. Then pushes that word to the empty array if it contains that number
        if(array[j].indexOf(i) >= 0) {
          sortedArray.push(array[j]);
        }
      }
    }
    // We now have an array of words that have been added in order of the value of the number they contain, we just have to convert it back into a string
    return sortedArray.join(' ');
  }