//This is the function for the add-allergy lightbox
$('.allergy').click(function(){
    vex.dialog.buttons.YES.text = 'Add'
    vex.dialog.buttons.NO.text = 'Cancel'
    vex.dialog.open({
        unsafeMessage: '<p class="hard-title lightbox-title-hard">Add Allergy</p>',
        input: '<select required aria-required="true" class="select-box"><option value="" selected disabled>Select allergen</option><option value="flea">Fleas</option><option value="food">Food</option><option value="grass">Grass</option></select>' +
        '<input class="select-box" required placeholder="Describe symptoms" />' +
        '<textarea class="textarea-fullwidth" placeholder="additional notes" required></textarea>' +
        '<button class="green-btn" style="width: 20%; color: #fff; margin: 10px; padding: 10px 0px 10px 0px !important;">Upload Doc</button>' +
        '<div class="checkbox"><input type="checkbox" id="inform-vet" value="inform-vet" /><label for="inform-vet">Inform Veterenarian</label></div>',
    })
})
