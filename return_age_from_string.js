// You ask a small child,"How old are you?" They always say, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the child's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
    return parseInt(inputString[0]);
    }