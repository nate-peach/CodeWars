// Given a number n, return the number of positive odd numbers below n, EASY!

// We're taking in an integer. Always positive?
// We're returning an integer, the number of odd numbers below n. Can we print to the console?
// Ex. input of 9 returns 4
// 1. Let's use arithmetic, n/2 to get number of odds 2. Let's use Math.floor() to round our answer.

const oddCount = n => 
    Math
        .floor(
            n/2
            );