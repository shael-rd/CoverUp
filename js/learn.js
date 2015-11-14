var spotNo = 0;

$(document).on("pagecreate", "#learn", function() {
    console.log("LEARN LOADED!");
    
    setTimeout(function() {
        console.log("ADDING SPOTS!");
        new Spot(50, 15, 0, "Ash Cloud").addToLearn();
        new Spot(49, 71, 1, "Main Pipe").addToLearn();
        new Spot(45, 57, 2, "Side Vent").addToLearn();
        new Spot(45, 40, 3, "Lava Flow").addToLearn();
    }, 100);
});