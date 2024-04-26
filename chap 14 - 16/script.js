// // Question No 1

// var stdNamesliteral = [];

// // Question No 2

// var stdNamesobject = new Array();

// // Question No 3

// var newStringArray = ["bike", "car", "truck"];

// // Question No 4

// var newNumberArray = [1, 2, 3, 4, 5];
// // console.log(newNumberArray);

// // Question No 5

// var booleanArray = [true, false, true, false];

// console.log(booleanArray);


// // Question No 6

// var mixedArray = ["apple", 123, true, null, undefined];

// // Question No 7

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h2>Qualifications:</h2>");

// document.write("<ol>");
// for (let i = 0; i < qualifications.length; i++) {
//     document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ol>");


// // Question No 8

// // Student names array
// var studentNames = ["Ali", "Hassan", "Bilal"];

// // Scores array
// var scores = [420, 380, 450]; // Assuming scores out of 500 for each student

// // calculating percentage

// var aliPer = scores[0] / 500 * 100;
// var hassanPer = scores[1] / 500 * 100;
// var bilalPer = scores[2] / 500 * 100;

// // displaying data on console.log

// console.log("Score of " + studentNames[0] + " is " + scores[0] + ". Percentage: " + aliPer + " %");
// console.log("Score of " + studentNames[1] + " is " + scores[1] + ". Percentage: " + hassanPer + " %");
// console.log("Score of " + studentNames[2] + " is " + scores[2] + ". Percentage: " + bilalPer + " %");



// // Question No 9

// var colorNames = ["red", "green", "yellow"];

// document.write(colorNames);

// // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

// add1st = prompt("Enter the color name you want to add at the start of list")

// colorNames.unshift(add1st);

// document.write("<br/> after addition of color at start of array <br/>" + colorNames);

// // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

// add2nd = prompt("Enter the color name you want to add at the end of list")

// colorNames.push(add2nd);

// document.write("<br/> after addition of color at end of array <br/>" + colorNames);

// // c. Add two more color to the beginning of the array. Display the updated array in your browser

// add3rd = prompt("Enter one more colors name one by one you want to add at the start of list")
// add4th = prompt("Enter one more colors name one by one you want to add at the start of list")

// colorNames.unshift(add3rd, add4th);

// document.write("<br/> after addition of two more color at start of array <br/>" + colorNames);

// // d. Delete the first color in the array. Display the updated array in your browser

// colorNames.shift();

// document.write("<br/> after deletion of first color at start of array <br/>" + colorNames);

// // e. Delete the last color in the array. Display the updated array in your browser

// colorNames.pop();

// document.write("<br/> after deletion of last color at the end of array <br/>" + colorNames);

// // f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser

// var indPos1 = +prompt("Enter the index number of color array you want to add color");
// add5th = prompt("Enter color name you want to add at index position you have entered earlier");

// colorNames.splice(indPos1, 0, add5th);
// document.write("<br/> after addition of your color at desired index position in color array <br/>" + colorNames);


// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your browser

// var indPos2 = +prompt("Enter the index number of color array you want to delete");
// var pos = +prompt("How many colors you want to delete");

// colorNames.splice(indPos2, pos);
// document.write("<br/> after deletion of color from desired index position in color array <br/>" + colorNames);


// // Question No 10

// // Array to store student scores
// var scores = [320, 230, 480, 120];
// console.log("Scores of students: " + scores);


// // Sorting the scores array in ascending order using sort() method
// scores.sort(function (a, b) {
//     return a - b;
// });

// // Displaying the sorted scores
// console.log("Ordered scores of students: " + scores);


// // Question No 11

// // Initialize an array with city names
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// console.log("Cities list:");
// console.log(cities);

// // Initialize an empty array to store selected cities
// let selectedCities = [];

// // Copy 3 elements from cities array to selectedCities array
// selectedCities = cities.slice(2, 4);

// // Display the selected cities
// console.log("Selected cities list:");
// console.log(selectedCities);


// // Question No 12

// // Array with strings
// var arr = ["This", "is", "my", "cat"];
// console.log("Array:");
// console.log(arr);


// // Joining array elements into a single string with spaces in between
// var singleString = arr.join(" ");

// // Display the single string
// console.log("String:");
// console.log(singleString);


// // Question No 13

// var fifoArr = [];
// fifoArr.push("keyboard");
// fifoArr.push("mouse");
// fifoArr.push("printer");
// fifoArr.push("monitor");

// console.log("Devices:");
// console.log(fifoArr);

// console.log("out:");
// console.log(fifoArr[0]);

// console.log("out:");
// console.log(fifoArr[1]);

// console.log("out:");
// console.log(fifoArr[2]);

// console.log("out:");
// console.log(fifoArr[3]);



// // Question No 14


// var fifoArr = [];
// fifoArr.push("keyboard");
// fifoArr.push("mouse");
// fifoArr.push("printer");
// fifoArr.push("monitor");

// console.log("Devices:");
// console.log(fifoArr);

// console.log("out:");
// console.log(fifoArr[3]);

// console.log("out:");
// console.log(fifoArr[2]);

// console.log("out:");
// console.log(fifoArr[1]);

// console.log("out:");
// console.log(fifoArr[0]);




// // Question No 15


// var phoneManuArr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write('<select>');
// for (var i = 0; i < phoneManuArr.length; i++) {
//     document.write("<option value=" + phoneManuArr[i] + '">' + phoneManuArr[i] + '</option>');
// }
// document.write('</select>');