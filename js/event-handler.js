/*
    types of click event/ JS event
    onclick
    onchange
    onmouseover
    onmouseout
    onkeydown
    onload

*/

function myClick() {
    document.getElementById("demo").innerHTML = "Thank you";
}



// on change function
function mychange() {
    document.getElementById("demo").innerHTML = "You changed the file";
}

// onmouseover function that changes the html appearance.
function myMouseOver() {
    document.getElementById("demo").innerHTML = "Mouse moved over";
}

// my mouseout
function myMouseOut() {
    document.getElementById("demo").innerHTML = "You moved the mouse out.";
}


// on keydown function
function myKeyDown() {
    document.getElementById("demo").innerHTNL = "You clicked down";
}


// function onload
function myLoad() {
    document.getElementById("demo").innerHTML = "Load Page";
}