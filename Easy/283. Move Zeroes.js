const nums = [0, 1, 0, 3, 12];
// const nums = [0];

var moveZeroes = function (nums) {
    for (let i = nums.length; i--; ) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
};

console.log(moveZeroes(nums));
