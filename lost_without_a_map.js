// Given an array of integers, return a new array with each value doubled.

// We're taking in an array of integers. Only integers, never strings, special chars etc.
// We'll return an array of integers. Can we gprint to the console? New array or edited array?
// [2, 4, 7] would see [4, 8, 14]
// 1. Should be able to use map() and multiply the param by 2

const maps = x => 
  x
  .map(a => 
       a * 2);