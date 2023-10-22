const mat = [
		[1, 1, 0, 0, 0],
		[1, 1, 1, 1, 0],
		[1, 0, 0, 0, 0],
		[1, 1, 0, 0, 0],
		[1, 1, 1, 1, 1],
	],
	k = 3;

var kWeakestRows = function (mat, k) {
	let filtered = mat.map((a) => a.filter((b) => b !== 0).length);
	let matrix = mat.map((a) => a.filter((b) => b !== 0).length);
	let sortedMatrix = matrix.sort();
	console.log(filtered, sortedMatrix);
	return sortedMatrix.map((a) => filtered.indexOf(a));
};

console.log(kWeakestRows(mat, k));
