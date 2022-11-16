const reverseString = function(string) {
  let b = "";
  for (i = 1; i < string.length+1; i++) {
    b = b + string.charAt(string.length-i); 

  }
  return b;
}
// Do not edit below this line
module.exports = reverseString;
