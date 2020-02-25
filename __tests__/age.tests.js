import { Planet } from '../src/age.logic.js'

const planet = new Planet();
describe('checkIfnumber', () => {
  test('Should check that checkIfNumber function returns false if passed a string', () => {
    expect(planet.checkIfNumber('hello')).toEqual(false);
  });

  test('Should check that planet.checkIfNumber function returns true if passed a number', () => {
    expect(planet.checkIfNumber(24)).toEqual(true);
  });
});

describe('clacMercuryYears', () => {
  test('Should take the number of years inputed and convert it to Mercury years', () => {
    expect(planet.clacMercuryYears(1)).toEqual(.24);
  });
});

describe('planet.calcVenusYears', () => {
  test('Should take the number of years inputed and convert it to Venus years', () => {
    expect(planet.calcVenusYears(1)).toEqual(.62);
  });
});

describe('planet.calcMarsYears', () => {
  test('Should take the number of years inputed and convert it to Mars years', () => {
    expect(planet.calcMarsYears(1)).toEqual(1.88);
  });
});

describe('planet.calcJupiterYears', () => {
  test('Should take the number of years inputed and convert it to Jupiter years', () => {
    expect(planet.calcJupiterYears(1)).toEqual(11.86);
  });
});


describe('getLifeExpectancy', () => {
  test('Should take a country and return the avarage life expectancy of people in mexico', () => {
    expect(planet.getLifeExpectancy('mexico')).toEqual(77);
  });

  test('Should take a country and return the avarage life expectancy of people in usa', () => {
    expect(planet.getLifeExpectancy('usa')).toEqual(79);
  });

  test('Should take a country and return the avarage life expectancy of people in canada', () => {
    expect(planet.getLifeExpectancy('canada')).toEqual(82);
  });
});

describe('leftToLive', () => {
  test('Should take an age and a life expectancyand check return how long the user has left', () => {
    expect(planet.leftToLive(24, 60)).toEqual([36, 'left']);
  });

  test('Should take an age and a life expectancyand check return how long the user has lived past expectancy', () => {
    expect(planet.leftToLive(80, 60)).toEqual([20, 'past']);
  });

  test('Should take an age and a life expectancyand check the edge case in which the user is same age as expectancy', () => {
    expect(planet.leftToLive(60, 60)).toEqual([0, 'soon']);
  });
});
