const weather = document.querySelector(".weather");
const API_KEY = "7f18710acf97e61b0ed67ae3ac86b6eb";

function getWeather(lat, lon) {
  console.log(lat, lon);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((data) => data.json())
    .then((json) => {
      const temp = json.main.temp;
      const place = json.name;
      weather.innerText = `${temp} @ ${place}`;
    });
}

function saveCoords(coords) {
  localStorage.setItem("COORDS", JSON.stringify(coords));
}
function success(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  const coords = {
    latitude,
    longitude,
  };
  saveCoords(coords);
  getWeather(latitude, longitude);
}

function error() {
  weather.textContent = "Unable to retrieve your location";
}

function init() {
  const loadedCoords = localStorage.getItem("COORDS");
  if (loadedCoords === null) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}
init();
