function extractText() {
    let collection =document.querySelectorAll('#items li');
    let result = '';
    for(let i=0; i<collection.length; i++){
        let item = collection[i].textContent;
        result +=item+'\n';
    }
    document.getElementById('result').textContent = result;
}