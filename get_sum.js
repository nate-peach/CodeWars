// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

// !! We will be taking in two integers. They can be positive or negative. They will not be sorted. They may be equal to each other.
// !! We will be returning a single integer, the sum of all the integers between a & b, plus the value of a & b
// !! If we have 2 and 10 for a & b, we would expect to see 54 returned. For 2 and 2, 2.
// !! 1. We should deal with the fact that a & b aren't sorted 2. We need to find the integers between a & b 3. We need to add everything together 4. We need to return the sum 5. and consider what to do if a === b

function getSum(a, b) {
    const sortNums = [a, b].sort((x, y) => x - y);
    let integersBetweenAandB = [];
    for (let i = sortNums[0]; i <= sortNums[1]; i++) {
      integersBetweenAandB.push(i);
      }
    if (a === b) {
      return a;
    }
    else {
      return integersBetweenAandB.reduce((n, p) => n + p, 0);
    }
    }