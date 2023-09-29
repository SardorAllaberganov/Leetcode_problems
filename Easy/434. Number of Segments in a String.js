const s = "Hello, my name is John";
// const s = "Hello";

var countSegments = function (s) {
    return s.split(" ").filter((s) => s.trim().length).length;
};

console.log(countSegments(s));
