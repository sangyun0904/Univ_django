(function ($) {
/* ===================================================
    [Validate]
*/
    
    $('.register-form').on('submit', function(){
        var username = $('#name').val();
        var pass = $('#pass').val();
        var re_pass = $('#re_pass').val();

        var check = true;
        console.log(username, pass, re_pass, username.length);

        if (username.length < 1) {
            alert("must be more than 1 characters");
            return false;
        }

        else if (pass != re_pass) {
            alert("Those password doesn't match try again!");
            return false;
        }
     
        return false;
    })

})(jQuery);