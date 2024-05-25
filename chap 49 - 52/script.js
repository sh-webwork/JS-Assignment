// Question No 1 Create a signup form and display form data in your web 
// page on submission.


// document.getElementById('signupForm').addEventListener('submit', function(event) {
//     event.preventDefault(); 
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const formDataDiv = document.getElementById('formData');
//     formDataDiv.innerHTML = `
//     <h2>Form Data</h2>
//     <p><strong>Name:</strong> ${name}</p>
//     <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Password:</strong> ${password}</p>
//     `;
// });


// Question No 2 Suppose in your webpage there is content area in which 
// you have entered your item details, but user can only see 
// some details on first look. When user clicks on “Read 
// more” button, full detail of that particular item will be 
// displayed.


// function toggleDetails(button) {
//     var details = button.previousElementSibling;
//     console.log("details", details)
//     if (details.style.display === "none" || details.style.display === "") {
//       details.style.display = "block";
//       button.innerText = "Read less";
//     } else {
//       details.style.display = "none";
//       button.innerText = "Read more";
//     }
//   }




// Question No 2 In previous assignment you have created a tabular data 
// using javascript. Let’s modify that. Create a form which 
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and 
// an edit button. On click on delete button entire row should 
// be deleted. On click on edit button, a hidden form will 
// appear with the values of that row


// const studentForm = document.getElementById('studentForm');
// const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
// const editFormContainer = document.getElementById('editFormContainer');
// const editForm = document.getElementById('editForm');

// studentForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const grade = document.getElementById('grade').value;
//     addStudent(name, age, grade);
//     studentForm.reset();
// });

// function addStudent(name, age, grade) {
//     const row = studentTable.insertRow();
//     const cellName = row.insertCell(0);
//     const cellAge = row.insertCell(1);
//     const cellGrade = row.insertCell(2);
//     const cellActions = row.insertCell(3);

//     cellName.textContent = name;
//     cellAge.textContent = age;
//     cellGrade.textContent = grade;

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.onclick = function () {
//         deleteStudent(row);
//     };
//     const editButton = document.createElement('button');
//     editButton.textContent = 'Edit';
//     editButton.onclick = function () {
//         editStudent(row, name, age, grade);
//     };

//     cellActions.appendChild(editButton);
//     cellActions.appendChild(deleteButton);
// }

// function deleteStudent(row) {
//     const rowIndex = row.rowIndex;
//     studentTable.deleteRow(rowIndex - 1);
// }

// function editStudent(row, name, age, grade) {
//     editFormContainer.style.display = 'block';
//     document.getElementById('editIndex').value = row.rowIndex - 1;
//     document.getElementById('editName').value = name;
//     document.getElementById('editAge').value = age;
//     document.getElementById('editGrade').value = grade;
// }

// editForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const index = document.getElementById('editIndex').value;
//     const name = document.getElementById('editName').value;
//     const age = document.getElementById('editAge').value;
//     const grade = document.getElementById('editGrade').value;

//     const row = studentTable.rows[index];
//     row.cells[0].textContent = name;
//     row.cells[1].textContent = age;
//     row.cells[2].textContent = grade;

//     editFormContainer.style.display = 'none';
//     editForm.reset();
// });











