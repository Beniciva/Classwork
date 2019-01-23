// THIS LESSON WILL DEMONSTRATE HOW MATH AND VARAIBLES SHOULD WORK

$(document).ready(function(){

   $("#add").click(function(){
      add();
   })

   $("#divide").click(function(){
      divide();
   })
   $("#modulus").click(function(){
      modulus();
   })
    
 });

//  var wrong = function(){

//     var x = $("#number1").val();
//     var y = $("#number2").val();
    
//     var sum = x + y;
//     var message = x + " + " + y + " = " + sum;

//     $("#output").text(message + " ALL information from the user is considered a STRING datatype. The '+' signs means to put the two strings togther." ).show()

//  }

var add = function(){
   var x = $("#number1").val();
   var y = $("#number2").val();
   
   x = parseInt(x);
   y = parseInt(y);

   var sum = x + y;
   var message = x + " + " + y + " = " + sum;

   $("#output").text(message + " ALL information from the user is considered a STRING datatype. The '+' signs means to put the two strings togther." ).show()
}

var divide = function(){

   var x = $("#number1").val();
   var y = $("#number2").val();
   
   // x = parseInt(x);
   // y = parseInt(y);

   var quotient = x / y;
   $("#output").text(quotient);

}

var modulus = function(){

   var x = $("#number1").val();
   var y = $("#number2").val();

   var modulus = x % y;
   $("#output").text(modulus);
}

var time = function (){

   //x will be converting from days to hours/minutes/seconds
   //y will be converting from seconds to days
   
}