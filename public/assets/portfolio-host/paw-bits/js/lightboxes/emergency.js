//This is the function for the emergency lightbox
$('.emergencybtn').click(function(){
    vex.dialog.buttons.NO.text = 'Cancel'
    vex.dialog.open({
        unsafeMessage: '<p class="hard-title lightbox-title-hard">Emergency</p>',
        input: '<button type="submit"><a class="green-btn-dialog btn-text-green notify-vet" style="padding: 8px 10px 8px 10px; margin: 10px; color: #fff !important;">Alert Emergency Clinic</a></button>' +
        '<button type="submit"><a class="green-btn-dialog btn-text-green lost-dog" style="padding: 8px 10px 8px 10px; margin: 10px; color: #fff !important">Lost Dog</a></button>',
    })
    $('.vex-dialog-button-primary').css('display', 'none');
    $('.notify-vet').click(function(){
        vex.dialog.buttons.YES.text = 'Alert',
        vex.dialog.buttons.NO.text = 'Cancel',
        vex.dialog.open({
            unsafeMessage: '<p class="hard-title lightbox-title-hard">Emergency</p>',
            input: '<select required aria-required="true" class="select-box"><option value="" selected disabled>Select Clinic</option><option value="condition">AMF Animal Hospital</option><option value="medication">Some Clinic</option><option value="vaccine">Some Other Clinic</option></select>' +
            '<select required aria-required="true" class="select-box"><option value="" selected disabled>Who For?</option><option value="Aurora">Aurora</option><option value="titus">Titus</option></select>' +
            '<textarea class="textarea-fullwidth" placeholder="Describe Condition..."></textarea>',
        })
    })
    $('.lost-dog').click(function(){
        vex.dialog.buttons.YES.text = 'Alert',
        vex.dialog.buttons.NO.text = 'Cancel',
        vex.dialog.open({
            unsafeMessage: '<p class="hard-title lightbox-title-hard">Emergency</p>',
            input: '<select required aria-required="true" class="select-box"><option value="" selected disabled>Who For?</option><option value="Aurora">Aurora</option><option value="titus">Titus</option></select>' +
            '<div class="checkbox"><input type="checkbox" id="inform-local" value="inform-local" /><label for="inform-vet">Make info public to people around you.</label></div>',
        })
    })
})
