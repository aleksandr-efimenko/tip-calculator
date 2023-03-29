import { useEffect, useState } from "react";
import TipOutput from "./components/TipOutput";
import TipInput from "./components/TipInput";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [manualTip, setManualTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(32.79);

  const handleSetTip = (e) => {
    const tip = e.target.value;
    console.log('tip', e.target.value);
    if (!tip) return;
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
      <div className="logo-container"></div>
      <div className="component-container">
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
