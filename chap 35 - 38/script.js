// Question No 1 Write a function that displays current date & time in your browser

// function displayCurrentDateTime() {
//     // Create a new Date object for the current date and time
//     var currentDateTime = new Date();

//     // Get the individual components of the date and time
//     var date = currentDateTime.toDateString();
//     var time = currentDateTime.toLocaleTimeString();

//     // Display the current date and time in the browser
//     document.write("<h2>Current Date & Time</h2>");
//     document.write("<p>Date: " + date + "</p>");
//     document.write("<p>Time: " + time + "</p>");
// }

// displayCurrentDateTime();

// Question No 2 Write a function that takes first & last name and then it greets the user using his full name.


// function greetUser() {
//     var firstName = prompt("Enter your first name:");
//     var lastName = prompt("Enter your last name:");

//     var fullName = firstName + " " + lastName;
//     document.write("<h2>Greeting</h2>");
//     document.write("<p>", "Hello, " + fullName + "! Welcome!", "</p>");
// }
// greetUser();



// Question No 3 Write a function that takes first & last name and then it greets the user using his full name

// function addTwoNumbers() {
//     var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));
//     var sum = num1 + num2;
//     return sum;
//   }
//   var result = addTwoNumbers();
//   document.write("<h2>Sum of Two Numbers</h2>");
//   document.write("<p>The sum of the two numbers is: " + result + "</p>");


// Question No 4 Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.


// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operator = prompt("Enter the operator (+, -, *, /, %):");
// function calculate(num1, num2, operator) {
//     var result;
//     if (operator == "+") {

//         result = num1 + num2;

//     } else if (operator == "-") {

//         result = num1 - num2;

//     } else if (operator == "*") {

//         result = num1 * num2;

//     } else if (operator == "/") {

//         result = num1 / num2;

//     } else if (operator == "%") {
//         result = num1 % num2;

//     } else {
//         result = "Error: Division by zero";
//     }

//     return result;
// }

//     var result = calculate(num1, num2, operator);
//     document.write("<h2>Calculator Result</h2>");
//     document.write("<p>The result of " + num1 + " " + operator + " " + num2 + " is: " + result + "</p>");



// Question No 5 Write a function that squares its argument.

// var num = parseFloat(+prompt("Enter the your number:"));

// function squareFunc() {

//     var result = num * num;
//     return result;
// }
// var result = squareFunc();
// document.write("<h2>Square Function</h2>");
// document.write("<p>The square of your number is " + result + "</p>");


// Question No 6 Write a function that computes factorial of a number.


// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }

//     return result;
// }
// var number = parseInt(prompt("Enter a number to compute its factorial:"));
// var result = factorial(number);
// document.write("<h2>Factorial Calculator</h2>");
// document.write("<p>The factorial of " + number + " is: " + result + "</p>");


// Question No 7 Write a function that take start and end number as inputs & display counting in your browser.

// function displayCounting(start, end) {
//     if (start <= end) {
//         for (let i = start; i <= end; i++) {
//             document.write(i + "<br>");
//         }
//     } else {
//         document.write("Start number should be less than or equal to end number.");
//     }
// }

// var startNumber = parseInt(prompt("Enter the start number:"));

// var endNumber = parseInt(prompt("Enter the end number:"));

// displayCounting(startNumber, endNumber);


// Question No 8 Write a nested function that computes hypotenuse of a right angle triangle.

// function calculateHypotenuse(a, b) {
//     // Nested function to compute the square of a number
//     function square(x) {
//       return x * x;
//     }

//     // Calculate the hypotenuse using the Pythagorean theorem
//     var hypotenuse = Math.sqrt(square(a) + square(b));
//     return hypotenuse;
//   }

//   // Prompt the user to input the lengths of the two sides
//   var sideA = parseFloat(prompt("Enter the length of side A:"));
//   var sideB = parseFloat(prompt("Enter the length of side B:"));

//   // Call the computeHypotenuse function
//   var hypotenuse = calculateHypotenuse(sideA, sideB);

//   // Display the hypotenuse in the browser
//   document.write("<h2>Hypotenuse Calculator</h2>");
//   document.write("<p>The hypotenuse of the right-angle triangle with sides " + sideA + " and " + sideB + " is: " + hypotenuse.toFixed(2) + "</p>");



// Question No 9 Write a function that calculates the area of a rectangle.
// A = width * height
//  Pass width and height in following manner:
// i.Arguments as value
// ii.Arguments as variables

// function calculateArea(width, height) {
//     return width * height;
// }

// var area1 = calculateArea(5, 10);
// document.write("<h2>Area of Rectangle</h2>");
// document.write("<p>Area (by passing values): " + area1 + "</p>");


// function calculateArea(width, height) {
//     return width * height;
// }

// var width = 7;
// var height = 12;

// var area2 = calculateArea(width, height);
// document.write("<p>Area (by passing variables): " + area2 + "</p>");

// function calculateArea(width, height) {
//     return width * height;
// }


// Question No 10 Write a JavaScript function that checks whether a passed 
// string is palindrome or not?


// function isPalindrome(str) {
//     var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//     var reversedStr = cleanedStr.split('').reverse().join('');

//     return cleanedStr === reversedStr;
// }

// var userInput = prompt("Enter a string to check if it is a palindrome:");

// var result = isPalindrome(userInput);

// document.write("<h2>Palindrome Checker</h2>");
// if (result) {
//     document.write("<p>The string \"" + userInput + "\" is a palindrome.</p>");
// } else {
//     document.write("<p>The string \"" + userInput + "\" is not a palindrome.</p>");
// }


// Question No 11 Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case.

// function capitalizeFirstLetterOfEachWord(str) {
//     var words = str.split(' ');

//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }

//     var capitalizedStr = words.join(' ');

//     return capitalizedStr;
// }

// var userInput = prompt("Enter a string to capitalize the first letter of each word:");

// var result = capitalizeFirstLetterOfEachWord(userInput);

// document.write("<h2>Capitalized String</h2>");
// document.write("<p>" + result + "</p>");


// Question No 12 

// function findLongestWord(str) {
//     var words = str.split(' ');
    
//     var longestWord = '';
    
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
    
//     return longestWord;
// }

// var userInput = prompt("Enter a string to find the longest word:");

// var longestWord = findLongestWord(userInput);

// document.write("<h2>Longest Word Finder</h2>");
// document.write("<p>The longest word in the string is: " + longestWord + "</p>");





