$(document).ready(function(){

    $("#comparisons").click(function(){

        output();


    })

});

var input= function(a){

    var userInput = $(a).val();

    return userInput;

}

var compare = function(a, b){

    return input(a) === input(b);

}

var output= function(a, b){

    $("#output").text(conditional(input(a), input(b)));

}

//When checking for equality there are TWO options. == or ===. Keep in mind that ' = ' is reserved for signing values to variables. "==" is a LOOSE equality. Data types are not respected. Which means, a String 1 and the number 1 are equal. "===" is a strict equality which maintains daatatypes.

//A conditional is an if/then statement base on a boolean expression.

var conditional = function(a, b){

    if(a >b)
    return"A is bigger";

}
