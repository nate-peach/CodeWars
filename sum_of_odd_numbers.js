// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// We're taking in an array of odd nums? Does it always start with 1? Yes, it's always the same triangle, but the triangle is not the input. We must make the triangle. The row number correlates to the number of items in the row. Each row has +1 more item than the previous row.
// We're outputting the sum of all items in a specific row. Can we print to the console?
// Ex. input of 3 returns 27 (7 + 9 + 11)
// 1. Need to come up with a formula, or two? to create the rows 2. Need to use a loop or two? (had to look up a solution, it's so much easier, definitely overthinking it. The solution is just the input, cubed, wow. Although, thinking about creating the data in the form of a triangle was fun and insightful)

const rowSumOddNumbers = n =>
    Math.pow(n, 3);