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
    if (!bill) return;
    if (!people) return;
    const tipToCalculate = manualTip ? manualTip : tip;
    const tipAmount = ((bill * tipToCalculate) / 100 / people).toFixed(2);
    const total = (((bill * tipToCalculate) / 100 + bill) / people).toFixed(2);
    setTotal(total);
    setTipAmount(tipAmount);
  };

  const resetForm = () => {
    setBill("");
    setTip("");
    setManualTip("");
    setPeople("");
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
