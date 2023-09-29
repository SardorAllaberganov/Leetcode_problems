const nums = [3, 0, 1];
// const nums = [0, 1];
// const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

var missingNumber = function (nums) {
    let numSet = new Set(nums);
    let i = 0;
    while (numSet.has(i)) i++;
    return i;
};

console.log(missingNumber(nums));
