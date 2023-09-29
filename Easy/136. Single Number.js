const nums = [2, 2, 1];
// const nums = [4, 1, 2, 1, 2];
// const nums = [1];

var singleNumber = function (nums) {
    return nums.length > 1
        ? nums.filter((num) => nums.indexOf(num) === nums.lastIndexOf(num))
        : nums[0];
};

console.log(singleNumber(nums));
