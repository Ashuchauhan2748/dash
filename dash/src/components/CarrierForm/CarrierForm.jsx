import buttonStyles from "../common/Button.module.css";
import cardStyles from "../common/Card.module.css";
import styles from "./CarrierForm.module.css";

function CarrierForm({ form, onChange, onGetData, onViewPostalCodes }) {
  return (
    <section className={cardStyles.card}>
      <div className={cardStyles.cardHeader}>
        <h2 className={cardStyles.cardTitle}>Carrier and Rate chart Details</h2>
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
            disabled
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="carrierName">
            Carrier name
          </label>
          <input
            id="carrierName"
            className={styles.input}
            value={form.carrierName}
            onChange={(e) => onChange("carrierName", e.target.value)}
            disabled
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
          >
            <option>GATI Surface</option>
            <option>GATI Air</option>
            <option>Express Ground</option>
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
            <option>Gati 1</option>
            <option>Gati 2</option>
            <option>Metro West</option>
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
            View Postal Code
          </button>
        </div>
      </div>
    </section>
  );
}

export default CarrierForm;
