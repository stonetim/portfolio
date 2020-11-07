//This is the function for the add-temperament lightbox
$('.add-temperament').click(function(){
    vex.dialog.buttons.YES.text = 'Add'
    vex.dialog.buttons.NO.text = 'Cancel'
    vex.dialog.open({
        unsafeMessage: '<p class="hard-title lightbox-title-hard">Temperament</p>',
        input: '<textarea required class="textarea-fullwidth" placeholder="Describe..."></textarea>',
    })
})
