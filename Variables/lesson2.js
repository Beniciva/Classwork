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

   $("#time").click(function(){
      time();
   })

   $("#sumDigits").click(function(){
      sumDigits();
   })

   $("#pow").click(function(){
      pow();
   })

   $("#abs").click(function(){
      abs();
   })

   $("#sqrt").click(function(){
      sqrt();
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
   
   x = parseInt(x);
   y = parseInt(y);

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

   //Math.round() - rounds normally >.5 goes up
   //Math.floor() - rounds down to nearest integer
   //Math.ceil() - rounds up to the nearest integer

   var secondsR;
   var minutesR;
   var hoursR;
   var days;
   var minutes;
   var hours; 

   var input = $("#number2").val()

   secondsR = input%60;
   minutes = Math.floor(input/60);
   minutesR = minutes%60;
   hours = Math.floor(minutes/60);
   hoursR = hours%60;
   days = Math.floor(hours/24);

   $("#output").text(input + " seconds is equal to " + days + " days, " + hoursR + " hours, " + minutesR + " minutes, " + secondsR + " seconds.");
}

var sumDigits = function(){

   //     512      5      1      2 

   var input = $("#number3").val();

   var digit1 = imput%10;
   var digit2 = (Math.floor(input/10))%10;
   var digit3 = (Math.floor(input/100))%10;

   var sum = digit1 + digit2 + digit3;

   $("#output2").text("The sum of the digits is " + sum);
}

var pow = function(){

   //Math.pow(a, b)  - raises a to the b power   
   //Math.abs(a) - absolute value of a 
   //Math.sqrt(a) - Square root of a
   //INCREMEND AND DECREMENT

   var x = $("#number4").val()
   var y = $("#number5").val()

   var pow= Math.pow(x, y);
   
   $("#output3").text("The product is " + pow);
}

var abs = function(){

   var x = $("#number4").val()
   var y = $("#number5").val()

   var abs= Math.abs(x);
   
   $("#output3").text("The absolute value is " + abs);
}

var sqrt = function(){

   var x = $("#number4").val()
   var y = $("#number5").val()

   var sqrt= Math.sqrt(x);
   
   $("#output3").text("The square root is " + sqrt);
}

