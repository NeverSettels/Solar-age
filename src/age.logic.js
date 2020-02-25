export class Planet {
  checkIfNumber(input) {
    if (typeof input === "string") {
      return false;
    } else {
      return true;
    }
  }
  clacMercuryYears (numYears){ return numYears * 0.24;}
  calcVenusYears (numYears) { return numYears * 0.62;}
  calcMarsYears (numYears) { return numYears * 1.88;}
  calcJupiterYears (numYears) { return numYears * 11.86;}

  getLifeExpectancy(country) {
    if (country === 'mexico') {
      return 77;
    } else if (country === 'usa') {
      return 79;
    } else if (country === 'canada') {
      return 82;
    }
  }
  //Will take an age and expectancy and see how clalculate weather or not that person has reached it, is above it or below it. Will pass age and expectancy converted to each planets year total
  leftToLive(age, expectancy){
    let yearsLeft = expectancy - age
    if (yearsLeft > 0) {
      return [yearsLeft, 'left'];
    } else if (yearsLeft < 0) {
      return [-1 * yearsLeft, 'past'];
    } else if (yearsLeft === 0) {
      return [yearsLeft, 'soon'];
    }
  }
}