// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// We're taking in an integer. It correlates to a specific number in a series. If we input 0, return 0.00
// We're outputting a natual number, to two decimal places. Can we print to the console? 
// Ex. input of 5 returns 1.57. The series is 1, 1/4, 1/7, 1/10, 1/13...
// 1. We need to determine a formula for the series 2. We need to set up conditionals (actually had to look up the solution to this one, couldn't determine a formula, which can be: 1 / (1 + i * 3)) 

function SeriesSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += 1 / (1 + i * 3)
    }
    return sum.toFixed(2)
  }