import sliderTitle from "./slider";

function sliderNews () {
    $(document).ready(function(){
        $('.news__news-items').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<span class="priw_arrow"><i class="fas fa-angle-left"><</i></span>',
            nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right">></i></span>',
            dots: true,
            responsive: [{
                breakpoint: 993,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1
                }
            },
            ]
        });
    })
};

export default sliderNews;
