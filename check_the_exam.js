// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// We're taking in two arrays. The arrays contain strings, sometimes empty but always strings.
// We're returning a number. The value depends on which items match in the same index in the two arrays. Can I print to the console?
// For example, if we see ['d', 's', 'w', 'i'] and ['a', 's', 'w', 'b'] we'd return 6.
// 1. We need to check the arrays against each other 2. We need to set up a conditional - +4 for matches, -1 for non-blank misses, +0 for blank strings 3. We need a conditional that returns 0 for negative scores

const checkExam = function(array1, array2) {

    let studentScore = 0;
    
      for (let i = 0; i < array1.length; i++) {
        if (array2[i] === "") {
          studentScore += 0;
        }
        else if (array1[i] === array2[i]) {
          studentScore += 4;
        }
        else if (array1[i] !== array2[i]) {
          studentScore -= 1;
        }
      }
      
      return studentScore > 0 ? studentScore : 0;
      
    }