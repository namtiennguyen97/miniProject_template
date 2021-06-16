
function Confirm( $true, $false, id) { /*change*/
    let $content =  "<div class='dialog-ovelay'>" +
        "<div class='dialog'><header>" +
        " <h3> " + "Bạn muốn xóa chứ?" + " </h3> " +
        "<i class='fa fa-close'></i>" +
        "</header>" +
        "<div class='dialog-msg'>" +
        " <p> " + "Nếu bạn xóa, tất cả dữ liệu sẽ không thể khôi phục!" + " </p> " +
        "</div>" +
        "<footer>" +
        "<div class='controls'>" +
        " <button class='button button-danger doAction'>" + $true + "</button> " +
        " <button class='button button-default cancelAction'>" + $false + "</button> " +
        "</div>" +
        "</footer>" +
        "</div>" +
        "</div>";
    $('body').prepend($content);
    $('.doAction').click(function () {
        // hành động sau khi true
        // window.open($link, "_blank"); /*new*/
        $(this).parents('.dialog-ovelay').fadeOut(500, function () {
            $(this).remove();
        });
    });
    $('.cancelAction, .fa-close').click(function () {
        $(this).parents('.dialog-ovelay').fadeOut(500, function () {
            $(this).remove();
        });
    });

}
$('a').click(function () {
    Confirm(  'Tôi hiểu và chấp nhận xóa', 'Cancel', "https://www.google.com.eg"); /*change*/
});
