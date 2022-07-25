// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D 

// So we're taking in an array with nested arrays? Each containing two integers? Ok, and the first integer is the number of riders who exit, the second integer is the number of riders who enter
// We're outputting the number of riders that remain on the bus after the last stop. The bus starts with 0 riders. Can we print to the console?
// Ex. [[10,0],[3,5],[5,8]] would return 5
// 1. Need to understand nested arrays (got it), then subtract the second number in each pair from the first 2. Declare empty variable? Or use map? 

const number = busStops => 
    busStops.map
            (a => a[0] - a[1])
            .reduce((a, b) => 
            a + b, 0);

//or alternatively, you can just use reduce:
    //(had a hard time figuring out the parameters)
const number2 = busStops =>
    busStops.reduce
            ((sum, [on, off]) => 
            sum + on - off), 0; 