//This is the function for the add-parent lightbox
$('.add-parent').click(function () {
    vex.dialog.buttons.YES.text = 'Add'
    vex.dialog.buttons.NO.text = 'Cancel'
    vex.dialog.open({
        unsafeMessage: '<p class="hard-title lightbox-title-hard">Add Parent</p>',
        input: '<input required class="select-box" placeholder="First name" />' +
        '<input required class="select-box" placeholder="Last name" />' +
        '<input required class="textarea-fullwidth" placeholder="Email adress" />' +
        '<select required aria-required="true" class="select-box"><option value="" selected disable>Select access</option><option value="full">Full access</option><option value="limited">Limited Access</option></select>' +
        '<div class="checkbox"><input type="checkbox" id="email" value="email" /><label for="email">Send email invite</label></div>',
    })
})
