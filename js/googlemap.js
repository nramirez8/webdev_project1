function init(){
	var gmap = document.getElementById('gmap');
	var myLocation = new google.maps.LatLng(34.061574863566634, -118.29450659755325);
	var mapOptions = {
		center: myLocation,
		zoom: 20,
		mapTypeId: google.maps.MapTypeId.HYBRID,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.TOP_LEFT
		}
	};

	var myMap = new google.maps.Map(gmap, mapOptions);
  
  var threeCheersMarker = new google.maps.Marker({
    position: {lat: 34.0615500, lng: -118.2945200},
    map: myMap,
    icon: {
      url: 'media/three_cheers.jpg',
      scaledSize: new google.maps.Size(50, 50)
    }
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