/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = (s) => {
  let map = new Map();

  for (let x of s) {
    if (map.has(x)) {
      map.set(x, map.get(x) + 1);
    } else {
      map.set(x, 0);
    }
  }

  for (let [k, v] of map) {
    if (v === 0) {
      const val = s.indexOf(k);

      return val;
    }
  }

  return -1;
};

console.log(firstUniqChar('aabb'));
