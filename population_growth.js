// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// We're taking in four inputs, * an integer for starting population, * a floating number for growth percentage, * an integer for immigrants, * and an integer for population goal. Will we ever see negative / null values?
// We're returning an integer, the years it will take for the population goal to be reached. Can we print to the console?
// Ex. Will we ever see more people leaving than people born?
// 1. We have to come up with a formula 2. Convert growth integer to a percent value 3. Set up a for loop

function nbYear(p0, percent, aug, p) {
    for (var years = 0; p0 < p; years++) {
      p0 += Math.floor(
        (percent * .01) * p0 + aug);
    }
    return years;
  }