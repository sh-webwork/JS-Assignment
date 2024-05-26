function addEvent() {

    var todoList = document.getElementById("todoList")
    var input = document.getElementById("input")

    if (input.value.length < 3) {

        alert("Enter correct input!")
        return
    }

    var li = document.createElement("li")
    li.innerHTML = input.value

    console.log("li", li)

    var editBtn = document.createElement("button")
    editBtn.innerHTML = "Edit"

    var deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.setAttribute("onClick", "delTodo(this)")
    deleteBtn.onClick = "delTodo()"
    console.log("deleteBtn", deleteBtn)
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)
    todoList.appendChild(li)
    input.value = ""
}



function delTodo(sameEle) {

    sameEle.parentNode.remove()

}


function delAll() {

    var todoList = document.getElementById("todoList")
    console.log(todoList.innerHTML)
    todoList.innerHTML = ""
}




