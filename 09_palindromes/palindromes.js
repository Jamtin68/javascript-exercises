const palindromes = function (word) {
    for (i = 0; i < word.length; i++) {
      let word2 = word
      if (Boolean((word.charAt(i)).match(/^[A-Za-z]*$/)) == false) {      
        word = word.substring(0, i) + word.substring(i + 1, word.length);
        i--;      
      }    
    }
    word = word.toLowerCase();
    let d = 0;
    for (i = 0; i < word.length; i++) {
      if (word.charAt(i) !== word.charAt(word.length - i - 1)) {
        d++;
      }
    }
    if (d > 0) {
      let result = false; 
      return result;   
    } else {
      let result = true
      return result;
    }
    
  };

// Do not edit below this line
module.exports = palindromes;
