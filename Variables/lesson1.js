/*
SCOPE

GLOBAL VARIABLES - the variables can be used throughout the entire document/script

LOCAL VARIABLES - the variables can only be used in the section is was defined


*/
//active
// $(document).ready(function(){

//     getInfo();
//     showInfo();

// });
//DEFINITIONS
var userName;


function getInfo(){
   userName = $("#userName").val();
}

function showInfo(){
   getInfo();
   var message = "Hello " + userName + ", glad to meet you!";

   $("#output").text(message);
}