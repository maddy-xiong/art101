// index.js - Lab 11
// Author: Maddz Xiong
// Date: 05/11/24

// Constants

// Functions

function sortString(inputString){
  return inputString.split('').sort().join('');
}

$("#submit").click(function(){
  console.log("click");
  const userName = $("#user-name").val();
  const sortedUser = sortString(userName);
  $("#output").html("<div class='text'><p>" + sortedUser + "</p></div>");
});