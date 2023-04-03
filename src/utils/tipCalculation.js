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
  return (bill * tipPercentage) / 100 / numberOPeople;
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
  return (bill + bill * tipPercentage / 100) / numberOPeople;
}
