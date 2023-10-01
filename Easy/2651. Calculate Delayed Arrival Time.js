const arrivalTime = 15,
	delayedTime = 5;

var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
	let sum = arrivalTime + delayedTime;
	if (sum >= 24) {
		return sum % 24;
	}
	return sum;
};

console.log(findDelayedArrivalTime(arrivalTime, delayedTime));
