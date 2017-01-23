$(function(){
    $(document).one('click', '.like-review', function(e) {
        $(this).html('<i class="fa fa-check" aria-hidden="true"></i> Toegevoegd');
        $(this).children('.fa-check').addClass('animate-like');
    });
});
