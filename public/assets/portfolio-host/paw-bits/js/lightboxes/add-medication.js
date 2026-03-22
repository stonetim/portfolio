//This is the function for the add-medication lightbox
$('.medication').click(function(){
    vex.dialog.buttons.YES.text = 'Add'
    vex.dialog.buttons.NO.text = 'Cancel'
    vex.dialog.open({
        unsafeMessage: '<p class="hard-title lightbox-title-hard">Add Medication</p>',
        input: '<select required aria-required="true" class="select-box" style="width: 100% !important;"><option value="" selected disabled>Select medication</option><option value="medication1">Medication 1</option><option value="medication2">Medication 2</option><option value="medication3">Medication 3</option></select>' +
        '<input required class="select-box" placeholder="Strength" />' +
        '<select required aria-required="true" class="select-box"><option value="" selected disabled>Quantity</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select>' +
        '<select required aria-required="true" class="select-box"><option value="" selected disabled>Dose</option><option value="1">Once</option><option value="2">Twice</option><option value="3">Three times</option></select>' +
        '<select required aria-required="true" class="select-box"><option value="" selected disabled>Frequency</option><option value="daily">Daily</option><option value="weekly">Weekly</option><option value="monthly">Monthly</option></select>' +
        '<textarea class="textarea-fullwidth" placeholder="Additional notes" required></textarea>' +
        '<button class="green-btn" style="width: 20%; color: #fff; margin: 10px; padding: 10px 0px 10px 0px !important;">Upload Doc</button>' +
        '<div class="checkbox"><input type="checkbox" id="inform-vet" value="inform-vet" /><label for="inform-vet">Inform Veterenarian</label></div>',
    })
})
