$(document).ready(function(){

    $("#comparisons").click(function(){

        output("#input1"), ("#input2");
        

    })

    $("#conditional").click(function(){

        output(conditional(input("#input1"), input("#input2")));
        output(evenOrOdd(input("#input1")));
        output(canDrive());
        output(withLaw());
    }
});

var input= function(a){

    var userInput = $(a).val();

    return userInput;

}

var compare = function(a, b){

    return input(a) === input(b);

}

var output= function(a, b){

    $("#output").text(a);

}

//When checking for equality there are TWO options. == or ===. Keep in mind that ' = ' is reserved for signing values to variables. "==" is a LOOSE equality. Data types are not respected. Which means, a String 1 and the number 1 are equal. "===" is a strict equality which maintains daatatypes.

//A conditional is an if/then statement base on a boolean expression.

var conditional = function(a, b){

    if(a > b)
        return "A is bigger";
    if(b > a)
        return "B is bigger";
    if(b == a)
        return "They are the same";

   
}

var evenOrOdd = function(a){

    if(a%2===0){
        return (a + " is even");
    }
    else
        return (a + " is odd");
}

//Compoud boolean experssions use AND (&&), OR (||), Nor to make ven deeper logical conunctions. 

//If you are 16 and have a license, you can legally drive.

var  canDrive = function(){

    var age = parseInt(input("#input1"));
    var license = input("#input2")

    if(age >= 16 && license == "yes"){
        return "You can drive!"
    }
    else 
        return "You SHOULD not drive!"
}

var withLaw = function(){

    var ap = (input("#input1"));
    var cs3 = (input("#input2"));

    if(ap === 'yes' || cs3 === 'yes'){
        return "You will be in Law's class"
    }
    else   
        return "You will NOT be in Law's class."
}