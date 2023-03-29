import { useEffect, useState } from "react";
import TipOutput from "./components/TipOutput";
import TipInput from "./components/TipInput";
import styles from "./components/TipStyles.module.css";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(null);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isManualTip, setIsManualTip] = useState(false);

  const handleSetTip = (e) => {
    const tip = Number(e.target.value);
    console.log(e.target);
    if (!tip) return;
    setTip(tip);
  };

  const calculateTip = () => {
    console.log("bill", typeof bill);
    if(!bill) return;
    if(!people) return;
    const total = (bill * (tip / 100)).toFixed(2);
    const tipAmount = ((bill * tip) / 100 / people).toFixed(2);
    setTotal(total);
    setTipAmount(tipAmount);
  };

  const resetForm = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
  };

  useEffect(() => {
    calculateTip();
  }, [bill, tip, people]);

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
          isManualTip={isManualTip}
          setIsManualTip={setIsManualTip}
        />
        <TipOutput tipAmount={tipAmount} total={total} resetForm={resetForm} />
      </div>
    </div>
  );
}

export default App;
