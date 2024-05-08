// index.js - Lab 9
// Author: Maddz xiong
// Date: 05/07/24

// Constants

// Adding buttons to sections
$("#challenge").append("<button id='button-challenge'>Click Me</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

//Functions
function changeClass(){
  console.log("Click");
  $("#challenge").toggleClass("special");
}

// Event Listeners
$("#button-challenge").click(changeClass);
$("#button-problems").click(function(){
  $("#problems").toggleClass("special");
});
$("#button-results").click(function(){
  $("#results").toggleClass("minor-section");
});