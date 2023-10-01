const arriveAlice = "08-15",
	leaveAlice = "08-18",
	arriveBob = "08-16",
	leaveBob = "08-19";

var countDaysTogether = function (
	arriveAlice,
	leaveAlice,
	arriveBob,
	leaveBob
) {
	const arriveAliceDate = new Date("2023-" + arriveAlice);
	const leaveAliceDate = new Date("2023-" + leaveAlice);
	const arriveBobDate = new Date("2023-" + arriveBob);
	const leaveBobDate = new Date("2023-" + leaveBob);

	let arriveMax = new Date(Math.max(arriveAliceDate, arriveBobDate));
	let leaveMin = new Date(Math.min(leaveAliceDate, leaveBobDate));

	return arriveMax > leaveMin
		? 0
		: Math.floor((leaveMin - arriveMax) / 86400000) + 1;
};

console.log(countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob));
