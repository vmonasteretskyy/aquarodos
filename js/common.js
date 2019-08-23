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




// var markers = [];
// var map;


// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 6,
//         center: { lat: 48.6886259, lng: 30.63521 },

//     });

//     // array locations
//     var locations = [
//         ["Біла церква", "вул. Гоголя 19А, Мебітар", 49.7965556, 30.1222457],
//         ["Бердянськ", "вул. Свободи 53,Салон Merx", 46.4635555, 36.6733557],
//         ["Вінниця", "вул. Липовецька, 6А, ТЦ Віват", 49.2499794, 28.5065124],
//         ["Вінниця", "вул. Келецька 117Б, ТЦ Plaza Park", 49.2270624, 28.3937443],
//         ["Вишгород", "вул. Кургузова 11А", 50.5845714, 30.4798093],
//         ["Гостомель", "вул. Кулішова Д, 26, ТЦ Варшавка", 50.5520044, 30.2940174],
//         ["Дніпро", "вул. Стартова 9А, ТЦ Нова лінія", 48.3983855, 35.0424133],
//         ["Дніпро", "вул. Нижньодніпровська 17, ТЦ Караван", 48.5294122, 35.0285771],
//         ["Дніпро", "вул. Космічна 53А, ТЦ Biennale", 48.4071836, 35.0308192],
//         ["Дрогобич", "вул. Пилипа орлика 15/3", 49.3591627, 23.5108853],
//         ["Житомир", "вул. Вітрука 9Б, ТЦ Rolf", 50.2616728, 28.6915329],
//         ["Запоріжжя", "вул. Гагаріна 3, ТЦ Імперія меблів 2 поверх", 47.8369516, 35.1434516],
//         ["Івано-Франківськ", "вул. Мазепи 168А, ТЦ Сільпо, 4 поверх", 48.9077335, 24.6803446],
//     ];
//     locations.forEach(function (element) {
//         var marker = new google.maps.Marker({
//             position: element.position,
//             map: map,
//             title: element.title,
//             icon: element.icon,
//             draggable: true,
//             animation: google.maps.Animation.DROP,

//         });
//     });
// }


