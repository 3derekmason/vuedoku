const validateArray = (array) => {
  const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const checkArray = [];
  let result = true;
  array.forEach((value) => {
    if (checkArray.includes(value)) {
      result = false;
    }
    checkArray.push(value);
  });
  range.forEach((digit) => {
    if (!checkArray.includes(digit)) {
      result = false;
    }
  });
  return result;
};

export default validateArray;
