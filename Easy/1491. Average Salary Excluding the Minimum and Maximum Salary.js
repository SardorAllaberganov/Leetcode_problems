const salary = [4000, 3000, 1000, 2000];

var average = function (salary) {
	let minSalary = Math.min(...salary);
	let maxSalary = Math.max(...salary);
	salary = salary.filter((a) => a !== minSalary && a !== maxSalary);
	return salary.reduce((a, b) => a + b) / salary.length;
};

console.log(average(salary));
