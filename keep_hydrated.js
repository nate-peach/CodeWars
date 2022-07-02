// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// We are taking in the time in hours, an integer.
// We're returning the number of litres drank, an integer.
// For example, if we input 10, we would expect to see 5 litres returned. 0 would return 0
// 1. We need to return n / 2 2. And then round down to the lowest integer

const litres = time => 
  Math.floor(time / 2);