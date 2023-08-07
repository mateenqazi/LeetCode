var findMedianSortedArrays = function (nums1, nums2) {
  const sorted = nums1.concat(nums2).sort((a, b) => {
    return a - b;
  });
  return (result =
    sorted.length % 2 != 0
      ? sorted[Math.floor(sorted.length / 2)]
      : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2);
};
