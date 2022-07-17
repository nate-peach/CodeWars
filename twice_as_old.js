// Your function takes two arguments:

//     current parent's age (years)
//     current age of child (years)

// Calculate how many years ago the parent was twice as old as their child (or in how many years he will be twice as old).

// We're taking in 2 integers? Ever zero / empty?
// We're returning an integer. Can I print to the console?
// Ex. 14 & 30 would return 2. 40 & 60 would return 20? 
// 1. Can we use child's age * 2 - parent's age? 2. Then use Math.abs()

const twiceAsOld = (parentAge, childAge) =>
  Math.abs(
    childAge * 2 - parentAge
  );