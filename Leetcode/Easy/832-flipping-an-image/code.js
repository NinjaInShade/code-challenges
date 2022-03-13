/**
 * @param {number[][]} image
 * @return {number[][]}
 */

const flipAndInvertImage = (image) => {
  let flippedImage = [];

  for (let i = 0; i < image.length; i++) {
    //   flip
    image[i].reverse();

    // invert
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] == 0) {
        image[i][j] = 1;
      } else {
        image[i][j] = 0;
      }
    }

    flippedImage.push(image[i]);
  }

  return flippedImage;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);

console.log(0 ^ 1, 1 ^ 1);
