$(document).ready(function () {
    // news slider
    $('.slider-news').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // burger
    const button = document.getElementById('js-menu-button');

    button.addEventListener('click', e => {
        e.preventDefault();
        button.classList.toggle('menu-button--active');
        document.body.classList.toggle('menu-open');
    });

    $('.burger-menu').click(function () {
        $('.header-nav ul').slideToggle();
    });
    // language
    $('.header__language>p').click(function () {
        $('.header__language ul').slideToggle();
    });
    // header search
    $('.header__search>span').click(function () {
        $('.header__search-field').show();
    });

    $('main').click(function () {
        $('.header__search-field').hide();
    });

    // duo slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        dots: false,
        // centerMode: true,
        focusOnSelect: true,
        nextArrow: '<button type="button" class="slick-next duo-arrow"></button>',
        prevArrow: '<button type="button" class="slick-prev duo-arrow""></button>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

});

function initMap() {
    var markercenter = { lat: 48.6886259, lng: 30.63521 };
    var marker1 = { lat: 49.7965556, lng: 30.1222457 };
    var marker2 = { lat: 46.4635555, lng: 36.6733557 };


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: markercenter
    });


    var marker = new google.maps.Marker({
        position: marker1,
        map: map
    });
    var marker = new google.maps.Marker({
        position: marker2,
        map: map
    });
}