const defineColumns = (arrayOfRows) => {
  let arrayOfColumns = [];
  arrayOfRows.forEach(() => {
    arrayOfColumns.push([]);
  });
  arrayOfRows.forEach((row) => {
    row.forEach((value, i) => {
      arrayOfColumns[i].push(value);
    });
  });
  return arrayOfColumns;
};

export default defineColumns;
