// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// So we're taking in 4 strings: the customer's coupon code, a valid coupon code, the current date, and the customer's coupon's expiration date
// We'll be returning a boolean, whether or not the coupon is valid. Can I print to the console?
// For example, "123", "123", "July 9, 2015", "July 9, 2015" would return true, "123", "123", "July 9, 2015", "July 2, 2015" would return false
// I think we'll essentially just need a set of conditionals. The more difficult thing will be how to set up the date conditional. (this problem taught me about the Date object)

const checkCoupon = function(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode)
    return false;

    const months = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'
    ];
    
    const currentDateArr = currentDate.split(' ');
    const expirationDateArr = expirationDate.split(' ');
    
    const currentYear = parseInt(currentDateArr[2]);
    const currentMonth = months.indexOf(currentDateArr[0]) + 1;
    const currentDay = parseInt(currentDateArr[1]);
    
    const expirationYear = parseInt(expirationDateArr[2]);
    const expirationMonth = months.indexOf(expirationDateArr[0]) + 1;
    const expirationDay = parseInt(expirationDateArr[1]);
    
    if (currentYear > expirationYear)
      return false;
    else if (currentYear == expirationYear && currentMonth > expirationMonth)
      return false;
    else if (currentYear == expirationYear && currentMonth == expirationMonth && currentDay > expirationDay)
      return false;
    else
      return true;
};