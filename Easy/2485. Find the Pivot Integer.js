const n = 8;

var pivotInteger = function (n) {
	let sum = Math.sqrt((n * (n + 1)) / 2); //to find the sum of all elements between 1 to n (The method is Gauss sum)
	return parseInt(sum) === sum ? sum : -1;
};

console.log(pivotInteger(n));
