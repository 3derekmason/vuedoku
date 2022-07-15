const boardIsFull = (boardArray) => {
  let result = true;
  boardArray.forEach((row) => {
    let count = 0;
    row.forEach((value) => (count += value));
    if (count !== 45) {
      result = false;
    }
  });
  return result;
};

export default boardIsFull;
