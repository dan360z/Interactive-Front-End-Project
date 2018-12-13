//-Global Variables------
var map;

//-------Initialize Map------------------------------------
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2.5,
        center: {
            lat: 51.50741,
            lng: -0.1278
        }
    });
    //-------------------Place search---------------------------------------

    var searchBox = new google.maps.places.SearchBox(document.getElementById("searchPlace"));

    //place change event on searchInput
    google.maps.event.addListener(searchBox, "places_changed", function() {
        var places = searchBox.getPlaces();
        //Bounds
        var bounds = new google.maps.LatLngBounds();
        var i, place;
        for (i = 0; place = places[i]; i++) {
            bounds.extend(place.geometry.location);
        }
        //Fit to the bound
        map.fitBounds(bounds);
        map.setZoom(14);
    });
}
