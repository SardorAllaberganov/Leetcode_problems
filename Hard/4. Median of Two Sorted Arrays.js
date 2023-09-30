const nums1 = [1, 3],
	nums2 = [2];
// const nums1 = [1,2], nums2 = [3,4];

var findMedianSortedArrays = function (nums1, nums2) {
	const array = nums1.concat(nums2).sort((a, b) => a - b);
	const middle = array[Math.round(array.length / 2 - 1)];
	const nextEl = array[Math.round(array.length / 2)];

	if (array.length % 2 === 0) {
		return (middle + nextEl) / 2;
	} else {
		return middle;
	}
};

console.log(findMedianSortedArrays(nums1, nums2));
