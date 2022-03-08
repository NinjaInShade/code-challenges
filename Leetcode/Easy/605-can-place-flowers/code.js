/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

const canPlaceFlowers = (flowerbed, n) => {
  let newFlowersPlanted = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    //   Don't need to check if index has flower planted already
    if (flowerbed[i] === 1) continue;

    // Single length check
    if (flowerbed.length === 1 && flowerbed[i] === 0) {
      newFlowersPlanted += 1;

      continue;
    }

    //   First and last checks are different as we can't check both sides of the flowerbed/array
    if (i == 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;

      newFlowersPlanted += 1;

      continue;
    }

    if (i == flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0) {
      flowerbed[i] = 1;

      newFlowersPlanted += 1;

      continue;
    }

    // Check to both sides
    if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;

      newFlowersPlanted += 1;
    }
  }

  return newFlowersPlanted >= n ? true : false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
