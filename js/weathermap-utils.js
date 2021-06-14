function fetchForecast(coordinates) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHER_TOKEN,
            lat: coordinates[1],
            lon: coordinates[0]
        },
        success: function(data) {
            console.log(getFiveDayForecast(data.list))
        }
    });


}

function getFiveDayForecast(fullForecast){
    let fiveDayForecast = [];

    for( let i = 0; i < fullForecast.length; i++){

        if (i % 8 === 0){
            fiveDayForecast.push(fullForecast[i])
        }

    }

    return fiveDayForecast;

}