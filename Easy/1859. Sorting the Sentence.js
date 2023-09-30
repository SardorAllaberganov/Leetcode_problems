const s = "is2 sentence4 This1 a3";

var sortSentence = function (s) {
	s = s.split(" ").sort((a, b) => a[a.length - 1] - b[b.length - 1]);
	return s.map((a, index) => a.replace(index + 1, "")).join(" ");
};

console.log(sortSentence(s));
