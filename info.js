/* =========================
   ZEGAR + DATA
========================= */
function updateClock() {
  const now = new Date();

  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('clock').textContent = `${h}:${m}:${s}`;

  document.getElementById('date').textContent =
    now.toLocaleDateString('pl-PL', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
}

updateClock();
setInterval(updateClock, 1000);

/* =========================
   IMIENINY
========================= */
const namedaysPL = {
  "1-11": "Honoraty",
  "1-12": "Arkadiusza",
  "1-13": "Weroniki",
  // ← możesz rozbudować dalej
};

function updateNameday() {
  const now = new Date();
  const key = `${now.getMonth() + 1}-${now.getDate()}`;

  document.getElementById('nameday').textContent =
    namedaysPL[key]
      ? `🎉 Imieniny: ${namedaysPL[key]}`
      : "🎉 Imieniny: brak danych";
}

updateNameday();

/* =========================
   WSCHÓD / ZACHÓD SŁOŃCA
   (Widełka – możesz zmienić)
========================= */
async function updateSun() {
  const lat = 50.058;
  const lng = 21.411;

  try {
    const res = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`
    );
    const data = await res.json();

    const sunrise = new Date(data.results.sunrise)
      .toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });

    const sunset = new Date(data.results.sunset)
      .toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });

    document.getElementById('sun').textContent =
      `☀️ ${sunrise}  🌙 ${sunset}`;
  } catch {
    document.getElementById('sun').textContent =
      "☀️ brak danych o słońcu";
  }
}

updateSun();
