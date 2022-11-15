const repeatString = function(string, num) {
  let a = string;
  if (num === 0) {
    string = "";
  } else if (num < 0) {
    string = "ERROR";
  } else {
      for (i = 1; i < num; i++) {
      string = string + a;
  }
}  
  return string;
}


// Do not edit below this line
module.exports = repeatString;
