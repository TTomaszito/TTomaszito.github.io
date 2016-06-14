$(document).ready(function() {

  var latitude, longitude, neighborhood, city, state, temperature,summary, url;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + '%2C' + longitude + '&language=en';

      $.getJSON(GEOCODING).done(function(location) {
        neighborhood = location.results[1].address_components[0].long_name;
        city = location.results[1].address_components[1].long_name;
        state = location.results[1].address_components[4].short_name;
        
        $("#locationDisplay").html(neighborhood+" ,"+city+" ,"+state);

        console.log(neighborhood,city ,state);
        url = "https://api.forecast.io/forecast/a6a19b73560bb483d6ebdb9fdcc0b8c2/" + latitude + "," + longitude;

          $.ajax({

            url: url,
            dataType: 'jsonp',
            success: function(results) {
              
            temperature = results.currently.temperature;
              $("#temperatureDisplay").html(temperature);
            summary = results.currently.summary;
              $("#summaryDisplay").html(summary);
              
              console.log(results)
              
              
            }
          });

      });

    });
  };
});

// alternate methood to geolocation to be designed later.

/*$.getJSON("http://ip-api.com/json", function(json) {

    latitude = json.lat;
    longitude = json.lon;
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" +
      longitude + "&APPID=03ce8b27d8d332b6907e3a00041bb839",
      function(json) {

        var object = json;

        console.log();
        $("#data").html("Location: " + json.name);
        $("#data2").html("Weather: " + json.weather[0].main);
        $("#data3").html("Temperature: " + json.main.temp + " Kelvin");
      });
    */