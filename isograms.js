// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// !! For parameters, the program will take in a string and only a string? Letters can be capital? The string input can be empty?
// !! The program will return only a boolean?
// !! As an example, if checkForNoDuplicateLetters(helper), then the expected output would be false, since there's two 'e's?
// !! 1. The program must see the parameter as case-insensitive. 2. The program must search the string input. 3. The program must determine whether one letter is identical to another.

      function isIsogram(str){
        var i, j;
        str = str.toLowerCase();
        for(i = 0; i < str.length; ++i)
          for(j = i + 1; j < str.length; ++j)
            if(str[i] === str[j])
              return false;
        return true;
      }