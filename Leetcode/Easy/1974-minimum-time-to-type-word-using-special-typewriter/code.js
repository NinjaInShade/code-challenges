const calculatePointerDiffLoop = (initialPointerVal, targetIndex, clockwise) => {
  let pointer = initialPointerVal;

  let diff = 0;

  while (true) {
    if (pointer == targetIndex) {
      return diff;
    }

    if (clockwise) {
      pointer += 1;

      //   Alphabet length
      if (pointer == 26) {
        pointer = 0;
      }
    } else {
      pointer -= 1;

      if (pointer == -1) {
        //   Alphabet length - 1
        pointer = 25;
      }
    }

    diff += 1;
  }
};

const calculatePointerDiff = (currentLetter, targetLetter) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lettersArray = alphabet.split('');

  const currentLetterIndex = lettersArray.indexOf(currentLetter);
  const targetLetterIndex = lettersArray.indexOf(targetLetter);

  const cDiff = calculatePointerDiffLoop(currentLetterIndex, targetLetterIndex, true);
  const cCDiff = calculatePointerDiffLoop(currentLetterIndex, targetLetterIndex, false);

  if (cDiff < cCDiff) {
    return cDiff;
  }

  return cCDiff;
};

/**
 * @param {string} word
 * @return {number}
 */

const minTimeToType = (word) => {
  // By default, points at a
  let pointer = 'a';

  let seconds = 0;

  for (let i = 0; i < word.length; i++) {
    //   Adds on the movement of the typewriter + 1 to type the letter
    seconds += calculatePointerDiff(pointer, word[i]) + 1;

    pointer = word[i];
  }

  return seconds;
};

console.log(minTimeToType('abc'));
console.log(minTimeToType('bza'));
console.log(minTimeToType('zjpc'));
