// index.js - Lab 13
// Author: Maddz Xiong
// Date: 05/30/24

// Constants

maxFactors = 4;

outputEl = document.getElementById("output");

// Functions

function getFactorObj() {
  let factorObj = {};
  for (let factor = 0; factor < maxFactors; factor++) {
      numId = "num" + factor;
      textId = "text" + factor;
      numValue = document.getElementById(numId).value;
      textValue = document.getElementById(textId).value;
      console.log(factor + ") num:", numValue, "text:", textValue)
      if (numValue && textValue) {
          factorObj[numValue] = textValue;
      }
  }
  return factorObj;
}

function fizzBuzzBoom(maxNums, factorObj) {
  for (let num = 0; num <= maxNums; num++) {
      let outputStr = "";
      for (let factor in factorObj) {
          if (num % factor == 0) {
              outputStr += factorObj[factor];
          }
      }
      if (outputStr) {
          outputStr = " - " + outputStr + "!";
      }
      outputToPage(num.toString() + outputStr)
  }
}

function outputToPage(str) {
  newEl = document.createElement("p");
  newEl.innerHTML = str;
  outputEl.appendChild(newEl);
}

function reportError(str) {
  outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
  let max = document.getElementById("max").value;
  if (! max) {
      reportError("You must provide a maximum");
      return;
  }
  let factorObj = getFactorObj();
  if (Object.keys(factorObj).length === 0) {
      reportError("You must provide at least one factor and text");
      return;
  }
  outputEl.innerHTML = "";
  fizzBuzzBoom(max, factorObj);
  outputEl.classList.add("cols");
})

/*
for (let i = 1; i <= 200; i++) {
  if (i % 105 == 0) {
    console.log("FizzBuzzBoom");
  } else if (i % 35 == 0) {
    console.log("BuzzBoom");
  } else if (i % 21 == 0) {
    console.log("FizzBoom");
  } else if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 7 == 0) {
    console.log("Boom");
  } else {
    console.log(i);
  }
}
*/
