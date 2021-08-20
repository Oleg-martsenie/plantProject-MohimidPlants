$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('bx-x')
        $('.navbar').toggleClass('nav-toggle')
    }); 
    $(window).on('load scroll', function() {
        $('#menu').removeClass('bx-x')
        $('.navbar').removeClass('nav-toggle')
    });
});