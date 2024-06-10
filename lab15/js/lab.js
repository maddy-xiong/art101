// index.js - Lab 15
// Author: Maddz Xiong
// Date: 06/06/24

// Constants
const URL = "https://api.chucknorris.io/jokes/random";

const ajaxObj = {
    url: URL,
    //data: {},
    type: "GET",
    dataType: "json",
    success: ajaxSuccess,
    error: ajaxFail
}

// Functions
function ajaxSuccess(data) {
    console.log("Data: ", data);
    const chuck = data.value;
    $("#output").html(chuck);
}

function ajaxFail(request, error) {
    console.log("Oops: ", request, error);
}

$("#activate").click(function(){
    $.ajax(ajaxObj);
})
