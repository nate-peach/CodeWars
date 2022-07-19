// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// We'll take in two integers. Will they be zero, less than zero, empty inputs?
// We'll return a boolean, if one input is even and the other is odd, return true, otherwise return false. Can we print to the console?
// Ex. 5 & 3 return false, 2 & 9 return true
// 1. Need a way to check if a number is odd / even, modulus? 2. Need a conditional

function lovefunc(flower1, flower2) {
    if (flower1 % 2 == 0 && flower2 % 2 == 1) {
        return true;
    }
    else if (flower1 % 2 == 1 && flower2 % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
  }