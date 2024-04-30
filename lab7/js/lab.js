// index.js - Lab 7
// Author: Maddz Xiong
// Date: 04/30/24

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function stringSort() {
  const userName = window.prompt("What's your name?");
  console.log("User Input: " + userName);
  // Declares the variable that'll hold the str from the user's input.
  const array = userName.split('');
  console.log("New Array: " + array);
  //Turns the str into an array.
  const sortArray = array.sort();
  console.log("Sorted Array: " + sortArray);
  //Sorts the array.
  const newName = sortArray.join('');
  console.log("New Name: " + newName);
  //Converts the array back into a str.
  return newName;
  //returns the newly sorted str.
}

// Output
const sortedName = stringSort();
document.writeln("Here's your new name: " + sortedName + ".</br>");