import React from "react";
import styles from "./tipStyles.module.css";
import buttonStyles from "./buttonStyles.module.css";
import classNames from "classnames";

export default function TipInput({
  bill,
  setBill,
  tip,
  setTip,
  manualTip,
  setManualTip,
  people,
  setPeople,
}) {
  const tipButtons = [5, 10, 15, 25, 50];
  const maxBill = 100_000;
  const maxManualTip = 100;
  const maxPeople = 100;

  const handleEnterBill = (e) => {
    if (!e.target.value) {
      setBill('');
      return;
    }
    let value = Number(e.target.value);
    if (value > maxBill) {
      value = maxBill;
    }
    if (value < 0) {
      value = value * -1;
    }

    setBill(value);
  };

  const handleEnterManualTip = (e) => {
    if (!e.target.value) {
      setManualTip('');
      return;
    }
    let value = Number(e.target.value);
    if (value > maxManualTip) {
      value = maxManualTip;
    }
    if (value < 0) {
      value = value * -1;
    }
    setTip("");
    setManualTip(value);
  };

  const handleSetTip = (e) => {
    let value = Number(e.target.value);
    setManualTip("");
    setTip(value);
  };

  const handleEnterPeople = (e) => {
    if (!e.target.value) {
      setPeople('');
      return;
    }
    let value = Number(e.target.value);
    if (value > maxPeople) {
      value = maxPeople;
    }
    if (value < 0) {
      value = value * -1;
    }
    setPeople(value);
  };

  return (
    <div className={styles.tipInputsContainer}>
      <div className={styles.billInputBlock}>
        <div className={styles.inputLabelBox}>
          <label htmlFor="bill-input">Bill</label>
          {bill === 0 && (
            <p className={styles.wrongInputMessage}>Can't be zero</p>
          )}
        </div>
        
        <input
          onChange={handleEnterBill}
          value={bill}
          type="number"
          name="bill-input"
          placeholder="0"
          step="0.01"
          className={classNames(styles.billInput, bill === 0 ? styles.wrongInput : "")}
        />
      </div>
      <div className={styles.tipSelectBlock}>
        <div className={styles.inputLabelBox}>
          <label htmlFor="tip-input">Select Tip %</label>
          {manualTip === 0 && (
            <p className={styles.wrongInputMessage}>Shouldn't be zero</p>
          )}
        </div>
        <div className={buttonStyles.tipButtonsContainer}>
          {tipButtons.map((selectedTip) => {
            return (
              <button
                key={selectedTip}
                id={selectedTip}
                name="tip-button"
                className={classNames(buttonStyles.tipButton, {
                  [styles.active]: selectedTip === tip && !manualTip,
                })}
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
            className={classNames(styles.manualTipInput, {[styles.wrongInput]: manualTip === 0}) }
            value={manualTip}
            onChange={handleEnterManualTip}
          />
        </div>
      </div>
      <div className={styles.peopleNumberBlock}>
        <div className={styles.inputLabelBox}>
          <label htmlFor="people-number">Number of people</label>
          {people === 0 && (
            <p className={styles.wrongInputMessage}>Can't be zero</p>
          )}
        </div>
        <input
          min={1}
          type="number"
          name="people-number"
          placeholder="0"
          onChange={handleEnterPeople}
          value={people}
          className={classNames(styles.peopleNumberInput, people === 0 ? styles.wrongInput : "")}
        />
      </div>
    </div>
  );
}
