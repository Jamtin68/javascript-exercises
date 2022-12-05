const caesar = function(string, rotation) {
    let newString = "";
    for (i = 0; i < string.length; i++) {
      if ((96 < string.charCodeAt(i)) && (string.charCodeAt(i) < 123) && (string.charCodeAt(i) + rotation < 97) ) {
          let num = (string.charCodeAt(i) + rotation) + (Math.floor((96 - (string.charCodeAt(i) + rotation)) / 26) + 1) * 26;
          newString = newString + String.fromCharCode(num);
      } else if ((96 < string.charCodeAt(i)) && (string.charCodeAt(i) < 123) && (string.charCodeAt(i) + rotation > 122)) {
          let num = (string.charCodeAt(i) + rotation) - (Math.floor(((string.charCodeAt(i) + rotation) - 123) / 26) + 1) * 26;
          newString = newString + String.fromCharCode(num);
      } else if ((64 < string.charCodeAt(i)) && (string.charCodeAt(i) < 91) && (string.charCodeAt(i) + rotation < 65) ) {
          let num = (string.charCodeAt(i) + rotation) + (Math.floor((64 - (string.charCodeAt(i) + rotation)) / 26) + 1) * 26;
          newString = newString + String.fromCharCode(num);
      } else if ((64 < string.charCodeAt(i)) && (string.charCodeAt(i) < 91) && (string.charCodeAt(i) + rotation > 90)) {
          let num = (string.charCodeAt(i) + rotation) - (Math.floor(((string.charCodeAt(i) + rotation) - 91) / 26) + 1) * 26;
          newString = newString + String.fromCharCode(num);
      } else if ((64 < string.charCodeAt(i)) && (string.charCodeAt(i) < 91) || (96 < string.charCodeAt(i)) && (string.charCodeAt(i) < 123)) {
          newString = newString + String.fromCharCode(string.charCodeAt(i) + rotation);
      } else {
          newString = newString + string.charAt(i);
      }
  
  
      
      
    }
    return newString
  };

// Do not edit below this line
module.exports = caesar;
