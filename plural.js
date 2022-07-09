// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
// All values will be positive integers or floats, or zero.

// Our input is a number. Only positive, but may contain floats, integers, as well as 0. No strings. Maybe infinity?
// We'll output a boolean, false if singular, true if plural. Can we print to the console? What to return if zero or infinity?
// For example, 1 returns false. 5 returns true
// 1. We need a conditional, I think that's it

const plural = n =>
  n == 1 ? 
      false : 
      true;