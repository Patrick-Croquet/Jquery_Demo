$("button").click(function() {
    $("div:animated").toggleClass("colored");
    //$(".divAnime").slideToggle(5000);
});

let animateIt = function() {
    $("#div1,#div2").slideToggle("slow", animateIt);
}

animateIt();