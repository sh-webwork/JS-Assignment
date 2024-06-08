var hrHeading = document.getElementById("hrHeading")
var minHeading = document.getElementById("minHeading")
var secHeading = document.getElementById("secHeading")
var msecHeading = document.getElementById("msecHeading")
var interval;

var msec = 0
var sec = 0
var min = 0
var hr = 0
// var flag = true


function start() {
    msec++
    msecHeading.innerHTML = msec
    // if(flag == true){

    //     flag=false
    //     document.getElementById("startBtn").setAttribute("disabled")
    // }

    if (msec === 100) {
        sec++
        secHeading.innerHTML = sec
        msec = 0


    } else if (sec > 59) {
        min++
        minHeading.innerHTML = min
        sec = 0
    } else if (min > 59) {
        hr++
        minHeading.innerHTML = hr
        min = 0
    }


}



function startWatch() {
    clearInterval(interval)
    interval = setInterval(start, 10)
}


function resetWatch() {
    clearInterval(interval)
    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    msecHeading.innerHTML = "00"
    hr = 0
    min = 0
    sec = 0
    msec = 0
}




function stopWatch() {
    clearInterval(interval)
}