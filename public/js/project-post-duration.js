const differenceInDays = (date_1, date_2) => {
  let date1 = new Date(date_1);
  let date2 = new Date(date_2);
  let timeDif = date2.getTime() - date1.getTime();
  let daysDiff = timeDif / (1000 * 3600 * 24);

  return daysDiff;
};

const differenceInMonths = (date_1, date_2) => {
  let date1 = new Date(date_1);
  let date2 = new Date(date_2);
  const monthDif = date2.getMonth() - date1.getMonth();
  const yearDif = date2.getYear() - date1.getYear();

  return monthDif + yearDif * 12;
};

const getDuration = (date1, date2) => {
  let getDifInMonths = differenceInMonths(date1, date2);
  let getDifInDays = differenceInDays(date1, date2);

  if (getDifInMonths <= 0) {
    return getDifInDays === 1 ? `${getDifInDays} Day` : `${getDifInDays} Days`;
  } else {
    return getDifInMonths === 1 ? `${getDifInMonths} Month` : `${getDifInMonths} Months`;
  }
};
