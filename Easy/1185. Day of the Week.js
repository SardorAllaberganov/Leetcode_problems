const day = 31,
	month = 8,
	year = 2019;
// const day = 18,
// 	month = 7,
// 	year = 1999;

var dayOfTheWeek = function (day, month, year) {
	let weekdays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let weekday = new Date(`${year}-${month}-${day}`).getDay();
	return weekdays[weekday];
};

console.log(dayOfTheWeek(day, month, year));
