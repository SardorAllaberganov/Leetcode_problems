const nums = [1, 1, 2];
// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
    let set = new Set(nums);
    nums.length = 0;
    nums.push(...set);
    return nums.length;
};

console.log(removeDuplicates(nums));
