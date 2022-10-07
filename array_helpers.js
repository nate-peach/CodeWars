// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd(). Note: the original array must not be changed in any case!

//     square() must return a copy of the array, containing all values squared
//     cube() must return a copy of the array, containing all values cubed
//     average() must return the average of all array values; on an empty array must return NaN
//     sum() must return the sum of all array values
//     even() must return an array of all even numbers
//     odd() must return an array of all odd numbers

// So we're taking in an array. Will contain integers, but will we ever see anything else? What about an empty array / input?
// We'll be creating 6 new methods, listed above. These methods will return either integers, or arrays of integers, cannot mutate input. Mentions "extending" Array class, does that have implications for the code? Can I print to the console
// Example: for [1, 2, 3, 4, 5];
//  square();  // must return [1, 4, 9, 16, 25]
//  cube();    // must return [1, 8, 27, 64, 125]
//  average(); // must return 3
//  sum();     // must return 15
//  even();    // must return [2, 4]
//  odd();     // must return [1, 3, 5]
// Need to first check about "extending", may need a specific syntax. Then each method will need it's own statements:
//  square() should be able to use .map(), and just multiply the number by itself
//  cube() should be able to use .map() and could either go the math route or use the exponent method
//  average() think I can use .reduce() effectively here
//  sum() .reduce() again I think should work
//  even() can make use of a for loop
//  odd() ^ same

Array.prototype.square = function () {
        return this.map(function(num) {return Math.pow(num, 2)});
    };
    Array.prototype.cube = function () {
        return this.map(function(num) {return Math.pow(num, 3)});
    }
    Array.prototype.average = function () {
        return this.reduce(function(a, b) {return a + b}, 0) / this.length;
    };
    Array.prototype.sum = function () {
        return this.reduce(function(a, b) {return a + b}, 0);
    };
    Array.prototype.even = function () {
        return this.map(function(num) { 
            if (num % 2 == 0)
                return num
        });
    };
    Array.prototype.odd = function () {
        return this.map(function(num) { 
            if (num % 2 == 1)
                return num
        });
    };

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.square())