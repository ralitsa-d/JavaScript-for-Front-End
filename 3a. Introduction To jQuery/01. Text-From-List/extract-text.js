/*function extractText() {
    let result =[];
   $('#items li').toArray().map(x => result.push(x.textContent))
   console.dir(result.join(', '));
}*/

function extractText(){
    let result =[];
    let collection = $('#items li');
    for(element of collection){
        result.push(element.textContent);
    }
    $('#result').text(result.join(', '));
}
