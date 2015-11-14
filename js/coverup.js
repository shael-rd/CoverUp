var Spot = function(x, y, id, text) {
    this.spotX = x;
    this.spotY = y;
    this.spotId = id;
    this.spotText = text;
    
    console.log("Creating spot #" + this.spotId);
};

Spot.prototype.addToLearn = function() {
    console.log("Adding spot #" + this.spotId + " to learn");
    
    $(".learn-img-holder").append(
        $("<div />", {"class" : "spot_holder"}).append(
            $("<a />", {
                "href" : "#popup",
                "data-rel" : "popup",
                "class" : "spot ui-btn ui-nodisc-icon ui-btn-icon-notext ui-corner-all",
                "data-transition" : "flip",
                "style" : "top: " + this.spotX + "px; left: " + this.spotY + "px;",
                "id" : "learn-spot-" + this.spotId,
                "popup-text" : this.spotText
            })
        )
    );
    
    $("#learn-spot-" + this.spotId).on("click", function(event) {
        $("#popup").text(event.target.getAttribute("popup-text"));
        $("#popup").popup();
    });
    
    return this;
};

Spot.prototype.addToCreate = function() {
    $(".img-holder").append(
        $("<div />", {"class" : "spot_holder"}).append(
            $("<a />", {
                "href" : "#popup",
                "data-rel" : "popup",
                "class" : "spot ui-btn ui-nodisc-icon ui-btn-icon-notext ui-corner-all",
                "data-transition" : "flip",
                "style" : "top: " + this.spotX + "px; left: " + this.spotY + "px;",
                "id" : "spot-" + this.spotId,
                "popup-text" : this.spotText
            })
        )
    );
    
    $("#learn-spot-" + this.spotId).on("click", function(event) {
        $("#popup").text(event.target.getAttribute("popup-text"));
        $("#popup").popup();
    });
    
    return this;
};