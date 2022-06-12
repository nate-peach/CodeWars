// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// We'll be taking in a single string. Does case matter? Spelling will always be correct?
// We'll be returning a string. Can we console log the string?
// For example, if we were taking in the string 'red' we'd expect our output to be 'green'.
// 1. We need to set up a logical set of instructions 2. We need to return a string

function updateLight(current) {
    if (current == 'red'){
      return 'green';
    }
    if (current == 'yellow'){
      return 'red'
    }else{
      return 'yellow'
    }
  }
