$(document).ready(function() {

  getData();

});

// Function which obtains data from Api based on geolocation

function getData() {
  var latitude, longitude, neighborhood, city, state, temperature, summary, icon, url;

  navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + '%2C' + longitude + '&language=en';

    $.getJSON(GEOCODING).done(function(location) {
      neighborhood = location.results[1].address_components[0].long_name;
      city = location.results[1].address_components[1].long_name;
      state = location.results[1].address_components[4].short_name;

      $("#neighborhoodDisplay").html(neighborhood);
      $("#cityDisplay").html(city);
      $("#stateDisplay").html(state);

      url = "https://api.forecast.io/forecast/a6a19b73560bb483d6ebdb9fdcc0b8c2/" + latitude + "," + longitude;

      $.ajax({

        url: url,
        dataType: 'jsonp',
        success: function(results) {

          temperature = Math.round(results.currently.temperature) + "\xB0" + "F";
          var tempfahrenheit = Math.round(results.currently.temperature) + "\xB0" + "F";
          var tempCelcius = Math.round(((results.currently.temperature) - 32) * (5 / 9)) + "\xB0" + "C";

          changeUnits(tempfahrenheit, tempCelcius);

          $("#temperatureDisplay").html(temperature);
          summary = results.currently.summary;
          $("#summaryDisplay").html(summary);
          icon = results.currently.icon;
          //$("#iconDisplay").html(icon);
          statusIcon(icon);

        }
      });

    });

  });

};

// Function that changes units from F to C when button is clicked.

function changeUnits(tempfahrenheit, tempCelcius) {
  var columnNumber = tempfahrenheit;
  $("#Button").on("click", function() {
    if (columnNumber == tempfahrenheit) {
      $("#temperatureDisplay").html(tempfahrenheit);
      $("#Button").html("Display °C")
      columnNumber = tempCelcius;
    } else {
      $("#temperatureDisplay").html(tempCelcius);
      $("#Button").html("Display °F")
      columnNumber = tempfahrenheit;
    }

  });

};

// Function that assigns an icon based on the type of weather output the API returns
// uses this library https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css

function statusIcon(icon) {

  switch (icon) {
    case "partly-cloudy-day":
      $("#iconDisplay").html('<i class="wi wi-day-cloudy"></i>');
      $("#imgDisplay").attr('src', "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=8663f60a0fe57fed46dffc8c0ee2dd79");
      break;
    case "partly-cloudy-night":
      $("#iconDisplay").html('<i class="wi wi-night-alt-cloudy"></i>');
       $("#imgDisplay").attr('src', " https://images.unsplash.com/photo-1434329875656-1b22871235ff?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=5f78c05f228dd75bab182e4d5ef8013d");
      break;
    case "clear-day":
      $("#iconDisplay").html('<i class="wi wi-day-sunny "></i>');
      $("#imgDisplay").attr('src', "https://images.unsplash.com/photo-1414490929659-9a12b7e31907?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=bf8bbe0d84800544b86317dd7469c8c7 ");
      break;
    case "clear-night":
      $("#iconDisplay").html('<i class="wi wi-night-clear"></i>');
      $("#imgDisplay").attr('src', "https://images.unsplash.com/photo-1425141708895-60ba4a72e556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=162cebd43f069c9c13c523f357c2ff40 ");
      break;
    case "rain":
      $("#iconDisplay").html('<i class="wi wi-rain"></i>');
      $("#imgDisplay").attr('src', "https://images.unsplash.com/19/drops.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=62c5c9dd2a4a6754fe07df1de69920a8 ");
      break;
    case "snow":
      $("#iconDisplay").html('<i class="wi wi-snow"></i>');
      $("#imgDisplay").attr('src', "https://images.unsplash.com/photo-1446463969211-28bf6e20b315?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=1d9b24c903bb45362328fdf72b3bb886 ");
      break;
    case "sleet":
      $("#iconDisplay").html('<i class="wi wi-sleet"></i>');
      $("#imgDisplay").attr('src', "https://images.unsplash.com/photo-1436781325081-4baa21a60bdb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=adbaa0f96b2a68ae732cd5f9d24e1ab1 ");
      break;
    case "wind":
      $("#iconDisplay").html('<i class="wi wi-cloudy-windy"></i>');
      $("#imgDisplay").attr('src', "https://images.unsplash.com/photo-1454702762838-a6df8cc3517f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=c85409d724f23bb0afd380ef2efcc2e5 ");
      break;
    case "fog":
      $("#iconDisplay").html('<i class="wi wi-fog"></i>');
      $("#imgDisplay").attr('src', "https://images.unsplash.com/photo-1454641211126-dfe0b09ee1c0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4d40f7cf443c3ff5d341a159010acdaa ");
      break;
    case "cloudy":
      $("#iconDisplay").html('<i class="wi wi-cloudy"></i>');
       $("#imgDisplay").attr('src', "https://images.unsplash.com/uploads/141362941583982a7e0fc/abcfbca1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=a4228a91f2bf5bbf5b2b5df2f59c5772");
      break;
  };

};

