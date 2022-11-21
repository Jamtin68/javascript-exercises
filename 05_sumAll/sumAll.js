const sumAll = function(n1, n2) {
    
  console.log(typeof(n1), n2, n1 + n2);
  if ((n1 < 0) || (n2 < 0) || (typeof(n1) !== 'number') || (typeof(n2) !== 'number')) {
      sum = 'ERROR';
  } else {
      let sum = 0;
      if (n1 > n2) {
        for (i = n2; i <= n1; i++) {
          sum = sum + i;
        }
      } else if (n1 < n2) {
        for (i = n1; i <= n2; i++) {
          sum = sum + i;      
        }
      }
      return sum;
  } return sum;
};


// Do not edit below this line
module.exports = sumAll;
