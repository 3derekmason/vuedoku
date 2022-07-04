const defineBoxes = (arrayOfRows) => {
  // Define a new array to store sorted boxes
  const arrayOfBoxes = [];

  // Add an empty array within our result array for each row
  arrayOfRows.forEach(() => {
    arrayOfBoxes.push([]);
  });

  // box will be the index of arrayOfBoxes that we are inserting a sorted value into
  let box = 0;

  // boxSet will tell us which 'row' of boxes we need to be inserting into
  let boxSet = 0;

  // count will tell us when to move on to the next box when sorting
  let count = 1;

  // define box sets from input
  arrayOfRows.forEach((row, i) => {
    if (i < 3) {
      // Top row boxes
      boxSet = 0;
    }
    if (i >= 3 && i < 6) {
      // Middle row boxes
      boxSet = 3;
    }
    if (i > 5) {
      // Bottom row boxes
      boxSet = 6;
    }

    // Sort values from each row into new array
    row.forEach((value) => {
      // if our box index is divisible by three, we have reached the next box set
      // However if we havent reached an appropriate row to change box set (3,6)
      // we want to reset our box to the first index of current box set
      if (box % 3 === 0) {
        box = boxSet;
      }
      // Add value to arrayOfBoxes at the index of current box
      arrayOfBoxes[box].push(value);
      // We each box is 3 x 3 meaning we only want to switch boxes after 3 values from each row are added
      if (count % 3 === 0) {
        box++;
      }
      // Increment the count every loop
      count++;
    });
  });

  return arrayOfBoxes;
};

export default defineBoxes;
