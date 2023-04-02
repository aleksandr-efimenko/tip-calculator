/**
 * 
 * @param {number} bill 
 * @param {number} tipPercentage 
 * @param {number} numberOPeople
 * @returns the tip amount per person
 * @description function to calculate the tip amount per person
 */

export function calculateTipAmountPerPerson(bill, tipPercentage, numberOPeople) {
  if (!bill || !tipPercentage || !numberOPeople) return 0;
  const result = (bill * tipPercentage) / 100 / numberOPeople;
  return result.toFixed(2);
}

/**
 * 
 * @param {number} bill 
 * @param {number} tipPercentage 
 * @param {number} numberOPeople 
 * @returns the total amount per person
 * @description function to calculate the total amount per person
 */
export function calculateTotalPerPerson(bill, tipPercentage, numberOPeople) {
  if (!bill || !tipPercentage || !numberOPeople) return 0;
  const result = (bill + bill * tipPercentage / 100) / numberOPeople;
  return result.toFixed(2);
}
