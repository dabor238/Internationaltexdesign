function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(-2.1587294, -79.8895231),
    zoom: 17
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
