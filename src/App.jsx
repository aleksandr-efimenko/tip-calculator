import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="logo-container"></div>
      <div className="component-container">
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
              <button name="tip-button" id={tip} className="tip-button">
                {tip}
              </button>
            );
          })}
          <input type="number" className="manual-tip" />
        </div>
      </div>
    </div>
  );
}

export default App;
