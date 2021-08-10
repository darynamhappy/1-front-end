// import $ from 'jquery';
// import 'slick-carousel';

function sliderTitle() {
    $(document).ready(function(){
        $('.hero__slider').slick({
            arrows: false,
            dots: true,
        });
    })
}

export default sliderTitle;
