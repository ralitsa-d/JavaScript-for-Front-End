/*function toggle() {
     let button = document.getElementsByClassName('button');
     let div =document.getElementById('accordion');
     if(button["0"].innerText === 'More')
     {
         button.["0"].innerText = 'Less';
     }
     else{
         button["0"].innerText = 'More';
     }
}*/
function toggle(){
    let button = document.getElementsByClassName('button')[0];
    let div = document.getElementById('extra');
    if(button.textContent=='More')
    {
        button.textContent='Less';
        div.style.display = 'block';
    }
    else{
        button.textContent = 'More';
        div.style.display = 'none';
    }
}