function initialize() {


    /*****************************************
    Simple Map
    *****************************************/
    var stylemap=[
    {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": -20
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 30
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": 50
            },
            {
                "saturation": -97
            }
        ]
    }
]
    var locations = [
        ['EY Kinfra', 8.580342,76.877974, 4],
        ['EY Technopark',8.556748,76.881879, 5],
        ['EY Kochi',10.014672,76.363393, 3]
    ];
    var myLatlng = new google.maps.LatLng(22.268764,78.310547);
    var map = new google.maps.Map(document.getElementById('simpleMap'), {
        zoom: 3,
        center: new google.maps.LatLng(-33.92, 151.25),
        center: myLatlng,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles : stylemap
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }



    /*
      var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
      var mapOptions = {
        zoom:1,
        center: myLatlng,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false
      }
      var map = new google.maps.Map(document.getElementById('simpleMap'), mapOptions);

      var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Hello World!'
      });*/

    /*var simpleMapProp = {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:2,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var simpleMap = new google.maps.Map(document.getElementById("simpleMap"), simpleMapProp);*/



    /*****************************************
    Weather Map
    *****************************************/
    var weatherMapProp = {
        zoom: 6,
        center: new google.maps.LatLng(49.265984, -123.127491)
    };

    var weatherMap = new google.maps.Map(document.getElementById('weatherMap'), weatherMapProp);

    var weatherLayer = new google.maps.weather.WeatherLayer({
        temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
    });
    weatherLayer.setMap(weatherMap);

    var cloudLayer = new google.maps.weather.CloudLayer();
    cloudLayer.setMap(weatherMap);



    /*****************************************
    Traffic Map
    *****************************************/
    var trafficMapProp = {
        zoom: 13,
        center: new google.maps.LatLng(34.04924594193164, -118.24104309082031)
    }

    var trafficMap = new google.maps.Map(document.getElementById('trafficMap'), trafficMapProp);

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(trafficMap);







    /*****************************************
    Street View Map
    *****************************************/
    var panoMapProp = {
        position: new google.maps.LatLng(42.345573, -71.098326),
        addressControlOptions: {
            position: google.maps.ControlPosition.BOTTOM
        },
        linksControl: false,
        panControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        enableCloseButton: false
    };

    var panorama = new google.maps.StreetViewPanorama(document.getElementById('streetviewMap'), panoMapProp);



    /*****************************************
    Transit Map
    *****************************************/
    var transitMapProp = {
        zoom: 13,
        center: new google.maps.LatLng(51.501904, -0.115871)
    }

    var transitMap = new google.maps.Map(document.getElementById('transitMap'), transitMapProp);

    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(transitMap);




}


google.maps.event.addDomListener(window, 'load', initialize);
