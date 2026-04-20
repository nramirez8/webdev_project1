function init(){
	var gmap = document.getElementById('gmap');
	var myLocation = new google.maps.LatLng(34.061574863566634, -118.29450659755325);
	var mapOptions = {
		center: myLocation,
		zoom: 20,
		mapTypeId: google.maps.MapTypeId.HYBRID,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.TOP_RIGHT
		}
	};

	var myMap = new google.maps.Map(gmap, mapOptions);
  
  var threeCheersMarker = new google.maps.Marker({
    position: {lat: 34.0615500, lng: -118.2945200},
    map: myMap,
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'media/three_cheers.jpg',
      scaledSize: new google.maps.Size(70, 70)
    } 
  });
  
  var description = '<h2>Helena Church</h2><p>This is the church in which the famous music video for My Chemical Romance\'s \"Helena\" was recorded.</p>';

	var infoWindow = new google.maps.InfoWindow({
      content: description
  });

  google.maps.event.addListener(threeCheersMarker, 'mouseover', function() {
    infoWindow.open(myMap, threeCheersMarker);
  });
}

google.maps.event.addDomListener(window, 'load', init);
	/*var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		icon: 'iit-icon.png'
	});

	var contentString = '<h1>IIT Perlstein Hall</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate odit optio, voluptatem placeat odio dignissimos illo magnam esse asperiores voluptas at iure vero eum, nemo aperiam? Ipsam, atque nobis rem.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});*/