const title = "capiTalIze tHe titLe";

var capitalizeTitle = function (title) {
	title = title.toLowerCase().split(" ");

	return title.map((a) =>
		a.length > 2 ? a.charAt(0).toUpperCase() + a.slice(1, a.length) : a
	).join(" ");
};

console.log(capitalizeTitle(title));
