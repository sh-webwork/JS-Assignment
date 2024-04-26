// Question No 1 Write a program that takes a positive integer from user & display the following in your browser.

// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var num1 = +prompt("Enter an integer: ");
// document.write("number is: " + num1);
// document.write("<br/> round off value of the number: " + parseInt(num1));
// document.write("<br/> floor value of the number: " + Math.floor(num1));
// document.write("<br/> ceil value of the number: " + Math.ceil(num1));




// Question No 2 Write a program that takes a negative floating point number from user & display the following in your browser.

// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var number = parseFloat(prompt("Enter a negative floating point number:"));
// document.write("<p>a.number is: " + number + "</p>");
// var roundOffValue = Math.round(number);
// document.write("<p>b. Round off value: " + roundOffValue + "</p>");
// var floorValue = Math.floor(number);
// document.write("<p>c. Floor value: " + floorValue + "</p>");
// var ceilValue = Math.ceil(number);
// document.write("<p>d. Ceil value: " + ceilValue + "</p>");



// Question No 3 Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// var num = -4;
// var num1;
// if (num < 0) {

//     num1 = -num;
// }
// else {
//     num1 == num
// }

// console.log("The absolute value of: " + num + " is " + num1);






// Question No 4 Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:


// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("random dice value is: "+ diceValue);



// Question No 5 Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser


// var diceValue = Math.floor(Math.random() * 2) + 1;

// if(diceValue==1){

// document.write(diceValue);
// document.write("<br/> random coin value is: Head");

// }else{

//     document.write(diceValue);
//     document.write("<br/> random coin value is: Tail");

// }







// Question No 6 Write a program that shows a random number between 1 and 100 in your browser.

// var randomNumber = Math.floor(Math.random() * 100) + 1;

// document.write("<br/> random number between 1 and 100 is: ", randomNumber);






// Question No 7 Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// var userInput = prompt("Enter your weight in kilograms:");
// var weight = parseFloat(userInput);

// if (!isNaN(weight)) {
//     document.write("Your weight is: " + weight + " kgs");
// } else {
//     var regex = /^(\d+(\.\d+)?)\s*(kgs?|kilograms?)$/i;
//     var match = userInput.match(regex);

//     if (match) {
//         var weightValue = parseFloat(match[1]);
//         var unit = match[3].toLowerCase();
//         if (unit === "kgs" || unit === "kilograms") {
//             document.write("Your weight is: " + weightValue + " kgs");
//         }
//     } else {
//         document.write("Invalid input!");
//     }
// }




// Question No 8 Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.



// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userInput = +prompt("Enter a number between 1 and 10");

// if (userInput == secretNumber) {
//     console.log("Congratulation!")
// } else {

//     console.log("Try again...")

// }



