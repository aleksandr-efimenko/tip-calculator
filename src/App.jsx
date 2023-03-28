import { useEffect, useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [manualTip, setManualTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(32.79);

  const handleSetTip = (e) => {
    if (e.target.value === "Custom") {
      setTip(manualTip);
    } else {
      setTip(e.target.value);
    }
  }

  const calculateTip = () => {
    console.log(bill)
    setTotal(bill * tip / 100);
    setTipAmount(bill * tip / 100 / people)
  }

  const resetForm = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
  }

  useEffect(()=>{
    calculateTip()
  }, [bill, tip, people])

  return (
    <div className="App">
      <div className="logo-container"></div>
      <div className="component-container">
        <div className="tip-inputs-container">
          <div className="bill-input-block">
            <label htmlFor="bill-input">Bill</label>
            <input
            onChange={(e) => setBill(e.target.value)}
            value={bill}
              type="number"
              id="bill-input"
              name="bill-input"
              placeholder=""
              step="0.01"
            />
          </div>
          <div className="tip-select-block">
            <label htmlFor="tip-input">Select Tip %</label>
            <div className="tip-buttons-container">
              {["5%", "10%", "15%", "25%", "50%"].map((tip) => {
                return (
                  <button
                    key={tip}
                    name="tip-button"
                    id={tip}
                    className="tip-button"
                    value={tip}
                    onClick={handleSetTip}
                  >
                    {tip}
                  </button>
                );
              })}
              <input
                type="number"
                step="0.5"
                placeholder="Custom"
                id="manual-tip-input"
                className="manual-tip"
                value={tip}
                onChange={handleSetTip}
              />
            </div>
          </div>
          <div className="people-number-block">
            <label htmlFor="people-number">Number of people</label>
            <input 
            type="number" 
            id="people-number" 
            name="people-number" 
            onChange={(e) => setPeople(e.target.value)}
            value={people}
            />
          </div>
        </div>
        <div className="tip-outputs-container">
          <div className="tip-result-row">
            <div className="tip-result-container">
              <div className="tip-result-label">Tip Amount</div>
              <div className="tip-result-label-description">/ person</div>
            </div>
            <div className="tip-result-value">${tipAmount}</div>
          </div>
          <div className="tip-result-row">
            <div className="tip-result-container">
              <div className="tip-result-label">Total</div>
              <div className="tip-result-label-description">/ person</div>
            </div>
            <div className="tip-result-value">${total}</div>
          </div>
          <button className="reset-button" onClick={resetForm}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
