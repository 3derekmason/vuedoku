const validateArray = (array) => {
  // All numbers that must be included
  const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Initialize empty array to check for duplicates
  const checkArray = [];

  let isValid = true;

  array.forEach((value) => {
    // Return false if a value is already present in our checking array
    if (checkArray.includes(value)) {
      isValid = false;
    }
    checkArray.push(value);
  });

  range.forEach((digit) => {
    // return false if all neccessary numbers aren't included
    if (!checkArray.includes(digit)) {
      isValid = false;
    }
  });

  return isValid;
};

export default validateArray;
