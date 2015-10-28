var spotNo = 0;
var tempSpot;

$(document).on("pageinit", "#home", function() {
    addSpotText(35, 240, "Ash Cloud");
    addSpotText(250, 232, "Main Pipe");
    addSpotText(180, 210, "Side Vent");
    addSpotText(120, 215, "Lava Flow");
    
    $(".image").on("click", function(event) {
        var posX = (event.pageX - $(this).offset().left - 15), posY = (event.pageY - $(this).offset().top - 15);
        addSpot(posY, posX);
        spotNo++;
    });
    
    $("#create-popup-submit-button").on("click", function() {
        console.log(tempSpot);
        console.log($("#create-popup-text-input").val())
        $("#spot-" + tempSpot).attr("popup-text", $("#create-popup-text-input").val());
        $("#create-popup").popup("close");
    });
})

function addSpotText(top, left, text) {
    $(".img-holder").append(
        $("<div />", {"class" : "spot_holder"}).append(
            $("<a />", {
                "href" : "#popup",
                "data-rel" : "popup",
                "class" : "spot ui-btn ui-nodisc-icon ui-btn-icon-notext ui-corner-all",
                "data-transition" : "flip",
                "style" : "top: " + top + "px; left: " + left + "px",
                "id" : "spot-" + spotNo,
                "popup-text" : text
            })
        )
    );
    
    $("#spot-" + spotNo).bind("click", function(event) {
        $("#popup").text(event.target.getAttribute("popup-text"));
        $("#popup").popup();
    });
    
    spotNo++;
}

function addSpot(top, left) {
    tempSpot = spotNo
    console.log(tempSpot);
    $(".img-holder").append(
        $("<div />", {"class" : "spot_holder"}).append(
            $("<a />", {
                "href" : "#popup",
                "data-rel" : "popup",
                "class" : "spot ui-btn ui-nodisc-icon ui-btn-icon-notext ui-corner-all",
                "data-transition" : "flip",
                "id" : "spot-" + tempSpot,
                "style" : "top: " + top + "px; left: " + left + "px"
            })
        )
    );
    
    $("#create-popup-text-input").val("");
    $("#create-popup").popup("open");
    
    
    $(".spot").on("click", function(event) {
        $("#popup").text(event.target.getAttribute("popup-text"));
        $("#popup").popup();
    });
}