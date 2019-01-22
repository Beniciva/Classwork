// THIS LESSON WILL DEMONSTRATE HOW MATH AND VARAIBLES SHOULD WORK

$(document).ready(function(){

    $("#mathWrong").click(function(){
 
       wrong();
 
    })
    $("#mathRight").click(function(){
 
      right();

   })
    
 });

 var wrong = function(){

    var x = $("#number1").val();
    var y = $("#number2").val();
    
    var sum = x + y;
    var message = x + " + " + y + " = " + sum;

    $("#output").text(message + " ALL information from the user is considered a STRING datatype. The '+' signs means to put the two strings togther." ).show()

 }

var right = function(){
   var x = $("#number1").val();
   var y = $("#number2").val();
   
   x = parseInt(x);
   y = parseInt(y);
   var sum = x + y;
   var message = x + " + " + y + " = " + sum;

   $("#output").text(message + " ALL information from the user is considered a STRING datatype. The '+' signs means to put the two strings togther." ).show()


}