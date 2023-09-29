const nums = [3, 2, 2, 3],
    val = 3;
// const nums = [0,1,2,2,3,0,4,2], val = 2;

var removeElement = function (nums, val) {
    var k = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

console.log(removeElement(nums, val));
