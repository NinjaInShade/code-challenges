/**
 * @param {number[]} nums
 * @return {boolean}
 */

const isMonotonic = (nums) => {
  return (
    nums.every((v, i) => i === 0 || v <= nums[i - 1]) ||
    nums.every((v, i) => i === 0 || v >= nums[i - 1])
  );
};

console.log(isMonotonic([1, 2, 2, 3]));

console.log(isMonotonic([6, 5, 4, 4]));

console.log(isMonotonic([1, 3, 2]));
