import React from "react";
import styles from "./TipStyles.module.css";

export default function TipOutput({tipAmount, total, resetForm}) {
  
  return (
    <div className={styles.tipOutputsContainer}>
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
      <button className={styles.resetButton} onClick={resetForm}>
        RESET
      </button>
    </div>
  );
}
