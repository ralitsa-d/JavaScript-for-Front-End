function loadRepos() {
    $('#repos').empty();

    let username = $('#username');
    let url = 'https://api.github.com/users/' + username.val()+'/repos';
    
    $.ajax({url, success, error});

    function success(res){
        for(repos of res){
            let listItem = $('<a>').text(repos.full_name);
            listItem.attr('href', repos.html_url)
            $('#repos').append($('<li>').append(listItem));
        }
    }
    function error(err){ 
        $('#repos').empty();
        let newLi = $('<li>');
        newLi.text("Error");
        $('#repos').append(newLi);
    }
}