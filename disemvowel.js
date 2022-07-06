// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// !! We'll be taking in a string
// !! We'll be returning a string without any vowels
// !! For example, 'no women allowed' would be 'n wmn llwd'
// !! 1. We need a way to remove a letter from a string 2. We have to do that for five different letters 3. We have to return the new / edited string

function disemvowel(str) {
    str = str.split('');
    const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
    for (let i = 0; i <= vowels.length; i++) {
      str = str.filter(a => a != vowels[i])
    }
    return str.join('');
  }