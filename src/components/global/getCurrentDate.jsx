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

  const getCurrentHour = String(
    currentDate.toLocaleString("pl-PL", {
      timeZone: "Europe/Warsaw",
      hour: "2-digit",
      hour12: false,
    })
  ).padStart(2, "0");

  const getCurrentMinute = String(
    currentDate.toLocaleString("pl-PL", {
      timeZone: "Europe/Warsaw",
      minute: "2-digit",
    })
  ).padStart(2, "0");

  return {
    currentDay,
    currentMonth,
    currentYear,
    getCurrentHour,
    getCurrentMinute,
  };
};

export default getCurrentDate;
