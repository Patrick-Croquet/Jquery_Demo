// JavaScript Document
//alert('J\'ajoute la classe vert !');
$('p').addClass('vert');
if($('p').hasClass('vert') ){ // si l'élément possède la classe .vert
    alert('Ce paragraphe est vert !'); // on affiche une alerte 
}
$('p').addClass('rouge');
//$('p').toggleClass('rouge', false);
$('p').removeClass('vert');