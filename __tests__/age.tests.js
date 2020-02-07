import { checkIfNumber, clacMercuryYears, calcVenusYears, calcMarsYears, calcJupiterYears } from '../src/age.logic.js'

describe('checkIfnumber', () => {
  test('Should check that checkIfNumber function returns false if passed a string', () => {
    expect(checkIfNumber('hello')).toEqual(false);
  });

  test('Should check that checkIfNumber function returns true if passed a number', () => {
    expect(checkIfNumber(24)).toEqual(true);
  });
});

describe('clacMercuryYears', () => {
  test('Should take the number of years inputed and convert it to Mercury years', () => {
    expect(clacMercuryYears(1)).toEqual(.24);
  });
});

describe('calcVenusYears', () => {
  test('Should take the number of years inputed and convert it to Venus years', () => {
    expect(calcVenusYears(1)).toEqual(.62);
  });
});

describe('calcMarsYears', () => {
  test('Should take the number of years inputed and convert it to Mars years', () => {
    expect(calcMarsYears(1)).toEqual(1.88);
  });
});

describe('calcJupiterYears', () => {
  test('Should take the number of years inputed and convert it to Jupiter years', () => {
    expect(calcJupiterYears(1)).toEqual(11.86);
  });
});