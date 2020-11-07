//This is the function for the book-now lightbox
$('.book-now').click(function(){
    todayDateString = new Date().toJSON().slice(0,10)
    vex.dialog.buttons.YES.text = 'Confirm'
    vex.dialog.buttons.NO.text = 'Cancel'
    vex.dialog.open({
        unsafeMessage: '<p class="hard-title lightbox-title-hard">Book Appointment</p><p class="soft-title lightbox-title-soft">FMA Animal Hospital</p>',
        input: '<select required aria-required="true" class="select-box"><option value="" selected disabled>Select who for</option><option value="Aurora">Aurora</option><option value="Titus">Titus</option></select>' +
        '<select required aria-required="true" class="select-box"><option value="" selected disabled>Select preferred vet</option><option value="Dr. Thomas">Dr. Thomas</option><option value="Dr. Alexander">Dr. Alexander</option><option value="Dr. Johnson">Dr. Johnson</option></select>' +
        [
        '<input required class="date-box" name="date" type="date" placeholder="Select date" value="' + todayDateString + '" />',
        ].join('') +
        '<select required aria-required="true" class="select-box"><option value="" selected disabled>Select time</option><option value="8:00 am">8:00 am</option><option value="9:00 am">9:00 am</option></select>' +
        '<textarea class="textarea-fullwidth" placeholder="Describe the reason for visit..." required></textarea>',
        callback: function (data) {
            if (!data) {
                return console.log('Cancelled')
        }
        $('.demo-result-custom-vex-dialog').show().html([
            '<p>',
            'Date: <b>' + data.date + '</b>',
        ].join(''))
        },
    })
})
