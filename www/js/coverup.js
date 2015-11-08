function addSpotText(left, top, text, learn) {
    var holder, popup, popuptext;
    
    if(learn) {
        holder = ".learn-img-holder";
        popup = "#learn-popup";
        popuptext = "#learn-popup-text";
    } else {
        holder = ".img-holder";
        popup = "#create-popup";
        popuptext = "#create-popup-text";
    }
    
    $(holder).append(
        $("<div />", {"class" : "spot-holder",
                      "style" : "top: " + top + "%; left: " + left + "%",
                      "id" : "spot-" + spotNo + "-holder"}).append(
            $("<a />", {
                "href" : popup,
                "data-rel" : "popup",
                "class" : "spot ui-btn ui-nodisc-icon ui-btn-icon-notext ui-corner-all",
                "data-transition" : "flip",
                "id" : "spot-" + spotNo,
                "popup-text" : text
            })
        )
    );
    
    $("#spot-" + spotNo).on("click", function(event) {
        $(popuptext).text(event.target.getAttribute("popup-text"));
    });
    
    spotNo++;
}