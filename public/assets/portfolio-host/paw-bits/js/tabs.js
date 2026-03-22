// The following functions toggle between tabs in the Vet info field of the helath dashboard

//Toggles Vet tab
function showVet() {
    //Toggles content
    $("#vet").show();
    $("#emergency").hide();
    $("#specialists").hide();
    $("#visits").hide();
    //Toggles button color
    $("#vetbtn").css( "border-color", "#6ab37d" );
    $("#emergencybtn").css( "border-color", "#fff" );
    $("#specialistsbtn").css( "border-color", "#fff" );
    $("#visitsbtn").css( "border-color", "#fff" );
}
//Toggles Emergency tab
function showEmergency() {
    //Toggles content
    $("#vet").hide();
    $("#emergency").show();
    $("#specialists").hide();
    $("#visits").hide();
    //Toggles button color
    $("#vetbtn").css( "border-color", "#fff" );
    $("#emergencybtn").css( "border-color", "#6ab37d" );
    $("#specialistsbtn").css( "border-color", "#fff" );
    $("#visitsbtn").css( "border-color", "#fff" );
}
//Toggles Specialists tab
function showSpecialists() {
    //Toggles content
    $("#vet").hide();
    $("#emergency").hide();
    $("#specialists").show();
    $("#visits").hide();
    //Toggles button color
    $("#vetbtn").css( "border-color", "#fff" );
    $("#emergencybtn").css( "border-color", "#fff" );
    $("#specialistsbtn").css( "border-color", "6ab37d" );
    $("#visitsbtn").css( "border-color", "#fff" );
}
//Toggles Visits tab
function showVisits() {
    //Toggles content
    $("#vet").hide();
    $("#emergency").hide();
    $("#specialists").hide();
    $("#visits").show();
    //Toggles button color
    $("#vetbtn").css( "border-color", "#fff" );
    $("#emergencybtn").css( "border-color", "#fff" );
    $("#specialistsbtn").css( "border-color", "#fff" );
    $("#visitsbtn").css( "border-color", "#6ab37d" );
}


// The following functions toggle between tabs in the medical history field of the helath dashboard

//Toggles Allergies tab
function showAllergies() {
    //Toggles content
    $("#allergies").show();
    $("#conditions").hide();
    $("#medications").hide();
    $("#vaccines").hide();
    //Toggles button color
    $("#allergybtn").css( "border-color", "#6ab37d" );
    $("#conditionsbtn").css( "border-color", "#fff" );
    $("#medicationsbtn").css( "border-color", "#fff" );
    $("#vaccinesbtn").css( "border-color", "#fff" );
}
//Toggles Conditions tab
function showConditions() {
    //Toggles content
    $("#allergies").hide();
    $("#conditions").show();
    $("#medications").hide();
    $("#vaccines").hide();
    //Toggles button color
    $("#allergybtn").css( "border-color", "#fff" );
    $("#conditionsbtn").css( "border-color", "#6ab37d" );
    $("#medicationsbtn").css( "border-color", "#fff" );
    $("#vaccinesbtn").css( "border-color", "#fff" );
}
//Toggles Medications tab
function showMedications() {
    //Toggles content
    $("#allergies").hide();
    $("#conditions").hide();
    $("#medications").show();
    $("#vaccines").hide();
    //Toggles button color
    $("#allergybtn").css( "border-color", "#fff" );
    $("#conditionsbtn").css( "border-color", "#fff" );
    $("#medicationsbtn").css( "border-color", "#6ab37d" );
    $("#vaccinesbtn").css( "border-color", "#fff" );
}
//Toggles Vaccines tab
function showVaccines() {
    //Toggles content
    $("#allergies").hide();
    $("#conditions").hide();
    $("#medications").hide();
    $("#vaccines").show();
    //Toggles button color
    $("#allergybtn").css( "border-color", "#fff" );
    $("#conditionsbtn").css( "border-color", "#fff" );
    $("#medicationsbtn").css( "border-color", "#fff" );
    $("#vaccinesbtn").css( "border-color", "#6ab37d" );
}

// The following functions toggle between tabs in the medical Documents field of the helath dashboard

//Toggles Allergies Doc tab
function showAllergiesDoc() {
    //Toggles content
    $("#allergiesdoc").show();
    $("#conditionsdoc").hide();
    $("#medicationsdoc").hide();
    $("#vaccinesdoc").hide();
    //Toggles button color
    $("#allergydocbtn").css( "border-color", "#6ab37d" );
    $("#conditionsdocbtn").css( "border-color", "#fff" );
    $("#medicationsdocbtn").css( "border-color", "#fff" );
    $("#vaccinesdocbtn").css( "border-color", "#fff" );
}
//Toggles Conditions Doc tab
function showConditionsDoc() {
    //Toggles content
    $("#allergiesdoc").hide();
    $("#conditionsdoc").show();
    $("#medicationsdoc").hide();
    $("#vaccinesdoc").hide();
    //Toggles button color
    $("#allergydocbtn").css( "border-color", "#fff" );
    $("#conditionsdocbtn").css( "border-color", "#6ab37d" );
    $("#medicationsdocbtn").css( "border-color", "#fff" );
    $("#vaccinesdocbtn").css( "border-color", "#fff" );
}
//Toggles Medications Doc tab
function showMedicationsDoc() {
    //Toggles content
    $("#allergiesdoc").hide();
    $("#conditionsdoc").hide();
    $("#medicationsdoc").show();
    $("#vaccinesdoc").hide();
    //Toggles button color
    $("#allergydocbtn").css( "border-color", "#fff" );
    $("#conditionsdocbtn").css( "border-color", "#fff" );
    $("#medicationsdocbtn").css( "border-color", "#6ab37d" );
    $("#vaccinesdocbtn").css( "border-color", "#fff" );
}
//Toggles Vaccines Doc tab
function showVaccinesDoc() {
    //Toggles content
    $("#allergiesdoc").hide();
    $("#conditionsdoc").hide();
    $("#medicationsdoc").hide();
    $("#vaccinesdoc").show();
    //Toggles button color
    $("#allergydocbtn").css( "border-color", "#fff" );
    $("#conditionsdocbtn").css( "border-color", "#fff" );
    $("#medicationsdocbtn").css( "border-color", "#fff" );
    $("#vaccinesdocbtn").css( "border-color", "#6ab37d" );
}

// The following functions toggle between tabs in the Activity Feed field in the General Dashboard

//Toggles Exercise tab
function showExercise() {
    //Toggles content
    $("#exercise").show();
    $("#nutrition").hide();
    $("#hydration").hide();
    //Toggles button color
    $("#exercisebtn").css( "border-color", "#6ab37d" );
    $("#nutritionbtn").css( "border-color", "#fff" );
    $("#hydrationbtn").css( "border-color", "#fff" );
}
//Toggles Nutrition tab
function showNutrition() {
    //Toggles content
    $("#exercise").hide();
    $("#nutrition").show();
    $("#hydration").hide();
    //Toggles button color
    $("#exercisebtn").css( "border-color", "#fff" );
    $("#nutritionbtn").css( "border-color", "#6ab37d" );
    $("#hydrationbtn").css( "border-color", "#fff" );
}
//Toggles Hydration tab
function showHydration() {
    //Toggles content
    $("#exercise").hide();
    $("#nutrition").hide();
    $("#hydration").show();
    //Toggles button color
    $("#exercisebtn").css( "border-color", "#fff" );
    $("#nutritionbtn").css( "border-color", "#fff" );
    $("#hydrationbtn").css( "border-color", "#6ab37d" );
}

// The following functions toggle between tabs in the Vet info area of the General Dashboard

//Toggles GenVet tab
function showGenVet() {
    //Toggles content
    $("#genvet").show();
    $("#grooming").hide();
    $("#boarding").hide();
    $("#caregivers").hide();
    //Toggles button color
    $("#genvetbtn").css( "border-color", "#6ab37d" );
    $("#groomingbtn").css( "border-color", "#fff" );
    $("#boardingbtn").css( "border-color", "#fff" );
    $("#caregiversbtn").css( "border-color", "#fff" );
}
//Toggles Grooming tab
function showGrooming() {
    //Toggles content
    $("#genvet").hide();
    $("#grooming").show();
    $("#boarding").hide();
    $("#caregivers").hide();
    //Toggles button color
    $("#genvetbtn").css( "border-color", "#fff" );
    $("#groomingbtn").css( "border-color", "#6ab37d" );
    $("#boardingbtn").css( "border-color", "#fff" );
    $("#caregiversbtn").css( "border-color", "#fff" );
}
//Toggles Boarding tab
function showBoarding() {
    //Toggles content
    $("#genvet").hide();
    $("#grooming").hide();
    $("#boarding").show();
    $("#caregivers").hide();
    //Toggles button color
    $("#genvetbtn").css( "border-color", "#fff" );
    $("#groomingbtn").css( "border-color", "#fff" );
    $("#boardingbtn").css( "border-color", "#6ab37d" );
    $("#caregiversbtn").css( "border-color", "#fff" );
}
//Toggles Caregivers tab
function showCaregivers() {
    //Toggles content
    $("#genvet").hide();
    $("#grooming").hide();
    $("#boarding").hide();
    $("#caregivers").show();
    //Toggles button color
    $("#genvetbtn").css( "border-color", "#fff" );
    $("#groomingbtn").css( "border-color", "#fff" );
    $("#boardingbtn").css( "border-color", "#fff" );
    $("#caregiversbtn").css( "border-color", "#6ab37d" );
}

// The following functions toggle between tabs in the Activity Feed field in the activitydash Dashboard

//Toggles Exercise2 tab
function showExercise2() {
    //Toggles content
    $("#exercise2").show();
    $("#nutrition2").hide();
    $("#hydration2").hide();
    //Toggles button color
    $("#exercise2btn").css( "border-color", "#6ab37d" );
    $("#nutrition2btn").css( "border-color", "#fff" );
    $("#hydration2btn").css( "border-color", "#fff" );
}
//Toggles Nutrition2 tab
function showNutrition2() {
    //Toggles content
    $("#exercise2").hide();
    $("#nutrition2").show();
    $("#hydration2").hide();
    //Toggles button color
    $("#exercise2btn").css( "border-color", "#fff" );
    $("#nutrition2btn").css( "border-color", "#6ab37d" );
    $("#hydration2btn").css( "border-color", "#fff" );
}
//Toggles Hydration2 tab
function showHydration2() {
    //Toggles content
    $("#exercise2").hide();
    $("#nutrition2").hide();
    $("#hydration2").show();
    //Toggles button color
    $("#exercise2btn").css( "border-color", "#fff" );
    $("#nutrition2btn").css( "border-color", "#fff" );
    $("#hydration2btn").css( "border-color", "#6ab37d" );
}

// The following functions toggle between tabs in the Whats Nearby field in the activitydash Dashboard

//Toggles Parks tab
function showParks() {
    //Toggles content
    $("#park").show();
    $("#events").hide();
    $("#business").hide();
    //Toggles button color
    $("#parkbtn").css( "border-color", "#6ab37d" );
    $("#eventsbtn").css( "border-color", "#fff" );
    $("#businessbtn").css( "border-color", "#fff" );
}
//Toggles events tab
function showEvents() {
    //Toggles content
    $("#park").hide();
    $("#events").show();
    $("#business").hide();
    //Toggles button color
    $("#parkbtn").css( "border-color", "#fff" );
    $("#eventsbtn").css( "border-color", "#6ab37d" );
    $("#businessbtn").css( "border-color", "#fff" );
}
//Toggles business tab
function showBusiness() {
    //Toggles content
    $("#park").hide();
    $("#events").hide();
    $("#business").show();
    //Toggles button color
    $("#parkbtn").css( "border-color", "#fff" );
    $("#eventsbtn").css( "border-color", "#fff" );
    $("#businessbtn").css( "border-color", "#6ab37d" );
}

// The following functions toggle between tabs in the Caregivers Feed field in the caregivingdash Dashboard

//Toggles Exercise3 tab
function showExercise3() {
    //Toggles content
    $("#exercise3").show();
    $("#nutrition3").hide();
    $("#hydration3").hide();
    //Toggles button color
    $("#exercise3btn").css( "border-color", "#6ab37d" );
    $("#nutrition3btn").css( "border-color", "#fff" );
    $("#hydration3btn").css( "border-color", "#fff" );
}
//Toggles Nutrition3 tab
function showNutrition3() {
    //Toggles content
    $("#exercise3").hide();
    $("#nutrition3").show();
    $("#hydration3").hide();
    //Toggles button color
    $("#exercise3btn").css( "border-color", "#fff" );
    $("#nutrition3btn").css( "border-color", "#6ab37d" );
    $("#hydration3btn").css( "border-color", "#fff" );
}
//Toggles Hydration3 tab
function showHydration3() {
    //Toggles content
    $("#exercise3").hide();
    $("#nutrition3").hide();
    $("#hydration3").show();
    //Toggles button color
    $("#exercise3btn").css( "border-color", "#fff" );
    $("#nutrition3btn").css( "border-color", "#fff" );
    $("#hydration3btn").css( "border-color", "#6ab37d" );
}

// The following functions toggle between tabs in the Whats Nearby field in the caregivingdash Dashboard

//Toggles Parks1 tab
function showParks1() {
    //Toggles content
    $("#park1").show();
    $("#events1").hide();
    $("#business1").hide();
    //Toggles button color
    $("#park1btn").css( "border-color", "#6ab37d" );
    $("#events1btn").css( "border-color", "#fff" );
    $("#business1btn").css( "border-color", "#fff" );
}
//Toggles events1 tab
function showEvents1() {
    //Toggles content
    $("#park1").hide();
    $("#events1").show();
    $("#business1").hide();
    //Toggles button color
    $("#park1btn").css( "border-color", "#fff" );
    $("#events1btn").css( "border-color", "#6ab37d" );
    $("#business1btn").css( "border-color", "#fff" );
}
//Toggles business1 tab
function showBusiness1() {
    //Toggles content
    $("#park1").hide();
    $("#events1").hide();
    $("#business1").show();
    //Toggles button color
    $("#park1btn").css( "border-color", "#fff" );
    $("#events1btn").css( "border-color", "#fff" );
    $("#business1btn").css( "border-color", "#6ab37d" );
}
