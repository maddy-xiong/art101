// index.js - Lab 8
// Author: Maddz Xiong
// Date: 05/06/24

// Constants
const newArray = [12, 5, 9, 10, 423, 982];

// Functions
function calculateX(x) {
  return x + 4;
  // returns the variable + 4
}

// Test Function
console.log("My Array: " + newArray);
console.log("Result: " + calculateX(newArray[3]));
console.log("Result: " + calculateX(newArray[1]));

let result = newArray.map(calculateX);
//should return 16, 9, 13, 14, 427, 986
console.log("Calculated array values: " + result);

result = newArray.map(function(x) {
  return x - 18;
})
//should return -6, -13, -9, -8, 405, 964
console.log("New array values: " + result);

//TASK X
let mapResult = "Your map results here: " + result;
$("#output").html(mapResult);