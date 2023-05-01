// OpenWeatherMap API endpoint and API key
var endpoint = "https://api.openweathermap.org/data/2.5/weather";
var api_key = "Ydd2dac79f052f50b671241623014465d";

// Get the search form and input elements
var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");

// Handle the form submission event
searchForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the location entered by the user
  var location = searchInput.value;

  // Construct the API request URL
  var url = `${endpoint}?q=${location}&appid=${api_key}`;

  // Make the API request and get the response
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (!data || !data.main || !data.main.temp || !data.weather || !data.weather[0] || !data.weather[0].description) {
        throw new Error("Weather data not found or in unexpected format");
      }
      // Parse the JSON response and extract the weather data
      var temperature = Math.round(data.main.temp - 273.15);
      var description = data.weather[0].description;

      // Display the weather data
      var weatherData = document.getElementById("weather-data");
      weatherData.innerHTML = `
        <p>Temperature: ${temperature}°C</p>
        <p>Weather description: ${description}</p>
      `;
    })
    .catch(error => {
      // Display an error message
      var weatherData = document.getElementById("weather-data");
      weatherData.innerHTML = `
        <p>There was an error retrieving the weather data.</p>
        <p>Error message: ${error.message}</p>
      `;
    });
});