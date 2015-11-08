var spotNo = 0;

$(document).on("pagecreate", "#create", function() {
    console.log("CREATE LOADED!");
    
    $("img-holder").css("height", $(".image").height() + "px");

    $(".image").on("click", function(event) {
        var posX = ((event.offsetX / $(document).width()) * 100), posY = ((event.offsetY / $(".img-holder").height()) * 100);
        console.log("imgholderheight " + $(".img-holder").height() + " Y " + posY);
        addSpot(posX, posY);
    });
})

function addSpot(left, top) {
    var popupText;
    
    console.log("addSpot");
    
    $("#create-text-popup").popup("open");
    $("#create-popup-submit-button").on("click", function() {
        popupText = $("#create-popup-text-input").val();
        
        $("#create-text-popup").popup("close");
        
        addSpotText(left, top, popupText, false);
        $("#create-popup-submit-button").off("click");
    });
}