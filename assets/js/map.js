//Global Variables------
var map;
var service;
var markers = [];
var infoWindow;

//Initialize Map------------------------------------
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2.5,
        center: {
            lat: 51.50741,
            lng: -0.1278
        }
    });

    //Place search---------------------------------------
    var searchBox = new google.maps.places.SearchBox(document.getElementById('searchPlace'));

    //place change event on searchInput------------------------------------
    google.maps.event.addListener(searchBox, 'places_changed', function() {
        var places = searchBox.getPlaces();
        //Bounds---------------------------------------------------
        var bounds = new google.maps.LatLngBounds();
        var i, place;
        for (i = 0; place = places[i]; i++) {
            bounds.extend(place.geometry.location);
        }
        //Fit to the bound-----------------------------------------
        map.fitBounds(bounds);
        map.setZoom(14);
    });

    //Nearby establishment search click---------------------------
    service = new google.maps.places.PlacesService(map);

    google.maps.event.addListener(map, 'click', function(event) {
        map.panTo(event.latLng);
        map.setZoom(15);
        searchBarsandRestaurants();
    });

    //Info window with place details--------------------------------
    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('place-details')
    });
}

//Search bars and restaurants---------------------------------------------------------
function searchBarsandRestaurants() {
    var search = {
        bounds: map.getBounds(),
        types: ['restaurant', 'bar']
    };
    service.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearMarkers();
            //Creates markers----------------------------------------------------
            for (var i = 0; i < results.length; i++) {
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location
                    //icons here 
                });
                //Show info window when user clicks on a marker----------------------------
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], 'click', showInfoWindow);
                setTimeout(placeMarkers(i), i * 60);
            }
        }
    });
}

//Clear markers---------------------------------
function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

//Add markers to map----------------------------
function placeMarkers(i) {
    return function() {
        markers[i].setMap(map);
    };
}

//Get place details------------------------------------------
function showInfoWindow() {
    var marker = this;
    service.getDetails({ placeId: marker.placeResult.place_id },
        function(place, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            infoWindow.open(map, marker);
            setPlaceDetails(place);
        });
}

//Add place details to info window------------------------------------------------- 
function setPlaceDetails(place) {
    document.getElementById('place-name').textContent = place.name;
}
