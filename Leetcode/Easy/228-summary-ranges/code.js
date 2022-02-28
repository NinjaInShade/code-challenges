/**
 * @param {number[]} nums
 * @return {string[]}
 */

//  Input: nums = [0,1,2,4,5,7]
//  Output: ["0->2","4->5","7"]
//  Explanation: The ranges are:
//  [0,2] --> "0->2"
//  [4,5] --> "4->5"
//  [7,7] --> "7"

const summaryRanges = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let times = 0;

    while (nums[i] - nums[i - 1] == 1) {
      times++;
      nums.splice(i - 1, 1);
    }

    if (times > 0) {
      nums[i - 1] = `${nums[i - 1] - times}->${nums[i - 1]}`;
    }

    console.log(nums);
  }

  return nums.map((e) => String(e));
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));

// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
