/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
  let num = Math.abs(x);
  let reversedNum = 0;

  let isPalindrome;
  let lastDigit;

  while (num != 0) {
    lastDigit = num % 10;

    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  isPalindrome = x === reversedNum ? true : false;

  return isPalindrome;
};

console.log(isPalindrome(121));
