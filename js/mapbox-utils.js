mapboxgl.accessToken = MAPBOX_TOKEN;



var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-115.1398, 36.1699],
    zoom: 10
});

let marker = setMarker([-97.1081, 32.7357]);

addMapEvent(marker);

let geocoder = setGeocoder();
addGeocoderToMap(geocoder)
addGeocoderEvent(geocoder)
// setPopup("This is my popup!")

function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })

}

function addGeocoderToMap(geocoder) {
    map.addControl(geocoder);
}

function addGeocoderEvent(geocoder) {
    geocoder.on('result', function (event) {
        marker.setLngLat(event.result.geometry.coordinates)
        fetchForecast(event.result.geometry.coordinates)
    })

}

function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point)
        .addTo(map);

}

function addMapEvent(marker) {
    map.on('click', function (event) {
        marker.setLngLat(event.lngLat)
            .addTo(map);
    })
}

function setPopup() {
    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`)
        .addTo(map);

    marker.setPopup(popup);

    setPopup(event.result.resultPlaceName);
}




// var alamoPopup = new mapboxgl.Popup()
//     .setHTML("<p>text</p>")
//     .addTo(map)
//
// marker.setPopup(alamoPopup)

// let geocoder = setGeocoder();
// addGeocoderToMap(geocoder)







