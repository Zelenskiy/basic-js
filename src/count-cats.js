const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  count = 0;
  matrix.forEach(function(items, i, matrix) {
      items.forEach(function(item, j, items) {
          if (item === '^^'){
              count++;
          }
      });      
  });
  return count;
};
