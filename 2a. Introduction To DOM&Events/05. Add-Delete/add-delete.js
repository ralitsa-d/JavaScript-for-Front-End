function addItem() {
    let text = document.getElementById('newText').value;
    let li1 = document.createElement('li');
    let ul = document.getElementById('items');
    if(text!==''||text!==' '){
        li1.textContent = text;
        let del = document.createElement('span');
        del.innerHTML ='<a href ="#">[Delete]</a>';
        del.addEventListener('click', deleteItem);
        function deleteItem(){
            let currentItem = this.parentNode; //ul>li>span =>this e span;
            let ul = currentItem.parentNode;
            ul.removeChild(currentItem);
        }

        li1.appendChild(del);
    
        ul.appendChild(li1);
        document.getElementById('newText').value='';
    }
}