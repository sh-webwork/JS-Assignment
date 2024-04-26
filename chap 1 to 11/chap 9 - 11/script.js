// // Question No 1

// var cityName = prompt("Enter your city name:");
// if (cityName === "Karachi") {
//     alert("Welcome to city of lights");
// }

// // Question No 2

// var gender = prompt("Enter your gender:");
// if (gender === "male") {
//     alert("Good Morning Sir.");
// }
// else if (gender === "female") {
//     alert("Good Morning Ma'am.");
// }
// else{
//     alert("your gender is prohibited in community")
// }


// // Question No 3

// var signalColor = prompt("Enter Traffic Signal Color:");
// if (signalColor === "red") {
//     alert("Must stop");
// }
// else if (signalColor === "yellow") {
//     alert("Ready to move");
// }
// else if (signalColor === "green") {
//     alert("Move now");
// }
// else{
//     alert("Invalid");
// }


// // Question No 4

// var fuelQty = +prompt("Enter quantity of fuel (ltr) remaining in your car:");
// if (fuelQty <= "0.25") {
//     alert("Please refill the fuel in your car.");
// }


// Question No 5


// // a. (alert message output displayed)

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// // b. (alert message output not displayed)

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }


// // c. (alert message output condition 2 and 4 is true)

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// // d. (alert message output displayed as "The cost equal")

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }


// // e. (alert message output displayed as "true")

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }


// // f. (alert message output displayed as "car is smaller than cat")

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// // Question No 6


// var totalMarks = +prompt("Enter total marks:");
// var obtainedMarks = +prompt("Enter marks obtained:");
// var percentage = obtainedMarks * 100 / totalMarks;
// document.write("Total Marks: " + totalMarks);
// document.write("<br/>Marks obtained: " + obtainedMarks);
// document.write("<br/>Percentage: " + percentage);

// if (percentage >= 80) {
//     document.write("<br/>Grade : A-One");
//     document.write("<br/>Remarks : Excellent");
// }

// if (percentage >= 70 && percentage < 80)
// {
//     document.write("<br/>Grade : A");
//     document.write("<br/>Remarks : Good");
// }

// if (percentage >= 60 && percentage < 70) {
//     document.write("<br/>Grade : B");
//     document.write("<br/>Remarks : You need to improve");
// }

// if (percentage < 60) {
//     document.write("<br/>Grade : Fail");
//     document.write("<br/>Remarks : Sorry");
// }


// // // Question No 7

// var hiddenNum = 7;
// var num = +prompt("Enter a number to guess secret number ranging from 1 to 10:");

// if (num === hiddenNum) {
//     document.write("Bingo! Correct answer");
// }
// else if (num === ++hiddenNum) {
//     document.write("Close enough to the correct answer");
// }
// else {
//     document.write("Sorry! try next time");
// }

// // Question No 8

// var num = +prompt("Enter a number to check whether it is divisible by 3 or Not");
// if (num % 3 == 0) {

//     document.write("Yes! It is divisible by 3");
// }
// else{
//     document.write("It is not divisible by 3");
// }




// // Question No 9 (incomplete)

// var num = +prompt("Enter a number to check whether it is even or odd");
// if (num % 2 === 0){

//     document.write("Even number")
// }
// else if (num % 2 === 1) {

//     document.write("Odd number")
// }
// else{
//     document.write("Invalid data")
// }


// // Question No 10


// var temp = +prompt("Enter a temperature:");
// if (temp > 40) {
//     document.write("<br/>It is too hot outside.");
// }

// else if (temp > 30 && temp < 40) {
//     document.write("<br/>The Weather today is Normal.");
// }

// else if (temp > 20 && temp < 30) {
//     document.write("<br/>Today Weather is cool.");
// }

// else if (temp > 10 && temp < 20) {
//     document.write("<br/>“OMG! Today weather is so Cool.”");
// }
// else{
//     document.write("<br/>“Everything is freezed there”");
// }


// // Question No 11

// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var optSymbol = prompt("Enter symbol for arithematic operation:");

// if (optSymbol == "+") {
//     var result = num1 + num2;
//     document.write(num1 + " + " + num2 + " = " + result)
// }

// else if (optSymbol == "-") {
//     var result = num1 - num2;
//     document.write(num1 + " - " + num2 + " = " + result)
// }

// else if (optSymbol == "*") {
//     var result = num1 * num2;
//     document.write(num1 + " * " + num2 + " = " + result)
// }

// else if (optSymbol == "/") {
//     var result = num1 / num2;
//     document.write(num1 + " / " + num2 + " = " + result)
// }

// else if (optSymbol == "%") {
//     var result = num1 % num2;
//     document.write(num1 + " % " + num2 + " = " + result)
// }
// else{
//     document.write("Invalid data")
// }



