import React from "react";

export default function TipInput({
  handleSetTip,
  setBill,
  setPeople,
  bill,
  people,
  tip,
}) {
  const tipButtons = [5, 10, 15, 25, 50];
  const defaultTip = 15;
  return (
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
            {tipButtons.map((tip) => {
              return (
                <button
                  key={tip}
                  name="tip-button"
                  id={tip}
                  className="tip-button"
                  value={tip}
                  onClick={handleSetTip}
                >
                  {`${tip}%`}
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
  );
}
