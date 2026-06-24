const Startprocess2 = ({ order, onClose }) => {
  const currentOrder = order || {
    orderid: "LAB002",
    test: "Lipid Profile",
  };

  return (
    <div className="processing-overlay">
      <div className="processing-step-two-modal">
        <div className="processing-header">
          <div>
            <h2>Start Processing</h2>
            <p>
              {currentOrder.orderid} - {currentOrder.test}
            </p>
          </div>
          <button
            type="button"
            className="processing-close"
            onClick={onClose}
            aria-label="Close start processing checklist"
          >
            x
          </button>
        </div>

        <form className="processing-step-two-form">
          <label>
            <span>Equipment Used *</span>
            <input type="text" />
          </label>

          <label>
            <span>Sample Condition</span>
            <input type="text" />
          </label>

          <label>
            <span>Processing Notes</span>
            <textarea
              rows="4"
              placeholder="Any special observations during processing..."
            />
          </label>

          <div className="processing-checklist">
            <h3>Processing Checklist</h3>
            <label>
              <input type="checkbox" />
              <span>Sample integrity verified</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Equipment calibrated</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Quality control performed</span>
            </label>
          </div>

          <div className="processing-step-two-actions">
            <button type="submit" className="btn processing-confirm-btn">
              Confirm Start Processing
            </button>
            <button type="button" className="btn btn-light" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Startprocess2;
