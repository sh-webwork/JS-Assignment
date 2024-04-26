// // Question No 01 (incomplete pending)

// var charCode= prompt("Enter a character to check:")

// function checkInput(input) {
//     // Convert input to its ASCII code

//     charCode = input.charCodeAt(0);

//     if (charCode >= 48 && charCode <= 57) {
//         console.log(input + " is a number.");
//     } else if (charCode >= 65 && charCode <= 90) {
//         console.log(input + " is an uppercase letter.");
//     } else if (charCode >= 97 && charCode <= 122) {
//         console.log(input + " is a lowercase letter.");
//     } else {
//         console.log(input + " is not a number or letter.");
//     }
// }



// // Question No 02

// var a = +prompt("Enter integer a:")
// var b = +prompt("Enter integer b:")


//     if (a > b) {
//         console.log(a + " is larger than " + b);
//     } else if (b > a) {
//         console.log(b + " is larger than " + a);
//     } else {
//         console.log("Both integers are equal: " + a);
//     }



// // Question No 03

// var number = prompt("Enter a number:");

// if (number > 0) {
//     console.log(number + " is a positive number.");
// } else if (number < 0) {
//     console.log(number + " is a negative number.");
// } else {
//     console.log("The number is zero.");
// }


// // Question No 04

// var char = prompt("Enter a character of length 1:");

// if (char == "a") {
//     console.log(char, "is a Vowel Character");
// }
// else if (char == "e") {
//     console.log(char, "is a Vowel Character");
// }
// else if (char == "i") {
//     console.log(char, "is a Vowel Character");
// }
// else if (char == "o") {
//     console.log(char, "is a Vowel Character");
// }
// else if (char == "u") {
//     console.log(char, "is a Vowel Character");
// }
// else {
//     console.log(char, "is not a Vowel Character");

// }


// // Question No 05

// var secretKey = ("abc123");
// var userPswd = prompt("Enter your password:");
// if (userPswd === "") {

//     console.log("Please enter your password");
// }
// else if (userPswd === secretKey) {

//     console.log("Correct! The password you entered matches the original password");
// }
// else {

//     console.log("Incorrect password");

// }


// // Question No 06

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     console.log(greeting);
// }
// else {
//     greeting = "Good evening";
//     console.log(greeting);
// }


// // Question No 07

// var userTime = prompt("Enter time in format like: 1900 = 7pm");

// if (userTime >= "0000" && userTime < "1200") {

//     console.log("Good Morning!")
// }
// else if (userTime >= "1200" && userTime < "1700") {

//     console.log("Good Afternoon!")
// }
// else if (userTime >= "1700" && userTime < "2100") {

//     console.log("Good Evening!")
// }
// else if (userTime >= "2100" && userTime <= "2359") {

//     console.log("Good night!")
// }
// else {

//     console.log("Incorrect time!")


// }
