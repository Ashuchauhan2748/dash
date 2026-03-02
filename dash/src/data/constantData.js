export const navItems = [
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

export const carrierRateChartMap = {
    "GATI KWE": ["GATI Surface", "GATI Air", "GATI Express"],
    "GATI Surface Express": ["GATI Surface", "Express Ground"],
    "Blue Dart Express": ["Blue Dart Surface", "Blue Dart Air", "Blue Dart Apex"],
    "Blue Dart Aviation": ["Blue Dart Air", "Blue Dart Apex"],
    "Delhivery Surface": ["Delhivery Standard", "Delhivery Express"],
    "Delhivery Express": ["Delhivery Express", "Delhivery Priority"],
    "DTDC Standard": ["DTDC Surface", "DTDC Lite"],
    "DTDC Premium": ["DTDC Premium", "DTDC Priority"],
    "Ecom Express": ["Ecom Standard", "Ecom Express Plus"],
    "XpressBees Surface": ["XpressBees Surface", "XpressBees Standard"],
    "XpressBees Express": ["XpressBees Express", "XpressBees Priority"],
    "Shadowfax": ["Shadowfax Standard", "Shadowfax Flash"],
    "Rivigo Freight": ["Rivigo Surface", "Rivigo Express"],
    "Safexpress": ["Safexpress Standard", "Safexpress Premium"],
    "TCI Express": ["TCI Surface", "TCI Air"],
    "Spoton Logistics": ["Spoton Standard", "Spoton Priority"],
    "FedEx India": ["FedEx Economy", "FedEx Priority", "FedEx Express"],
    "DHL Express": ["DHL Express", "DHL Economy", "DHL Premium"],
};

export const carrierNames = Object.keys(carrierRateChartMap);

export const pickupZoneOptions = [
    "Gati 1",
    "Gati 2",
    "Metro West",
];

export const initialForm = {
    carrierCode: "1001",
    pickupZoneSetupCode: "Gati 1",
    carrierName: "GATI KWE",
    rateChart: "GATI Surface",
};

export const initialRows = [
    {
        id: "1106",
        code: "1106",
        settingName: "Metro Zone A",
        ratePerKg: 45,
        tatDays: 2,
        surchargePercent: 5,
        fixedCharge: 120,
    },
    {
        id: "1107",
        code: "1107",
        settingName: "Tier-2 Cities",
        ratePerKg: 38,
        tatDays: 4,
        surchargePercent: 3,
        fixedCharge: 90,
    },
    {
        id: "1108",
        code: "1108",
        settingName: "Rural Remote",
        ratePerKg: 55,
        tatDays: 7,
        surchargePercent: 8,
        fixedCharge: 150,
    },
];

export const chargesData = [
    { zone: "Metro Zone A", baseRate: 45, fuelSurcharge: 2.25, gst: 8.51, total: 55.76 },
    { zone: "Tier-2 Cities", baseRate: 38, fuelSurcharge: 1.14, gst: 7.05, total: 46.19 },
    { zone: "Rural Remote", baseRate: 55, fuelSurcharge: 4.40, gst: 10.69, total: 70.09 },
    { zone: "Express North", baseRate: 62, fuelSurcharge: 3.10, gst: 11.72, total: 76.82 },
];

export const postalCodesData = [
    { pincode: "110001", area: "New Delhi Central", zone: "Metro Zone A", rate: 45, status: "Active" },
    { pincode: "110020", area: "Hauz Khas", zone: "Metro Zone A", rate: 45, status: "Active" },
    { pincode: "400001", area: "Mumbai GPO", zone: "Metro Zone A", rate: 45, status: "Active" },
    { pincode: "560001", area: "Bangalore GPO", zone: "Tier-2 Cities", rate: 38, status: "Active" },
    { pincode: "600001", area: "Chennai GPO", zone: "Tier-2 Cities", rate: 38, status: "Active" },
    { pincode: "700001", area: "Kolkata GPO", zone: "Tier-2 Cities", rate: 38, status: "Active" },
    { pincode: "781001", area: "Guwahati", zone: "Rural Remote", rate: 55, status: "Active" },
    { pincode: "795001", area: "Imphal", zone: "Rural Remote", rate: 55, status: "Active" },
];

export const pincodeTatData = [
    { pincode: "110001", area: "New Delhi Central", tat: 1, mode: "Surface", status: "Active" },
    { pincode: "110020", area: "Hauz Khas", tat: 1, mode: "Surface", status: "Active" },
    { pincode: "400001", area: "Mumbai GPO", tat: 2, mode: "Surface", status: "Active" },
    { pincode: "560001", area: "Bangalore GPO", tat: 3, mode: "Air", status: "Active" },
    { pincode: "600001", area: "Chennai GPO", tat: 3, mode: "Surface", status: "Active" },
    { pincode: "700001", area: "Kolkata GPO", tat: 4, mode: "Surface", status: "Active" },
    { pincode: "781001", area: "Guwahati", tat: 6, mode: "Air", status: "Active" },
    { pincode: "795001", area: "Imphal", tat: 7, mode: "Air", status: "Active" },
    { pincode: "302001", area: "Jaipur GPO", tat: 3, mode: "Surface", status: "Active" },
    { pincode: "380001", area: "Ahmedabad GPO", tat: 3, mode: "Surface", status: "Active" },
    { pincode: "500001", area: "Hyderabad GPO", tat: 3, mode: "Surface", status: "Inactive" },
    { pincode: "226001", area: "Lucknow GPO", tat: 4, mode: "Surface", status: "Active" },
];
