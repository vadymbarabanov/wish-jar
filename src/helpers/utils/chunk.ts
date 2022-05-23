export const chunk = (array: any[], size: number = 1) => {
  const length = array.length;

  if (!length || size < 1) {
    return [];
  }

  let index = 0;
  let resIndex = 0;
  const result = Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size));
  }

  return result;
};
