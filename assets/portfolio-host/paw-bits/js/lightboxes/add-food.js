//This is the function for the add-food lightbox

$('.add-food').click(function(){
    vex.dialog.buttons.YES.text = 'Add'
    vex.dialog.buttons.NO.text = 'Cancel'
    vex.dialog.open({
        unsafeMessage: '<p class="hard-title lightbox-title-hard">Add Food</p>',
        input: '<select required aria-required="true" class="select-box food-type" id="food-type"><option value="" selected disabled>Type of food</option><option value="Dry" id="dry">Dry</option><option value="Wet">Wet</option><option value="Raw" id="raw">Raw</option></select>',
    })

    //The following section calls the dry food lightbox if dry food is selected above.

    $('.food-type').change(function(){
        if($(this).val() == 'Dry'){
        $(".vex-dialog-button-primary").addClass("dry-food");
    }
    $('.dry-food').click(function(){
        vex.dialog.buttons.YES.text = 'Add'
        vex.dialog.buttons.NO.text = 'Cancel'
        vex.dialog.open({
            unsafeMessage: '<p class="hard-title lightbox-title-hard">Dry Food</p>',
            input: '<select required aria-required="true" class="select-box"><option value="" selected disabled>Select manufacturer</option><option value="zignature">Zignature</option><option value="iams">Iams</option><option value="Purina">purina</option></select>' +
            '<select required aria-required="true" class="select-box"><option value="" selected disabled>Select Brand</option><option value="zignature">Zignature</option><option value="iams">Iams</option><option value="Purina">purina</option></select>' +
            '<label for="recomendation" style="padding-left: 10px;">Based on the current weight of Aurora, the manufacturer recommends you feed her this amount 2 times per day:</label><input class="select-box recomendation" style="width: 100%;" placeholder="2-3 Cups" /><a class="change-amount" style="position: relative; left: 575px; bottom: 51px;">Change</a>' +
            '<label for="alt-food" style="padding-left: 10px;">If you feed Aurora another type of food on other days, set what days you feed her this food (if you dont, leave blank):</label><select class="select-box alt-food" style="width: 100%;"><option value="" selected disabled>Select days given (optional)</option><option value="monday">Monday</option><option value="tuesday">Tuesday</option><option value="wednesday">Wednesday</option></select>' +
            '<div class="checkbox"><input type="checkbox" id="reminders" value="reminders" /><label for="reminders">Add automatic Reminders</label></div>',
        })
    })
    });

    //The following section calls the wet food lightbox if wet food is selected above.

    $('.food-type').change(function(){
        if($(this).val() == 'Wet'){
        $(".vex-dialog-button-primary").addClass("wet-food");
    }
    $('.wet-food').click(function(){
        vex.dialog.buttons.YES.text = 'Add'
        vex.dialog.buttons.NO.text = 'Cancel'
        vex.dialog.open({
            unsafeMessage: '<p class="hard-title lightbox-title-hard">Wet Food</p>',
            input: '<select required aria-required="true" class="select-box"><option value="" selected disabled>Select manufacturer</option><option value="zignature">Zignature</option><option value="iams">Iams</option><option value="Purina">purina</option></select>' +
            '<select required aria-required="true" class="select-box"><option value="" selected disabled>Select Brand</option><option value="zignature">Zignature</option><option value="iams">Iams</option><option value="Purina">purina</option></select>' +
            '<label for="recomendation" style="padding-left: 10px;">Based on the current weight of Aurora, the manufacturer recommends you feed her this amount 2 times per day:</label><input class="select-box recomendation" style="width: 100%;" placeholder="2-3 Cans" /><a class="change-amount" style="position: relative; left: 575px; bottom: 51px;">Change</a>' +
            '<label for="alt-food" style="padding-left: 10px;">If you feed Aurora another type of food on other days, set what days you feed her this food (if you dont, leave blank):</label><select class="select-box alt-food" style="width: 100%;"><option value="" selected disabled>Select days given (optional)</option><option value="monday">Monday</option><option value="tuesday">Tuesday</option><option value="wednesday">Wednesday</option></select>' +
            '<div class="checkbox"><input type="checkbox" id="reminders" value="reminders" /><label for="reminders">Add automatic Reminders</label></div>',
        })
    })
    });

    //The following section calls the raw food lightbox if raw food is selected above.

    $('.food-type').change(function(){
        if($(this).val() == 'Raw'){
        $(".vex-dialog-button-primary").addClass("raw-food");
    }
    $('.raw-food').click(function(){
        vex.dialog.buttons.YES.text = 'Add'
        vex.dialog.buttons.NO.text = 'Cancel'
        vex.dialog.open({
            unsafeMessage: '<p class="hard-title lightbox-title-hard">Raw Food</p>',
            input: '<input required class="select-box" style="width: 100%;" placeholder="Type meal" />' +
            '<label for="daily-amount" style="padding-left: 10px;">How many times per day?</label><select required aria-required="true" class="select-box daily-amount" style="width: 100%;"><option value="" selected disabled>Select amount</option><option value="1">Once</option><option value="2">Twice</option><option value="3">Three times</option></select>' +
            '<label for="alt-food" style="padding-left: 10px;">If you feed Aurora another type of food on other days, set what days you feed her this food (if you dont, leave blank):</label><select class="select-box alt-food" style="width: 100%;"><option value="" selected disabled>Select days given (optional)</option><option value="monday">Monday</option><option value="tuesday">Tuesday</option><option value="wednesday">Wednesday</option></select>' +
            '<div class="checkbox"><input type="checkbox" id="reminders" value="reminders" /><label for="reminders">Add automatic Reminders</label></div>',
        })
    })
    });
})
