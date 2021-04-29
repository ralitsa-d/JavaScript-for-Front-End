function search() {
   let towns = $('#towns li')
   let searched = $('#searchText');
   let count = 0;
   for(town of towns){
        if(town.textContent.includes(searched.val())){
            count++;
            $(town).css('font-weight', 'bold');
        }
    }
    let result = $('#result');
    let str = `${count} matches found`;
    result.text(str);
}
