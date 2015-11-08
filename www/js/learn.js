var spotNo = 0;

$(document).on("pagecreate", "#learn", function() {
    console.log("LEARN LOADED!");
    
    setTimeout(function() {
        console.log("ADDING SPOTS!");
        addSpotText(50, 15, "Ash Cloud", true);
        addSpotText(49, 71, "Main Pipe", true);
        addSpotText(45, 57, "Side Vent", true);
        addSpotText(45, 40, "Lava Flow", true);
    }, 100);
});