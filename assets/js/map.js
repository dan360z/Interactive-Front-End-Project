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
}