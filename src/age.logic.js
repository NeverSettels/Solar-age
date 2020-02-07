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
export const calcJupiterYears = numYears => numYears;