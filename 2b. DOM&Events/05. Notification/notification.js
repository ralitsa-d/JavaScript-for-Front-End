function notify(message) {
   let notifyDiv = document.getElementById('notification');
   notifyDiv.textContent = message;
   notifyDiv.style.display = 'block';

   setTimeout(function(){
    notifyDiv.style.display = 'none';
    }, 2000)
}