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

    //Place change event on searchInput------------------------------------
    google.maps.event.addListener(searchBox, 'places_changed', function() {
        var places = searchBox.getPlaces();
        //Bounds---------------------------------------------------
        var bounds = new google.maps.LatLngBounds();
        var i, place;
        for (i = 0; place = places[i]; i++) {
            bounds.extend(place.geometry.location);
        }
        //Hides search box after user searches a location----------
        $('.search-container').slideUp();
        //Fit to the bound-----------------------------------------
        map.fitBounds(bounds);
        map.setZoom(14);
    });

    //Nearby establishment search by click---------------------------
    service = new google.maps.places.PlacesService(map);
    google.maps.event.addListener(map, 'click', function(event) {

        //This checks to see if a place type has been selected----------------

        if ($('button').hasClass('selected')) {
            $('.search-container').slideUp(); //Hides search box when user clicks to search----------
            map.panTo(event.latLng);
            map.setZoom(15);
            clearMarkers(); //Clears markers when the user clicks------------
            filterResults(); //Runs filterResults------------ 
        }
        else {
            /*If a place type has not been selected then
            this shows a pop up that instructs user to select a place type*/
            $('#selectType').show();
            $('#places-btn').addClass('glow'); //Makes places button glow to show where the place type menu is
            setTimeout(function() {
                $('#selectType').hide();
                $('#places-btn').removeClass('glow');
            }, 2500);
        }
    });

    //Sets the info window in the place details html element------------------------------
    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('place-details')
    });
}

//Filter results----------------------------------------------
function filterResults() {

    /*This checks which place type is selected
    before running the search places function*/

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
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], 'click', showInfoWindow); //Show info window when user clicks on a marker---
                setTimeout(placeMarkers(i), i * 60);
                /*This places the markers on the map one by one. This was inspired by Kim Pearton’s 
                project Limitless for more information check the documentation credits section----------
                */
            }
        }
        //If there are results, this displays an info window showing the amount of results to the user--------
        if (results[0]) {
            $('#count').text(results.length);
            $('#results').show();
            setTimeout(function() {
                $('#results').hide();
            }, 2000);
        }
        //If there are no results, this displays a no results info window------------
        if (!results[0]) {
            $('#noResults').show();
            setTimeout(function() {
                $('#noResults').hide();
            }, 2000);
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
    if (place.formatted_address) { //This checks if Google Places api returns the place's details---------
        document.getElementById('address').textContent = place.formatted_address;
    }
    else { //If Google Places API does not return details then "Not Available" will appear in it's place----------
        document.getElementById('address').textContent = 'Not Available';
    }
    if (place.formatted_phone_number) {
        document.getElementById('phoneNum').textContent = place.formatted_phone_number;
    }
    else {
        document.getElementById('phoneNum').textContent = 'Not Available';
    }

    //This returns up to 4 photos and adds them to the info window------------------------------
    $('#photos-wrapper').html('');
    for (var i = 0; i < 4; i++) {
        if($(window).width() <= 576 && i == 2){ break; }//This limits the result to only 2 photos on small devices
        $('#photos-wrapper').append('<img alt="A photo of the establishment" class="photos" src ="' + place.photos[i].getUrl() + '">');
    }

    document.getElementById('url').innerHTML = '<a class="weblink" href="' + place.website + '" target="_blank">' + 'Website ' + '<i class="fas fa-globe-americas"></i>' + '</a>';
    $('.cover').hide();

    if (!place.website) { //If the place does not have a website the link will be covered up with "Not Available"---------
        $('.cover').show();
    }
}

//Shows a pop up window instructing the  user to click or tap on the map when they have selected a place type----------------
$('.place-type').children().click(function() {
    clearMarkers();
    $('#tapMap').show();
    setTimeout(function() {
        $('#tapMap').hide();
    }, 1500);
});
