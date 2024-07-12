// alert("this is test alert on olx")



// 1
// 2
// 3 => login
// 4 => dependent login

// 1
// 2
// 3 => login ==> async
// 4 => 


// console.log(1)

// setTimeout(() => {
//     console.log(2)
// }, 3000)

// console.log(3)



// const myPromise = new Promise((resolve, reject) => {

//     const isCivic = true
//     if (isCivic) {
//         // resolve("Hunza trip done")
//         resolve({
//             mission : "successfully",
//             msg : "Hunza trip done"
//         })
//     } else {
//         reject("phophu agayi thi ghr")
//     }

// });

// myPromise
// .then((result) => {
//         console.log("result", result)
//     })
//     .catch((error) => {
//         console.log("error", error)
//     })



// fetch("https://api.escuelajs.co/api/v1/products")
    fetch("https://fakestoreapi.com/products")
    .then((data) => data.json())
    .then(result => {
        // console.log("result", result)
        renderUI(result)
    })
    .catch(error => {
        console.log("error", error)
    })


const renderUI = (items) => {
    const parentProduct = document.getElementById("parentProduct")
    for (var product of items) {
        // console.log(product, "product")
        parentProduct.innerHTML += ` <div class="col-lg-3">
            <div class="card " style="height:600px; width: 90%; margin-bottom:20px;">
                <img src=${product.image} style="width: 100%; height: 300px;"  class="card-img-top" alt="...">
                <div class="card-body">
                 <h5 class="card-title"> ${product.title} </h5>
                    <p class="card-text"> ${product.description.slice(0, 70)} </p>
                    <a href="#" class="btn btn-info">Order Now</a>
                </div>
            </div>
        </div>`

    }
}

// const loginRequest = async () => {
//     console.log()
//     console.log()
//     console.log()
//     await apicalling()
//     console.log()
// }




// Aysnc await

// Try Catch


// const fetchData = async () => {

    // try{
    //         adnjkasdkljasdklj
    // }catch(error){

    // }

//     try {
//         // console.log(11111111111)
//         const response = await fetch("https://fakestoreapi.com/products").then(res => res.json())
//         console.log(response)
//         // console.log(222222222)
//     } catch (error) {
//         console.log("error", error)
//     }


// }

// fetchData();