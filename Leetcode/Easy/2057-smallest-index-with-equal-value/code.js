/**
 * @param {number[]} nums
 * @return {number}
 */

const smallestEqual = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 == nums[i]) {
      return i;
    }
  }

  return -1;
};

console.log(smallestEqual([0, 1, 2]));

console.log(smallestEqual([4, 3, 2, 1]));

console.log(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

console.log(smallestEqual([3, 3, 5, 1, 8, 2, 3, 0, 1, 2, 3, 7, 6, 9, 4, 1]));
