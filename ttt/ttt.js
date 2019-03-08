$(document).ready(function(){

    var turn = 1;

    $("td").click(function(){

        if($(this).text() === ''){
            if(move%2 === 1)
                $(this).text("X")
            }
            else
            $(this).text("0")
            turn++
    })

    $("button").click(function(){

        turn=1;

    })


});

var checkwin = function(){



}

var reset = function(){



}