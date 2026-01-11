export function isNight(sunrise, sunset){
  const now = new Date();
  return now < sunrise || now > sunset;
}
