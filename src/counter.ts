const displayBox = document.getElementById("displayBox") as HTMLButtonElement;
const decrementBtn = document.getElementById("decrementBtn") as HTMLButtonElement;
const even_odd = document.getElementById("even_odd") as HTMLHeadingElement;
var counter:number = 0; 

//***************************** Increment Functio   ***************************** */
function increment() {
  counter = counter + 1;
  displayBox.innerText = counter.toString(); //convert counter data type from num to string
  decrementBtn.disabled = false;

// for even & Odd number 
if (counter % 2 == 0) {
    displayBox.style.color = "orange";
    even_odd.innerText = "EVEN";
  } else {
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

  else if (counter == 0){
    displayBox.style.color = "black";
    even_odd.innerText = "0";
    decrementBtn.disabled = true;
  }

  else if (counter > 0)
  {
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


// Dynamic-Increment-Decrement-App-with-TypeScript
// "This TypeScript counter app utilizes HTML5/CSS3 for structure and TypeScript 
// for dynamic DOM manipulation and styling. It features real-time increment/decrement
//  functionality with UI updates reflecting the counter's parity (even/odd), ensuring an engaging and responsive user experience."
