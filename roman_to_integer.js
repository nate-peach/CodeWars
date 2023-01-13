/**
input is a string, roman numerals ONLY
output is a number, the conversion of the roman numeral in digit form
ex: "III" => 3
    "LVIII" => 58
    "MCMXCIV" => 1993
brute force would be loop & switch/case statements with variable reassign
might be an OOP option?
 */

const romanToInt = s => {
    let int = 0;
    let IVandIX = 0;
    let XLandXC = 0;
    let CDandCM = 0;

    for (let i = 0; i <= s.length; i++) {
        switch (s[i]) {
            case 'I' : int += 1; break
            case 'V' : int += 5; break
            case 'X' : int += 10; break
            case 'L' : int += 50; break
            case 'C' : int += 100; break
            case 'D' : int += 500; break
            case 'M' : int += 1000; break
        }
        if (s[i] == "I" && s[i + 1] == ("V", "X"))
            IVandIX += 2;
        if (s[i] == "X" && s[i + 1] == ("L", "C"))
            XLandXC += 20;
        if (s[i] == "C" && s[i + 1] == ("D", "M"))
            CDandCM += 200;
    }

    return int - IVandIX - XLandXC - CDandCM;
};