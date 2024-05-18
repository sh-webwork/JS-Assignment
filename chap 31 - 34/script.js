// Question No 1 Write a program that displays current date and time in your browser.

// var rightNow = new Date();

// document.write(rightNow)


// Question No 2 Write a program that alerts the current month in words. For example December

// var currentDate = new Date();
// var months = ["January", "February", "March", "April", "May", "June", 
//   "July", "August", "September", "October", "November", "December"];
// var currentMonthIndex = currentDate.getMonth();

// console.log(currentMonthIndex, "currentMonthIndex")
// var currentMonth = months[currentMonthIndex];
// alert("The current month is: " + currentMonth);


// Question No 3 Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun


// var currentDate = new Date();

// var currentDayIndex = currentDate.getDay();

// console.log(currentDayIndex, "currentDayIndex")


// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDayIndex = currentDate.getDay();
// var currentDay = days[currentDayIndex];
// alert("The current day is: " + currentDay);


// Question No 4 Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today

// var currentDate = new Date();
// var currentDayIndex = currentDate.getDay();
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDayIndex = currentDate.getDay();
// var currentDay = days[currentDayIndex];
// if (currentDayIndex == 0 || currentDayIndex == 6) {
//     alert("It’s Fun day " + currentDay);


// }else{
//     alert("Sorry! It’s not a Fun day " + currentDay);
// }


// Question No 5 Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

// var currentDate = new Date();
// // console.log(currentDate, "current date")

// var currentDateIndex = currentDate.getDate();
// // console.log(currentDateIndex, "currentDateIndex")

// if (currentDateIndex <= 15) {

//     alert("First fifteen days of the month")
// }
// else {
//     alert("Last days of the month")


// }



// Question No 6 Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object

// var myDate = new Date();
// var currentTime = myDate.getTime();
// // console.log(currentTime, "currentTime")
// var minutesSinceEpoch = Math.floor(currentTime / (1000 * 60));
// console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch); 


// Question No 7 Write a program that tests whether it's before noon and alert “Its AM” else “its PM”

// var myDate = new Date();
// var currentTime = myDate.getHours();
// // console.log(currentTime, "currentTime")
// if (currentTime <= 12) {
//     alert("Its AM")

// } else {
//     alert("Its PM")

// }


// Question No 8 Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate

// var lastMonthOfYear = new Date(2020, 11, 1);
// // console.log(lastMonthOfYear, "lastMonthOfYear 1");
// lastMonthOfYear.setMonth(lastMonthOfYear.getMonth() + 1);
// // console.log(lastMonthOfYear, "lastMonthOfYear 2");
// lastMonthOfYear.setDate(0);
// // console.log(lastMonthOfYear, "lastMonthOfYear 3");
// var laterDate = lastMonthOfYear;
// console.log(laterDate);




// Question No 9 Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015


// var ramadanDate = new Date(2015, 5, 18)
// // console.log(ramadanDate, "ramadanDate")

// var currentDate = new Date()
// // console.log(currentDate, "currentDate")

// var timeDiff = currentDate - ramadanDate

// // console.log(timeDiff, "timeDiff")


// timeDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

// console.log (timeDiff, "days have passed since 1st Ramadan 2015")



// Question No 10 Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var refDate = new Date("June 5, 2015 22:50:16")
// // console.log(refDate, "refDate")


// var beginDate = new Date("January 1, 2015 00:00:00")
// // console.log(beginDate, "beginDate")


// timeElapsed= Math.floor((refDate-beginDate)/1000)
// console.log("on reference date ", refDate, timeElapsed, " second had passed since begining of 2015")


// Question No 11 Create a Date object for the current date and time.Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.


// var currentDate = new Date()
// console.log("currentDate: ", currentDate)

// currentHour = currentDate.getHours()
// // console.log(currentHour, "currentHour")

// currentDate.setHours(currentHour+1)
// console.log("One hour ahead: ", currentDate)



// Question No 12 Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var currentDate = new Date()
// console.log("currentDate: ", currentDate)
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// console.log("100 year back, it was ", currentDate)


// Question No 13 Write a program to ask the user about his age. Calculate and show his birth year in your browser

// var age = prompt("Please enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("Your birth year is: " + birthYear);


// // Question No 14 Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge



// var customerName = prompt("Enter customer name:");
// var currentMonth = prompt("Enter current month:");
// var numberOfUnits = parseFloat(prompt("Enter number of units:"));
// var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
// var latePaymentSurchargeRate = 0.1;
// var netAmountPayable = numberOfUnits * chargesPerUnit;

// netAmountPayable = Math.round(netAmountPayable);

// var latePaymentSurcharge = netAmountPayable * latePaymentSurchargeRate;
// latePaymentSurcharge = Math.round(latePaymentSurcharge * 100) / 100;
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// grossAmountPayable = Math.round(grossAmountPayable * 100) / 100;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p>Current Month: " + currentMonth + "</p>");
// document.write("<p>Number of units: " + numberOfUnits + "</p>");
// document.write("<p>Charges per unit: " + chargesPerUnit.toFixed(2) + "</p>");
// document.write("<p>Net Amount Payable (within Due Date): $" + netAmountPayable.toFixed(2) + "</p>");
// document.write("<p>Late Payment Surcharge: $" + latePaymentSurcharge.toFixed(2) + "</p>");
// document.write("<p>Gross Amount Payable (after Due Date): $" + grossAmountPayable.toFixed(2) + "</p>");



// end





