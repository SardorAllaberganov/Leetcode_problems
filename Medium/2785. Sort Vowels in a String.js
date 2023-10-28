const s = "lEetcOde";

var sortVowels = function (s) {
	let isVowel = (char) => "AEUIOaeuio".includes(char);
	let arr = [],
		j = 0;
	s = s.split("");
	s.forEach((a) => {
		if (isVowel(a)) arr.push(a);
	});
	arr = arr.sort();
	for (let i = 0; i < s.length; i++) {
		if (isVowel(s[i])) {
			s[i] = arr[j];
			j++;
		}
	}
	return s.join("");
};

console.log(sortVowels(s));
