

function spoller () {
    $(document).ready(function() {
        $('.spollers_item__title').click(function(event) {
            if($('.spollers').hasClass('one')){
                $('.spollers_item__title').not($(this)).removeClass('active');
                $('.spollers_item__text').not($(this).next()).slideUp(300);
            }
            $(this).toggleClass('active').next().slideToggle(300);
        });
    });
}

export default spoller;
