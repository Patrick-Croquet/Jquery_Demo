//jQuery(document).ready(function(){
//jQuery(function(){
$(function(){    //$() un alias de jQuery()    
                // Du code en jQuery
            $('#unediv').css({ color:'green',
                              width:'150px',
                              height:'150px',
                              backgroundColor:'yellow'
                        });
            $('#unediv').on('click',function(){
                alert("Ce code fonctionne");
            });

            $('button').on('click',function(){
                $('#unediv').css({backgroundColor:'pink'});
            });

            //document.getElementById("para1").innerHTML="Je change le texte";
            //$('#para1').css({color:'green'});
            //document.getElementById("para1").style.color="red"; // code Javascript pur
});

// Code Javascript pur
document.getElementById("para1").innerHTML="Je change le texte";
document.getElementById("para1").style.color="red";

            