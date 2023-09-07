let humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const pressure = document.querySelector('.pressure');
const city = document.querySelector('input');
const minTemp = document.querySelector('.min-temp');
const maxTemp = document.querySelector('.max-temp');
const actualValue = document.querySelector('.actual-value');
const cityName = document.querySelector('.city-name');
const icon = document.querySelector('.clouds');

const getDataBtn = document.querySelector('.get-city-btn');

const apiKey = '45fb32bf204f0ffe8d5348224ac2d6cc';


const getWeatherData = () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
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

        cityName.textContent = city.value;
        city.value = '';
}

getDataBtn.addEventListener('click', getWeatherData);