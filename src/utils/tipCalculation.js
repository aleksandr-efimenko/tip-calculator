/**
 * 
 * @param {number} bill 
 * @param {number} tipPercentage 
 * @param {number} numberOPeople
 */

export function calculateTipAmountPerPerson(bill, tipPercentage, numberOPeople) {
  if (!bill || !tipPercentage || !numberOPeople) return 0;
  return (bill * tipPercentage) / 100 / numberOPeople;
}

/**
 * 
 * @param {number} bill 
 * @param {number} tipPercentage 
 * @param {number} numberOPeople 
 * @returns 
 */
export function calculateTotalPerPerson(bill, tipPercentage, numberOPeople) {
  if (!bill || !tipPercentage || !numberOPeople) return 0;
  return (bill + bill * tipPercentage / 100) / numberOPeople;
}
