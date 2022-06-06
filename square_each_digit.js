// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// !! So for our parameters, we'll be taking in a number. Will it be a whole number, if that matters? Will it be zero? Will it ever be a string or boolean?
// !! We'll be returning a number, most likely an integer I assume.
// !! For example, if we passed in 69, we'd expect to see 3681, I believe.
// !! 1. We need to seperate the digits. 2. We need to square each one. 3. We need to then concatenate them, and return the combination

function squareDigits(num){
    return Number((Array.from(String(num), Number)).map((a) => a * a).join(''));
  }