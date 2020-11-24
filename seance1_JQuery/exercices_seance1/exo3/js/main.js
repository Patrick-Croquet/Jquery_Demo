$("div").click(function(){
    let color = $(this).css("background-color");
    $("p").html("La couleur du DIV cliqué est : " + color);
});