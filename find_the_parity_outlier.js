// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier"

// So we're taking in an array of integers, will always have at least three numbers, and may have many more. Random order?
// We'll be returning the single odd/even number out of the array. Can I print to the console?
// For example, the array of [1, 3, 5, 7, 10] would return 10
// 1. Using modulus will help us determine whether a number is odd or even, and it can be paired with .filter() 2. Can set up a conditional to return only the outlier of the array

function findOutlier(integers){
    if (integers.filter(num => num % 2 == 0).length == 1) {
      return integers.find(even => even % 2 == 0)
    }
    else {
      return Number(integers.filter(odd => odd % 2))
    }
  }