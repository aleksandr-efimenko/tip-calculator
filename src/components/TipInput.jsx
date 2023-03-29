import React from "react";
import styles from "./TipStyles.module.css";
import classNames from "classnames";

export default function TipInput({
  handleSetTip,
  setBill,
  setPeople,
  bill,
  people,
  tip,
}) {

  const tipButtons = [5, 10, 15, 25, 50];
  return (
    <div className={styles.TipInputsContainer}>
      <div className={styles.billInputBlock}>
        <label htmlFor="bill-input">Bill</label>
        <input
          onChange={(e) => setBill(e.target.value)}
          value={bill}
          type="number"
          id={styles.billInput}
          name="bill-input"
          placeholder=""
          step="0.01"
        />
      </div>
      <div className={styles.tipSelectBlock}>
        <label htmlFor="tip-input">Select Tip %</label>
        <div className={styles.tipButtonsContainer}>
          {tipButtons.map((selectedTip) => {
            return (
              <button
                key={selectedTip}
                name="tip-button"
                id={selectedTip}
                className={classNames(
                  styles.tipButton,
                  tip === selectedTip && styles.active
                )}
                value={selectedTip}
                onClick={handleSetTip}
              >
                {selectedTip}%
              </button>
            );
          })}
          <input
            type="number"
            step="0.5"
            placeholder="Custom"
            id={styles.manualTipInput}
            className={styles.manualTip}
            value={tip}
            onChange={handleSetTip}
          />
        </div>
      </div>
      <div className={styles.peopleNumberBlock}>
        <label htmlFor="people-number">Number of people</label>
        <input
          type="number"
          id={styles.peopleNumber}
          name="people-number"
          onChange={(e) => setPeople(e.target.value)}
          value={people}
        />
      </div>
    </div>
  );
}
