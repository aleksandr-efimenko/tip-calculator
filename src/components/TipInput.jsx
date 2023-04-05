import React from "react";
import buttonStyles from "../styles/ButtonStyles.module.css";
import formStyles from "../styles/FormStyles.module.css";
import classNames from "classnames";
import { initValues } from "../App";

const handleEnter = (value, maxValue) => {
  if (!value) {
    return "";
  }
  let valueNumber = Number(value);
  valueNumber = Math.min(valueNumber, maxValue);
  valueNumber = Math.abs(valueNumber);
  return valueNumber;
};

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

  const handleEnterBill = (e) => {
    const value = handleEnter(e.target.value, initValues.maxBill);
    setBill(value);
  };

  const handleEnterManualTip = (e) => {
    const value = handleEnter(e.target.value, initValues.maxManualTip);
    setTip(initValues.manualTip);
    setManualTip(value);
  };

  const handleSetTip = (e) => {
    const value = Number(e.target.value);
    setManualTip(initValues.manualTip);
    setTip(value);
  };

  const handleEnterPeople = (e) => {
    const value = handleEnter(e.target.value, initValues.maxPeople);
    setPeople(value);
  };

  return (
    <div className={formStyles.tipInputsContainer}>
      <div>
        <div className={formStyles.inputLabelBox}>
          <label htmlFor="bill-input">Bill</label>
          {bill === 0 && (
            <p className={formStyles.wrongInputMessage}>Can't be zero</p>
          )}
        </div>

        <input
          onChange={handleEnterBill}
          value={bill}
          type="number"
          name="bill-input"
          placeholder="0"
          step="0.01"
          className={classNames(
            formStyles.billInput,
            bill === 0 ? formStyles.wrongInput : ""
          )}
        />
      </div>
      <div>
        <div className={formStyles.inputLabelBox}>
          <label htmlFor="tip-input">Select Tip %</label>
          {manualTip === 0 && (
            <p className={formStyles.wrongInputMessage}>Shouldn't be zero</p>
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
                  [buttonStyles.active]: selectedTip === tip && !manualTip,
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
            className={classNames(formStyles.manualTipInput, {
              [formStyles.wrongInput]: manualTip === 0,
            })}
            value={manualTip}
            onChange={handleEnterManualTip}
          />
        </div>
      </div>
      <div className={formStyles.peopleNumberBlock}>
        <div className={formStyles.inputLabelBox}>
          <label htmlFor="people-number">Number of people</label>
          {people === 0 && (
            <p className={formStyles.wrongInputMessage}>Can't be zero</p>
          )}
        </div>
        <input
          min={1}
          type="number"
          name="people-number"
          placeholder="0"
          onChange={handleEnterPeople}
          value={people}
          className={classNames(
            formStyles.peopleNumberInput,
            people === 0 ? formStyles.wrongInput : ""
          )}
        />
      </div>
    </div>
  );
}
