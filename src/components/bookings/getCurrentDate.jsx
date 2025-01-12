const getCurrentDate = () => {
  const currentDate = new Date();

  const currentDay = currentDate.toLocaleString("pl-PL", {
    timeZone: "Europe/Warsaw",
    day: "2-digit",
  });

  const currentMonth = currentDate.toLocaleString("pl-PL", {
    timeZone: "Europe/Warsaw",
    month: "2-digit",
  });

  const currentYear = currentDate.toLocaleString("pl-PL", {
    timeZone: "Europe/Warsaw",
    year: "numeric",
  });

  return { currentDay, currentMonth, currentYear };
};

export default getCurrentDate;
