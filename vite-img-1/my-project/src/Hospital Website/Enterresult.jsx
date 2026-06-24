const Enterresult = ({ order, onClose }) => {
  const currentOrder = order || {
    orderid: "LAB001",
    patient: "John Anderson",
    test: "Complete Blood Count (CBC)",
    priority: "routine",
  };

  return (
    <div className="enter-result-overlay">
      <div className="enter-result-modal">
        <div className="enter-result-header">
          <div>
            <h2>Enter Test Results</h2>
            <p>
              {currentOrder.orderid} - {currentOrder.test}
            </p>
          </div>
          <button
            type="button"
            className="enter-result-close"
            onClick={onClose}
            aria-label="Close enter result form"
          >
            x
          </button>
        </div>

        <div className="enter-result-summary">
          <div className="summary">
            <span>Patient</span>
            <strong>{currentOrder.patient}</strong>
          </div>
          <div className="summary1">
            <span>Test</span>
            <strong>{currentOrder.test}</strong>
          </div>
          <div className="summmary2">
            <span>Priority</span>
            <strong className="enter-result-badge">{currentOrder.priority}</strong>
          </div>
        </div>

        <form className="enter-result-form">
          <div className="enter-result-section-title">
            <h3>Test Parameters & Results</h3>
          </div>

          <div className="enter-result-row">
            <label>
              <span width="97" height="24" angle="0 deg" opacity="1"  top= "-1.2px">Result Value *</span>
              <input type="text"  class="text1" placeholder="Enter result" />
            </label>
            <label>
              <span width="269.3374938964844" height="24" angle=" 0 deg" opacity="1">Unit</span>
              <input type="text"  class="text2" placeholder="mg/dL, mmol/L, etc." />
            </label>
            <label className="enter-result-check">
              <span width="108.30000305175781" height= "20" angle= "0 deg" opacity=" 1">Flag as abnormal</span>
            </label>
          </div>

          <div className="enter-result-row two-column">
            <label>
              <span>Technician ID *</span>
              <input type="text" class="value1" defaultValue="LAB001 - Dr. Michael Lee" />
            </label>
            <label>
              <span>Completion Time *</span>
               <input type="text" defaultValue="" />
              
            </label>
          </div>

          <label className="enter-result-textarea">
            <span>Interpretation & Comments</span>
            <textarea
              rows="4"
              placeholder="Clinical interpretation, technical notes, recommendations..."
            />
          </label>

          <div className="critical-alert">
            <div className="critical-alert-title">Critical Values Alert</div>
            <p>Critical values detected - notify physician immediately</p>
            <label>
              <input type="checkbox" />
              <span>Results reviewed and verified</span>
            </label>
          </div>

          <div className="enter-result-actions">
            <button type="button" className="btn btn-light" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-success">
              Save Results
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enterresult;
