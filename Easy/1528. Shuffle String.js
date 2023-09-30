const s = "codeleet",
	indices = [4, 5, 6, 7, 0, 2, 1, 3];

var restoreString = function (s, indices) {
	s = s.split("");
	let arr = [];
	for (let i = 0; i < indices.length; i++) {
		arr[indices[i]] = s[i];
	}
	return arr.join("");
};

console.log(restoreString(s, indices));
