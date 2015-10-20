$(document).on("pageinit", "#home", function() {
    addSpot(35, 240, "Ash Cloud");
    addSpot(250, 232, "Main Pipe");
    addSpot(180, 210, "Side Vent");
    addSpot(120, 215, "Lava Flow");
    
    $("a.spot").bind("click", function(event) {
        $("#popup").text(event.target.getAttribute("popup-text"));
        $("#popup").popup();
    });
})

function addSpot(top, left, text) {
    $(".img-holder").append(
        $("<div />", {"class" : "spot_holder"}).append(
            $("<a />", {
                "href" : "#popup",
                "data-rel" : "popup",
                "class" : "spot ui-btn ui-nodisc-icon ui-btn-icon-notext ui-corner-all",
                "data-transition" : "flip",
                "style" : "top: " + top + "px; left: " + left + "px",
                "popup-text" : text
            })
        )
    );
}