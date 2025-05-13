function checkIfLeapYear(year) {

    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 != 0))) {
        return "Leap Year!";
    }
    else {
        return "Not a Leap Year";
    }
    
}

console.log(checkIfLeapYear(1900));

// Do not edit below this line
module.exports = leapYears;
