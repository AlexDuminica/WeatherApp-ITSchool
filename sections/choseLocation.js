const bucharestButton = document.querySelector(".dropdown-menu .bucharest");
const timisoaraButton = document.querySelector(".dropdown-menu .timisoara");
const oradeaButton = document.querySelector(".dropdown-menu .oradea");
const clujButton = document.querySelector(".dropdown-menu .cluj");
const sibiuButton = document.querySelector(".dropdown-menu .sibiu");

// console.log(bucharestButton, oradeaButton, timisoaraButton);

function updateCurrentCityName(city) {
  // Prima data selectam tag-ul de HTML care este dedicat afisarii orasului curent
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  // Actualizam orasul in localStorage
  localStorage.setItem("city", city);
  updateCurrentCityName(city);
  displayCurrentWeather(city);
  // Afisam vremea pe urmatoarele 5 zile
  displayWeatherForecast(city);
}

// Adaugam Event Listners pentru butoanele din dropdown

bucharestButton.addEventListener("click", function () {
  updateWeather("București");
});

timisoaraButton.addEventListener("click", function () {
  updateWeather("Timișoara");
});

oradeaButton.addEventListener("click", function () {
  updateWeather("Oradea");
});
clujButton.addEventListener("click", function () {
  updateWeather("Cluj");
});
sibiuButton.addEventListener("click", function () {
  updateWeather("Sibiu");
});
