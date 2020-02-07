export function checkIfNumber(input) {
  if (typeof input === "string") {
    return false;
  } else {
    return true;
  }
}
export const clacMercuryYears = numYears => numYears * 0.24;
export const calcVenusYears = numYears => numYears * 0.62;
export const calcMarsYears = numYears => numYears * 1.88;
export const calcJupiterYears = numYears => numYears * 11.86;

export function getLifeExpectancy(country) {
  if (country === 'mexico') {
    return 77.12
  } else if (country === 'usa') {
    return 78.69
  } else if (country === 'canada') {
    return 82.30
  }
}
export const leftToLive = (age, expectancy) => {
  let yearsLeft = expectancy - age
  if (yearsLeft > 0) {
    return [yearsLeft, 'left']
  } else if (yearsLeft < 0) {
    return [-1 * yearsLeft, 'past']
  }
  return [age, expectancy]
}