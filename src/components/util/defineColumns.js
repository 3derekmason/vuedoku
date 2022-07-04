const defineColumns = (arrayOfRows) => {
  // Create a result array to store sorted columns
  let arrayOfColumns = [];
  // Populate result array with empty arrays
  arrayOfRows.forEach(() => {
    arrayOfColumns.push([]);
  });

  // Iterate through each row and sort values into column arrays
  arrayOfRows.forEach((row) => {
    row.forEach((value, i) => {
      // Add the value at current row index into column array at the same index
      arrayOfColumns[i].push(value);
    });
  });

  return arrayOfColumns;
};

export default defineColumns;
