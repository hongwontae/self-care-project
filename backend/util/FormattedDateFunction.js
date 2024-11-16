const formatDate = (dateStr) => {
  const [month, day] = dateStr.split("월");
  return `2024-${month.padStart(2, "0")}-${day
    .replace("일", "")
    .padStart(2, "0")}`;
};

module.exports = formatDate;
