const defineBoxes = (arrayOfRows) => {
  const arrayOfBoxes = [];
  arrayOfRows.forEach(() => {
    arrayOfBoxes.push([]);
  });
  return arrayOfBoxes;
};

export default defineBoxes;
