// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// We'll be taking in a string, only containing letters A, T, C, or G
// We'll be returning a string, with a T in place of an A (and vice versa) and a C in place of a G (and vice versa). Can we print to the console?
// Ex. "AGCTA" woud return "TCGAT"
// 1. We need to use loop(s) or .map() 2. We need a set of conditionals

const DNAStrand = dna =>
     dna
      .split('')
      .map(a => 
           a == 'A' ? 'T':
           a == 'T' ? 'A':
           a == 'G' ? 'C':
           'G')
      .join('');

// We could also have used objects to write some cleaner code, so:

const dnaPairs = {
    'A': 'T',
    'T': 'A',
    'G': 'C',
    'C': 'G'
};

// ^^ Create DNA pair object and store in variable

const DNAStrand2 = dna =>
    dna
    .split('')
    .map(v => 
        dnaPairs[v])
        .join('');

// ^^ Similar to DNAStrand, but uses dnaPairs object, .map(), array item [v] to build new string