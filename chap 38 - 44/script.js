// Question No 1 Write a custom function power ( a, b ), to calculate the value of a raised to b.


// function power(a, b) {

//     var pwr;
//     pwr = Math.pow(a, b)
//     console.log("pwr", pwr)
//     document.write("<h2>", 'The power of ', num1, " raised to power ", num2, " = ", pwr, "</h2>")
// }
// var num1 = +prompt("Enter 1st Number...")
// var num2 = +prompt("Enter 2nd Number...")
// power(num1, num2);


// Question No 2 Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.

// function leapYear(year) {

//     var result;
//     if (year % 4 == 0) {

//         // console.log("true", year)
//         document.write("<h2>", 'The year ', year, " is a leap year.", "</h2>")
//     } else {

//         // console.log("false", year)

//         document.write("<h2>", 'The year ', year, " is NOT a leap year.", "</h2>")

//     }

// }
// var inputYear = +prompt("Enter year in digit...")
// leapYear(inputYear);


// Question No 3 If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//     var s = calculateSemiPerimeter(a, b, c);
//     var area = (s * (s - a) * (s - b) * (s - c));
//     return area;
// }

// var a = parseFloat(prompt("Enter the length of side a:"));
// var b = parseFloat(prompt("Enter the length of side b:"));
// var c = parseFloat(prompt("Enter the length of side c:"));

// var area = calculateArea(a, b, c);

// document.write("<h2>Triangle Area Calculator</h2>");
// document.write("<p>The area of the triangle with sides " + a + ", " + b + ", and " + c + " is: " + area.toFixed(2) + "</p>");





// Question No 4 Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.

// function calculateAverage(mark1, mark2, mark3) {
//     return (mark1 + mark2 + mark3) / 3;
// }

// function calculatePercentage(mark1, mark2, mark3) {
//     const totalMarks = 300; // Assuming each subject is out of 100
//     const obtainedMarks = mark1 + mark2 + mark3;
//     return (obtainedMarks / totalMarks) * 100;
// }


// function mainFunction() {
//     const mark1 = parseFloat(prompt("Enter marks for subject 1:"));
//     const mark2 = parseFloat(prompt("Enter marks for subject 2:"));
//     const mark3 = parseFloat(prompt("Enter marks for subject 3:"));

//     const average = calculateAverage(mark1, mark2, mark3);
//     const percentage = calculatePercentage(mark1, mark2, mark3);
//     document.write("<h2>Student Marks Calculator</h2>");
//     document.write("<p>Marks received in subject 1: " + mark1 + "</p>");
//     document.write("<p>Marks received in subject 2: " + mark2 + "</p>");
//     document.write("<p>Marks received in subject 3: " + mark3 + "</p>");
//     document.write("<p>Average marks: " + average.toFixed(2) + "</p>");
//     document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
// }

// mainFunction();


// Question No 5 You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.


// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1; 
// }

// var stringToSearch = prompt("Enter a string to search in:");
// var characterToFind = prompt("Enter a character to find:");

// var index = customIndexOf(stringToSearch, characterToFind);

// document.write("<h2>Custom IndexOf Function</h2>");
// document.write("<p>The character '" + characterToFind + "' is found at index: " + index + " in the string '" + stringToSearch + "'.</p>");




// Question No 6 Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.


// function removeVowels(sentence) {
//     var vowels = 'aeiouAEIOU';

//     var result = '';

//     for (var i = 0; i < senten`ce.length; i++) {
//         if (vowels.indexOf(sentence[i]) === -1) {
//             result += sentence[i];
//         }
//     }

//     return result;
// }
// var sentence = prompt("Enter a sentence (max 25 characters):");

// if (sentence.length > 25) {
//     alert("The sentence is too long! Please enter a sentence with no more than 25 characters.");
// } else {
//     var result = removeVowels(sentence);
//     document.write("<h2>Remove Vowels from Sentence</h2>");
//     document.write("<p>Original sentence: " + sentence + "</p>");
//     document.write("<p>Sentence without vowels: " + result + "</p>");
// }






// Question No 7 Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui



// function countSuccessiveVowels(text) {
//     var vowels = "aeiouAEIOU";
//     var count = 0;

//     for (var i = 0; i < text.length - 1; i++) {
//         var currentChar = text[i];
//         var nextChar = text[i + 1];

//         switch (currentChar) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//             case 'A':
//             case 'E':
//             case 'I':
//             case 'O':
//             case 'U':
//                 switch (nextChar) {
//                     case 'a':
//                     case 'e':
//                     case 'i':
//                     case 'o':
//                     case 'u':
//                     case 'A':
//                     case 'E':
//                     case 'I':
//                     case 'O':
//                     case 'U':
//                         count++;
//                         break;
//                 }
//                 break;
//         }
//     }
//     return count;
// }

// var text = "This is the statement from where vowel letters are to be counted";
// var count = countSuccessiveVowels(text);

// document.write("<h2>Count Successive Vowels</h2>");
// document.write("<p>Text: " + text + "</p>");
// document.write("<p>Number of successive vowels: " + count + "</p>");





// Question No 7 The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters

// function convertToMeters(km) {
//     return km * 1000;
// }

// function convertToFeet(km) {
//     return km * 3280.84;
// }

// function convertToInches(km) {
//     return km * 39370.1;
// }

// function convertToCentimeters(km) {
//     return km * 100000;
// }

// var distanceKm = parseFloat(prompt("Enter the distance between two cities (in km):"));

// if (isNaN(distanceKm) || distanceKm < 0) {
//     alert("Please enter a valid positive number for the distance.");
// } else {
//     var distanceMeters = convertToMeters(distanceKm);
//     var distanceFeet = convertToFeet(distanceKm);
//     var distanceInches = convertToInches(distanceKm);
//     var distanceCentimeters = convertToCentimeters(distanceKm);

//     document.write("<h2>Distance Conversion</h2>");
//     document.write("<p>Distance in kilometers: " + distanceKm.toFixed(2) + " km</p>");
//     document.write("<p>Distance in meters: " + distanceMeters.toFixed(2) + " m</p>");
//     document.write("<p>Distance in feet: " + distanceFeet.toFixed(2) + " ft</p>");
//     document.write("<p>Distance in inches: " + distanceInches.toFixed(2) + " in</p>");
//     document.write("<p>Distance in centimeters: " + distanceCentimeters.toFixed(2) + " cm</p>");
// }


// Question No 9 Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.

// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00;

//     let overtimeHours = hoursWorked - regularHours;

//     if (overtimeHours <= 0) {
//         return 0;
//     } else {
//         let overtimePay = overtimeHours * overtimeRate;
//         return overtimePay;
//     }
// }

// let hoursWorked = parseInt(prompt("Enter the number of hours worked by the employee:"));

// if (isNaN(hoursWorked) || hoursWorked < 0 || !Number.isInteger(hoursWorked)) {
//     alert("Please enter a valid positive integer for the hours worked.");
// } else {
//     let overtimePay = calculateOvertimePay(hoursWorked);

//     document.write("<h2>Overtime Pay Calculator</h2>");
//     document.write("<p>Hours worked: " + hoursWorked + " hours</p>");
//     document.write("<p>Overtime pay: Rs. " + overtimePay.toFixed(2) + "</p>");
// }


// Question No 10 A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.



// function calculateCurrencyNotes(amount) {
//     if (amount % 100 !== 0) {
//         alert("Please enter an amount in hundreds.");
//         return;
//     }
    
//     let hundredNotes = Math.floor(amount / 100);
//     amount = amount % 100;
    
//     let fiftyNotes = Math.floor(amount / 50);
//     amount = amount % 50;
    
//     let tenNotes = Math.floor(amount / 10);
    
//     return {
//         hundredNotes: hundredNotes,
//         fiftyNotes: fiftyNotes,
//         tenNotes: tenNotes
//     };
// }

// let amount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):"));

// if (isNaN(amount) || amount < 0 || amount % 10 !== 0) {
//     alert("Please enter a valid positive amount in multiples of 10.");
// } else {
//     let notes = calculateCurrencyNotes(amount);
    
//     if (notes) {
//         document.write("<h2>Currency Note Calculator</h2>");
//         document.write("<p>Amount to be withdrawn: " + amount + "</p>");
//       document.write("<p>100 denomination notes: " + notes.hundredNotes + "</p>");
//       document.write("<p>50 denomination notes: " + notes.fiftyNotes + "</p>");
//       document.write("<p>10 denomination notes: " + notes.tenNotes + "</p>");
//     }
// }





