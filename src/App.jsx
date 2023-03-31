import { useEffect, useState } from "react";
import TipOutput from "./components/TipOutput";
import TipInput from "./components/TipInput";
import styles from "./components/TipStyles.module.css";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [manualTip, setManualTip] = useState("");

  const calculateTip = () => {
    if (!bill || !people) {
      setTotal(0);
      setTipAmount(0);
      return;
    }

    const tipToCalculate = manualTip ? manualTip : tip;
    const tipAmount = (bill * tipToCalculate) / 100 / people;
    const total = ((bill * tipToCalculate) / 100 + bill) / people;
    if (tipAmount % 1 !== 0) {
      setTipAmount(tipAmount.toFixed(2));
    } else {
      setTipAmount(tipAmount);
    }
    if (total % 1 !== 0) {
      setTotal(total.toFixed(2));
    } else {
      setTotal(total);
    }
  };

  const resetForm = () => {
    setBill("");
    setTip("");
    setManualTip("");
    setPeople("");
    setTipAmount(0);
    setTotal(0);
  };

  useEffect(() => {
    calculateTip();
  }, [bill, tip, manualTip, people]);

  return (
    <div className="App">
      <div className={styles.logoContainer}></div>
      <div className={styles.componentContainer}>
        <TipInput
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          manualTip={manualTip}
          setManualTip={setManualTip}
          people={people}
          setPeople={setPeople}
        />
        <TipOutput
          disabledReset={!bill && !tip && !manualTip && !people}
          tipAmount={tipAmount}
          total={total}
          resetForm={resetForm}
        />
      </div>
    </div>
  );
}

export default App;
