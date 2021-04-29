function attachEvents() {
   $('.button').on('click', selectedTown)
   function selectedTown()
   {
       if($(this).hasClass('selected')){
           $(this).removeClass('selected');
       }
       else{
           $('.button').removeClass('selected');
           $(this).addClass('selected');
       }
       /*$('.button').removeClass('selected')//mahame clasa na vsichki
       let currentBtn = $(this).addClass('selected');*/
   }
}
