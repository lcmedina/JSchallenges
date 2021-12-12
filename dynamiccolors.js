//  In this challenge, we'll use closures to create three buttons. Each button will represent a different color and we'll change the background color of the document body to the color value. Using a closure, create a function called change color that accepts a color value. When the button is clicked, the closure should be invoked and the body background color should be updated.


function changeColor(color){
    return function () {
        document.body.style.background = color;
    }
}

const red = changeColor("red")
const blue = changeColor("blue")
const yellow = changeColor("yellow")

document.getElementById("red").addEventListener("click", red)
document.getElementById("blue").addEventListener("click", blue)
document.getElementById("yellow").addEventListener("click", yellow)