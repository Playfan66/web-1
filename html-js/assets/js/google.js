//  Google Map
function initialize() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        // Aqui ponemos las coordenadas donde queremos centrar el mapa (generalmente es donde va el puntero)
        center: new google.maps.LatLng(19.259995, -99.020823),
        mapTypeControl: false
    });
    var beachMarker = new google.maps.Marker({
        // Aqui ponemos las coordenadas donde queremos poner el 'puntero'
        position: new google.maps.LatLng(19.259995, -99.020823),
        // La ruta del 'puntero'
        icon: 'assets/img/markmap.png',
        map: map
    });
    var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize);