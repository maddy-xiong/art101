// index.js - Lab 10
// Author: Maddz Xiong
// Date: 05/09/24

// Constants

// Functions

function generateConvo(){
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max-min)) + min;
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  return text.slice(randStart, randStart + randLen);
}

/* Button Listener
$("#make-convo").click(function(){
  const newText = generateConvo();
  $("#output").append("<div='text'><p>" + newText + "</p></div>");
})
*/

// TASK X 1 + 2
 
$("#make-convo").click(function(){
  const newText = generateConvo();
  const userName = window.prompt("What would you like to say?");
  $("#output").append("<div id='text'><p>" + userName + "</p></div>");
  $("#output").append("<div='text'><p>" + newText + "</p></div>");
})

/* TASK X 1
$("#make-convo").click(function(){
  const newText = generateConvo();
  const newResponse = generateConvo();
  $("#output").append("<div id='text'><p>" + newText + "</p></div>");
  $("#output").append("<div='text'><p>" + newResponse + "</p></div>");
})
*/