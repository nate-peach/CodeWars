// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

//     I love you
//     a little
//     a lot
//     passionately
//     madly
//     not at all

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// We're taking in an integer, the number of petals on the flower. Greater than 0, no strings, not empty.
// We'll return a string, one of six. Can I print to the console?
// ex. 10 petals would return 'passionately'
// 1. put the strings in an array? 2. maybe we can use % 6 on petal count

function howMuchILoveYou(petalCount) {
    const loveStrength = [   
      "not at all",
      "I love you",
      "a little",
      "a lot",
      "passionately",
      "madly"
    ]
    return loveStrength[petalCount % 6]
  }