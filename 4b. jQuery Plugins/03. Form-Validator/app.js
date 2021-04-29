
$.validate({
    lang:'en',
    modules: 'security',
});

let isChecked = $('#checkbox');
$('#submitBtn').on('click', function(ev){
    ev.preventDefault();
    if(!isChecked.is(':checked')){
        $('#notChecked').css('display', 'block');
    }
    else{
        $('#notChecked').css('display', 'none');
    }
})

$('#shorttext').restrictLength($('#maxlength'));

$('#bold-btn').on('click', bold);
$('#italic-btn').on('click', italic);
let text = $('#shorttext');

let countB=0;
function bold(){
    ++countB;
    if(countB%2==1){
        text.css('font-weight', 'bold');
    }
    else{
        text.css('font-weight', 'normal');
    }
}
let countI=0;
function italic(){
    ++countI;
    if(countI%2==1){
        text.css('font-style', 'italic');
    }
    else{
        text.css('font-style', 'normal');
    }
    
}