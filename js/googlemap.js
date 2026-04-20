function init(){
  // Coding my map
	var gmap = document.getElementById('gmap');
	var myLocation = new google.maps.LatLng(34.06171035221062, -118.29433845234723);
	var mapOptions = {
		center: myLocation,
		zoom: 20,
		mapTypeId: google.maps.MapTypeId.HYBRID,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.TOP_LEFT
		}
	};

	var myMap = new google.maps.Map(gmap, mapOptions);

  // Dropping the TCFSR album cover over the church
  var threeCheersMarker = new google.maps.Marker({
    position: {lat: 34.0615500, lng: -118.2945200},
    map: myMap,
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'media/three_cheers.jpg',
      scaledSize: new google.maps.Size(70, 70)
    },
    title: "Click me!"
  });

  // InfoWindow describing the landmark
  var description = '<div id="helena-desc"><h2>Helena Church</h2><p>This is the church in which the famous music video for My Chemical Romance\'s \"Helena\" was recorded.</p></div>';

	var infoWindow = new google.maps.InfoWindow({
      content: description
  });

  // Toggling an animation on mouseover + toggling it off on mouseout
  google.maps.event.addListener(threeCheersMarker, 'mouseover', function() {
    threeCheersMarker.setAnimation(google.maps.Animation.BOUNCE);
  });
  
  google.maps.event.addListener(threeCheersMarker, 'click', function() {
    infoWindow.open(myMap, threeCheersMarker);
  });

  google.maps.event.addListener(threeCheersMarker, 'mouseout', function() {
    threeCheersMarker.setAnimation(null);
  });
  
  // Routing a path from the church to a coffee shop
  const pointA = {lat: 34.06162726495027, lng: -118.29433543387744};
  const pointB = {lat: 34.062066153777266, lng: -118.29395837499546};
  
  const start = new google.maps.Marker({
    position: pointA,
    map: myMap,
    label: "A"
  });
  const end = new google.maps.Marker({
    position: pointB,
    map: myMap,
    label: "B"
  });
  const coffeeRoute = new google.maps.Polyline({
    path: [pointA, {lat: 34.061789994929484, lng: -118.29421168246648}, pointB],
    geodesic: true,
    strokeColor: "#1b86f2",
    strokeOpacity: 1.0,
    strokeWeight: 8,
  });

  coffeeRoute.setMap(myMap);
  
  var route_desc = '<div id="route-desc"><p>Wrap up your visit to the Helena church with  a fresh cup of coffee at About Time cafe! &#9749;&#129656;</p>'
  var coffeeWindow = new google.maps.InfoWindow({
    content: route_desc,
    position: {lat: 34.061846659300045, lng: -118.29416600025745}
  });

  google.maps.event.addListener(coffeeRoute, 'mouseover', function(event) {
    coffeeWindow.open(myMap);
  });
}

google.maps.event.addDomListener(window, 'load', init);