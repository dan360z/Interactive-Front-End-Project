//Global Variables------
var map;
var service;
var markers = [];
var infoWindow;
//Filter variables----------
var placeType;


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

    //Nearby establishment search by click---------------------------
    service = new google.maps.places.PlacesService(map);
    google.maps.event.addListener(map, 'click', function(event) {
        map.panTo(event.latLng);
        map.setZoom(15);
        clearMarkers();  //Clears markers when the user clicks
        filterResults(); //Runs filterResults------------
    });

    //Info window with place details------------------------------
    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('place-details')
    });
}

//Filter results----------------------------------------------
function filterResults() {
    if ($('button').hasClass('selected')) {

        if ($('#accomodation').hasClass('selected')) {
            placeType = ['lodging'];
        }
        else if ($('#atm').hasClass('selected')) {
            placeType = ['atm'];
        }
        else if ($('#store').hasClass('selected')) {
            placeType = ['store'];
        }
        else if ($('#bar').hasClass('selected')) {
            placeType = ['bar'];
        }
        else if ($('#restaurant').hasClass('selected')) {
            placeType = ['restaurant'];
        }
        else if ($('#night-club').hasClass('selected')) {
            placeType = ['night_club'];
        }
        else if ($('#casino').hasClass('selected')) {
            placeType = ['casino'];
        }
        else if ($('#bowling').hasClass('selected')) {
            placeType = ['bowling_alley'];
        }
        else if ($('#shopping').hasClass('selected')) {
            placeType = ['shopping_mall'];
        }
        else if ($('#park').hasClass('selected')) {
            placeType = ['park'];
        }
        else if ($('#amusement-park').hasClass('selected')) {
            placeType = ['amusement_park'];
        }
        else if ($('#museum').hasClass('selected')) {
            placeType = ['museum'];
        }
        else if ($('#aquarium').hasClass('selected')) {
            placeType = ['aquarium'];
        }
        else if ($('#zoo').hasClass('selected')) {
            placeType = ['zoo'];
        }
        else if ($('#train-station').hasClass('selected')) {
            placeType = ['train_station'];
        }
        else if ($('#taxi-stand').hasClass('selected')) {
            placeType = ['taxi_stand'];
        }
        else if ($('#transit-station').hasClass('selected')) {
            placeType = ['transit_station'];
        }
        else if ($('#subway-station').hasClass('selected')) {
            placeType = ['subway_station'];
        }
        //Runs searchPlaces------------------------------------------
        searchPlaces();
    }
    else {
        alert('Please select an estblishment type!');
    }
}

//Search places---------------------------------------------------------
function searchPlaces() {
    var search = {
        bounds: map.getBounds(),
        types: placeType
    };
    service.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            //Clear markers---------------------------------------------------
            clearMarkers();
            //Create markers----------------------------------------------------
            for (var i = 0; i < results.length; i++) {
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    title: 'Information',
                });
                //Show info window when user clicks on a marker----------------------------
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], 'click', showInfoWindow);
                setTimeout(placeMarkers(i), i * 60);
            }
        }
        if (!results[0]) {
            alert('No results nearby!');
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
