import { LuDownload, LuSend, LuCircleCheckBig } from "react-icons/lu";

const Laboratory2 = ({ order, onClose }) => {
  const currentOrder = order || {
    orderid: "LAB003",
    test: "HbA1c",
  };

  return (
    <div className="lab-report-overlay">
      <div className="lab-report-modal">
        <div className="lab-report-header">
          <div className="lab">
            <h2>Laboratory Test Report</h2>
            <p>{currentOrder.orderid}</p>
          </div>
          <button
            type="button"
            className="lab-report-close"
            onClick={onClose}
            aria-label="Close laboratory report actions"
          >
            x
          </button>
        </div>

        <div className="lab2-paper">
          <section className="lab-report-results">
            <table>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Result</th>
                  <th>Unit</th>
                  <th>Reference Range</th>
                  <th>Flag</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{currentOrder.test}</td>
                  <td>Normal</td>
                  <td>-</td>
                  <td>Within limits</td>
                  <td>
                    <span className="lab-report-normal">Normal</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="lab2-interpretation">
            <h3>Interpretation</h3>
            <p>
              All parameters are within normal reference ranges. No significant
              abnormalities detected.
            </p>
          </section>

          <section className="lab2-signatures">
            <div>
              <span>Tested By:</span>
              <strong>Dr. Michael Lee</strong>
              <small>Lab Technician - LAB001</small>
            </div>
            <div>
              <span>Verified By:</span>
              <strong>Dr. Patricia Wong</strong>
              <small>Pathologist - PATH005</small>
            </div>
          </section>
        </div>

        <div className="lab2-actions">
          <button type="button" className="lab2-download-btn">
            <LuDownload size={16} />
            Download PDF
          </button>
          <button type="button" className="lab2-share-btn">
            <LuSend size={16} />
            Share with Doctor
          </button>
          <button type="button" className="lab2-close-btn" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="lab2-status">
          <div className="lab2-status-title">
            <LuCircleCheckBig size={18} />
            <span>Report Status</span>
          </div>
          <p>Visible to ordering physician: Dr. James Wilson</p>
          <p>Available in patient record: PAT004</p>
          <p>Report electronically signed and verified</p>
        </div>
      </div>
    </div>
  );
};

export default Laboratory2;
