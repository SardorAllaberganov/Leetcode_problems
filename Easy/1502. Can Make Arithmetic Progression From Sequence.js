const arr = [3, 5, 1];

var canMakeArithmeticProgression = function (arr) {
	if (arr.length === 1) return true;

	arr = arr.sort((a, b) => a - b);
	let d = arr[1] - arr[0];
	for (let i = 2; i < arr.length; i++) {
		if (arr[i] - arr[i - 1] != d) {
			return false;
		}
	}
	return true;
};

console.log(canMakeArithmeticProgression(arr));
