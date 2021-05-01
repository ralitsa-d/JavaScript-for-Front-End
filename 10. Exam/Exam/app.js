function modify(){
    let firstName = $('#firstName');
    let lastName = $('#lastName').text();
    let phoneNumber = $('#phoneNumber').text();
    let ucl = $('#ucl').text();

    // let inputs = [$('#firstname'), $('#lastName'), $('#phoneNumber'), $('#ucl')];

    // for(i of inputs){
    //     i.click(function(){
    //         if(i.hasId('firstName')){
    //             i.on('click', function(){
    //                 let input = $('<input type="text" class="form-control" id="input1">');
    //                 input.val($('#firstName').text());
    //                 $('#firstName').remove();
    //                 $('#firstParent').append(input);
    //                 $('#input1').keydown(function(keyPressed) {
    //                     if (keyPressed.keyCode == 13) {
    //                         let inputVal = input.val();
    //                         input.remove();
    //                         let h4 = $("<h4 class='h4 text-center' id='firstName'>" + inputVal +"</h4>")
    //                         $('#firstParent').append(h4);
    //                     }
    //                 });
    //             });
    //         }
            
    //         $('#lastName').on('click', function(){
    //             let input = $('<input type="text" class="form-control" id="input2">');
    //             input.val(lastName);
    //             $('#lastName').remove();
    //             $('#secondParent').append(input);
    //             $('#input2').keydown(function(keyPressed) {
    //                 if (keyPressed.keyCode == 13) {
    //                     let inputVal = input.val();
    //                     input.remove();
    //                     let h4 = $("<h4 class='h4 text-center' id='lastName'>" + inputVal +"</h4>")
    //                     $('#secondParent').append(h4);
    //                 }
    //             });
    //         });
    //         $('#phoneNumber').on('click', function(){
    //             let input = $('<input type="text" class="form-control" id="input3">');
    //             input.val(phoneNumber);
    //             $('#phoneNumber').remove();
    //             $('#thirdParent').append(input);
    //             $('#input3').keydown(function(keyPressed) {
    //                 if (keyPressed.keyCode == 13) {
    //                     let inputVal = input.val();
    //                     input.remove();
    //                     let h4 = $("<h4 class='h4 text-center' id='phoneNumber'>" + inputVal +"</h4>")
    //                     $('#thirdParent').append(h4);
    //                 }
    //             });
    //         });
    //         $('#ucl').on('click', function(){
    //             let input = $('<input type="number" class="form-control" id="input4">');
    //             input.val(ucl);
    //             $('#ucl').remove();
    //             $('#forthParent').append(input);
    //             $('#input4').keydown(function(keyPressed) {
    //                 if (keyPressed.keyCode == 13) {
    //                     let inputVal = input.val();
    //                     input.remove();
    //                     let h4 = $("<h4 class='h4 text-center' id='ucl'>" + inputVal +"</h4>")
    //                     $('#forthParent').append(h4);
    //                 }
    //             });
    //         });
    //     });
    // }

    
    $('#firstName').on('click', function(){
        let input = $('<input type="text" class="form-control" id="input1">');
        input.val($('#firstName').text());
        $('#firstName').remove();
        $('#firstParent').append(input);
        $('#input1').keydown(function(keyPressed) {
            if (keyPressed.keyCode == 13) {
                let inputVal = input.val();
                input.remove();
                let h4 = $("<h4 class='h4 text-center' id='firstName'>" + inputVal +"</h4>")
                $('#firstParent').append(h4);
            }
        });
        
    });
    $('#lastName').on('click', function(){
        let input = $('<input type="text" class="form-control" id="input2">');
        input.val(lastName);
        $('#lastName').remove();
        $('#secondParent').append(input);
        $('#input2').keydown(function(keyPressed) {
            if (keyPressed.keyCode == 13) {
                let inputVal = input.val();
                input.remove();
                let h4 = $("<h4 class='h4 text-center' id='lastName'>" + inputVal +"</h4>")
                $('#secondParent').append(h4);
            }
        });
    });
    $('#phoneNumber').on('click', function(){
        let input = $('<input type="text" class="form-control" id="input3">');
        input.val(phoneNumber);
        $('#phoneNumber').remove();
        $('#thirdParent').append(input);
        $('#input3').keydown(function(keyPressed) {
            if (keyPressed.keyCode == 13) {
                let inputVal = input.val();
                input.remove();
                let h4 = $("<h4 class='h4 text-center' id='phoneNumber'>" + inputVal +"</h4>")
                $('#thirdParent').append(h4);
            }
        });
    });
    $('#ucl').on('click', function(){
        let input = $('<input type="number" class="form-control" id="input4">');
        input.val(ucl);
        $('#ucl').remove();
        $('#forthParent').append(input);
        $('#input4').keydown(function(keyPressed) {
            if (keyPressed.keyCode == 13) {
                let inputVal = input.val();
                input.remove();
                let h4 = $("<h4 class='h4 text-center' id='ucl'>" + inputVal +"</h4>")
                $('#forthParent').append(h4);
            }
        });
    });



    // let support = $('#forSupport');
    // let crm = $('#forCRM');
    // let marketing = $('#forMarketing');
    // let development = $('#forDevelopment');
    // let other = $('forOther');

    let radios = [$('#support'), $('#crm'), $('#marketing'), $('#development'), $('#other')];
    for(radio of radios){
        radio.click(function() {
            if($('#support').is(':checked')){
                $('#1').text('Tech Support');
                $('#2').text('Medical Support');
                $('#3').text('Assistant Support');
            }
            else if($('#crm').is(':checked')){
                $('#1').text('Community Manager');
                $('#2').text('Customer Care Manager');
                $('#3').text('Lead Administrative Officer');
            }
            else if($('#marketing').is(':checked')){
                $('#1').text('PR Manager');
                $('#2').text('Social Media Manager');
                $('#3').text('Marketing Specialist');
            }
            else if($('#development').is(':checked')){
                $('#1').text('Junior Developer');
                $('#2').text('Regular Developer');
                $('#3').text('Senior Developer');
            }
            else if($('#other').is(':checked')){
                $('#1').text('Team Lead');
                $('#2').text('Regular Employee');
                $('#3').text('Intern');
            }
        });
    }

    


    $('#submit').click(function(){

        $('#firstName').text("Pesho");
        $('#lastName').text("Peshov");
        $('#phoneNumber').text('555-333-4545');
        $('#ucl').text('9311124003');

        $('#1').text('Team Lead');
        $('#2').text('Regular Employee');
        $('#3').text('Intern');

        $('#other').prop('checked', true);
        $('#support').prop('checked', false);
        $('#crm').prop('checked', false);
        $('#marketing').prop('checked', false);
        $('#development').prop('checked', false);

        
        $('#teamlead').prop('checked', false);
        $('#regemployee').prop('checked', true);
        $('#intern').prop('checked', false);
    });

    $('#reset').click(function(){
        // input.remove();
        // let h41 = $("<h4 class='h4 text-center' id='firstName'>" + "Pesho" +"</h4>")
        // $('#firstParent').append(h41);
        // //input.remove();
        // let h42 = $("<h4 class='h4 text-center' id='lastName'>" + "Peshov" +"</h4>")
        // $('#secondParent').append(h41);

        // //input.remove();
        // let h43 = $("<h4 class='h4 text-center' id='phoneNumber'>" + "555-333-4545" +"</h4>")
        // $('#thirdParent').append(h43);

        // //input.remove();
        // let h44 = $("<h4 class='h4 text-center' id='firstName'>" + "9311124003" +"</h4>")
        // $('#forthParent').append(h44);

        $('#firstName').text("Pesho");
        $('#lastName').text("Peshov");
        $('#phoneNumber').text('555-333-4545');
        $('#ucl').text('9311124003');

        $('#1').text('Team Lead');
        $('#2').text('Regular Employee');
        $('#3').text('Intern');

        $('#other').prop('checked', true);
        $('#support').prop('checked', false);
        $('#crm').prop('checked', false);
        $('#marketing').prop('checked', false);
        $('#development').prop('checked', false);

        
        $('#teamlead').prop('checked', false);
        $('#regemployee').prop('checked', true);
        $('#intern').prop('checked', false);
    });
}
    
modify();

