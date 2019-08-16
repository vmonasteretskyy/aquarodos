$(document).ready(function () {
    // news slider
    $('.slider-news').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        // autoplay: true,
        // autoplaySpeed: 2000,
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

});