import { useEffect, useState } from "react";
import TipOutput from "./components/TipOutput";
import TipInput from "./components/TipInput";
import styles from "./styles/TipStyles.module.css";
import {
  calculateTipAmountPerPerson,
  calculateTotalPerPerson,
} from "./utils/tipCalculation";

export const initValues = {
  bill: "",
  maxBill: 100_000,
  tipFromButton: 0,
  manualTip: "",
  maxManualTip: 100,
  people: 1,
  maxPeople: 100,
  tipAmount: 0,
  total: 0,
};

function App() {
  const [bill, setBill] = useState(initValues.bill);
  const [tipFromButton, setTip] = useState(initValues.tipFromButton);
  const [numberOPeople, setNumberOPeople] = useState(initValues.people);
  const [tipAmount, setTipAmount] = useState(initValues.tipAmount);
  const [totalPerPerson, setTotalPerPerson] = useState(initValues.total);
  const [manualTip, setManualTip] = useState(initValues.manualTip);

  const resetForm = () => {
    setBill(initValues.bill);
    setTip(initValues.tipFromButton);
    setManualTip(initValues.manualTip);
    setNumberOPeople(initValues.people);
    setTipAmount(initValues.tipAmount);
    setTotalPerPerson(initValues.total);
  };

  useEffect(() => {
    const tipToCalculate = manualTip ? manualTip : tipFromButton;

    const billNumber = Number(bill);
    const tipToCalculateNumber = Number(tipToCalculate);
    const tipAmountPerPerson = calculateTipAmountPerPerson(
      billNumber,
      tipToCalculateNumber,
      numberOPeople
    );
    const totalPerPerson = calculateTotalPerPerson(
      billNumber,
      tipToCalculateNumber,
      numberOPeople
    );

    if (tipAmountPerPerson % 1 !== 0 || totalPerPerson % 1 !== 0) {
      setTipAmount(tipAmountPerPerson.toFixed(2));
      setTotalPerPerson(totalPerPerson.toFixed(2));
    } else {
      setTipAmount(tipAmountPerPerson);
      setTotalPerPerson(totalPerPerson);
    }
  }, [bill, tipFromButton, manualTip, numberOPeople]);

  return (
    <div className="App">
      <div className={styles.logoContainer}></div>
      <div className={styles.componentContainer}>
        <TipInput
          bill={bill}
          setBill={setBill}
          tip={tipFromButton}
          setTip={setTip}
          manualTip={manualTip}
          setManualTip={setManualTip}
          people={numberOPeople}
          setPeople={setNumberOPeople}
        />
        <TipOutput
          disabledReset={
            !bill && !tipFromButton && !manualTip && !numberOPeople
          }
          tipAmount={tipAmount}
          total={totalPerPerson}
          resetForm={resetForm}
        />
      </div>
    </div>
  );
}

export default App;
