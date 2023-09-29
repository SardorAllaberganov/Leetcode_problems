const nums = [1, 2, 3, 4];
// const nums = [-1,1,0,-3,3];

var productExceptSelf = function (nums) {
    let array = [];
    for (let i = 0; i < nums.length; i++) {
        let temp = nums.shift();
        array.push(nums.reduce((a, b) => a * b));
        nums.push(temp);
    }
    return array;
};

console.log(productExceptSelf(nums));
