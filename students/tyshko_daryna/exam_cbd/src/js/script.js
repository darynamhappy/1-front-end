import $ from 'jquery';
import 'slick-carousel';
import 'lightbox2';
import products from './products';
import Vue from 'vue/dist/vue.esm.browser';

const pathImageFolder = './images/';
const currensySymbol = '$';
const currensySymbolSecond = 'USD';
const catalogVm = new Vue ({
    el: '#catalog',
    data: {
        products: products,
        pathImageFolder: pathImageFolder,
        currensySymbol: currensySymbol,
        currensySymbolSecond: currensySymbolSecond,
    },
    methods: {
        addToCart(product) {
            const productInCart = this.isCartProduct(product.id);

            if (productInCart) {
                productInCart.qty++;
            } else {
                cart.cartList.push({
                    id: product.id,
                    sku: product.sku,
                    name: product.name,
                    img: product.img,
                    price: product.price,
                    qty: 1
                });
            }
        },
        isCartProduct(productId) {
            return cart.cartList.find(product => product.id === productId);
        },
    },
    computed: {},
    watch: {},
});

const cart = new Vue ({
    el: "#cart",
    data: {
        cartList: [],
        pathImageFolder: pathImageFolder,
        currensySymbol: currensySymbol,
        currensySymbolSecond: currensySymbolSecond,
    },
    computed: {
        getCountProduct() {
            if (!this.cartList.length) return 0;

            return this.cartList.map(product => product.qty).reduce((sum, qty) => sum + qty);
        },
        getTotalPrice() {
            if (!this.cartList.length) return 0;

            return this.cartList.map(product => product.price * product.qty).reduce((sum, qty) => sum + qty).toLocaleString();
        },
    },
    methods: {
        setQtyProduct(product, isIncrement) {
            if (isIncrement) {
                product.qty++;
            } else {
                if (product.qty < 2) {
                    this.removeProduct(this.findProductIndex(product.id));
                    return;
                }
                product.qty--;
            }
            this.saveToLocalStorage();
        },
        findProductIndex(productId) {
            return this.cartList.map(product => product.id).indexOf(productId);
        },
        removeProduct(productIndex) {
            if (productIndex === -1) return;

            this.cartList.splice(productIndex, 1);
        },
    }
})


// import spoller from './lib/spoller';

// spoller();
// import headerSlider from './lib/headerSlider';
// import newsSlider from './lib/newsSlider';
// import headerMenuNavigation from './lib/headerMenuNavigation';
// import seeMore from './lib/seeMore';
// import formValidationFooter from './lib/validationForm';
// import googleMap from './lib/googleMap';

// headerSlider();
// newsSlider();
// headerMenuNavigation();
// seeMore();
// formValidationFooter();
// googleMap();


// Add the searchActive class when hovering to the search button and increase the input field
// Добавляем класс searchActive при ховере на кнопку search  и увеличиваем поле input (header:128 searchActive);

function addInputClass() {
    setTimeout(() => {
        if ($('.header__search-input').hasClass('searchActive2')) {
            $('.header__search-input').removeClass('searchActive2');
        } else
            $('.header__search-input').addClass('searchActive');

        // setTimeout(() => {

        //     $('.header__search-input').addClass('searchActive2');
        // }, 2000);
        // $('.header__search-input').removeClass('searchActive2');
    }, 0);
}
function removeInputClass() {
    setTimeout(() => {
        if ($('.header__search-input').hasClass('searchActive')) {
            setTimeout(() => {
                $('.header__search-input').removeClass('searchActive');

                $('.header__search-input').addClass('searchActive2');
            }, 1000);
        }

        // $('.header__search-input').removeClass('searchActive');
        // $('.header__search-input').addClass('searchActive2');
        // $('.header__search-input').removeClass('searchActive2');
    }, 0);
}
//

$('.header__search-button').hover(addInputClass, removeInputClass)
$('.header__search-button').mouseenter(addInputClass).mouseleave(removeInputClass);
// End search Active




// Open Burger Menu
const menuList = document.querySelector(".menu__list"),
    menuBurgerBtn = document.querySelector(".menu__burger-btn");
menuBurgerBtn.addEventListener("click", (function () {
    menuList.classList.toggle("nav-open");
}));

// Open Search in burger menu

const menuLinkSearch = document.querySelector(".menu__link-search"),
    searchJs = document.querySelector(".search-js");
menuLinkSearch.addEventListener("click", (function () {
    searchJs.classList.toggle("active");
}));


// Section About tabSize: 
$('.tabs-js').each(function () {
    let ths = $(this);
    ths.find('.tabs__content-item').not(':first').hide();
    ths.find('.tabs__item').click(function () {
        ths.find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
        ths.find('.tabs__content-item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
});





// Work Slider

// $(document).on('ready', function () {
$('.slider1').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // dots: true,

    arrows: true,
    // Navigation Buttons previous and next
    prevArrow: $('.product__navigation-previous'),
    nextArrow: $('.product__navigation-next'),

    responsive: [
        {
            breakpoint: 992,
            settings: {
                // arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 578,
            settings: {
                // arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]


    // customPaging: function (slick, index) {
    //     var targetImage = slick.$slides.eq(index).find('img').attr('src');
    //     return '<img src=" ' + targetImage + ' "/>';
    // }
});
    // });



    //////
;
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


spoller();



function btnMenu () {
    const menuBurger  = document.querySelector('.cart');
if (menuBurger) {
    const menuItems = document.querySelector('.cart__mini-cart');
    menuBurger.addEventListener('click', function (e) {
        menuBurger.classList.toggle('active');
        menuItems.classList.toggle('open-active');
    });
}
}

btnMenu();

$(document).ready(function () {
    //Single Item 
    $('.single-item1').slick({
        infinite: true,
        arrows: true,
        // adaptiveHeight: true,
        // adaptiveWidth: true,

    });

    responsive: [

        {
            breakpoint: 578,
            settings: {
                // arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 0
            }
        }
    ]



    // responsive: [
    //     {
    //         breakpoint: 1200,
    //         settings: {
    //             // arrows: false,
    //             // centerMode: true,
    //             // centerPadding: '40px',
    //             slidesToShow: 1,
    //         }
    //     },

    // ]

});


// slider testemonial

/*
 * We trigger the factory() function is different
 * ways to support modular JavaScript libraries. See
 * the 'Wrapping Up' section of the tutorial for
 * more information
 *
 */
(function (factory) {

    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory($);
    }

})(function ($) {

    /*
       * We define Zippy as a variable of type ‘function’. 
     * Here, we use an anonymous function to ensure 
     * that the logic inside the function is executed immediately. 
       *
       */
    var Zippy = (function (element, settings) {

        var instanceUid = 0;

        /*
         * The constructor function for Zippy
         *
         */
        function _Zippy(element, settings) {
            this.defaults = {
                slideDuration: '3000',
                speed: 500,
                dots: false,
                arrowRight: '.arrow-right',
                arrowLeft: '.arrow-left'
            };

            // We create a new property to hold our default settings after they
            // have been merged with user supplied settings
            this.settings = $.extend({}, this, this.defaults, settings);

            // This object holds values that will change as the plugin operates
            this.initials = {
                currSlide: 0,
                $currSlide: null,
                totalSlides: false,
                csstransitions: false
            };

            // Attaches the properties of this.initials as direct properties of Zippy
            $.extend(this, this.initials);

            // Here we'll hold a reference to the DOM element passed in
            // by the $.each function when this plugin was instantiated
            this.$el = $(element);

            // Ensure that the value of 'this' always references Zippy
            this.changeSlide = $.proxy(this.changeSlide, this);

            // We'll call our initiator function to get things rolling!
            this.init();

            // A little bit of metadata about the instantiated object
            // This property will be incremented everytime a new Zippy carousel is created
            // It provides each carousel with a unique ID
            this.instanceUid = instanceUid++;
        }

        return _Zippy;

    })();

    /**
       * Called once per instance
       * Calls starter methods and associate the '.zippy-carousel' class
       * @params void
       * @returns void
       *
       */
    Zippy.prototype.init = function () {
        //Test to see if cssanimations are available
        this.csstransitionsTest();
        // Add a class so we can style our carousel
        this.$el.addClass('zippy-carousel');
        // Build out any DOM elements needed for the plugin to run
        // Eg, we'll create an indicator dot for every slide in the carousel
        this.build();
        // Eg. Let the user click next/prev arrows or indicator dots
        this.events();
        // Bind any events we'll need for the carousel to function
        this.activate();
        // Start the timer loop to control progression to the next slide
        this.initTimer();
    };

    /**
     * Appropriated out of Modernizr v2.8.3
     * Creates a new DOM element and tests existence of properties on it's
     * Style object to see if CSSTransitions are available
     * @params void
     * @returns void
     *
     */
    Zippy.prototype.csstransitionsTest = function () {
        var elem = document.createElement('modernizr');
        //A list of properties to test for
        var props = ["transition", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
        //Iterate through our new element's Style property to see if these properties exist
        for (var i in props) {
            var prop = props[i];
            var result = elem.style[prop] !== undefined ? prop : false;
            if (result) {
                this.csstransitions = result;
                break;
            }
        }
    };

    /**
     * Add the CSSTransition duration to the DOM Object's Style property
     * We trigger this function just before we want the slides to animate
     * @params void
     * @returns void
     *
     */
    Zippy.prototype.addCSSDuration = function () {
        var _ = this;
        this.$el.find('.slide').each(function () {
            this.style[_.csstransitions + 'Duration'] = _.settings.speed + 'ms';
        });
    }

    /**
   * Remove the CSSTransition duration from the DOM Object's style property
   * We trigger this function just after the slides have animated
   * @params void
   * @returns void
   *
   */
    Zippy.prototype.removeCSSDuration = function () {
        var _ = this;
        this.$el.find('.slide').each(function () {
            this.style[_.csstransitions + 'Duration'] = '';
        });
    }

    /**
     * Creates a list of indicators based on the amount of slides
     * @params void
     * @returns void
     *
     */
    Zippy.prototype.build = function () {
        var $indicators = this.$el.append('<ul class="indicators" >').find('.indicators');
        this.totalSlides = this.$el.find('.slide').length;
        for (var i = 0; i < this.totalSlides; i++) $indicators.append('<li data-index=' + i + '>');
    };

    /**
     * Activates the first slide
     * Activates the first indicator
     * @params void
     * @returns void
     *
     */
    Zippy.prototype.activate = function () {
        this.$currSlide = this.$el.find('.slide').eq(0);
        this.$el.find('.indicators li').eq(0).addClass('active');
    };

    /**
   * Associate event handlers to events
   * For arrow events, we send the placement of the next slide to the handler
   * @params void
   * @returns void
   *
   */
    Zippy.prototype.events = function () {
        $('body')
            .on('click', this.settings.arrowRight, { direction: 'right' }, this.changeSlide)
            .on('click', this.settings.arrowLeft, { direction: 'left' }, this.changeSlide)
            .on('click', '.indicators li', this.changeSlide);
    };

    /**
     * TIMER
     * Resets the timer
     * @params void
     * @returns void
     *
     */
    Zippy.prototype.clearTimer = function () {
        if (this.timer) clearInterval(this.timer);
    };

    /**
     * TIMER
     * Initialise the timer
     * @params void
     * @returns void
     *
     */
    Zippy.prototype.initTimer = function () {
        this.timer = setInterval(this.changeSlide, this.settings.slideDuration);
    };

    /**
     * TIMER
     * Start the timer
     * Reset the throttle to allow changeSlide to be executable
     * @params void
     * @returns void
     *
     */
    Zippy.prototype.startTimer = function () {
        this.initTimer();
        this.throttle = false;
    };

    /**
     * MAIN LOGIC HANDLER
     * Triggers a set of subfunctions to carry out the animation
     * @params	object	event
     * @returns void
     *
     */
    Zippy.prototype.changeSlide = function (e) {
        //Ensure that animations are triggered one at a time
        if (this.throttle) return;
        this.throttle = true;

        //Stop the timer as the animation is getting carried out
        this.clearTimer();

        // Returns the animation direction (left or right)
        var direction = this._direction(e);

        // Selects the next slide
        var animate = this._next(e, direction);
        if (!animate) return;

        //Active the next slide to scroll into view
        var $nextSlide = this.$el.find('.slide').eq(this.currSlide).addClass(direction + ' active');

        if (!this.csstransitions) {
            this._jsAnimation($nextSlide, direction);
        } else {
            this._cssAnimation($nextSlide, direction);
        }
    };

    /**
     * Returns the animation direction, right or left
     * @params	object	event
     * @returns strong	animation direction
     *
     */
    Zippy.prototype._direction = function (e) {
        var direction;

        // Default to forward movement
        if (typeof e !== 'undefined') {
            direction = (typeof e.data === 'undefined' ? 'right' : e.data.direction);
        } else {
            direction = 'right';
        }
        return direction;
    };

    /**
     * Updates our plugin with the next slide number
     * @params	object	event
     * @params	string	animation direction
     * @returns boolean continue to animate?
     *
     */
    Zippy.prototype._next = function (e, direction) {

        // If the event was triggered by a slide indicator, we store the data-index value of that indicator
        var index = (typeof e !== 'undefined' ? $(e.currentTarget).data('index') : undefined);

        //Logic for determining the next slide
        switch (true) {
            //If the event was triggered by an indicator, we set the next slide based on index
            case (typeof index !== 'undefined'):
                if (this.currSlide == index) {
                    this.startTimer();
                    return false;
                }
                this.currSlide = index;
                break;
            case (direction == 'right' && this.currSlide < (this.totalSlides - 1)):
                this.currSlide++;
                break;
            case (direction == 'right'):
                this.currSlide = 0;
                break;
            case (direction == 'left' && this.currSlide === 0):
                this.currSlide = (this.totalSlides - 1);
                break;
            case (direction == 'left'):
                this.currSlide--;
                break;
        }
        return true;
    };

    /**
     * Executes the animation via CSS transitions
     * @params	object	Jquery object the next slide to slide into view
     * @params	string	animation direction
     * @returns void
     *
     */
    Zippy.prototype._cssAnimation = function ($nextSlide, direction) {
        //Init CSS transitions
        setTimeout(function () {
            this.$el.addClass('transition');
            this.addCSSDuration();
            this.$currSlide.addClass('shift-' + direction);
        }.bind(this), 100);

        //CSS Animation Callback
        //After the animation has played out, remove CSS transitions
        //Remove unnecessary classes
        //Start timer
        setTimeout(function () {
            this.$el.removeClass('transition');
            this.removeCSSDuration();
            this.$currSlide.removeClass('active shift-left shift-right');
            this.$currSlide = $nextSlide.removeClass(direction);
            this._updateIndicators();
            this.startTimer();
        }.bind(this), 100 + this.settings.speed);
    };

    /**
     * Executes the animation via JS transitions
     * @params	object	Jquery object the next slide to slide into view
     * @params	string	animation direction
     * @returns void
     *
     */
    Zippy.prototype._jsAnimation = function ($nextSlide, direction) {
        //Cache this reference for use inside animate functions
        var _ = this;

        // See CSS for explanation of .js-reset-left
        if (direction == 'right') _.$currSlide.addClass('js-reset-left');

        var animation = {};
        animation[direction] = '0%';

        var animationPrev = {};
        animationPrev[direction] = '100%';

        //Animation: Current slide
        this.$currSlide.animate(animationPrev, this.settings.speed);

        //Animation: Next slide
        $nextSlide.animate(animation, this.settings.speed, 'swing', function () {
            //Get rid of any JS animation residue
            _.$currSlide.removeClass('active js-reset-left').attr('style', '');
            //Cache the next slide after classes and inline styles have been removed
            _.$currSlide = $nextSlide.removeClass(direction).attr('style', '');
            _._updateIndicators();
            _.startTimer();
        });
    };

    /**
       * Ensures the slide indicators are pointing to the currently active slide
       * @params	void
       * @returns	void
       *
       */
    Zippy.prototype._updateIndicators = function () {
        this.$el.find('.indicators li').removeClass('active').eq(this.currSlide).addClass('active');
    };

    /**
     * Initialize the plugin once for each DOM object passed to jQuery
     * @params	object	options object
     * @returns void
     *
     */
    $.fn.Zippy = function (options) {

        return this.each(function (index, el) {

            el.Zippy = new Zippy(el, options);

        });

    };


});

// Custom options for the carousel
var args = {
    arrowRight: '.arrow-right', //A jQuery reference to the right arrow
    arrowLeft: '.arrow-left', //A jQuery reference to the left arrow
    speed: 1000, //The speed of the animation (milliseconds)
    slideDuration: 60000000 //The amount of time between animations (milliseconds)
};

$('.carousel').Zippy(args);




// Header Hover Search Input
$(document).ready(function () {
    // console.log("ready!");
    $('.search__form').hover(function () {
        $(this).addClass('active'); // add class when mouseover happen
    }, function () {
        $(this).removeClass('active'); // remove class when mouseout happen
    });
});


// Smooth scrolling to the anchor on the page
setTimeout(function () {
    $('ul a').on('click', smothScroll);
    $('.llnk').on('click', smothScroll);
    $('.menu__link').on('click', smothScroll);
    $('.header__link').on('click', smothScroll);
    $('.footer__logo-link').on('click', smothScroll);
    // $('.intro__link').on('click', smothScroll);
    // $('.footer__logo').on('click', smothScroll);
    $('.footer__logo').on('click', smothScroll);
    $('.intro__scroll-link').on('click', smothScroll);
}, 0);


const smothScroll = function () {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 700, // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });
    return false;
}



// Smooth scrolling to the anchor on the page (other elements)
$(document).ready(function () {
    setTimeout(function () {
        $(document).ready(function () {
            const smothScrollMenu = function () {
                // e.preventDefault();
                let anchor = $(this).attr('href');
                $('html, body').stop().animate({
                    scrollTop: $(anchor).offset().top - 60
                }, 800);
            };
            $(".intro__scroll-link").on("click", smothScrollMenu);
            $(".footer__logo").on("click", smothScrollMenu);
            $(".intro__btn-link").on("click", smothScrollMenu);
            $(".intro__link").on("click", smothScrollMenu);
            $(".header__logo").on("click", smothScrollMenu);
        });
    }, 0);
});

// Close Burger Menu after click on link

$(document).ready(function () {
    setTimeout(function () {
        $(".menu__link").on('click', function () {
            $("#menuBtn").removeClass('nav-open');
            $(".search-js").removeClass('active');
        });

    }, 0);
});

// Close Search Input in burger Menu after focusout
$(document).ready(function () {
    $(".search-js").focusin(function () { // задаем функцию при получении фокуса элементом  <div>, или любым вложенным элементом
        $(this).addClass('active'); // устанавливаем элементу <div> цвет заднего фона красный
    });
    $("div").focusout(function () { // задаем функцию при потере фокуса элементом  <div>, или любым вложенным элементо
        $(".search-js").removeClass('active'); // устанавливаем элементу <div> цвет заднего фона зеленый
    });
});



//Heder Menu Naviagation (header_fixed)
function headerMenuNavigation() {
    const $header = $('#header');
    let isSticky = false;
    $(window).on('scroll', function () {
        setTimeout(function () {
            if ($(this).scrollTop() > 900 && !isSticky) {
                $header.addClass("header_fixed");
                $header.removeClass("header_none");
                isSticky = true;
            } else if ($(this).scrollTop() < 880 && isSticky) {
                $header.removeClass("header_fixed");

                isSticky = false;
            }
        }, 0);
    });
};


//Validation Email Form v1
$(function () {
    $(".btn-submit-footer").on("click", validate);

    // Validate email
    function validateEmail(email) {
        var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
    }

    // send form
    function sendForm() {
        $(".error").text("Form sent successfully").fadeIn();
    }

    // validate email and send form after success validation
    function validate() {
        var email = $(".footer__contact-form-email").val();
        var $error = $(".error");
        $error.text("");

        if (validateEmail(email)) {
            $error.fadeOut();
            sendForm();
        } else {
            $error.fadeIn();
            $error.text(email + " is not valid");
        }
        return false;
    }
});


// Validation ver 2
function formValidationFooter() {
    function validateEmail(email) {
        const remail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return remail.test(email);
    }

    // function validateUser(userName) {
    //     const ruser = /^[a-zA-Z0-9]+$/;
    //     return ruser.test(userName);
    // }

    let checkName = false;
    function validate2() {
        const $result2 = $("#result2");
        const userInput = document.querySelector('#userName');
        const userName = $("#userName").val();
        $result2.text("");
        userInput.style.borderColor = "green";
        if (validateUser(userName)) {
            $result2.text(userName + " is valid :)))");
            $result2.css("color", "green");
            $('#userName').css("borderColor", "green");
            checkName = true;
        } else {
            $result2.text(userName + " is not valid :(((");
            $result2.css("color", "red");
            userInput.style.borderColor = "red";
            checkName = false;
        }
        if (checkName === true) {
            setAttribFalse();
        } else setAttribTrue();
    }

    const setAttribTrue = function setTrue() {
        $('input[type="submit"]').prop('disabled', true);
    };
    const setAttribFalse = function setFalse() {
        $('input[type="submit"]').prop('disabled', false);
    };

    let checkEmail = false;
    function validate() {
        const $result = $("#result");
        const emailInput = document.querySelector('#email');
        const email = $("#email").val();
        $result.text("");
        emailInput.style.borderColor = "red";

        if (validateEmail(email)) {
            $result.text(email + " is valid :)))");
            $result.css("color", "green");
            emailInput.style.borderColor = "green";
            checkEmail = true;
        } else {
            $result.text(email + " is not valid :(((");
            $result.css("color", "red");
            emailInput.style.borderColor = "red";
            checkEmail = false;
        }
        if (checkEmail === true) {
            setAttribFalse();
        } else setAttribTrue();
    }

    $("#email").on("input", validate);
    $("#userName").on("input", validate2);

    $(document).ready(function () {
        let setNameColorRed = function setNameColorRedFunction() {
            $("#result2").text('Input your name');
            $("#result2").css("color", "red");
            $('#userName').css("borderColor", "red");
        }
        let setEmailColorRed = function setNameColorRedFunction() {
            $("#result").text('Input your email');
            $("#result").css("color", "red");
            $('#email').css("borderColor", "red");
            event.preventDefault();
        }
        $('input[type="submit"]').on('click', function () {
            // if ($("#userName").val().length === 0) {
            //     setNameColorRed();
            //     event.preventDefault();
            // }
            if ($("#email").val().length === 0) {
                setEmailColorRed();
                event.preventDefault();
                return;
            }
        });
    });
};
formValidationFooter();
