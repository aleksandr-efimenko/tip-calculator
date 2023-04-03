import calculateTipAmountPerPerson from '../tipCalculation';
import calculateTotalPerPerson from '../tipCalculation';

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
    const result = calculateTipAmountPerPerson(100, 10, 2);
    expect(result).toBe(5);
  });

  it('should return the correct tip amount per person', () => {
    const result = calculateTipAmountPerPerson(50.25, 15, 3);
    expect(result).toBe(2.81);
  });
});

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
    expect(result).toBe(110);
  });

  it('should return the correct total per person', () => {
    const result = calculateTotalPerPerson(50.25, 15, 3);
    expect(result).toBe(58.81);
  });
});
