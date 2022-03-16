/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const strStr = (haystack, needle) => {
  if (!needle) return 0;

  //   Loop haystack
  for (let i = 0; i < haystack.length; i++) {
    // If haystack[i] == needle[0]
    if (haystack[i] == needle[0]) {
      // compare haystack.slice(i, i + needle.length) to needle
      if (haystack.slice(i, i + needle.length) == needle) {
        // If match return i
        return i;
      }
    }
  }

  // If looped and nothing was found, return -1;
  return -1;
};

console.log(strStr('hello', 'll'));

console.log(strStr('aaaaa', 'bba'));

console.log(strStr('', ''));

console.log(strStr('bumblebee', 'bee'));
