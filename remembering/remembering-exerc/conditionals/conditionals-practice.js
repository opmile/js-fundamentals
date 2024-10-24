
/*
if (condition) {
    // Code to run if condition is true
  } else {
    // Code to run if condition is false (optional)
  }
*/

let number = 50; 

if (number < 100) {
       if (number < 50) {
        console.log("Number is less than 50")
        if (number < 25) {
            console.log("Number is less than 25")
            if (number > 20) {
                console.log("Number is greater than 20")
            } 
        }
        if (number > 25) {
            console.log("Number is less than 25")
            if (number > 5) {
                console.log("Number is greater than 5")
            } else if (number > 10) {
                console.log("Number is greater than 10")
            } else if (number > 15) {
                console.log("Number is greater than 15")
            } else if (number > 20) {
                console.log("Number is greater than 20")
            }
        }
    }
    if (number >= 50) {
        console.log("Number is greater than 50")
        if (number >= 5) {
            console.log("Number is greater than 25")
            if (number > 5) {
                console.log("Number is greater than 5")
            } else if (number > 10) {
                console.log("Number is greater than 10")
            } else if (number > 15) {
                console.log("Number is greater than 15")
            } else if (number > 20) {
                console.log("Number is greater than 20")
            }
        }
    }
}
