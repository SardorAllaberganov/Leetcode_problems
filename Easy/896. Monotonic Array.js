const nums = [1,2,2,3];
// const nums = [6,5,4,4];
// const nums = [1,3,2];

var isMonotonic = function (nums) {
    let currentNums = nums;
    let sortedNums = nums.slice().sort((a, b) => a - b);
    return JSON.stringify(currentNums) === JSON.stringify(sortedNums) || JSON.stringify(currentNums) === JSON.stringify(sortedNums.reverse())
};

console.log(isMonotonic(nums))