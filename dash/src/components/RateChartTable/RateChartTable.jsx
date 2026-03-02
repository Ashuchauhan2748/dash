import buttonStyles from "../common/Button.module.css";
import cardStyles from "../common/Card.module.css";
import styles from "./RateChartTable.module.css";

function RateChartTable({ rows, onAddRow, onRowChange, onRemoveRow, onPincodeTat }) {
  return (
    <section className={cardStyles.card}>
      <div className={cardStyles.cardHeader}>
        <div className={styles.headerRow}>
          <h2 className={cardStyles.cardTitle}>Configure Rate Chart Pincode</h2>
          <span className={styles.rowCount}>
            {rows.length} {rows.length === 1 ? "entry" : "entries"}
          </span>
        </div>
        <div className={styles.headerActions}>
          <button
            className={`${buttonStyles.button} ${buttonStyles.ghost}`}
            type="button"
            onClick={onPincodeTat}
          >
            Pin Code Level TAT
          </button>
          <button
            className={`${buttonStyles.button} ${buttonStyles.primary} ${styles.addButton}`}
            type="button"
            onClick={onAddRow}
          >
            + Add Row
          </button>
        </div>
      </div>

      <div className={styles.weightInfo}>
        <span className={styles.weightLabel}>Weight Slab 1</span>
        <span>0.00 – 99999.00 kg</span>
      </div>

      {rows.length === 0 ? (
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon} aria-hidden>—</span>
          <p className={styles.emptyText}>No rate entries configured</p>
          <p className={styles.emptyHint}>Click "+ Add Row" to add your first rate configuration</p>
        </div>
      ) : (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Setting Code</th>
                <th>Setting Name</th>
                <th>Pincodes</th>
                <th>Rate per kg</th>
                <th>TAT (days)</th>
                <th>Surcharge %</th>
                <th>Fixed Charge</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.id} className={styles.tableInputs}>
                  <td>
                    <div className={styles.rowNumber}>{index + 1}</div>
                  </td>
                  <td>
                    <input
                      value={row.code}
                      onChange={(e) => onRowChange(row.id, "code", e.target.value)}
                      aria-label="Setting Code"
                    />
                  </td>
                  <td>
                    <input
                      value={row.settingName}
                      onChange={(e) => onRowChange(row.id, "settingName", e.target.value)}
                      aria-label="Setting Name"
                    />
                  </td>
                  <td>
                    <div className={styles.pinActions}>
                      <button
                        className={`${buttonStyles.smallButton} ${buttonStyles.smallPrimary}`}
                        type="button"
                      >
                        Import
                      </button>
                      <button className={buttonStyles.smallButton} type="button">
                        View
                      </button>
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      value={row.ratePerKg}
                      onChange={(e) => onRowChange(row.id, "ratePerKg", Number(e.target.value))}
                      aria-label="Rate per kg"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      value={row.tatDays}
                      onChange={(e) => onRowChange(row.id, "tatDays", Number(e.target.value))}
                      aria-label="TAT days"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      value={row.surchargePercent}
                      onChange={(e) => onRowChange(row.id, "surchargePercent", Number(e.target.value))}
                      aria-label="Surcharge percent"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      value={row.fixedCharge}
                      onChange={(e) => onRowChange(row.id, "fixedCharge", Number(e.target.value))}
                      aria-label="Fixed charge"
                    />
                  </td>
                  <td>
                    <div className={styles.compactActions}>
                      <button
                        className={`${buttonStyles.iconButton} ${buttonStyles.dangerIcon}`}
                        type="button"
                        onClick={() => onRemoveRow(row.id)}
                        aria-label={`Delete row ${index + 1}`}
                      >
                        <svg
                          aria-hidden
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 10.5V17M15 10.5V17M5 7.5H19M18 7.5L17.2 19.1C17.13 20.1 16.3 20.9 15.3 20.9H8.7C7.7 20.9 6.87 20.1 6.8 19.1L6 7.5M14.5 7.5V5.9C14.5 5.12 13.88 4.5 13.1 4.5H10.9C10.12 4.5 9.5 5.12 9.5 5.9V7.5"
                            stroke="#d9534f"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                      <button
                        className={`${buttonStyles.iconButton} ${buttonStyles.kebab}`}
                        type="button"
                        aria-label={`Row menu ${index + 1}`}
                      >
                        <svg
                          aria-hidden
                          width="12"
                          height="14"
                          viewBox="0 0 4 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="1.4" fill="#636e7b" />
                          <circle cx="2" cy="7" r="1.4" fill="#636e7b" />
                          <circle cx="2" cy="12" r="1.4" fill="#636e7b" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default RateChartTable;
