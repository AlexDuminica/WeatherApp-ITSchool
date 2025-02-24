// Vom declara functia care ne cheama API-ul de la openweather pentru vremea curenta si ne va afisa datele in pagina --- apelul catre functia asta se va face din choseLocation.js (pe eventListners adaugate pe butoane)

function displayCurrentWeather(city) {
  // Prima data ne generam link-ul catre care vom face call-ul
  const currentWeatherEndpoint = getCurrentWeatherEndpoint(city);
  console.log(currentWeatherEndpoint);

  fetch(currentWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Vom extrage datele de interes pe care le primim de la API (care ne-a trimis raspunsul sub foorma de obiect): name, dt, main, weather, wind
      // Mai jos e forma de object individuala
      // const cityName = response.cityName;
      // const dtdata = response.dt;
      // Mai jos este object destructuring
      const { name, dt, main, weather, wind } = data;
      // functia getDayofTheWeek este un utilitar creat de noi
      const day = getDayOfTheWeek(dt);
      const hours = getHour(dt);
      const temperature = Math.round(main.temp);
      const realFeel = Math.round(main.feels_like);
      //   console.log(weather) -----> ATENTIE: Proprietatea weather este un array cu un singur element
      const weatherDescription = weather[0].description;
      const weatherIcon = getWeatherIcon(weather[0].icon);
      const windSpeed = Math.round(windToKmPerHour(wind.speed));

      //   Afisam datele primite si formatate mai sus in pagina
      // Intrucam nu stim exact unde trebuie sa inseram datele in HTML, prima data vom scrie un selector de JavaScript care sa accesseze elementul de DOM
      const currentWeatherContainer = document.querySelector(".current-weather");
      //   Al doilea pas: Folosim proprietatea inner HTML pe variabila de mai sus - > inseram datele
      currentWeatherContainer.innerHTML = `
    <div class = "px-3">
        <div class = "fs-2 mb-2"> <strong>${name}</strong> </div>
        <div class = "fs-4"> <strong>${day}</strong> </div>
        <div class = "d-flex align-items-centre justify-content-centre"> </div>
            <div class = "justify-content-centre">
                <strong class = "fs-1">${temperature}°C</strong>
                <img src ="${weatherIcon}"/>
            </div>
    </div> 
        <div class ="px-3">
            <p class = "fs-5">Real feel: <strong>${realFeel}°C</strong></p>
            <p class = "fs-5 text-capitalize">${weatherDescription}</p>
            <p class = "fs-5"><strong>${windSpeed} km/h </strong></p>
        </div>
    </div>
    `;
    });
}
