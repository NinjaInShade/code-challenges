/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */

const slowestKey = (releaseTimes, keysPressed) => {
  // Default is first elements of each data
  let longestKeyPressed = { key: keysPressed[0], duration: releaseTimes[0] };

  for (let i = 0; i < releaseTimes.length; i++) {
    const currentKeysDuration = releaseTimes[i] - releaseTimes[i - 1];

    //   If the current key pressed has longer duration
    //    than current longest key press, update it
    if (currentKeysDuration > longestKeyPressed.duration) {
      longestKeyPressed = { key: keysPressed[i], duration: currentKeysDuration };
    }

    // If current key pressed and current longest key pressed are same,
    // choose lexicographically larger and update the key pressed.
    if (currentKeysDuration == longestKeyPressed.duration) {
      if (keysPressed[i] > longestKeyPressed.key) {
        longestKeyPressed = { ...longestKeyPressed, key: keysPressed[i] };
      }
    }
  }

  return longestKeyPressed.key;
};

console.log(slowestKey([12, 23, 36, 46, 62], 'spuda'));
