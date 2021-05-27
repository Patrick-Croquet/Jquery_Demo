for(let i=0;i<3;i++){
$("p").animate({
    fontSize: '+=20px'
}, 5000).queue(function() {
    $(this).dequeue(); //dequeue() permet de lancer l'animation suivante;
}).animate({
    fontSize: '-=10px',
    color: 'white',
    backgroundColor: 'green'
}, 1000).queue(function() {
    $(this).dequeue();
}).animate({
    fontSize: '-=10px',
    color: 'blue',
    backgroundColor: 'red'
}, 2000);

}