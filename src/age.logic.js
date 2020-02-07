export function checkIfNumber(input) {
  if (typeof input === "string") {
    return false;
  } else {
    return true;
  }
}

export const clacMercuryYears = numYears => numYears * 0.24;

export const calcVenusYears = numYears => {
  return numYears * 0.62;
}