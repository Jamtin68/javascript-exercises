const findTheOldest = function(people) {
    ages = [];
    for (i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath == null) (
            people[i].yearOfDeath = new Date().getFullYear()
        )
        ages.push(people[i].yearOfDeath - people[i].yearOfBirth);        
    } 
    let oldest = 0;  
    for (i = 1; i < ages.length; i++) {
      if (ages[i] > ages[i - 1]) {
        oldest = i;
      }
    }
    people = people[oldest];

    return people;
  };

// Do not edit below this line
module.exports = findTheOldest;
