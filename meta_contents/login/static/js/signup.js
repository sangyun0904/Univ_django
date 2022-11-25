(function ($) {
/* ===================================================
    [Validate]
*/
    var pass = $('#pass');
    var re_pass = $('#re_pass');

    $('.register-form').on('submit', function(){
        var check = true;
        alert("Those password doesn't match try again!")
        return pass == re_pass;
    })

})(jQuery);