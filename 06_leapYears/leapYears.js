const leapYears = function(year) {
    let lYear;
    if (year % 400 === 0) {
      lYear = true;
    } else {
      if (year % 100 === 0) {
        lYear = false;
      } else {
        if (year % 4 === 0) {
          lYear = true;
        } else {
          lYear = false;
        }
        return lYear;
      }
      return lYear;
    }
    return lYear;
  };

// Do not edit below this line
module.exports = leapYears;
