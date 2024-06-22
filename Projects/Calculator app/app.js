
// calc

// console.log(includeOpt, "includeOpt")

function includeValue(num) {

    var inputArea = document.getElementById("inputArea")
    inputArea.value += num

}

function includeOpt() {

    var inputArea = document.getElementById("inputArea")
    inputArea.value = str

}


function result() {

    var inputArea = document.getElementById("inputArea")
    inputArea.value = eval(inputArea.value)

}

function allClear() {

    var inputArea = document.getElementById("inputArea")
    inputArea.value = ""
}

function sglClr() {

    var inputArea = document.getElementById("inputArea")
    inputArea.value = inputArea.value.slice(0,-1)
}