/* ========= ZEGAR ========= */
function updateClock() {
  const now = new Date();

  clock.textContent = now.toLocaleTimeString('pl-PL');
  date.textContent = now.toLocaleDateString('pl-PL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
setInterval(updateClock, 1000);
updateClock();

/* ========= IMIENINY ========= */
const namedays = {
  "1-11": "Honoraty",
  "1-12": "Arkadiusza"
};

const todayKey = `${new Date().getMonth()+1}-${new Date().getDate()}`;
nameday.textContent =
  namedays[todayKey]
    ? `🎉 Imieniny: ${namedays[todayKey]}`
    : "🎉 Imieniny: brak danych";

/* ========= SŁOŃCE ========= */
async function loadSun() {
  const lat = 50.058;
  const lng = 21.411;

  const res = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`
  );
  const data = await res.json();

  const sunrise = new Date(data.results.sunrise)
    .toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
  const sunset = new Date(data.results.sunset)
    .toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });

  sun.textContent = `☀️ ${sunrise}  🌙 ${sunset}`;
}
loadSun();
