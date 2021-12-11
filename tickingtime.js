//  In this challenge, you'll create a ticking clock in the document body. The index.html file contains a div with an ID of clock. Using callback functions and DOM manipulation, output a ticking digital clock which displays the current hours, minutes, and seconds

//grab the elements to work with them
let clock = document.getElementById("clock");
let time = document.createElement("h1")

const getTime = () => {
    //get all the elements for time.
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    //display the time
    time.innerText = `${hours}:${minutes}:${seconds}`
    clock.appendChild(time)
    //run the function every second to refresh
    setTimeout(() => {
        getTime()
}, 1000);
}  

//call the function
 getTime();