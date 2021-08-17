import $ from 'jquery';
import 'slick-carousel';

//News Slider (slick carousel) (Latest News)

function newsSlider() {
    $(document).ready(function () {
        $('.news-slider').slick({
            slidesToShow: 3,
            // Стрелки
            // arrows: true,

            // Navigation Buttons previous and next
            prevArrow: $('.news__navigation-previous'),
            nextArrow: $('.news__navigation-next'),

            // Dots
            // dotsClass: 'news__slick-dots',
            appendDots: $('.news__section-dots'),
            dots: true,
            // infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            // Responsive
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                // settings: 'unslick',
                settings: {
                    slidesToShow: 1
                }
            },
            ]
        });
    });
};

// export default newsSlider;
