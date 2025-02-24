// API Key-uruile sau token-rile nun ar trebui sa stea intr-un fisier text pentru ca este sigur. Aceste KEY-uri ar trebui sa stea pe un server, insa, in cazul nostru cum API--ul este de la Openweather, este gratuit, atunci e ok sa il tinem asa
const API_KEY = "6e1bb76737557677360066a7c5d1cc54";

// Construim link-urile (sau endpoint-uri) serverelor catre care vom face call-urile ca sa primim date despre vreme

function getCurrentWeatherEndpoint(city) {
  // Cand se fololseste ? dupa URL inseamna ca avem de a face cu query params (query string) asta inseamna ca API-ul va lua in considerare acei paramaterii pentru a ne intoarce data in functie de ei
  // Noi avem urmatorii parametrii:
  // 1. q = folosit pentru a identifica orasul
  // 2. lang = folosit pentru a ii spune API-ului sa ne intoarca datele in limba romana
  // 3. units
  // 4. appid
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
