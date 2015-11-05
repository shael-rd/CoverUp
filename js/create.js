var spotNo = 0;

$(document).on("pageshow", "#create", function() {
    $("img-holder").css("height", $(".image").height() + "px");

    $(".image").on("click", function(event) {
        var posX = ((event.offsetX / $(document).width()) * 100), posY = ((event.offsetY / $("img-holder").height()) * 100);
        addSpot(posX, posY);
    });
})

function addSpotText(left, top, text) {
    
    $(".img-holder").append(
        $("<div />", {"class" : "spot-holder",
                      "style" : "top: " + top + "%; left: " + left + "%",
                      "id" : "spot-" + spotNo + "-holder"}).append(
            $("<a />", {
                "href" : "#create-popup",
                "data-rel" : "popup",
                "class" : "spot ui-btn ui-nodisc-icon ui-btn-icon-notext ui-corner-all",
                "data-transition" : "flip",
                "id" : "spot-" + spotNo,
                "popup-text" : text
            })
        )
    );
    
    $("#spot-" + spotNo).on("click", function(event) {
        $("#create-popup-text").text(event.target.getAttribute("popup-text"));
    });
    
    spotNo++;
}

function addSpot(left, top) {
    var popupText;
    
    console.log("addSpot");
    
    $("#create-text-popup").popup("open");
    $("#create-popup-submit-button").on("click", function() {
        popupText = $("#create-popup-text-input").val();
        
        $("#create-text-popup").popup("close");
        
        addSpotText(left, top, popupText);
        $("#create-popup-submit-button").off("click");
    });
}