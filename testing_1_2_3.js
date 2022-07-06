// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// !! So we'll be taking in a list of strings? That's an array of strings? It'll always be single object or multiple strings? 
// !! And we'll be returning a number and a string in the format 'n: string"? Or n": string"?
// !! for example, a parameter might look like ['I walked to the store this morning', 'I bought this and this', 'I walked home'] and we'd return '1: string, 2: string, 3: string'?
// !! 1. We need to loop through the list 2. each time we loop we need to return the index of the element and the element itself

var number=function(array){
    return array.map((string, index) => `${index + 1}: ${string}`)
  }