import $ from 'jquery';
import 'slick-carousel';

// Header Slider (slick-carousel) (Simple Modern)
function headerSlider() {
    $('.header-section__slider').slick({
        infinite: true,
        slidesToShow: 1,
        // slidesToScroll: 3
        appendDots: $('.header-section__dots'),
        dots: true,
        arrows: false,
    });
};

// export default headerSlider;
