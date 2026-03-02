import { useState } from "react";
import layoutStyles from "./AppLayout.module.css";
import CarrierForm from "./components/CarrierForm/CarrierForm";
import Modal from "./components/Modal/Modal";
import PageHeader from "./components/PageHeader/PageHeader";
import RateChartTable from "./components/RateChartTable/RateChartTable";
import Sidebar from "./components/Sidebar/Sidebar";
import buttonStyles from "./components/common/Button.module.css";
import modalStyles from "./components/Modal/Modal.module.css";
import {
  navItems,
  initialForm,
  initialRows,
  chargesData,
  postalCodesData,
  pincodeTatData,
} from "./data/constantData";
import addRowStyles from "./components/AddRowForm/AddRowForm.module.css";

function App() {
  const [form, setForm] = useState(initialForm);
  const [rows, setRows] = useState(initialRows);
  const [showCharges, setShowCharges] = useState(false);
  const [showPostalCodes, setShowPostalCodes] = useState(false);
  const [showAddRow, setShowAddRow] = useState(false);
  const [showPincodeTat, setShowPincodeTat] = useState(false);
  const [saving, setSaving] = useState(false);
  const [newRow, setNewRow] = useState({
    code: "",
    settingName: "",
    ratePerKg: 0,
    tatDays: 1,
    surchargePercent: 0,
    fixedCharge: 0,
  });

  const handleFormChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleRowChange = (id, field, value) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row)),
    );
  };

  const handleOpenAddRow = () => {
    const nextCode = (Number(rows[rows.length - 1]?.id || 1100) + 1).toString();
    setNewRow({
      code: nextCode,
      settingName: "",
      ratePerKg: 0,
      tatDays: 1,
      surchargePercent: 0,
      fixedCharge: 0,
    });
    setShowAddRow(true);
  };

  const handleSubmitNewRow = () => {
    const nextId = (Number(rows[rows.length - 1]?.id || 1100) + 1).toString();
    setRows((prev) => [
      ...prev,
      { ...newRow, id: nextId },
    ]);
    setShowAddRow(false);
  };

  const handleNewRowChange = (field, value) => {
    setNewRow((prev) => ({ ...prev, [field]: value }));
  };

  const handleRemoveRow = (id) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  const handleGetData = () => {
    setShowCharges(true);
  };

  const handleViewPostalCodes = () => {
    setShowPostalCodes(true);
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      console.log("Save payload", { form, rows });
      setSaving(false);
    }, 2000);
  };

  return (
    <div className={layoutStyles.app}>
      <div className={layoutStyles.shell}>
        <Sidebar navItems={navItems} activeIndex={5} />

        <main className={layoutStyles.main}>
          <div className={layoutStyles.contentPane}>
            <PageHeader
              title="Edit Carrier Rate Chart"
              subtitle="Modify the rate chart setting for the selected carrier."
            />

            <CarrierForm
              form={form}
              onChange={handleFormChange}
              onGetData={handleGetData}
              onViewPostalCodes={handleViewPostalCodes}
            />

            <RateChartTable
              rows={rows}
              onAddRow={handleOpenAddRow}
              onRowChange={handleRowChange}
              onRemoveRow={handleRemoveRow}
              onPincodeTat={() => setShowPincodeTat(true)}
            />

            <div className={layoutStyles.footerActions}>
              <button
                className={`${buttonStyles.button} ${buttonStyles.ghost}`}
                type="button"
                disabled={saving}
              >
                Cancel
              </button>
              <button
                className={`${buttonStyles.button} ${buttonStyles.success} ${saving ? layoutStyles.saving : ""}`}
                type="button"
                onClick={handleSave}
                disabled={saving}
              >
                {saving && <span className={layoutStyles.spinner} />}
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </main>
      </div>

      {showCharges && (
        <Modal title="Carrier Charges Breakdown" onClose={() => setShowCharges(false)}>
          <table className={modalStyles.table}>
            <thead>
              <tr>
                <th>Zone</th>
                <th>Base Rate (₹/kg)</th>
                <th>Fuel Surcharge</th>
                <th>GST</th>
                <th>Total (₹/kg)</th>
              </tr>
            </thead>
            <tbody>
              {chargesData.map((row) => (
                <tr key={row.zone}>
                  <td>{row.zone}</td>
                  <td>{row.baseRate.toFixed(2)}</td>
                  <td>{row.fuelSurcharge.toFixed(2)}</td>
                  <td>{row.gst.toFixed(2)}</td>
                  <td><strong>{row.total.toFixed(2)}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal>
      )}

      {showPostalCodes && (
        <Modal title="Operable Postal Codes" onClose={() => setShowPostalCodes(false)}>
          <table className={modalStyles.table}>
            <thead>
              <tr>
                <th>Pincode</th>
                <th>Area</th>
                <th>Zone</th>
                <th>Rate (₹/kg)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {postalCodesData.map((row) => (
                <tr key={row.pincode}>
                  <td>{row.pincode}</td>
                  <td>{row.area}</td>
                  <td>{row.zone}</td>
                  <td>{row.rate.toFixed(2)}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal>
      )}

      {showAddRow && (
        <Modal title="Add New Rate Entry" onClose={() => setShowAddRow(false)}>
          <div className={addRowStyles.formGrid}>
            <div className={addRowStyles.field}>
              <label className={addRowStyles.label}>Setting Code</label>
              <input
                className={addRowStyles.input}
                value={newRow.code}
                onChange={(e) => handleNewRowChange("code", e.target.value)}
              />
            </div>
            <div className={addRowStyles.field}>
              <label className={addRowStyles.label}>Setting Name</label>
              <input
                className={addRowStyles.input}
                value={newRow.settingName}
                onChange={(e) => handleNewRowChange("settingName", e.target.value)}
                placeholder="Enter setting name"
              />
            </div>
            <div className={addRowStyles.field}>
              <label className={addRowStyles.label}>Rate per kg</label>
              <input
                className={addRowStyles.input}
                type="number"
                min="0"
                value={newRow.ratePerKg}
                onChange={(e) => handleNewRowChange("ratePerKg", Number(e.target.value))}
              />
            </div>
            <div className={addRowStyles.field}>
              <label className={addRowStyles.label}>TAT (days)</label>
              <input
                className={addRowStyles.input}
                type="number"
                min="0"
                value={newRow.tatDays}
                onChange={(e) => handleNewRowChange("tatDays", Number(e.target.value))}
              />
            </div>
            <div className={addRowStyles.field}>
              <label className={addRowStyles.label}>Surcharge %</label>
              <input
                className={addRowStyles.input}
                type="number"
                min="0"
                value={newRow.surchargePercent}
                onChange={(e) => handleNewRowChange("surchargePercent", Number(e.target.value))}
              />
            </div>
            <div className={addRowStyles.field}>
              <label className={addRowStyles.label}>Fixed Charge</label>
              <input
                className={addRowStyles.input}
                type="number"
                min="0"
                value={newRow.fixedCharge}
                onChange={(e) => handleNewRowChange("fixedCharge", Number(e.target.value))}
              />
            </div>
          </div>
          <div className={addRowStyles.actions}>
            <button
              className={`${buttonStyles.button} ${buttonStyles.ghost}`}
              type="button"
              onClick={() => setShowAddRow(false)}
            >
              Cancel
            </button>
            <button
              className={`${buttonStyles.button} ${buttonStyles.success}`}
              type="button"
              onClick={handleSubmitNewRow}
            >
              Add Entry
            </button>
          </div>
        </Modal>
      )}

      {showPincodeTat && (
        <Modal title="Pin Code Level TAT Configuration" onClose={() => setShowPincodeTat(false)}>
          <table className={modalStyles.table}>
            <thead>
              <tr>
                <th>Pincode</th>
                <th>Area</th>
                <th>TAT (days)</th>
                <th>Mode</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {pincodeTatData.map((row) => (
                <tr key={row.pincode}>
                  <td>{row.pincode}</td>
                  <td>{row.area}</td>
                  <td>{row.tat}</td>
                  <td>{row.mode}</td>
                  <td>
                    <span className={row.status === "Active" ? addRowStyles.statusActive : addRowStyles.statusInactive}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal>
      )}
    </div>
  );
}

export default App;
