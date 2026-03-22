//This is the function for the medical-history lightbox
$('.medical-history').click(function(){
    vex.dialog.buttons.YES.text = 'Add'
    vex.dialog.buttons.NO.text = 'Cancel'
    vex.dialog.open({
        unsafeMessage: '<p class="hard-title lightbox-title-hard">Medical History</p>',
        input: '<select required aria-required="true" class="select-box"><option value="" selected disabled>Select type</option><option value="allergy">Allergy</option><option value="condition">Condition</option><option value="medication">Medication</option><option value="vaccine">Vacine</option></select>',
    })
})
