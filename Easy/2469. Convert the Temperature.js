const celsius = 36.5;

var convertTemperature = function (celsius) {
	const Kelvin = celsius + 273.15;
	const Fahrenheit = celsius * 1.8 + 32.0;
	return [Kelvin, Fahrenheit];
};

console.log(convertTemperature(celsius));
