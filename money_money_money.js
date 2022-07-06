// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest
// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// !! We'll be taking in investment, desiredOutcome, interest, and taxes. So, 4 numbers. Will we ever get something not a number, or zero?
// !! We'll be returning a single number
// !! So for example, if we have investment(200), desiredOutcome(1000), interest(.10), taxes(.10) 
// !! 1. We need to store data, so let's make a variable 2. We also need to perform a set of instructions multiple times, so let's set up a loop 3. We need to come up with a formula to calculate the math 4.

function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}

