// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// We'll take in 1 string and 2 numbers. String can be any char representing a mathematical operation, empty? Will we see negative numbers or zero?
// We'll return the result of the mathematical operation performed on / between the two numbers. So, a number. Can we print to the console?
// Ex if we see '/' , 1 , 1 we'd return 1. 
// 1. We need to have the strings correlate to a math operator. I think we'll need to just manually program each operation with conditionals (just learned we can also use the 'eval()' method in JS so:

const basicOp = (operation, value1, value2) =>
    eval(
        value1 + 
        operation + 
        value2
        );