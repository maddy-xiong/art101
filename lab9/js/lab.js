// index.js - Lab 9
// Author: Maddz xiong
// Date: 05/07/24

// Constants

/* TASK 2 Adding buttons to sections
$("#challenge").append("<button id='button-challenge'>Click Me</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");
*/

// TASK X
$(".minor-section").append("<button id='special-button'>Click Me</button>");

// Functions
function changeClass(){
  console.log("Click");
  $("#challenge").toggleClass("special");
}

// Event Listeners
/* TASK 2
$("#button-challenge").click(changeClass);
$("#button-problems").click(function(){
  $("#problems").toggleClass("special");
});
$("#button-results").click(function(){
  $("#results").toggleClass("minor-section");
});
*/

// TASK X
$(".minor-section button").click(function(){
  $(this).parent().toggleClass("special-section");
});