import { useState } from "react";
import layoutStyles from "./AppLayout.module.css";
import CarrierForm from "./components/CarrierForm/CarrierForm";
import PageHeader from "./components/PageHeader/PageHeader";
import RateChartTable from "./components/RateChartTable/RateChartTable";
import Sidebar from "./components/Sidebar/Sidebar";
import buttonStyles from "./components/common/Button.module.css";

const navItems = [
  "B2B",
  "B2C",
  "Facility",
  "SKU",
  "Inward Type",
  "carrier",
  "Driver",
  "Delivery Associate",
  "Vechile",
  "Lane Master",
  "Complain",
];

const initialForm = {
  carrierCode: "1001",
  pickupZoneSetupCode: "Gati 1",
  carrierName: "GATI KWE",
  rateChart: "GATI Surface",
};

const initialRows = [
  {
    id: "1106",
    code: "1106",
    settingName: "setting",
    ratePerKg: 1,
    tatDays: 1,
    surchargePercent: 1,
    fixedCharge: 1,
  },
  {
    id: "1107",
    code: "1107",
    settingName: "setting",
    ratePerKg: 1,
    tatDays: 1,
    surchargePercent: 1,
    fixedCharge: 1,
  },
  {
    id: "1108",
    code: "1108",
    settingName: "setting",
    ratePerKg: 1,
    tatDays: 1,
    surchargePercent: 1,
    fixedCharge: 1,
  },
];

function App() {
  const [form, setForm] = useState(initialForm);
  const [rows, setRows] = useState(initialRows);

  const handleFormChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleRowChange = (id, field, value) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row)),
    );
  };

  const handleAddRow = () => {
    const nextId = (Number(rows[rows.length - 1]?.id || 1100) + 1).toString();
    setRows((prev) => [
      ...prev,
      {
        id: nextId,
        code: nextId,
        settingName: "setting",
        ratePerKg: 1,
        tatDays: 1,
        surchargePercent: 1,
        fixedCharge: 1,
      },
    ]);
  };

  const handleRemoveRow = (id) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  const handleGetData = () => {
    console.log("Get data for", form);
  };

  const handleViewPostalCodes = () => {
    console.log("View postal codes for", form.pickupZoneSetupCode);
  };

  const handleSave = () => {
    console.log("Save payload", { form, rows });
  };

  return (
    <div className={layoutStyles.app}>
      <div className={layoutStyles.shell}>
        <Sidebar navItems={navItems} activeIndex={0} />

        <main className={layoutStyles.main}>
          <div className={layoutStyles.contentPane}>
            <PageHeader title="Edit Carrier Rate Chart" subtitle="Modify the rate chart setting for the selected carrier." />

            <CarrierForm
              form={form}
              onChange={handleFormChange}
              onGetData={handleGetData}
              onViewPostalCodes={handleViewPostalCodes}
            />

            <RateChartTable
              rows={rows}
              onAddRow={handleAddRow}
              onRowChange={handleRowChange}
              onRemoveRow={handleRemoveRow}
            />

            <div className={layoutStyles.footerActions}>
              <button className={`${buttonStyles.button} ${buttonStyles.danger}`} type="button">
                Cancel
              </button>
              <button
                className={`${buttonStyles.button} ${buttonStyles.success}`}
                type="button"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
