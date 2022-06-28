// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// So we're taking in a number? Will it be an integer? Negative or positive?
// We're gonna return that number but negative. If neg already, return that num? Something else? Can I print it to the console?
// For example, if I'm taking 5, we'd return -5. 
// 1. So we can multiply the number by itself, and subtract the input by that number 2. Set up a conditional for negative numbers

const makeNegative = num => 
    num > 0 ? 
        num - num * 2 :
         num;