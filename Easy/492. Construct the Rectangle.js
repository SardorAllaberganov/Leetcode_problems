const area = 4;
// const area = 37;
// const area = 122122;

var constructRectangle = function (area) {
    let sqrtArea = Math.floor(Math.sqrt(area));
    while (area % sqrtArea !== 0) {
        sqrtArea--;
    }
    return [area / sqrtArea, sqrtArea];
};

console.log(constructRectangle(area));
