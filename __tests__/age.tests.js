import { checkIfNumber, clacMercuryYears, calcVenusYears, calcMarsYears, calcJupiterYears, getLifeExpectancy, leftToLive } from '../src/age.logic.js'

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


describe('getLifeExpectancy', () => {
  test('Should take a country and return the avarage life expectancy of people in mexico', () => {
    expect(getLifeExpectancy('mexico')).toEqual(77.12);
  });

  test('Should take a country and return the avarage life expectancy of people in usa', () => {
    expect(getLifeExpectancy('usa')).toEqual(78.69);
  });

  test('Should take a country and return the avarage life expectancy of people in canada', () => {
    expect(getLifeExpectancy('canada')).toEqual(82.30);
  });
});

describe('leftToLive', () => {
  test('Should take an age and a life expectancyand check return how long the user has left', () => {
    expect(leftToLive(24, 60)).toEqual([36, 'left']);
  });

  test('Should take an age and a life expectancyand check return how long the user has lived past expectancy', () => {
    expect(leftToLive(80, 60)).toEqual([20, 'past']);
  });
});
