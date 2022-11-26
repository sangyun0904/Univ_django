(function ($) {
/* ===================================================
    [Validate]
*/
    
    $('.register-form').on('submit', function(){
        var username = $('#name').val();
        var pass = $('#pass').val();
        var re_pass = $('#re_pass').val();

        var check = true;

        if (username.length < 1) {
            alert("must be more than 1 characters");
            check = false;
        }

        else if (pass != re_pass) {
            alert("Those password doesn't match try again!");
            check = false;
        }

        return check;
    })

})(jQuery);