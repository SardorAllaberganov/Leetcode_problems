const s = "0";
// const s = "e";
// const s = ".";

var isNumber = function (s) {
	if (s === "Infinity" || s === "-Infinity" || s === "+Infinity")
		return false;
	return !isNaN(+s);
};

console.log(isNumber(s));
