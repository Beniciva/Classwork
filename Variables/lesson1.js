/*
SCOPE

GLOBAL VARIABLES - the variables can be used throughout the entire document/script

LOCAL VARIABLES - the variables can only be used in the section is was defined


*/
$(document).ready(function(){

    getInfo();
    showInfo();

});


var userInput;


function getInfo(){
    userInput = "Hi"
    var userImput2 = 'Hi Again';
}

function showInfo(){

    alert(userImput);
    alert(userImput2);
}