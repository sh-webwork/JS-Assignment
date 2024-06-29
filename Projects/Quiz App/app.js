var startQuiz = document.getElementById("startQuiz")
var myContainer = document.getElementById("myContainer")
var username = document.getElementById("username")
var email = document.getElementById("email")

function formLoginHandler() {

    var password = document.getElementById("password")
    var confirmPassword = document.getElementById("confirm-password")
    // console.log("myContainer", myContainer.className)


    if (password.value == confirmPassword.value) {

        myContainer.className = "hide"
        startQuiz.className = "show"
        localStorage.setItem("username", username.value)
        localStorage.setItem("email", email.value)
        // console.log("local storage data: ", localStorage.value)
        return
    }
    else {

        alert("password mismatched...")
    }



}


function backHandler() {

    myContainer.className = "show"
    startQuiz.className = "hide"
}

























// // console.log("Hello World!!");
// var formContainer = document.getElementById("formContainer")
// var startContainer = document.getElementById("startContainer")


// function formSubmitHandler() {
//     var name = document.getElementById("name")
//     var email = document.getElementById("email")
//     var nameError = document.getElementById("nameError")
//     var emailError = document.getElementById("emailError")

//     // localStorage.setItem("name", name.value)  //set item
//     // console.log(localStorage.getItem("name")) //get item
//     // localStorage.removeItem("name") // remove item
//     nameError.className = "hide"
//     emailError.className = "hide"
//     if (!name.value) {
//         nameError.className = "show"
//         nameError.style.color = "red"
//         return
//     }

//     if (!email.value) {
//         emailError.className = "show"
//         emailError.style.color = "red"
//         return
//     }

//     localStorage.setItem("name", name.value)
//     localStorage.setItem("email", email.value)
//     formContainer.className = "hide"
//     startContainer.className = "show"
//     // console.log("form submitted!")

// }