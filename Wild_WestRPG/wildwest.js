$(document).ready(function(){

    updateNarrative(N1)
    $('footer').html(createButton("option1", O1) + createButton("option2", O2));

    $("#option1").click(function(){
        updateNarrative(N2);
        $('footer').html(createButton("option3", O3) + createButton("option4", O4) + createButton("option5", O5));
    })


});

var N1 = "Once upon a time in the Wild Wild West there lived a ...";
var N2 = "This ranger was the most dangerous gunslinger known to man. He loved to ..."
var O1 = "ranger."
var O2 = "robot."
var O3 = "kill robots."
var O4 = "cook pancakes."
var O5 = "arrest bad robots."



var updateNarrative = function(a){

    $("article").text(a)

}


var createButton = function(id, text ){

    return "<button type=button id=" + id + ">" + text + "</button>";
 

}

