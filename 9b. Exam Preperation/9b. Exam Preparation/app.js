function attachEvents(){
    $('#logBtn').on('click', attachMsg);
    var count;
    function attachMsg(){
        let username="Anonymous";
        let message = $('#message');
        let logs = $('#logs');
        let container;
        let typeMsg='';
        if($('#inlineRadio1').is(':checked')){
            container = successMsg();
            typeMsg = "Success";
            //container.text(typeMsg+": "+message.val());
        }
        else if($('#inlineRadio2').is(':checked')){
            container = infoMsg();
            typeMsg = "Info";
            //container.text(typeMsg+": "+message.val());
        }
        else if($('#inlineRadio3').is(':checked')){
            container = errorMsg();
            typeMsg = "Error";
            //container.text(typeMsg+": "+message.val());
        }
        let textMsg = typeMsg+": "+message.val();
        let msgBox = $("<div class='col-6 d-inline-block h3'>" + textMsg + "</div>");
        let usernameBox = $("<div class='col-3 d-inline-block h3 border-left border-right boredr-dark my-3 text-center'>"+username + "</div>");
        let archiveBox = $("<div class='archive col-3 d-inline-block h3 text-center'>Archive</div>");
        container.append(msgBox, usernameBox, archiveBox);
        logs.append(container);
        $('#message').val()='';
        count++;
        ifEmpty();
        $('.archive:last').on('click', deleteMsg);
    }
   
}

function ifEmpty(){
    if(counter>0){
        $('#msgtodelete').css('dispaly', 'none');
    }
    if(counter==0){
        $('#msgtodelete').css('display', 'block');
    }
}
function successMsg(){
    return $('<div class="container bg-success text-light py-3 rounded mb-3"></div>');
}
function infoMsg(){
    return $('<div class="container bg-info text-light py-3 rounded mb-3"></div>');
}
function errorMsg(){
    return $('<div class="container bg-danger text-light py-3 rounded mb-3"></div>');
}
function deleteMsg(){
    $(this).parent().remove();
    count--;
}


attachEvents();