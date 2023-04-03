import { calculateTipAmountPerPerson, calculateTotalPerPerson } from '../tipCalculation';
import { describe, expect, it } from "vitest";
/**
 * 
 * @param {number} bill
 * @param {number} tipPercentage
 * @param {number} numberOPeople
 * @returns the tip amount per person
 * @description function to calculate the tip amount per person
 * 
 * 1. Calculate the tip amount
 * 2. Divide the tip amount by the number of people
 * 3. Return the result
 * 
 */
describe('calculateTipAmountPerPerson', () => {
  it('should return 0 if no bill is provided', () => {
    const result = calculateTipAmountPerPerson(0, 10, 2);
    expect(result).toBe(0);
  });

  it('should return 0 if no tipPercentage is provided', () => {
    const result = calculateTipAmountPerPerson(100, 0, 2);
    expect(result).toBe(0);
  });

  it('should return 0 if no numberOPeople is provided', () => {
    const result = calculateTipAmountPerPerson(100, 10, 0);
    expect(result).toBe(0);
  });

  it('should return the correct tip amount per person', () => {
    expect(calculateTipAmountPerPerson(100, 10, 2)).toBe(5);
    expect(Number(calculateTipAmountPerPerson(50.25, 15, 3).toFixed(2))).toBe(2.51);
    expect(Number(calculateTipAmountPerPerson(100, 10, 3).toFixed(2))).toBe(3.33);
  });
});

/**
 * 
 * @param {number} bill
 * @param {number} tipPercentage
 * @param {number} numberOPeople
 * @returns
 * @description
 * 1. Calculate the tip amount
 * 2. Add the tip amount to the bill
 * 3. Divide the total by the number of people
 * 4. Return the result
 */
describe('calculateTotalPerPerson', () => {
  it('should return 0 if no bill is provided', () => {
    const result = calculateTotalPerPerson(0, 10, 2);
    expect(result).toBe(0);
  });

  it('should return 0 if no tipPercentage is provided', () => {
    const result = calculateTotalPerPerson(100, 0, 2);
    expect(result).toBe(0);
  });

  it('should return 0 if no numberOPeople is provided', () => {
    const result = calculateTotalPerPerson(100, 10, 0);
    expect(result).toBe(0);
  });

  it('should return the correct total per person', () => {
    const result = calculateTotalPerPerson(100, 10, 2);
    expect(result).toBe(55);
  });

  it('should return the correct total per person', () => {
    const result = Number(calculateTotalPerPerson(50.25, 15, 3).toFixed(2));
    expect(result).toBe(19.26);
  });

  it('should return the correct total per person', () => {
    const result = Number(calculateTotalPerPerson(100, 10, 3).toFixed(2));
    expect(result).toBe(36.67);
  });
});
