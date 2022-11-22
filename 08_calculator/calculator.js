const add = function(add1, add2) {
	return add1 + add2; 
};

const subtract = function(subtract1 , subtract2) {
	return subtract1 - subtract2;
};

const sum = function(sArray) {
  let summingUp = 0;
	for (i = 0; i < sArray.length; i++) {
    summingUp = summingUp + sArray[i];
  }
  return summingUp;
};

const multiply = function(sMultiply) {

  if (sMultiply.length === 0) {
    product = 0;
  } else {
    product = 1;
    for (i = 0; i < sMultiply.length; i++) {
      product = product * sMultiply[i];
    }
    return product;
  }
  return product;
};

const power = function(b, p) {
	
  if (p < 0) {
    let bc = 'ERROR';
    return bc;
  } else if (p === 0) {
    let bc = 1;
    return bc;
  } else {
    let bc = 1;
    for (i = 1; i < p + 1; i++) {
      bc = bc * b;
    }
    return bc;
  }
  return bc;
};

const factorial = function(input) {	
  let f = 1;
  if (input > 0) {
    for (i = 1; i < input + 1; i++) {
      f = f * i
    }
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
