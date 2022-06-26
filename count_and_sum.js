// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// !! We are taking in an array of numbers. Are they integers? Will it ever include non-numbers?
// !! We are returning an array of two integers. The first is the total number of positive numbers in the input array. The second is the sum of all the negative numbers
// !! For example, For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], we should return [10, -65].
// !! 1. I think I'll set up two variables, and add 1 or input[i] depending on the value of the number 2. I'll use a loop to move through the array 3. I'll return declared array

function countPositivesSumNegatives(input) {
  let positiveNumCount = 0;
  let negativeNumSum = 0;
   if (input == [] || input == null || input == [0, 0]) {
     return [];
   }
   for (let i = 0; i <= input.length; i++) {
     if (input[i] > 0) {
       positiveNumCount += 1;
     }
     else if (input[i] < 0) {
       negativeNumSum += input[i];
     }
   }
   if (positiveNumCount == 0 && negativeNumSum == 0) {
     return [];
   }
   else{
     return [positiveNumCount, negativeNumSum];
     }
   }