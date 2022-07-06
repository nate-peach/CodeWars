// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// !! We'll be taking in a single positive or negative integer, or zero.
// !! We'll be returning a single integer.
// !! For example, if we take in 2, we would expect to see 5 returned.
// !! 1. We need to round up the parameter 2. We need to check if the number is a multiple of 5

function roundToNext5(n){
    if (n % 5 === 0) {
      return n;
    }
    else {
     while (n % 5 != 0){
       n += 1;
       }
      return n;
    }
   }