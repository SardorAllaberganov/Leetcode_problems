const s = "aa",
	p = "a";
// const s = "aa", p = "a*";
// const s = "ab", p = ".*";

var isMatch = function (s, p) {
	p = p.replace(/\*{1,}/gi, "*");
	const regex = new RegExp(`^${p}$`);
	return regex.test(s);
};

console.log(isMatch(s, p));
