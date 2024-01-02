<img src="https://github.com/Dawid2502/weather-app/assets/116349234/7349b2f5-bb41-48a7-b876-fe3ed9b9948b" width="700"></img>

# Project: Weather APP

## Content of project

* [Description](#description)
* [Technologies](#technologies)
* [Functions](#functions)
* [API](#api)
* [Main function of project](#main-function-of-project)
* [Goals on future](#goals-on-future)
* [Live](#live)

## Description
The application is used to transmit weather data for a selected place. After entering the city name and confirming the selection, the application transfers the data. Weather information is retrieved from an external API. Data is returned in JSON format.

## Technologies
* HTML
* CSS (SASS)
* Javascript
* JSON

## Functions
* Get weather parameters (e.g. temperature, wind speed, humidity) after button click

## Used API

https://api.openweathermap.org

## Main function of project

Data is retrieved from the API using the getWeatherData() function in the form of JSON and then transferred for display. Fetch() was used to retrieve data. The getWeatherData() function is called when the button is pressed.

```javascript
function getWeatherData () {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=${apiKey}&units=metric`;
    var iconurl;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log(data)
            // const temperature = data.main.temp;
            humidity.textContent = data.main.humidity + ' %';
            windSpeed.textContent = (data.wind.speed*3600/1000).toPrecision(2) + ' km/h';
            pressure.textContent = data.main.pressure + ' hPa';
            minTemp.textContent = (data.main.temp_min).toPrecision(2) + ' °C';
            maxTemp.textContent = (data.main.temp_max).toPrecision(2) + ' °C';
            actualValue.textContent = (data.main.temp).toPrecision(2) + ' °C';
            iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            icon.setAttribute('src', iconurl);
            // windSpeed = data.main.humidity;
            // Wyświetl informacje o pogodzie
        })
        .catch(error => {
            console.error('Błąd:', error);
            alert('Nie udało się pobrać danych pogodowych.');
        });

        cityName.textContent = getCity;
        city.value = '';
}
```

## Goals on future

Adding map 

## Live
https://tangerine-hotteok-0d3b7d.netlify.app/
