const months = ['January', 'February',	'March',	'April',	'May',	'June',	'July',	'August',	'September',	'October',	'November',	'December'];

function getDateString(date){
  let month = months[date.getMonth()];
  return `${month} ${date.getDate()}, ${date.getFullYear()}`
}

export default {
  getDateString
};
