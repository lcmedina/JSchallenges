// In this challenge, you're going to build a generator function that returns the next stop in a list of stops along the Metro North Railroad in New York. Each time a button is clicked, the next stop in the journey should be returned until we reach Grand Central Station in New York City. The train stops are Poughkeepsie, Newburgh, Peekskill, Yonkers, Bronx, and Grand Central. You should use a generator function to yield these values. Console log each stop and once we reach the final stop, Grand Central, console log "We made it!" Once we reach our final stop, the next stop button should be disabled.


let button = document.getElementById("next")
let text = document.getElementById("stop")

function* train(){
    yield text.innerText = "Poughkeepsie";
    yield text.innerText = "Newburgh";
    yield text.innerText = "Peekskill";
    yield text.innerText = "Yonkers";
    yield text.innerText = "Bronx";
    return (text.innerText = "We made it to Grand Central!") && (button.setAttribute("disabled", true));
}
let func = train()
button.addEventListener("click", () => {func.next()})