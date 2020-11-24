$("p").animate({
    fontSize: '+=20px'
}).queue(function() {
    $(this).dequeue(); //dequeue() permet de lancer l'animation suivante;
}).animate({
    fontSize: '-=10px',
    color: 'white',
    backgroundColor: 'green'
}).queue(function() {
    $(this).dequeue();
}).animate({
    fontSize: '-=10px',
    color: 'blue',
    backgroundColor: 'pink'
});    