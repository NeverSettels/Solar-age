import { checkIfNumber } from '../src/age.logic.js'

describe('checkIfnumber', () => {
  test('Should check that checkIfNumber function returns false if passed a string', () => {
    expect(checkIfNumber('hello')).toEqual(false);
  })

  test('Should check that checkIfNumber function returns true if passed a number', () => {
    expect(checkIfNumber(24)).toEqual(true);
  })
})