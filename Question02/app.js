function sortArrays(...Arrays) {
  const concatArrays = [].concat(...Arrays);

  const sortedArray = concatArrays.sort((a, b) => b - a);

  return console.log(sortedArray);
}

sortArrays([5, 6, 2], [1, 7, 3]);
