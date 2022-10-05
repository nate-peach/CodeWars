// Given a variable n, if n is an integer, return a string with dash '-' marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed. If n is not an integer, return the string "NaN".

// Simply put we're taking in an integer. Will we ever see anything other than an integer? We have to plan for that. Will it ever be empty?
// We'll be returning the same number, with odd numbers seperated by dashes. Consecutive odds will have only one dash seperating them, and there shouldn't be any dashes at the beginning/end of the number. If n is negative, change to positive. Can I print to the console?
// For Ex:
//   dashatize(274) -> '2-7-4'
//   dashatize(6815) -> '68-1-5'
// First, we'll need to check for non-numbers, and negative n with a conditional. Then attempt split the input into a string seperated by spaces. If the element we're looping past is odd and the index before/after is a space, reassign that index to a dash.

const dashatize = function(num) {
    let numCopy = num;

    if (numCopy != Number(numCopy))
        return 'NaN';
    else if (numCopy < 0)
        numCopy *= -1;

    const numArray = `${numCopy}`.split('');

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 1 && 
            i != numArray.length - 1) 
                numArray[i] += '-';
        
        else if (numArray[i] % 2 == 0 &&
            numArray[i + 1] % 2 == 1) 
                numArray[i] += '-'; 
    }
    return numArray.join('');
}