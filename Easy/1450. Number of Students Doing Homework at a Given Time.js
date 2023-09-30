const startTime = [1, 2, 3],
	endTime = [3, 2, 7],
	queryTime = 4;

var busyStudent = function (startTime, endTime, queryTime) {
	return startTime.filter((t, i) => queryTime >= t && queryTime <= endTime[i])
		.length;
};

console.log(busyStudent(startTime, endTime, queryTime));
