const address = "1.1.1.1";
// const address = "255.100.50.0";

var defangIPaddr = function (address) {
	return address.replaceAll(".", "[.]");
};

console.log(defangIPaddr(address));
