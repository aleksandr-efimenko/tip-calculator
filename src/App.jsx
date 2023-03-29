import { useEffect, useState } from "react";
import TipOutput from "./components/TipOutput";
import TipInput from "./components/TipInput";
import styles from "./components/TipStyles.module.css";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [manualTip, setManualTip] = useState('');

  const handleSetTip = (e) => {
    const tip = Number(e.target.value);
    if (!tip) return;
    if(e.target.id ===styles.manualTipInput) {
      setTip(0);
      setManualTip(tip);
    } else {
      setManualTip('');
      setTip(tip);
    }
  };

  const calculateTip = () => {
    if (!bill) return;
    if (!people) return;
    const tipToCalculate = manualTip ? manualTip : tip;
    const tipAmount = ((bill * tipToCalculate) / 100 / people).toFixed(2);
    const total = ((bill * tipToCalculate / 100  + bill) / people).toFixed(2);
    setTotal(total);
    setTipAmount(tipAmount);
  };

  const resetForm = () => {
    setBill(0);
    setTip(0);
    setManualTip('');
    setPeople(0);
  };

  useEffect(() => {
    calculateTip();
  }, [bill, tip, manualTip, people]);

  return (
    <div className="App">
      <div className={styles.logoContainer}></div>
      <div className={styles.componentContainer}>
        <TipInput
          tip={tip}
          handleSetTip={handleSetTip}
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
          manualTip={manualTip}
          setManualTip={setManualTip}
        />
        <TipOutput tipAmount={tipAmount} total={total} resetForm={resetForm} />
      </div>
    </div>
  );
}

export default App;
