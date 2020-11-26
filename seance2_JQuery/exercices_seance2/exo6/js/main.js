let toggleFx = function() {
    $.fx.off = !$.fx.off;
}

toggleFx();

// c'est anne, j'ai une question, est-ce qu'on peut faire ça?????!!! :

//$(".button").click(function() {
//    $("div").slideToggle(1000);
//    jQuery.fx.off = true;
//    jQuery.fx.off = false;
//});

$(".button").click(toggleFx);

$(".btn1").click(function() {
    $("div").slideToggle(1000);
});