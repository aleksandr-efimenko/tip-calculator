import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <div className="logo-container"></div>
      <div className="component-container">
        <div className="tip-inputs-container">
          <label htmlFor="bill-input">Bill</label>
          <input
            type="number"
            id="bill-input"
            name="bill-input"
            placeholder=""
            step="0.01"
          />
          <label htmlFor="tip-input">Select Tip %</label>
          <div className="tip-buttons-container">
            {["5%", "10%", "15%", "25%", "50%"].map((tip) => {
              return (
                <button
                  key={tip}
                  name="tip-button"
                  id={tip}
                  className="tip-button"
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
            />
          </div>
          <label htmlFor="people-number">Number of people</label>
          <input type="number" id="people-number" name="people-number" />
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
          <button className="reset-button">RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
