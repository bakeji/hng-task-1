const currentDayOfTheWeek = document.querySelector ('[data-testid="currentDay"]');
const currentUtcTime = document.querySelector('[data-testid="currentTimeUTC"]');

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate =new  Date();
const day = currentDate.getDay();
const currentDay = daysOfWeek[day];
const currentTime = currentDate.getUTCMilliseconds()

currentDayOfTheWeek.textContent = currentDay;
currentUtcTime.textContent = currentTime;
