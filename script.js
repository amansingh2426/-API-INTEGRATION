async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '1222f5e15a6aa55be0df13b6e52c6a29'; // Get from https://openweathermap.org/api
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === 200) {
    document.getElementById('weatherResult').innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].main}</p>
    `;
  } else {
    document.getElementById('weatherResult').innerText = "City not found.";
  }
}
