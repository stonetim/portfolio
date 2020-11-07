//This is the function for the add-vaccine lightbox
$('.vaccine').click(function(){
    todayDateString = new Date().toJSON().slice(0,10)
    vex.dialog.buttons.YES.text = 'Add'
    vex.dialog.buttons.NO.text = 'Cancel'
    vex.dialog.open({
        unsafeMessage: '<p class="hard-title lightbox-title-hard">Add Vaccine</p>',
        input: '<select required aria-required="true" class="select-box" style="width: 100% !important;"><option value="" selected disabled>Select vaccine</option><option value="vaccine1">Vaccine 1</option><option value="vaccine2">Vaccine 2</option><option value="vaccine3">Vaccine 3</option></select>' +
        [
        '<label for="#given" style="padding-left: 10px; margin-bottom: -20px;">Given</label><input required id="given" class="date-box" name="date" type="date" placeholder="Select date" value="' + todayDateString + '" />',
    ].join('') +
    [
    '<label for="#expires" style="padding-left: 10px; margin-bottom: -20px;">Expires</label><input required id="expires" class="date-box" name="date" type="date" placeholder="Select date" value="' + todayDateString + '" />',
].join('') +
'<div class="checkbox" style="display: inline-block !important;"><input type="checkbox" id="never" value="never" /><label for="never">Never</label></div>' +
'<textarea class="textarea-fullwidth" placeholder="additional notes"></textarea>' +
'<button class="green-btn" style="width: 20%; color: #fff; margin: 10px; padding: 10px 0px 10px 0px !important;">Upload Doc</button>',
    })
})
