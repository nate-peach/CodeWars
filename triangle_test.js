// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// The sum of the length of any two sides of a triangle is greater than the length of the third side

// !! We'll be taking in 3 integers. Sounds like they will be greater than 0. Will they ever be negative / not an integer?
// !! We'll be returning a boolean: true or false
// !! For example, if we had parameters of 3, 4, 6, we should expect to see true returned. 1, 10, 2 and we should see false returned.
// !! 1. We need to set up some conditionals. 2. We need to do some math. We need to set up a boolean return

const triangleTest = (num1, num2, num3) =>
 num1 + num2 > num3 && num2 + num3 > num1 && num1 + num3 > num2;