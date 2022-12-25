const showFormattedDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

const showDefaultDate = (date) => {
  return new Date(date).toLocaleDateString("en-US");
};

export { showFormattedDate, showDefaultDate };
