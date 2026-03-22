//This is the function for the add-weight lightbox
$('.add-weight').click(function(){
    todayDateString = new Date().toJSON().slice(0,10),
    vex.dialog.buttons.YES.text = 'Add'
    vex.dialog.buttons.NO.text = 'Cancel'
    vex.dialog.open({
        unsafeMessage: '<p class="hard-title lightbox-title-hard">Add Weight</p>',
        input: [
        '<input required class="date-box" name="date" type="date" placeholder="Select date" value="' + todayDateString + '" />',
        ].join('') +
        '<input class="select-box" required placeholder="time" />' +
        '<input class="select-box" placeholder="weight" required />' +
        '<select required aria-required="true" class="select-box"><option value="lbs">lbs</option><option value="kgs">kgs</option></select>',
    })
})
