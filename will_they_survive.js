// A hero is on their way to the castle to complete their mission. However, they've been told that the castle is surrounded by powerful giant mosquitoes! each mosquito takes 2 bullets to be defeated, our hero has no idea how many bullets they should carry.. Assuming they're gonna grab a specific given number of bullets and move forward to fight another specific given number of mosquitoes, will they survive?

// Return True if yes, False otherwise :)

// We're taking in two parameters, each integers. Only positive? Never anything else?
// We're returning a boolean, basically whether the the first parameter is at least double the second. Can we print to the console?
// For example: 1 & 5 would return false, 10 & 5 would return true
// 1. We need a conditional

const hero = (nukes, mosquitoes) =>
  nukes >= mosquitoes * 2;