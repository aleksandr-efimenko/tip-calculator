import { useEffect, useState } from "react";
import TipOutput from "./components/TipOutput";
import TipInput from "./components/TipInput";
import styles from "./styles/TipStyles.module.css";
import {
  calculateTipAmountPerPerson,
  calculateTotalPerPerson,
} from "./utils/tipCalculation";

function App() {
  const [bill, setBill] = useState("");
  const [tipFromButton, setTip] = useState(0);
  const [numberOPeople, setNumberOPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [manualTip, setManualTip] = useState("");

  const resetForm = () => {
    setBill("");
    setTip(0);
    setManualTip("");
    setNumberOPeople(1);
    setTipAmount(0);
    setTotalPerPerson(0);
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
