
function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");


    if (pageID == "") {
        MODEL.getMyContent("home");
    }
    else {
        MODEL.getMyContent(pageID);
    }
}

function initListeners(){
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function(){
    initListeners();
    // navToPage("home")
});