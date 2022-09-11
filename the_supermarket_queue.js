// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//n: a positive integer, the number of checkout tills.

// output
// The function should return an integer, the total time required.

// So we're taking in an array of integers, and a single integer. The array represents the number of customers checking out and how long it will take each customer to check out, and the single integer represents the number of tills available at the store.
// We'll be returning an integer, the amount of time it takes for all customers to check out. Can I print to the console?
// For example, if we input [5,3,4], 1 we would return 12
// 1. Been thinking about this for a while, not sure how to approach it, think I can use .length = n to create an array to represent the amount of tills available 2. And maybe from there I can use a loop and some conditionals to choose where customers check out

// Decided to look at the solutions for this one, was taking me a long time. This is the solution I chose to remember:

const queueTime = function(customers, n) {
    let tills = Array(n).fill(0);
    
    customers.forEach((customer) => {
      let nextTill = tills.indexOf(Math.min(...tills))
      tills[nextTill] += customer;
    });
  
    return Math.max(...tills);
  };