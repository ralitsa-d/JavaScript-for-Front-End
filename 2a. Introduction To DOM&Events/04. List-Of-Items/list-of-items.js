function addItem() {
    let newItem = document.getElementById('newItemText').value;
    let ul = document.getElementById('items');
    
    let newLi = document.createElement('li');
    newLi.textContent = newItem;
    ul.appendChild(newLi);
    document.getElementById('newItemText').value='';
}