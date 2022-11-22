const fibonacci = function(num) {
    if (typeof(num) === 'string') {
      num = Number(num);
    } 
    
    let sum1 = 1;
    let sum2 = 1
    for (i = 1; i <= num - 2; i++) {
      sum3 = sum1 + sum2;
      sum1 = sum2;
      sum2 = sum3;
    }
    if ((num === 1) || (num === 2)){
      sum3 = 1;
    } else if (num <= 0) {
        let sum3 = 'OOPS';
        return sum3;
    }

    return sum3;
    
  };
  

// Do not edit below this line
module.exports = fibonacci;
