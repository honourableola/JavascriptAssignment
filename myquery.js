$(function(){
 
$("#para").mouseenter(function(){
$(this).css("background-color", "grey");
$(this).css("color", "white");
});

$("#para").click(function(){
$(this).css("font-size", "50px");
});

$("#para").dblclick(function(){
    $("#para").hide();
    });


$("#btnc").click(function(){
    var div = $("#divc");
    div.animate ({marginLeft: '+=850px'}, 3000);
    div.animate ({marginTop: '+=350px'}, 1500);
    div.animate ({marginLeft: '0px'}, 3000);
    div.animate ({marginTop: '0px'}, 1500);
    
    });

    $("#btna").click(function(){
        var div = $("#divc");
        div.animate ({marginTop: '+=350px'}, 3000);
        div.animate ({marginLeft: '+=850px'}, 1500);
        div.animate ({marginTop: '0px'}, 3000);
        div.animate ({marginLeft: '0px'}, 1500);
        
        });
    



});








