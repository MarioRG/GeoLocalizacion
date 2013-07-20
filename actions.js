$(document).ready(function(){
  document.addEventListener("deviceready",
                            function{
    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        initialize(position.coords.latitude,position.coords.longitude);
    };
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
                                },
                                false)
});

function initialize(lat,long) {
				//Posición del mapa
				var latlng = new google.maps.LatLng(lat,long);
				var myOptions = {
					zoom: 5,
					center: latlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
				//Marcador
				var marker = new google.maps.Marker({
					position: latlng, 
					map: map, 
					title:"Mi posición"
				});
			}