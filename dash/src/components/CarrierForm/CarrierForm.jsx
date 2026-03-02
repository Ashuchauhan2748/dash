import Autocomplete from "../Autocomplete/Autocomplete";
import buttonStyles from "../common/Button.module.css";
import cardStyles from "../common/Card.module.css";
import styles from "./CarrierForm.module.css";
import { carrierNames, carrierRateChartMap, pickupZoneOptions } from "../../data/constantData";

function CarrierForm({ form, onChange, onGetData, onViewPostalCodes }) {
  const rateChartOptions = carrierRateChartMap[form.carrierName] || [];

  const handleCarrierChange = (val) => {
    onChange("carrierName", val);
    const charts = carrierRateChartMap[val];
    if (charts && charts.length > 0) {
      onChange("rateChart", charts[0]);
    } else {
      onChange("rateChart", "");
    }
  };

  return (
    <section className={cardStyles.card}>
      <div className={cardStyles.cardHeader}>
        <h2 className={cardStyles.cardTitle}>Carrier and Rate Chart Details</h2>
      </div>

      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="carrierCode">
            Carrier Code
          </label>
          <input
            id="carrierCode"
            className={styles.input}
            value={form.carrierCode}
            onChange={(e) => onChange("carrierCode", e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="carrierName">
            Carrier Name
          </label>
          <Autocomplete
            id="carrierName"
            value={form.carrierName}
            onChange={handleCarrierChange}
            suggestions={carrierNames}
            inputClassName={styles.input}
            placeholder="Type to search carrier..."
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="rateChart">
            Rate Chart
          </label>
          <select
            id="rateChart"
            className={styles.select}
            value={form.rateChart}
            onChange={(e) => onChange("rateChart", e.target.value)}
            disabled={rateChartOptions.length === 0}
          >
            {rateChartOptions.length === 0 && (
              <option value="">Select a carrier first</option>
            )}
            {rateChartOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className={`${styles.field} ${styles.colSpan2}`}>
          <label className={styles.label} htmlFor="pickupZoneSetupCode">
            Pickup Zone Setup Code
          </label>
          <select
            id="pickupZoneSetupCode"
            className={styles.select}
            value={form.pickupZoneSetupCode}
            onChange={(e) => onChange("pickupZoneSetupCode", e.target.value)}
          >
            {pickupZoneOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className={styles.actionsRow}>
          <button
            className={`${buttonStyles.button} ${buttonStyles.success}`}
            type="button"
            onClick={onGetData}
          >
            Get Data
          </button>
          <button
            className={`${buttonStyles.button} ${buttonStyles.mutedSuccess}`}
            type="button"
            onClick={onViewPostalCodes}
          >
            View Postal Codes
          </button>
        </div>
      </div>
    </section>
  );
}

export default CarrierForm;
