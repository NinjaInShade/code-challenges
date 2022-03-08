/**
 * @param {number[]} candyType
 * @return {number}
 */

const distributeCandies = (candyType) => {
  const maxCandiesAloud = candyType.length / 2;

  //   Convert array into set
  candyTypesSet = new Set(candyType);

  if (maxCandiesAloud >= candyTypesSet.size) {
    return candyTypesSet.size;
  }

  return maxCandiesAloud;
};

console.log(distributeCandies([6, 6, 6, 6]));
