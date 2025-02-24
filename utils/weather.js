// Pe baza unui cod de iconita primit de la OpenWeather API - noi vom genera link-ul acesteia
function getWeatherIcon(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

// Pe baza speed-ului primit de la OpenWeather, care este in m/s - noi o sa returnam km/h
function windToKmPerHour(meterPerSec) {
  return (meterPerSec * 3600) / 1000;
}
