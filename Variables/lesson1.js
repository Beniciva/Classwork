/*
SCOPE

GLOBAL VARIABLES - the variables can be used throughout the entire document/script

LOCAL VARIABLES - the variables can only be used in the section is was defined


*/
//active

//********** NOT NEEDED FOR HTML TRIGGERING ************* */
 $(document).ready(function(){

   $("#button").click(function(){

      showInfo();

   })
   
});
//******************************************************** */

//DEFINITIONS
var userName;


function getInfo(){
   userName = $("#userName").val();
}

function showInfo(){
   getInfo();
   var message = "Hello " + userName + ", glad to meet you!";
   $("#output").text(message).show().animate({'top' : '0px', "opacity": "1"}, 'slow');
   
}