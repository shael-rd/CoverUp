var spotNo = 0;

$(document).on("pagecreate", "#learn", function() {
    console.log("LEARN LOADED!");
    
    setTimeout(function() {
        console.log("ADDING SPOTS!");
        addSpotText(50, 15, "Ash Cloud");
        addSpotText(49, 71, "Main Pipe");
        addSpotText(45, 57, "Side Vent");
        addSpotText(45, 40, "Lava Flow");
    }, 100);
});

function addSpotText(left, top, text) {
    console.log("ADDING SPOT #" + spotNo);
    
    $(".learn-img-holder").append(
        $("<div />", {"class" : "spot-holder",
                      "style" : "top: " + top + "%; left: " + left + "%",
                      "id" : "learn-spot-" + spotNo + "-holder"}).append(
            $("<a />", {
                "href" : "#learn-popup",
                "data-rel" : "popup",
                "class" : "spot ui-btn ui-nodisc-icon ui-btn-icon-notext ui-corner-all",
                "data-transition" : "flip",
                "id" : "learn-spot-" + spotNo,
                "popup-text" : text
            })
        )
    );
    
    $("#learn-spot-" + spotNo).on("click", function(event) {
        $("#learn-popup-text").text(event.target.getAttribute("popup-text"));
    });
    
    spotNo++;
}