async function getWeather() {
  if (!city.value) return alert("Wpisz miejscowość");

  const geo = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city.value}&count=1`
  ).then(r => r.json());

  if (!geo.results) return alert("Nie znaleziono miasta");

  const { latitude, longitude } = geo.results[0];

  const w = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation`
  ).then(r => r.json());

  temp.textContent = w.current.temperature_2m;
  rain.textContent = w.current.precipitation > 0 ? "Tak" : "Brak";
  snow.textContent = w.current.temperature_2m < 0 ? "Możliwy" : "Brak";
}
