//This is the function for the medical tests lightbox
$('.medical-tests').click(function(){
    vex.dialog.buttons.YES.text = 'Save'
    vex.dialog.buttons.NO.text = 'Cancel'
    vex.dialog.open({
        unsafeMessage: '<p class="hard-title lightbox-title-hard">Add Medical Test</p>',
        input: '<select required aria-required="true" class="select-box" style="width: 100% !important;"><option value="" selected disabled>Medical Test</option><option value="medication1">Medical Test 1</option><option value="medication2">Medical Test 2</option><option value="medication3">Medical Test 3</option></select>' +
        '<textarea class="textarea-fullwidth" placeholder="Description" required></textarea>' +
        '<input class="inputfile inline-btn" type="file" name="file" id="file" style="padding-left: 7px;" /><label for="file" style="left: 0%;">Upload Doc</label>',
    })
})
