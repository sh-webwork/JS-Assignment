// Question No 1 Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name:").toUpperCase();
// var lastName = prompt("Enter your last name:").toUpperCase();
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Welcome!");


// Question No 2 Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// var userFavMobile = prompt("Enter your favorite mobile phone model:").toUpperCase();

// document.write("Your favorite phone is: " + userFavMobile + "<br />");
// document.write("Length of string is: " + userFavMobile.length);




// Question No 3 Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.


// var word = "pakistani";
// document.write("String: " + word + "<br />");
// for (var i = 0; i <= word.length; i++) {

//     if (word[i] == "n") {
//         document.write("Index of 'n': " + [i]);
//     }
// }



// Question No 4 Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var word = "hello world";
// document.write("String: " + word + "<br />");
// var lastIndex= word.lastIndexOf('l');
// document.write("Last index of 'l': " + lastIndex);


// Question No 5 Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// document.write("String: " + word + "<br />");
// document.write("Character at index 3 is: " + word[3]);



// Question No 6 Repeat Q1 using string concat() method.

// already done with concat method





// Question No 7 Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";
// var modifiedWord = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br />");
// document.write("After replacement: " + modifiedWord);





// Question No 8 Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var modifiedMessage = message.replace("and", "&");

// document.write("Original message is: " + message + "<br />");
// document.write("After replacement: " + modifiedMessage);





// Question No 9 Write a program that converts a string “472” to a number 472. Display the values & types in your browser.


// var word = "472";
// var number = parseInt(word);
// document.write("value: " + word + "<br />");
// document.write("type: " + typeof word + "<br />");
// document.write("value: " + number + "<br />");
// document.write("type: " + typeof number + "<br />");



// Question No 10 Write a program that takes user input. Convert and show the input in capital letters.

// var userInput = prompt("Enter your word: ");
// var capitalLtr = userInput.toUpperCase();
// document.write("User input: " + userInput + "<br />");
// document.write("Upper case: " + capitalLtr + "<br />");




// Question No 11 Write a program that takes user input. Convert and show the input in title case.


// var userInput = prompt("Enter your word: ");
// var titleLtr = userInput[0].toUpperCase();
// document.write("User input: " + userInput + "<br />");
// document.write("Upper case: " + titleLtr + userInput.slice(1) + "<br />");






// Question No 12 Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36;
// var numString = num.toString();
// var stringWithoutDot = numString.replace(".", "");

// document.write("Numer: "+ num + "<br />");
// document.write("Result: "+ stringWithoutDot);



// Question No 13 write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .


// let username = prompt("Enter your username:");

// if (username.includes('@') || username.includes('.') || username.includes(',') || username.includes('!')) {
//     alert("Please enter a valid username without special symbols.");
// } else {
//     alert("Username stored successfully!");
//     console.log("Username:", username);
// }






// Question No 14 You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.


// var userInput = prompt("enter your item to search in list.").toLowerCase()
// var  A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var flag = false


// for (var i = 0; i < A.length; i++) {
//     if (A[i] == userInput) {
//         console.log(A[i]+ " is avaialble at index "+ [i]+ " in our bakery.")
//         flag = true
//         break
//     }
//     // console.log(A[i])
// }

// if (flag === false) {
//     console.log("We are sorry. " + userInput+ " is not available in our bakery");
// }



// Question No 15 Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// let isValidPassword = false;

// while (!isValidPassword) {
//     let password = prompt("Enter a password: ");

//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//     } else if (!isNaN(parseInt(password[0]))) {
//         alert("Password should not start with a number.");
//     } else {
//         let hasAlphabet = false;
//         let hasNumber = false;

//         for (let i = 0; i < password.length; i++) {
//             let charCode = password.charCodeAt(i);
//             if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//                 hasAlphabet = true;
//             } else if (charCode >= 48 && charCode <= 57) {
//                 hasNumber = true;
//             }
//         }

//         if (!hasAlphabet || !hasNumber) {
//             alert("Password must contain alphabets and numbers.");
//         } else {
//             isValidPassword = true;
//             alert("Password is valid!");
//         }
//     }
// }







// Question No 16 Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// (incomplete)


// var university = "University of Karachi";
// var universityArray = university.split(" ");
// var universityArray1 = universityArray.split(" ");

// document.write("<p>Array elements:</p>");
// document.write("<p>" + universityArray1 + "</p>");






// Question No 17 Write a program to display the last character of a user input.

// let userInput = prompt("Enter a string:");
// let lastCharacter = userInput[userInput.length - 1];
// console.log("User input:", userInput);
// console.log("Last character of input: ", lastCharacter);







// Question No 18 You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.


// var str = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// var searchStr = "the";
// var index = str.toLowerCase().indexOf(searchStr);

// while (index !== -1) {
//     count++;
//     index = str.toLowerCase().indexOf(searchStr, index + 1);
// }

// console.log("Number of occurrences of 'the':", count);