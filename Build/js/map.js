
// This example adds a marker to indicate the position
// of Bondi Beach in Sydney, Australia
function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(42.70268987659134, 23.31310026347637)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);

  var image = 'img/map_marker.png';
  var myLatLng = new google.maps.LatLng(42.70268987659134, 23.31310026347637);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
