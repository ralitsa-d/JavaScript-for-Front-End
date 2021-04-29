$('#clickFace').click(function(){
    swal({
        title: "Leave this site?",
        text: "If you click 'OK', you will be redirected to https://facebook.com",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "OK",
        closeOnConfirm: true
      },
      function(){
        location.href = 'https://facebook.com';
        //window.open('https://facebook.com');
      });
});
$('#clickGoogle').click(function(){
    swal({
        title: "Leave this site?",
        text: "If you click 'OK', you will be redirected to https://accounts.google.com",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "OK",
        closeOnConfirm: true
      },
      function(){
        location.href="https://accounts.google.com";
        //window.onload=('https://accounts.google.com');
      });
})


$('.dropify').dropify();

$('#submit').click(function (){
  swal("Good job!", "You are registered!", "success");

  let collection = $('.custom-input');
  for(i of collection){
    i.value="";
  }

  var drEvent = $('.dropify').dropify();
  drEvent = drEvent.data('dropify');
  drEvent.resetPreview(); 
  drEvent.clearElement(); 
});
