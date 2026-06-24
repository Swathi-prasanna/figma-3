import { LuCircleCheckBig, LuUpload } from "react-icons/lu";

const ResultEntry = () => {
  return (
    <section className="results-entry-page">
      <div className="results-entry-title">
        <h1>Results Entry</h1>
        <p>Enter and publish laboratory test results</p>
      </div>

      <div className="results-entry-card">
        <h2>Enter Test Results</h2>

        <form className="results-entry-form">
          <div className="results-entry-row">
            <label>
              <span>Test Order</span>
              <input type="text" />
            </label>

            <label>
              <span>Completion Time</span>
              <input type="text" />
            </label>
          </div>

          <div className="results-parameters">
            <h3>Test Parameters</h3>
            <div className="results-parameter-grid">
              <label>
                <span>Parameter</span>
                <input type="text" defaultValue="WBC Count" />
              </label>

              <label>
                <span>Result</span>
                <input type="text" placeholder="Value" />
              </label>

              <label>
                <span>Unit</span>
                <input type="text" placeholder="cells/uL" />
              </label>

              <label>
                <span>Reference Range</span>
                <input type="text" placeholder="4,500-11,000" />
              </label>
            </div>
          </div>

          <label className="results-comments">
            <span>Lab Comments</span>
            <textarea rows="4" placeholder="Any observations or comments..." />
          </label>

          <div className="results-entry-actions">
            <button type="button" className="results-upload-btn">
              <LuUpload size={16} />
              Upload Report PDF
            </button>
            <button type="submit" className="results-publish-btn">
              <LuCircleCheckBig size={16} />
              Publish Results
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResultEntry;
