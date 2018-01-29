if ($('#googleMap').length) {
      var initialize = function () {
          var mapOptions = {
              zoom: 15,
              scrollwheel: false,
              center: new google.maps.LatLng(-2.158131,-79.887279)
          };
          var map = new google.maps.Map(document.getElementById("googleMap"),
              mapOptions);
          var marker = new google.maps.Marker({
              position: map.getCenter(),
              animation: google.maps.Animation.BOUNCE,
              icon: 'img/map-marker.png',
              map: map
          });
      }
      google.maps.event.addDomListener(window, "load", initialize);
