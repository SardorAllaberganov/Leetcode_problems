const nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3;
// const nums1 = [1],
//     m = 1,
//     nums2 = [],
//     n = 0;
// const nums1 = [0],
//     m = 0,
//     nums2 = [1],
//     n = 1;

var merge = function (nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
    nums1.push(...nums2);
    return nums1.sort((a, b) => a - b);
};

console.log(merge(nums1, m, nums2, n));
