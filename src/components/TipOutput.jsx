import React from "react";

export default function TipOutput({tipAmount, total, resetForm}) {
  
  return (
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
      <button className="reset-button" onClick={resetForm}>
        RESET
      </button>
    </div>
  );
}
