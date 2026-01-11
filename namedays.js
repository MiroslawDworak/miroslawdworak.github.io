let namedays = {};

fetch("nemedays-pl.json")
  .then(r => r.json())
  .then(data => namedays = data);

function showNameDay(date) {
  const key = `${date.getDate()}.${date.getMonth()+1}`;
  nameday.textContent =
    namedays[key] ? `Imieniny: ${namedays[key]}` : "";
}
