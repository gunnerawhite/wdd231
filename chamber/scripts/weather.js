const apiKey = '3bc9176f3333a4e639e9a6c949926e03';
const city = 'Gilbert';
const units = 'imperial';
const weatherDiv = document.getElementById('weather');

async function fetchWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`);
  const data = await response.json();

  const current = data.list[0];
  const forecast = data.list.filter((item, index) => index % 8 === 0).slice(1, 4); // next 3 days

  weatherDiv.innerHTML = `
    <p><strong>Now:</strong> ${current.main.temp.toFixed(0)}°F - ${current.weather[0].description}</p>
    <ul>
      ${forecast.map(f => `
        <li>${new Date(f.dt_txt).toLocaleDateString(undefined, { weekday: 'short' })}: ${f.main.temp.toFixed(0)}°F</li>
      `).join('')}
    </ul>
  `;
}

fetchWeather();