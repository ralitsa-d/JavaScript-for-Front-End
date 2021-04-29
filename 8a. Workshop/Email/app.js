// var fisrtnameField = document.getElementById('firstName');
// firstnameField.onkeydown = updateNameDisplay;
// firstnameField.onkeyup = updateNameDisplay;
// firstnameField.onkeypress = updateNameDisplay;

// var lastnameField=document.getElementById('lastName')
// firstnameField.onkeydown = updateNameDisplay;
// firstnameField.onkeyup = updateNameDisplay;
// firstnameField.onkeypress = updateNameDisplay;

// var companyField = document.getElementById('company');
// firstnameField.onkeydown = updateNameDisplay;
// firstnameField.onkeyup = updateNameDisplay;
// firstnameField.onkeypress = updateNameDisplay;

// var branchField = document.getElementById('branch');
// firstnameField.onkeydown = updateNameDisplay;
// firstnameField.onkeyup = updateNameDisplay;
// firstnameField.onkeypress = updateNameDisplay;

// function updateNameDisplay() {
//     document.getElementById('workEmail').value = this.value;
// }


let firstName= $('#firstName');
let lastName=$('#lastName');
let company=$('#company');
let branch=$('#branch');


$('.form-control').on('keyup', function(){
    // firstName.on('keypress', function(){
    //     firstName.val() = this.value;
    // })
    // lastName.on('keypress', function(){
    //     firstName.val() = this.value;
    // })
    // company.on('keypress', function(){
    //     firstName.val() = this.value;
    // })
    // branch.on('keypress', function(){
    //     firstName.val() = this.value;
    // })
    // console.log('alabala');
    document.getElementById('workEmail').value = firstName.val() + '.' + lastName.val()+ '@' + branch.val() + '-'+ company.val() + '.com';
});






