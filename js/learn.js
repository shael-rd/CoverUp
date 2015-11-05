var spotNo = 0;

$(document).on("pageinit", "#learn", function() {
    console.log("LOADED!");
    
    $("img-holder").css("height", $(".image").height() + "px");
    
    addSpotText(50, 15, "Ash Cloud");
    addSpotText(49, 71, "Main Pipe");
    addSpotText(45, 57, "Side Vent");
    addSpotText(45, 40, "Lava Flow");
})

function addSpotText(left, top, text) {
    
    $(".img-holder").append(
        $("<div />", {"class" : "spot-holder",
                      "style" : "top: " + top + "%; left: " + left + "%",
                      "id" : "spot-" + spotNo + "-holder"}).append(
            $("<a />", {
                "href" : "#learn-popup",
                "data-rel" : "popup",
                "class" : "spot ui-btn ui-nodisc-icon ui-btn-icon-notext ui-corner-all",
                "data-transition" : "flip",
                "id" : "spot-" + spotNo,
                "popup-text" : text
            })
        )
    );
    
    $("#spot-" + spotNo).on("click", function(event) {
        $("#learn-popup-text").text(event.target.getAttribute("popup-text"));
    });
    
    spotNo++;
}