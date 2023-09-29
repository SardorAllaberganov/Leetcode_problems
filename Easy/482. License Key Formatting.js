const s = "5F3Z-2e-9-w",
    k = 4;
// const s = "2-5g-3-J",
//     k = 2;

var licenseKeyFormatting = function (s, k) {
    s = s.replace(/-/g, "").split("");
    for (let i = s.length - k; i > 0; i -= k) {
        s[i] = `-${s[i]}`;
    }
    s = s.join("").toUpperCase();
    return s;
};

console.log(licenseKeyFormatting(s, k));
