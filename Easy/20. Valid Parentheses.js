const s = "()";
// const s = "()[]{}";
// const s = "(]";

var isValid = function (s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
                stack.push(")");
                break;
            case "{":
                stack.push("}");
                break;
            case "[":
                stack.push("]");
                break;
            default:
                topElement = stack.pop();
                if (s[i] !== topElement) return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid(s));
