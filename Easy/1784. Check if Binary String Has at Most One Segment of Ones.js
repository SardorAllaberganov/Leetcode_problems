const s = "1101";

var checkOnesSegment = function (s) {
    return s.indexOf("01") < 0;
};

console.log(checkOnesSegment(s));
