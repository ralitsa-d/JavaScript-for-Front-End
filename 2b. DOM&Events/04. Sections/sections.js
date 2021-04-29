function create(sentences) {
    let parentDiv = document.getElementById('content');
    for(sentence of sentences){
        let div = document.createElement('div');
        let paragraph = document.createElement('p');
        div.appendChild(paragraph);
        paragraph.textContent = sentence;
        paragraph.style.display = 'none';
        div.addEventListener('click', function(){
            div.childNodes["0"].style.display = 'block';
            //console.log(div);
        })
        parentDiv.appendChild(div);
    }
}

/*function create(sentences){
    function showText(section){
        section.style.display = 'block';
    }
    let div = document.getElementById('content');
    for(i of sentences){
        let section = document.createElement('p');
        section.textContent = i;
        section.style.display = 'none';
        section.addEventListener('click', showText(section));
        div.appendChild(section);
    }
}*/