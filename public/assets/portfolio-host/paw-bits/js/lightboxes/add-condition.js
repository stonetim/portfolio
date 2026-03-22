//This is the function for the add-condition lightbox
$('.condition').click(function(){
    todayDateString = new Date().toJSON().slice(0,10)
    vex.dialog.buttons.YES.text = 'Add'
    vex.dialog.buttons.NO.text = 'Cancel'
    vex.dialog.open({
        unsafeMessage: '<p class="hard-title lightbox-title-hard">Add Condition</p>',
        input: [
        '<label for="date-box" style="padding-left: 10px; margin-bottom: -20px;">Onset</label><input required class="date-box" name="date" type="date" placeholder="Select date" value="' + todayDateString + '" />',
    ].join('') +
    '<input required class="select-box" placeholder="Describe symptoms..." />' +
    '<textarea class="textarea-fullwidth" placeholder="Additional notes..."></textarea>' +
    '<button class="green-btn" style="width: 20%; color: #fff; margin: 10px; padding: 10px 0px 10px 0px !important;">Upload Doc</button>' +
    '<div class="checkbox"><input type="checkbox" id="inform-vet" value="inform-vet" /><label for="inform-vet">Inform Veterenarian</label></div>',
    })
})
