// check mail cua TTC
function validateMailTtc(value){
    let a = /^[a-zA-Z0-9]+@ttc-solutions.com.vn$/;
    if (a.test(value)){
        $('.validateEmail').removeClass('text-danger');
        $('.validateEmail').addClass('text-success');
        $('.validateEmail').text('Đây là mail của TTC Solution!');
    }
    else {
        $('.validateEmail').removeClass('text-success');
        $('.validateEmail').addClass('text-danger');
        $('.validateEmail').text('Đây không phải mail của TTC! Vui lòng điền đúng định dạng!');
    }
}


// validate



$('#btnLogin').click(function () {
    let a = $('#checkMailTTC').val();
    if (a.length == 0){
        toastr.error('Không được để trống Email!');
    }
});

//set mac dinh
$('#forgotPasswordDiv').hide();


$('#forgotPass').click(function () {

    $('#dashboardClient').html($('#forgotPasswordDiv'));
    $('#forgotPasswordDiv').show();
    $('#loginForm').hide();
});

$('#returnToLogin').click(function () {
    window.location.reload();
});


$('#sendMailBtn').click(function () {
         let a = $('#forgotPasswordInput').val();
         if (a.length == 0){
             toastr.error('Không được để trống Email!');
         }
});


