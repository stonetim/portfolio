// The following functions control the collapse and expand buttons in the sidenav

// Collapses the side nav
function showSidenavThin() {
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").toggle("slide");
    $(".sidenav-thin").show();
    $(".sidenav-social").hide();
    //Changes the width of the main content area
    $(".dash-container").animate({
        left: "10%"
    }, 500);
}
// Expands the side nav
function showSidenav() {
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").toggle("slideright");
    $(".sidenav-thin").hide();
    $(".sidenav-social").hide();
    //Changes the width of the main content area
    $(".dash-container").animate({
        left: "24%"
    }, 500);
}
// Collapses the side nav
function showSidenavThinSocial() {
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").hide();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").show();
    $(".sidenav-social").toggle("slide");
    //Changes the width of the main content area
    $(".dash-container").animate({
        left: "10%"
    }, 500);
}
// Exapands the side nav
function showSidenavSocial() {
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").hide();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").toggle("slideright");
    //Changes the width of the main content area
    $(".dash-container").animate({
        left: "24%"
    }, 500);
}
// Collapses the search-result-nav
function showHidden() {
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").hide();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").hide();
    $(".search-result-nav").toggle("slideleft");
    $(".search-result-nav-detail").hide();
    //This section displays the show button
    $(".mapsbtn").show();
}
// Expands the search-result-nav
function showMenu() {
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").hide();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").hide();
    $(".search-result-nav").toggle("slideright");
    $(".search-result-nav-detail").hide();
    //This section hides the show button
    $(".mapsbtn").hide();
}
// Collapses the search-result-nav
function showHidden2() {
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").hide();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").hide();
    $(".search-result-nav").hide();
    $(".search-result-nav-detail").toggle("slideleft");
    //This section displays the show button
    $(".mapsbtn2").show();
}
// Expands the search-result-nav
function showMenu2() {
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").hide();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").hide();
    $(".search-result-nav").hide();
    $(".search-result-nav-detail").toggle("slideright");
    //This section hides the show button
    $(".mapsbtn2").hide();
}
