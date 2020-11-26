$("#left").click(function() {
    $(".block").animate({ left: "-=50px" }, "slow");
});

$("#right").click(function() {
    $(".block").animate({ left: "+=50px" }, "slow");
});

$("#top").click(function() {
    $(".block").animate({ top: "-=50px" }, "slow");
});

$("#bottom").click(function() {
    $(".block").animate({ top: "+=50px" }, "slow");
});