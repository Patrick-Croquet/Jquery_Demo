$("button").click(function() {
    $("#div1").fadeToggle();
                                    //fast 200 millisecondes 
                                    //normal 400 millisecondes   
    $("#div2").fadeToggle("slow");  //slow 600 millisecondes 

    
    $("#div3").fadeToggle(3000);    
});