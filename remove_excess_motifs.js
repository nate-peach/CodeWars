// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// !! So we are going to take in an array, and an integer. Will the array contain only positive integers? Will it ever be empty? Is there any order to the numbers in the array? And for the integer, will it ever be zero, negative, or a non integer?
// !! We are going to return an array with integers. Can I console.log() this array?
// !! For example, if we take in [4, 3, 2, 5, 4, 3, 5] and 1, we should see [4, 3, 2, 5] returned.
// !! 1. I think instead of removing numbers, we just add numbers that meet specific criteria to a seperate array. We can do that with a conditional and a loop / .map() 2. We have to work the details of the conditional - I think we need a method that returns a number