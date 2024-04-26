// // declaring 3 variables in one statement
// var x = 5, y = 10, z = "Hello";

// // 5 legal variable names in JS

// var name, _name, $name, name_variable, name$;

// // 5 illegal variable names in JS

// // var @name, 34Product, user@Name, Pakistan@1947, #JavaScript#;


// // // Select the heading element
// // let headingElement = document.getElementById("heading");

// // // Set the text content of the heading
// // headingElement.textContent = "Rules for naming JS variables";

// document.write("Variable names can only contain, number, $,_." + " For example $my_1stVariable <br/>");
// document.write("Variables must begin with a letter, $ or _ . For example $name, _name or name <br/>");
// document.write("Variable names are case sensitive <br/>");
// document.write("Variable names should not be JS keywords");


// // adding two numbers

// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var sum_result = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum_result);

// // subtracting first number from second number

// var sub_result = num1 - num2;
// document.write("<br/> Sub of " + num1 + " and " + num2 + " is " + sub_result);

// // multiplication of first number to second number

// var mul_result = num1 * num2;
// document.write("<br/> Multiplication of " + num1 + " and " + num2 + " is " + mul_result);

// // division of first number to second number

// var div_result = num1 / num2;
// document.write("<br/> Division of " + num1 + " and " + num2 + " is " + div_result);

// // modulus of first number to second number

// var mod_result = num1 % num2;
// document.write("<br/> Modulus of " + num1 + " and " + num2 + " is " + mod_result);

// // a. Declare a variable
// var variable1;

// // Show the value of variable in your browser like “Value after variable declaration is: ??

// document.write("<br/><br/><br/> Value after variable declaration is ??");

// // Initialize the variable with some number.


// variable1 = 10;


// // Show the value of variable in your browser like “Initial value: 5”

// document.write("<br/> Initial value : " + variable1);

// // Increment the variable

// document.write("<br/> Value after increment is : " + ++variable1);


// // Add 7 to the variable.

// var add_result = 7 + variable1;

// // Show the value of variable in your browser like “Value after addition is: 13”

// document.write("<br/> Value after addition is : " + add_result);


// // Decrement the variable

// document.write("<br/> Value after decrement is : " + --add_result);

// // Show the remainder after dividing the variable’s value by 3.

// var remainder_result = variable1 % 3;
// document.write("<br/> The remainder is : " + remainder_result);


// // Part 4

// var movieTicket_price = '600';
// var price_5Ticket = 5 * movieTicket_price;
// document.write("<br/><br/>The cost to buy 5 tickets to a movie is " + price_5Ticket + "PKR <br/><br/>");

// // Part 5

// // var tableDigit = +prompt("<br/><br/>Enter digit of your choice to run a table:");
// // tableDigit = 1 * tableDigit;




// function generateTable() {
//     // Get the input value
//     var number = document.getElementById('numberInput').value;
//     var table = '<h3>Table for ' + number + '</h3><table>';

//     // Generate the table rows and columns
//     for (var i = 1; i <= 10; i++) {
//         table += '<tr>';
//         table += '<td>' + number + ' &times; ' + i + '</td>';
//         table += '<td>' + (number * i) + '</td>';
//         table += '</tr>';
//     }

//     table += '</table>';

//     // Display the table in the tableContainer div
//     document.getElementById('tableContainer').innerHTML = table;
// }


// //   Part 6

// var temp_Celsius = +prompt("Enter temp in celsius:");
// var temp_Fahrenheit = +prompt("Enter temp in fahrenheit:");
// Fahrenheit = (temp_Celsius * 9 / 5) + 32;
// document.write(temp_Celsius + " C is " + Fahrenheit + " F <br/><br/>");
// Celsius = (temp_Fahrenheit - 32) * 5 / 9;
// document.write(temp_Fahrenheit + " F is " + Celsius + " C <br/><br/>");


// // Part 7

// // Shopping cart


// // // Select the heading element
// // let headingElement = document.getElementById("heading1");

// // // Set the text content of the heading
// // headingElement.textContent = "Shopping Cart";

// var item1 = +prompt("Enter price of item 1:");
// var item2 = +prompt("Enter price of item 2:");
// var item1Qty = +prompt("Enter order quantity of item 1");
// var item2Qty = +prompt("Enter order quantity of item 2");
// var shippingCharges = +prompt("Enter shipping charges:");
// var costResult = item1 * item1Qty + item2 * item2Qty + shippingCharges;
// document.write("<br/>Price of item 1 is : " + item1);
// document.write("<br/>Quantity of item 1 is : " + item1Qty);
// document.write("<br/>Price of item 2 is : " + item2);
// document.write("<br/>Quantity of item 2 is : " + item2Qty);
// document.write("<br/>Shipping charges : " + shippingCharges);
// document.write("<br/><br/>Total cost of your order is : " + costResult);


// // Part 8 (Mark sheet)


// var totalMarks = +prompt("Enter total marks : ");
// var obtainMarks = +prompt("Enter obtained marks : ");
// var percentage = obtainMarks * 100 / totalMarks;
// document.write("<br/>Total marks : " + totalMarks);
// document.write("<br/>Obtained marks : " + obtainMarks);
// document.write("<br/><br/>Percentage : " + percentage);


// // // Part 9 (Currency in PKR)


// var dollar = 10, riyal = 25;
// var xchange_to_PKR = dollar * 104.80 + riyal * 28;
// document.write("<br/>Total currency in PKR : " + xchange_to_PKR);



// // Part 10 (Arithematic calculation on stored number)

// var number = +prompt("Enter your number : ");
// var calculation = ((number + 5) * 10) / 2;
// document.write("<br/>After arithematic calculation your number is : " + calculation);




// // Part 11 (The age calculator)


// var currentYear = 2024;
// var birthYear = +prompt("Enter your birth year : ");
// var age1 = currentYear - birthYear;
// var age2 = currentYear - birthYear - 1;
// document.write("Current year is : " + currentYear);
// document.write("<br/>Birth year is : " + birthYear);
// document.write("<br/>They are either " + age1 + " or " + age2 + " years old.");



// // Part 12 (The Geometrizer)

// var rad = +prompt("Enter radius of circle : ");
// var circum = 2 * 3.142 * rad;
// var area = 3.142 * (rad * rad);
// document.write("<br/>Radius of circle is : " + rad);
// document.write("<br/>The circumference of circle is : " + circum);
// document.write("<br/>The area of circle is : " + area);


// // Part 13 (The life time supply calculator)


// var favSnack = prompt("Enter your favorite snack : ");
// var currentAge = +prompt("Enter your current age : ");
// var maxAge = +prompt("Enter maximum age : ");
// var estAmount = +prompt("Enter estimated amount per day : ");
// var result = (maxAge - currentAge) * estAmount;
// document.write("<br/>Favorite snack is : " + favSnack);
// document.write("<br/>Current age is : " + currentAge);
// document.write("<br/>Maximum age is : " + maxAge);
// document.write("<br/>Amount of snacks per day : " + estAmount);
// document.write("<br/><br/>You will need " + result + " " + favSnack + " to last you until the ripe old age of " + maxAge);