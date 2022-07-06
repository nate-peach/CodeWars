// Given an integer or a floating-point number, find its opposite.

// We will be taking in an integer. Will we ever see zero or Nan/null/undefined?
// We'll be returning an integer, if the input is positive, the output will be negative and vice versa
// For example, if we take in -56 we should return 56. 8 would see -8
// 1. We need a way to reverse the value. We can do that by placing the - sign in front of the input.

const opposite = number => -number;