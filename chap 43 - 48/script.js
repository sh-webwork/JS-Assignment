// Question No 1 Show an alert box on click on a link.


// function showMore() {

//     alert("This is an alert...")
// }


// Question No 2 Display some Mobile images in browser. On click on an 
// image Show the message in alert to user.


// var area = document.getElementById("mainArea")

// console.log("area", area)

// function mobileAlert() {

//     area.style.background = "lightGray"
//     alert("Thanks for purchasing a phone from us.")

// }








// Question No 3 Display 10 student records in table and each row should contain a delete 
// button. If you click on a button to delete a record, entire row should be 
// deleted.


// var students = [
//     { id: 1, name: 'John Doe', age: 15, grade: '10th' },
//     { id: 2, name: 'Jane Smith', age: 16, grade: '11th' },
//     { id: 3, name: 'Alice Johnson', age: 14, grade: '9th' },
//     { id: 4, name: 'Robert Brown', age: 17, grade: '12th' },
//     { id: 5, name: 'Emily Davis', age: 15, grade: '10th' },
//     { id: 6, name: 'Michael Wilson', age: 16, grade: '11th' },
//     { id: 7, name: 'Sarah Miller', age: 14, grade: '9th' },
//     { id: 8, name: 'David Anderson', age: 17, grade: '12th' },
//     { id: 9, name: 'Laura Thomas', age: 15, grade: '10th' },
//     { id: 10, name: 'Daniel Taylor', age: 16, grade: '11th' }
// ];

// function populateTable() {
//     var tableBody = document.getElementById('studentTable');

//     students.forEach(student => {
//         var row = document.createElement('tr');

//         row.innerHTML = `
//         <td>${student.id}</td>
//         <td>${student.name}</td>
//         <td>${student.age}</td>
//         <td>${student.grade}</td>
//         <td><button onclick="deleteRow(this)">Delete</button></td>
//       `;

//         tableBody.appendChild(row);
//     });
// }

// function deleteRow(button) {
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }

// window.onload = populateTable;




// Question No 4 Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.


// function onMouseOver() {

//     var image = document.getElementById("myImage")
//     image.src = "file:///D:/Shujaat%20Data/SMIT%20Course%20Data/JavaScript/JS%20Assignment/chap%2043%20-%2048/mobile2.jpeg"
//     console.log("image", image.src)
// }

// function onMouseOut() {

//     var image = document.getElementById("myImage")
//     image.src = "file:///D:/Shujaat%20Data/SMIT%20Course%20Data/JavaScript/JS%20Assignment/chap%2043%20-%2048/mobile1.jpeg"
//     console.log("image", image.src)

// }







// Question No 5 Show a counter in browser. Counter should increase on click on increase 
// button and decrease on click on decrease button. And show updated counter 
// value in browser


// var counter = 0;

// function updateCounter() {
//     document.getElementById('counter').innerText = counter;
// }

// function increaseCounter() {
//     counter++;
//     updateCounter();
// }

// function decreaseCounter() {
//     counter--;
//     updateCounter();
// }










