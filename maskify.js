// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// We're taking in a string of characters? 
// We're returning a string, containing only '#' and the last four characters of the input. Can we print to the console?
// Ex. for "greengrass", we'd return "######rass". For "" return "". For "h" return "h"?
// 1. Let's use .map(), .length and .indexOf() to iterate through the string and select only elements with indices < input.length - 4? 

const maskify = cc =>
  cc
    .split('')
    .map((a, b) =>
         b < cc.length - 4 ?
         '#' :
         a)
    .join('');