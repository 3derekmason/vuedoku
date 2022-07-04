const defineBoxes = (arrayOfRows) => {
  const arrayOfBoxes = [];
  arrayOfRows.forEach(() => {
    arrayOfBoxes.push([]);
  });
  let boxSet = 0;
  let box = 0;
  let count = 1;
  arrayOfRows.forEach((row, i) => {
    if (i < 3) {
      boxSet = 0;
    }
    if (i >= 3 && i < 6) {
      boxSet = 3;
    }
    if (i > 5) {
      boxSet = 6;
    }
    row.forEach((value) => {
      if (box % 3 === 0) {
        box = boxSet;
      }
      arrayOfBoxes[box].push(value);
      if (count % 3 === 0) {
        box++;
      }
      count++;
    });
  });
  return arrayOfBoxes;
};

export default defineBoxes;
