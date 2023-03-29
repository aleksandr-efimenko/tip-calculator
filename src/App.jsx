import { useEffect, useState } from "react";
import TipOutput from "./components/TipOutput";
import TipInput from "./components/TipInput";
import styles from './components/TipStyles.module.css';

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSetTip = (e) => {
    const tip = e.target.value;
    console.log('tip', e.target.value);
    if (!tip) return;
    setTip(tip);
  };

  const calculateTip = () => {
    console.log('bill', bill);
    setTotal(((bill * tip) / 100).toFixed(2));
    setTipAmount(((bill * tip) / 100 / people).toFixed(2));
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
      <div className={styles['logo-container']}></div>
      <div className={styles['component-container']}>
        <TipInput
          handleSetTip={handleSetTip}
          setBill={setBill}
          setPeople={setPeople}
          bill={bill}
          people={people}
        />
        <TipOutput tipAmount={tipAmount} total={total} resetForm={resetForm} />
      </div>
    </div>
  );
}

export default App;
