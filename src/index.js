
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (typeof matrix == 'undefined' || matrix.length == 0 ) {
      return [];
  }

  const rev = (mas) => {
      const reversed = mas.reverse();
      return reversed;
  }
  
  let array = matrix[0];

  for (let i = 1; i < matrix.length; i++) {
      if (i%2 === 0) {
          array = array.concat(matrix[i]);
      } else {
          array = array.concat(rev(matrix[i]));
      }
  }

  return array;
}
