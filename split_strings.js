// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// We're taking in a string, only characters a-z?
// We're returning the same string in same order, just splitting the string every two characters, and adding a "_" at the end if the input length is odd. Does case matter? Can I print to the console?
// For example, 'abc' returns   ['ab', 'c_'] and 'abcdef' returns ['ab', 'cd', 'ef']
// 1. My first thought is if .split() can be used in a clever way. Else, I think a loop would work well here 2. Need to add a "_" at the end, which we might be able to do with a conditional and .push()

function solution(str){
    let pairs = '';
   for (let i = 0; i < str.length; i++) {
     if (i % 2 == 1 && i !== str.length - 1) {
       pairs += str[i] + ' ';
     }
     else if (str.length % 2 == 1 && i == str.length - 1) {
       pairs += str[i] + "_";
     }
     else {
       pairs += str[i];
     }
   }
   return str == [] ? [] : pairs.split(' ');
 }