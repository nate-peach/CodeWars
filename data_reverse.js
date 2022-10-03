// A stream of bits is received and needs to be reversed. The total number of bits will always be a multiple of 8. The data is given in an array, and each segment is 8 bits long.

// So we're taking in an array of 1s and 0s. Will we ever see anything other than these nums?
// We'll be returning the elements of the input seperated into segments of 8 items, then returned in reverse order. Can I print to the console?
// For example, and input of [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0] would be seperated into:
// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// and then reversed into:
// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// So we'll need to segment the bits first I think. I'm going to try using Array() and a loop to create an array of segments. I think we may be able to use .reverse() after that

const dataReverse = function(data) {
    let segments = Array(data.length / 8).fill('');
    let j = 0;
    for (let bit of data) {   
        if (segments[j].length === 8)
            j++;
        segments[j] += bit;
    }
  
    return Array.from(segments
        .reverse()
        .join('')
        .split(''), 
        Number
    );
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))

// running into some problems, gonna come back