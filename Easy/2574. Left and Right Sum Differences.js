const nums = [10, 4, 8, 3];

var leftRightDifference = function (nums) {
    let leftArr = [0];
    let sumL = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        leftArr.push((sumL += nums[i]));
    }

    let rightArr = [0];
    let sumR = 0;
    for (i = nums.length - 1; i >= 1; i--) {
        rightArr.unshift((sumR += nums[i]));
    }

    return leftArr.map((a, i) => Math.abs(a - rightArr[i]));
};

console.log(leftRightDifference(nums));
