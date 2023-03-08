export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function getDaysInRange(startDate: Date, duration: number) {
  const dates = [];

  let currentDate = new Date(startDate.getTime());
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();
  let lastDayOfCurrMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let weekDayIndex = currentDate.getDay();

  for (let i = 0; i < duration; i++) {
    if (weekDayIndex === 7) weekDayIndex = 0;
    if (currentDay > lastDayOfCurrMonth) {
      currentDate = new Date(currentYear, currentMonth + 1, 1);
      currentYear = currentDate.getFullYear();
      currentMonth = currentDate.getMonth();
      currentDay = currentDate.getDate();
      lastDayOfCurrMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    }

    dates.push(new Date(currentYear, currentMonth, currentDay));

    currentDay++;
    weekDayIndex++;
  }

  return dates;
}
