const n = 5;

var sumZero = function (n) {
	let arr = [];
	if (n === 1) return [0];
	for (let i = 1; i <= n / 2; i++) {
		arr.push(i, -i);
	}
	if (n % 2 !== 0) {
		arr.push(0);
	}
	return arr;
};

console.log(sumZero(n));
