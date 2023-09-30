const num = [1, 2, 0, 0],
	k = 34;
// const num = [2, 7, 4],
// 	k = 181;
// const num = [2, 1, 5],
// 	k = 806;

var addToArrayForm = function (num, k) {
	num = num.join("");
	return (BigInt(num) + BigInt(k)).toString().split("");
};

console.log(addToArrayForm(num, k));
