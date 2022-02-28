/**
 * @param {string} s
 * @return {string}
 */

const sortSentence = (s) => {
  let words = s.split(' ');

  let reconstructedSentenceArray = new Array(words.length);
  let reconstructedSentence;

  for (let i = 0; i < words.length; i++) {
    //   The index of the current word, based on number at end
    let wordsIndex = words[i][words[i].length - 1];

    reconstructedSentenceArray[wordsIndex - 1] = words[i].slice(0, words[i].length - 1);
  }

  reconstructedSentence = reconstructedSentenceArray.join(' ');

  return reconstructedSentence;
};

console.log(sortSentence('is2 sentence4 This1 a3');)

// Better solution (by eazygood on LeetCode)

// const sortSentence = function (s) {
//   return s
//     .split(' ')
//     .sort((a, b) => a[a.length - 1] - b[b.length - 1])
//     .map((word) => word.slice(0, word.length - 1))
//     .join(' ');
// };
