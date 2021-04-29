function attachEvents() {
	let collection = $('#items li');

	collection.on('click', select);

	function select(){
		if($(this).hasClass('selected')){
			$(this).removeClass('selected');
			$(this).css('background', '');
		}
		else{
			$(this).addClass('selected');
			$(this).css('background', '#DDD');
		}
	}

	$('#showTownsButton').on('click', show);

	function show(){
		let array=[];
		for(i of collection){
			if($(i).hasClass('selected')){
				array.push(i.textContent);
			}
		}
		$('#selectedTowns').text(array.join(', '));
	}
	
	
}