const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Function for calculating grades
const calculate = () => {

    // Getting input from user into height variable.
    let Computer = document.querySelector("#Computer").value;
    let Math = document.querySelector("#Math").value;
    let English = document.querySelector("#English").value;
    let Science = document.querySelector("#Science").value;
    let Filipino = document.querySelector("#Filipino").value;
    let grades = "";
    
    // Input is string so typecasting is necessary. */
    let totalgrades =
        parseFloat(Computer) +
        parseFloat(Math) +
        parseFloat(English) +
        parseFloat(Science) +
        parseFloat(Filipino);
    
    // Checking the condition for the providing the
    // grade to student based on percentage
    let percentage = (totalgrades / 500) * 100;
    if (percentage >= 92) {
        grades = "A";
    } else if (percentage >= 89 && percentage <= 91) {
        grades = "B";
    } else if (percentage >= 84 && percentage <= 88) { 
        grades = "C";
    } else if (percentage >= 80 && percentage <= 83) { 
        grades = "D";
    } else {
        grades = "E";
    }
    // Checking the values are empty if empty than
    // show please fill them
    if (Computer == "" || Math == ""
                || English == "" || Science == "" || Filipino == "") {
        document.querySelector("#showdata").innerHTML
            = "Please enter all the fields";
    } else {

        document.querySelector(".result h2").innerHTML = ` GWA: ${percentage}% <br> `
        document.querySelector(".result h1").innerHTML = `Grade Mark: ${grades}`;
  
    }
    };
    