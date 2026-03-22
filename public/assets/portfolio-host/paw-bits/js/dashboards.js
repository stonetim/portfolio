// Display Home Dashboard on load
$( document ).ready( showHome );

// The following functions toggle displayed Dashboard and related navigation menus

// Toggles Home Dashboard
function showHome() {
    //This section shows or hides each dashboard
    $(".homedash").show();
    $(".generaldash").hide();
    $(".healthdash").hide();
    $(".activitydash").hide();
    $(".caregivingdash").hide();
    $(".friendsdash").hide();
    $(".requestsdash").hide();
    $(".petinfodash").hide();
    $(".usersettingsdash").hide();
    $(".mapsdash").hide();
    //This section shows or hides the correct top nav menu
    $(".topnav-main").show();
    $(".topnav-social").hide();
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").show();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").hide();
    $(".search-result-nav").hide();
    $(".search-result-nav-detail").hide();
    //Ensures the width of the main content area is correct upon navigation
    $(".dash-container").animate({
        left: "24%"
    }, 500);
}

// Toggles General Dashboard
function showGeneral() {
    //This section shows or hides each dashboard
    $(".homedash").hide();
    $(".generaldash").show();
    $(".healthdash").hide();
    $(".activitydash").hide();
    $(".caregivingdash").hide();
    $(".friendsdash").hide();
    $(".requestsdash").hide();
    $(".petinfodash").hide();
    $(".usersettingsdash").hide();
    $(".mapsdash").hide();
    //This section shows or hides the correct top nav menu
    $(".topnav-main").show();
    $(".topnav-social").hide();
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").show();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").hide();
    $(".search-result-nav").hide();
    $(".search-result-nav-detail").hide();
    //Ensures the width of the main content area is correct upon navigation
    $(".dash-container").animate({
        left: "24%"
    }, 500);
}

// Toggles Health Dashboard
function showHealth() {
    //This section shows or hides each dashboard
    $(".homedash").hide();
    $(".generaldash").hide();
    $(".healthdash").show();
    $(".activitydash").hide();
    $(".caregivingdash").hide();
    $(".friendsdash").hide();
    $(".requestsdash").hide();
    $(".petinfodash").hide();
    $(".usersettingsdash").hide();
    $(".mapsdash").hide();
    //This section shows or hides the correct top nav menu
    $(".topnav-main").show();
    $(".topnav-social").hide();
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").show();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").hide();
    $(".search-result-nav").hide();
    $(".search-result-nav-detail").hide();
    //Ensures the width of the main content area is correct upon navigation
    $(".dash-container").animate({
        left: "24%"
    }, 500);
}

// Toggles Activity Dashboard
function showActivity() {
    //This section shows or hides each dashboard
    $(".homedash").hide();
    $(".generaldash").hide();
    $(".healthdash").hide();
    $(".activitydash").show();
    $(".caregivingdash").hide();
    $(".friendsdash").hide();
    $(".requestsdash").hide();
    $(".petinfodash").hide();
    $(".usersettingsdash").hide();
    $(".mapsdash").hide();
    //This section shows or hides the correct top nav menu
    $(".topnav-main").show();
    $(".topnav-social").hide();
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").show();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").hide();
    $(".search-result-nav").hide();
    $(".search-result-nav-detail").hide();
    //Ensures the width of the main content area is correct upon navigation
    $(".dash-container").animate({
        left: "24%"
    }, 500);
}

// Toggles Caregiving Dashboard
function showCaregiving() {
    //This section shows or hides each dashboard
    $(".homedash").hide();
    $(".generaldash").hide();
    $(".healthdash").hide();
    $(".activitydash").hide();
    $(".caregivingdash").show();
    $(".friendsdash").hide();
    $(".requestsdash").hide();
    $(".petinfodash").hide();
    $(".usersettingsdash").hide();
    $(".mapsdash").hide();
    //This section shows or hides the correct top nav menu
    $(".topnav-main").show();
    $(".topnav-social").hide();
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").show();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").hide();
    $(".search-result-nav").hide();
    $(".search-result-nav-detail").hide();
    //Ensures the width of the main content area is correct upon navigation
    $(".dash-container").animate({
        left: "24%"
    }, 500);
}

// Toggles Friends Dashboard
function showFriends() {
    //This section shows or hides each dashboard
    $(".homedash").hide();
    $(".generaldash").hide();
    $(".healthdash").hide();
    $(".activitydash").hide();
    $(".caregivingdash").hide();
    $(".friendsdash").show();
    $(".requestsdash").hide();
    $(".petinfodash").hide();
    $(".usersettingsdash").hide();
    $(".mapsdash").hide();
    //This section shows or hides the correct top nav menu
    $(".topnav-main").hide();
    $(".topnav-social").show();
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").hide();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").show();
    $(".search-result-nav").hide();
    $(".search-result-nav-detail").hide();
    //Ensures the width of the main content area is correct upon navigation
    $(".dash-container").animate({
        left: "24%"
    }, 500);
}

// Toggles Requests Dashboard
function showRequests() {
    //This section shows or hides each dashboard
    $(".homedash").hide();
    $(".generaldash").hide();
    $(".healthdash").hide();
    $(".activitydash").hide();
    $(".caregivingdash").hide();
    $(".friendsdash").hide();
    $(".requestsdash").show();
    $(".petinfodash").hide();
    $(".usersettingsdash").hide();
    $(".mapsdash").hide();
    //This section shows or hides the correct top nav menu
    $(".topnav-main").hide();
    $(".topnav-social").show();
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").hide();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").show();
    $(".search-result-nav").hide();
    $(".search-result-nav-detail").hide();
    //Ensures the width of the main content area is correct upon navigation
    $(".dash-container").animate({
        left: "24%"
    }, 500);
}

// Toggles Petinfo Dashboard
function showPetinfo() {
    //This section shows or hides each dashboard
    $(".homedash").hide();
    $(".generaldash").hide();
    $(".healthdash").hide();
    $(".activitydash").hide();
    $(".caregivingdash").hide();
    $(".friendsdash").hide();
    $(".requestsdash").hide();
    $(".petinfodash").show();
    $(".usersettingsdash").hide();
    $(".mapsdash").hide();
    //This section shows or hides the correct top nav menu
    $(".topnav-main").show();
    $(".topnav-social").hide();
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").show();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").hide();
    $(".search-result-nav").hide();
    $(".search-result-nav-detail").hide();
    //Ensures the width of the main content area is correct upon navigation
    $(".dash-container").animate({
        left: "24%"
    }, 500);
}

// Toggles Usersettings Dashboard
function showUsersettings() {
    //This section shows or hides each dashboard
    $(".homedash").hide();
    $(".generaldash").hide();
    $(".healthdash").hide();
    $(".activitydash").hide();
    $(".caregivingdash").hide();
    $(".friendsdash").hide();
    $(".requestsdash").hide();
    $(".petinfodash").hide();
    $(".usersettingsdash").show();
    $(".mapsdash").hide();
    //This section shows or hides the correct top nav menu
    $(".topnav-main").show();
    $(".topnav-social").hide();
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").show();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").hide();
    $(".search-result-nav").hide();
    $(".search-result-nav-detail").hide();
    //Ensures the width of the main content area is correct upon navigation
    $(".dash-container").animate({
        left: "24%"
    }, 500);
}

// Toggles Maps Dashboard
function showMaps() {
    //This section shows or hides each dashboard
    $(".homedash").hide();
    $(".generaldash").hide();
    $(".healthdash").hide();
    $(".activitydash").hide();
    $(".caregivingdash").hide();
    $(".friendsdash").hide();
    $(".requestsdash").hide();
    $(".petinfodash").hide();
    $(".usersettingsdash").hide();
    $(".mapsdash").show();
    //This section shows or hides the correct top nav menu
    $(".topnav-main").show();
    $(".topnav-social").hide();
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").hide();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").hide();
    $(".search-result-nav").show();
    $(".search-result-nav-detail").hide();
    //Ensures the width of the main content area is correct upon navigation
    $(".dash-container").animate({
        left: "24%"
    }, 500);
}

// Toggles Search Detail Dashboard
function showDetail() {
    //This section shows or hides each dashboard
    $(".homedash").hide();
    $(".generaldash").hide();
    $(".healthdash").hide();
    $(".activitydash").hide();
    $(".caregivingdash").hide();
    $(".friendsdash").hide();
    $(".requestsdash").hide();
    $(".petinfodash").hide();
    $(".usersettingsdash").hide();
    $(".mapsdash").show();
    //This section shows or hides the correct top nav menu
    $(".topnav-main").show();
    $(".topnav-social").hide();
    //The section shows or hides the correct side nav menu
    $(".sidenav-main").hide();
    $(".sidenav-thin").hide();
    $(".sidenav-thin-social").hide();
    $(".sidenav-social").hide();
    $(".search-result-nav").hide();
    $(".search-result-nav-detail").show();
    //Ensures the width of the main content area is correct upon navigation
    $(".dash-container").animate({
        left: "24%"
    }, 500);
}
