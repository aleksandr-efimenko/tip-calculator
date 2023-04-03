import React from "react";
import styles from "..styles/TipStyles.module.css";
import buttonStyles from "../styles/ButtonStyles.module.css";

export default function TipOutput({
  tipAmount,
  total,
  resetForm,
  disabledReset,
}) {
  return (
    <div className={styles.tipOutputsContainer}>
      <div className={styles.tipOutputsInner}>
        <div className={styles.tipResults}>
          <div className={styles.tipResultRow}>
            <div className={styles.tipResultContainer}>
              <div className={styles.tipResultLabel}>Tip Amount</div>
              <div className={styles.tipResultLabelDescription}>/ person</div>
            </div>
            <div className={styles.tipResultValue}>${tipAmount}</div>
          </div>
          <div className={styles.tipResultRow}>
            <div className={styles.tipResultContainer}>
              <div className={styles.tipResultLabel}>Total</div>
              <div className={styles.tipResultLabelDescription}>/ person</div>
            </div>
            <div className={styles.tipResultValue}>${total}</div>
          </div>
        </div>
        <button
          disabled={disabledReset}
          className={buttonStyles.resetButton}
          onClick={resetForm}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
