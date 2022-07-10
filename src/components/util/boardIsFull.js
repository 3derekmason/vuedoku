const boardIsFull = (boardArray) => {
  let result = true;
  boardArray.forEach((row) => {
    row.forEach((value) => {
      if (value === 0) {
        result = false;
      }
    });
  });
  return result;
};

export default boardIsFull;
