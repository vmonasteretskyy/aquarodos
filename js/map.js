var gmarkers1 = [];
var markers1 = [];
var infowindow = new google.maps.InfoWindow({
    content: ''
});

// Our markers
markers1 = [
    ['0', '', 48.6886259, 30.63521, 'all'],
    ['1', 'Біла церква, вул. Гоголя 19А, Мебітар', 49.7968044, 30.1205233, 'bila-cerkva'],
    ['2', 'Бердянськ, вул. Свободи 53, Салон Merx', 46.75935, 36.7840544, 'berdiansk'],
    ['3', 'Вінниця, вул. Липовецька, 6А, ТЦ Віват', 49.2499794, 28.5065124, 'vinnycia'],
    ['4', 'Вінниця, вул. Келецька 117Б, ТЦ Plaza Park', 49.2270624, 28.3937443, 'vinnycia'],
    ['5', 'Вишгород, вул. Кургузова 11А', 50.5845714, 30.4798093, 'vyshgorod'],
    ['6', 'Гостомель, вул. Кулішова Д, 26, ТЦ Варшавка', 50.5537294, 30.2912553, 'gostomel'],
    ['7', 'Дніпро, вул. Стартова 9А, ТЦ Нова лінія', 48.3983855, 35.0424133, 'dnipro'],
    ['8', 'Дніпро, вул. Нижньодніпровська 17, ТЦ Караван', 48.5294122, 35.0285771, 'dnipro'],
    ['9', 'Дніпро, вул. Космічна 53А, ТЦ Biennale', 48.4071836, 35.0308192, 'dnipro'],
    ['10', 'Дрогобич, вул. Пилипа орлика 15/3', 49.3591627, 23.5108853, 'drogobych'],
    ['11', 'Житомир, вул. Вітрука 9Б, ТЦ Rolf', 50.2563663, 28.7038255, 'zhytomyr'],
    ['12', 'Запоріжжя, вул. Гагаріна 3, ТЦ Імперія меблів 2 поверх', 47.8369516, 35.1434516, 'zaporizhia'],
    ['13', 'Івано-Франківськ, вул. Мазепи 168А, ТЦ Сільпо, 4 поверх', 48.9077335, 24.6803446, 'ivano-frankivsk']
];

/**
 * Function to init map
 */

function initialize() {
    var center = new google.maps.LatLng(48.6886259, 30.63521);
    var mapOptions = {
        zoom: 6,
        center: center,
        styles: [

        ]
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }


}

/**
 * Function to add marker to map
 */

function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];


    marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: {
            url: "images/icons/location.svg",
            scaledSize: new google.maps.Size(35, 35)
        },

    });

    if (marker1.category == 'all') {
        marker1.icon.url = '';
    }


    gmarkers1.push(marker1);

    // Marker click listener
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
            console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            map.panTo(this.getPosition());
            map.setZoom(15);

        }
    })(marker1, content));



}

/**
* Function to filter markers by category
*/

filterMarkers = function (category) {
    for (i = 0; i < gmarkers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0) {
            marker.setVisible(true);
            map.setZoom(10);
            map.setCenter(gmarkers1[i].getPosition());
            if (category == 'all') {
                map.setZoom(6);
                marker.setVisible(false);

            }
        }

        // Categories don't match
        else {
        }

    }

}

initialize();

$('.maploc').click(function () {
    var markerId = parseInt($(this).data('marker'));
    var marker = gmarkers1[markerId];
    marker.setVisible(true);
    map.setZoom(10);
    map.setCenter(gmarkers1[markerId].getPosition());


})