// In a factory a printer prints labels for boxes. The colors used by the printer are recorded in a control string, which for the sake of simplicity, are named only with letters from a to m. 
// Sometimes there are problems: lack of colors or technical malfunctions - these produce "bad" control strings with letters not from a to m. You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// So we're taking in a string, which will contain only lowercase letters from a - z. 
// We're returning a string, a fraction, with the numerator being the number of non a - m characters in the input, and the denominator being the number of total characters in the input
// Ex "aosidjfoaijzcx" would return "5/15"
// 1. We can declare an array that contains all a - m characters 2. filter out all characters that are not in the array 3. Use template literal to return our fraction