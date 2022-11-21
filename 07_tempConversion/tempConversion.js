const ftoc = function(Fi) {
  Co = (Fi - 32) * 5 / 9;
  Co = Math.round(Co * 10) / 10;
  return Co;
};

const ctof = function(Ci) {
  Fo = Ci * 9 / 5 + 32;
  Fo = Math.round(Fo * 10) / 10; 
  return Fo;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
