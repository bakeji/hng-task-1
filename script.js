const currentUtcTime = document.querySelector('[data-testid="currentTimeUTC"]');


const currentDate =new  Date();
const currentTime = currentDate.toUTCString()

currentUtcTime.textContent = currentTime;
