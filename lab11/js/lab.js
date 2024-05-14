// index.js - Lab 11
// Author: Maddz Xiong
// Date: 05/11/24

// Constants

// Functions

function sortString(inputString){
  return inputString.split('').sort().join('');
}

$("#submit-name").click(function(){
  console.log("click");
  const userName = $("#user-name").val();
  const sortedUser = sortString(userName);
  $("#output").html("<div id='text'><p>" + sortedUser + "</p></div>");
});

// TASK X
$("#submit-age").click(function(){
  console.log("click");
  const userAge = $("#user-age").val();
  $("#text").append("<p>" + userAge + "</p>");
});

$("#color-change").click(function(){
  console.log("click");
  $("#text").toggleClass("new-color");
});