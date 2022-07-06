// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

const doubleChar = str => 
    str
     .split('')
      .map(a => 
        a + a)
         .join('');