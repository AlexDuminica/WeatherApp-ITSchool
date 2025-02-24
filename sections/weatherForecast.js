// Declaram functia care o sa ne faca predictia pentru vreme pentru urmatoarele 5 zile. Apelul functiei se va face in fisierul chooseLocation.js si in index.js

function displayWeatherForecast(city) {
  // PAS 1: Generam link-ul serverului catre care facem request, pe baza orasului
  const forecastEndpoint = getForecastEndpoint(city);

  // Inainte sa facem call-ul catre server si pentru a putea sa afisam noile informatii in HTML, trebuie sa selectam elementul de interes

  let weatherForecastContainer = document.querySelector(".weather-forecast");

  weatherForecastContainer.innerHTML = "";

  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      //   Din datele venite de ka openweather API, vom pastra doar proprietatea "list", deoarece ea contine predictia vremei pe urmatoarele zile - list este un array
      const { list } = data;

      // Acum avem nevoie de un obiect in care sa grupam predictiile pe zile

      const daysMap = {};

      // Iteram prin cele 40 de predictii primite de la server, pe care le gasim la variabila lists;

      list.forEach((element) => {
        // Extragem din fiecare element proprietatea dt;
        const { dt } = element;
        // Folosim functia getDayOfTheWeek din utilitarul date.js pentru a transforma data in : Luni, Marti, Miercuri etc
        const day = getDayOfTheWeek(dt);
        // Daca deja avem ziua saptamanii in obiectul daysMap, atunci, ii adaugam o noua predictie de vreme (adica obiectul peste care iteram: element)
        if (daysMap[day]) {
          daysMap[day].push(element);
        } else {
          // Altfel, daca ziua saptamanii nu exista in obiectul daysMap, atunci il adaugam impreuna cu noua predictie (obiectul curent peste care iteram : element)
          daysMap[day] = [element];
        }
      });
      console.log(daysMap);

      // Parcurgem cu ajutorul structurii "for....in" continutul din obiectul daysMap - cheile sunt zilele saptamanii pentru care o sa afisam predictiile
      for (key in daysMap) {
        // Afisam ziua saptamanii pe ecran (o inseram in HTML)
        weatherForecastContainer.innerHTML += `<h3 class = "text-primary">${key}</h3>`;

        let daysPredictictions = daysMap[key];
        console.log(daysPredictictions);
        // Pentru fiecare element(predictie) dintr-o zi, extragem datele necesare:

        daysPredictictions.forEach((element) => {
          const { dt, main, weather } = element;
          // Formatam ora folosind functie deja creata de noi: getHour
          const hour = getHour(dt);
          // Rotunjim temperaturile
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);
          // Ne extragem descrierea
          const weatherDescription = weather[0].description;
          // Ne extragem iconita pe care o formatam cu functia deja creata de noi: getWeatherIcon care este un utils.
          const weatherIcon = getWeatherIcon(weather[0].icon);
          console.log(hour, temperature, realFeel, weatherDescription, weatherIcon);

          // Afisam pe ecran (adica inseram in HTML) toate informatiile de mai sus

          weatherForecastContainer.innerHTML += `
            <div class = "weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>${hour}</div>
              <div> <img src = "${weatherIcon}" alt = "weather icon" /> </div>
              <div class = "fs-3"><strong>${temperature}°C </strong>  </div>
              <div> ${weatherDescription}</div> 
              <div class = "real-feel"> Real feel: <strong> ${realFeel}°C</strong> </div> 
            </div>
          `;
        });
      }
    });
}
