"use strict";
const displayBox = document.getElementById("displayBox");
const decrementBtn = document.getElementById("decrementBtn");
const even_odd = document.getElementById("even_odd");
var counter = 0;
//***************************** Increment Functio   ***************************** */
function increment() {
    counter = counter + 1;
    displayBox.innerText = counter.toString(); //convert counter data type from num to string
    decrementBtn.disabled = false;
    // for even & Odd number 
    if (counter % 2 == 0) {
        displayBox.style.color = "orange";
        even_odd.innerText = "EVEN";
    }
    else {
        displayBox.style.color = "brown";
        even_odd.innerText = "ODD";
    }
}
//*****************************   Decrement Functio   ***************************** */
function decrement() {
    //console.log(counter);
    if (counter < 0) {
        decrementBtn.disabled = true;
        // alert("Initally Counter is at 0");
    }
    else if (counter == 0) {
        displayBox.style.color = "black";
        even_odd.innerText = "0";
        decrementBtn.disabled = true;
    }
    else if (counter > 0) {
        counter = counter - 1;
        displayBox.innerText = counter.toString();
        // for even & Odd number 
        if (counter % 2 == 0) {
            displayBox.style.color = "orange";
            even_odd.innerText = "EVEN";
        }
        else {
            displayBox.style.color = "brown";
            even_odd.innerText = "ODD";
        }
    }
}
