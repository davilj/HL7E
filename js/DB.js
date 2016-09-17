var DB = {};
var ABS = {
  "ABS-2": [
    "ABS.2", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0069", 
    "Transfer Medical Service Code"
  ], 
  "ABS-3": [
    "ABS.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0421", 
    "Severity of Illness Code"
  ], 
  "ABS-1": [
    "ABS.1", 
    "250", 
    "XCN", 
    "O", 
    "1", 
    "0010", 
    "Discharge Care Provider"
  ], 
  "ABS-6": [
    "ABS.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0422", 
    "Triage Code"
  ], 
  "ABS-7": [
    "ABS.7", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Abstract Completion Date/Time"
  ], 
  "ABS-4": [
    "ABS.4", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date/Time of Attestation"
  ], 
  "ABS-5": [
    "ABS.5", 
    "250", 
    "XCN", 
    "O", 
    "1", 
    "Attested By"
  ], 
  "ABS-8": [
    "ABS.8", 
    "250", 
    "XCN", 
    "O", 
    "1", 
    "Abstracted By"
  ], 
  "ABS-9": [
    "ABS.9", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0423", 
    "Case Category Code"
  ], 
  "ABS-12": [
    "ABS.12", 
    "3", 
    "NM", 
    "O", 
    "1", 
    "Gestation Period - Weeks"
  ], 
  "ABS-14": [
    "ABS.14", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Stillborn Indicator"
  ], 
  "ABS-13": [
    "ABS.13", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0425", 
    "Newborn Code"
  ], 
  "ABS-10": [
    "ABS.10", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Caesarian Section Indicator"
  ], 
  "ABS-11": [
    "ABS.11", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0424", 
    "Gestation Category Code"
  ]
};
DB['ABS'] = ABS;

var ACC = {
  "ACC-10": [
    "ACC.10", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Police Notified Indicator"
  ], 
  "ACC-9": [
    "ACC.9", 
    "80", 
    "ST", 
    "O", 
    "1", 
    "Brought In By"
  ], 
  "ACC-8": [
    "ACC.8", 
    "25", 
    "ST", 
    "O", 
    "1", 
    "Accident Description"
  ], 
  "ACC-1": [
    "ACC.1", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Accident Date/Time"
  ], 
  "ACC-3": [
    "ACC.3", 
    "25", 
    "ST", 
    "O", 
    "1", 
    "Accident Location"
  ], 
  "ACC-2": [
    "ACC.2", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0050", 
    "Accident Code"
  ], 
  "ACC-5": [
    "ACC.5", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Accident Job Related Indicator"
  ], 
  "ACC-4": [
    "ACC.4", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0347", 
    "Auto Accident State"
  ], 
  "ACC-7": [
    "ACC.7", 
    "250", 
    "XCN", 
    "O", 
    "1", 
    "Entered By"
  ], 
  "ACC-6": [
    "ACC.6", 
    "12", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Accident Death Indicator"
  ]
};
DB['ACC'] = ACC;

var ADD = {
  "ADD-1": [
    "ADD.1", 
    "65536", 
    "ST", 
    "O", 
    "1", 
    "Addendum Continuation Pointer"
  ]
};
DB['ADD'] = ADD;

var AFF = {
  "AFF-5": [
    "AFF.5", 
    "60", 
    "ST", 
    "O", 
    "1", 
    "Professional Affiliation Additional Information"
  ], 
  "AFF-4": [
    "AFF.4", 
    "52", 
    "DR", 
    "O", 
    "*", 
    "Professional Organization Affiliation Date Range"
  ], 
  "AFF-3": [
    "AFF.3", 
    "250", 
    "XAD", 
    "O", 
    "1", 
    "Professional Organization Address"
  ], 
  "AFF-2": [
    "AFF.2", 
    "250", 
    "XON", 
    "R", 
    "1", 
    "Professional Organization"
  ], 
  "AFF-1": [
    "AFF.1", 
    "60", 
    "SI", 
    "R", 
    "1", 
    "Set ID - AFF"
  ]
};
DB['AFF'] = AFF;

var AIG = {
  "AIG-7": [
    "AIG.7", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Resource Quantity Units"
  ], 
  "AIG-6": [
    "AIG.6", 
    "5", 
    "NM", 
    "O", 
    "1", 
    "Resource Quantity"
  ], 
  "AIG-5": [
    "AIG.5", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Resource Group"
  ], 
  "AIG-4": [
    "AIG.4", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Resource Type"
  ], 
  "AIG-3": [
    "AIG.3", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Resource ID"
  ], 
  "AIG-2": [
    "AIG.2", 
    "3", 
    "ID", 
    "C", 
    "1", 
    "0206", 
    "Segment Action Code"
  ], 
  "AIG-1": [
    "AIG.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID - AIG"
  ], 
  "AIG-9": [
    "AIG.9", 
    "20", 
    "NM", 
    "C", 
    "1", 
    "Start Date/Time Offset"
  ], 
  "AIG-8": [
    "AIG.8", 
    "26", 
    "TS", 
    "C", 
    "1", 
    "Start Date/Time"
  ], 
  "AIG-14": [
    "AIG.14", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "0278", 
    "Filler Status Code"
  ], 
  "AIG-13": [
    "AIG.13", 
    "10", 
    "IS", 
    "C", 
    "1", 
    "0279", 
    "Allow Substitution Code"
  ], 
  "AIG-12": [
    "AIG.12", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Duration Units"
  ], 
  "AIG-11": [
    "AIG.11", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Duration"
  ], 
  "AIG-10": [
    "AIG.10", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Start Date/Time Offset Units"
  ]
};
DB['AIG'] = AIG;

var AIL = {
  "AIL-4": [
    "AIL.4", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Location Type-AIL"
  ], 
  "AIL-5": [
    "AIL.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Location Group"
  ], 
  "AIL-6": [
    "AIL.6", 
    "26", 
    "TS", 
    "C", 
    "1", 
    "Start Date/Time"
  ], 
  "AIL-7": [
    "AIL.7", 
    "20", 
    "NM", 
    "C", 
    "1", 
    "Start Date/Time Offset"
  ], 
  "AIL-1": [
    "AIL.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID - AIL"
  ], 
  "AIL-2": [
    "AIL.2", 
    "3", 
    "ID", 
    "C", 
    "1", 
    "0206", 
    "Segment Action Code"
  ], 
  "AIL-3": [
    "AIL.3", 
    "80", 
    "PL", 
    "C", 
    "1", 
    "Location Resource ID"
  ], 
  "AIL-8": [
    "AIL.8", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Start Date/Time Offset Units"
  ], 
  "AIL-9": [
    "AIL.9", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Duration"
  ], 
  "AIL-12": [
    "AIL.12", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "0278", 
    "Filler Status Code"
  ], 
  "AIL-10": [
    "AIL.10", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Duration Units"
  ], 
  "AIL-11": [
    "AIL.11", 
    "10", 
    "IS", 
    "C", 
    "1", 
    "0279", 
    "Allow Substitution Code"
  ]
};
DB['AIL'] = AIL;

var AIP = {
  "AIP-1": [
    "AIP.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID - AIP"
  ], 
  "AIP-2": [
    "AIP.2", 
    "3", 
    "ID", 
    "C", 
    "1", 
    "0206", 
    "Segment Action Code"
  ], 
  "AIP-3": [
    "AIP.3", 
    "250", 
    "XCN", 
    "C", 
    "*", 
    "Personnel Resource ID"
  ], 
  "AIP-4": [
    "AIP.4", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Resource Role"
  ], 
  "AIP-5": [
    "AIP.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Resource Group"
  ], 
  "AIP-6": [
    "AIP.6", 
    "26", 
    "TS", 
    "C", 
    "1", 
    "Start Date/Time"
  ], 
  "AIP-7": [
    "AIP.7", 
    "20", 
    "NM", 
    "C", 
    "1", 
    "Start Date/Time Offset"
  ], 
  "AIP-8": [
    "AIP.8", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Start Date/Time Offset Units"
  ], 
  "AIP-9": [
    "AIP.9", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Duration"
  ], 
  "AIP-12": [
    "AIP.12", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "0278", 
    "Filler Status Code"
  ], 
  "AIP-10": [
    "AIP.10", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Duration Units"
  ], 
  "AIP-11": [
    "AIP.11", 
    "10", 
    "IS", 
    "C", 
    "1", 
    "0279", 
    "Allow Substitution Code"
  ]
};
DB['AIP'] = AIP;

var AIS = {
  "AIS-9": [
    "AIS.9", 
    "10", 
    "IS", 
    "C", 
    "1", 
    "0279", 
    "Allow Substitution Code"
  ], 
  "AIS-8": [
    "AIS.8", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Duration Units"
  ], 
  "AIS-3": [
    "AIS.3", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Universal Service Identifier"
  ], 
  "AIS-2": [
    "AIS.2", 
    "3", 
    "ID", 
    "C", 
    "1", 
    "0206", 
    "Segment Action Code"
  ], 
  "AIS-1": [
    "AIS.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID - AIS"
  ], 
  "AIS-7": [
    "AIS.7", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Duration"
  ], 
  "AIS-6": [
    "AIS.6", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Start Date/Time Offset Units"
  ], 
  "AIS-5": [
    "AIS.5", 
    "20", 
    "NM", 
    "C", 
    "1", 
    "Start Date/Time Offset"
  ], 
  "AIS-4": [
    "AIS.4", 
    "26", 
    "TS", 
    "C", 
    "1", 
    "Start Date/Time"
  ], 
  "AIS-12": [
    "AIS.12", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0411", 
    "Filler Supplemental Service Information"
  ], 
  "AIS-11": [
    "AIS.11", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0411", 
    "Placer Supplemental Service Information"
  ], 
  "AIS-10": [
    "AIS.10", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "0278", 
    "Filler Status Code"
  ]
};
DB['AIS'] = AIS;

var AL1 = {
  "AL1-6": [
    "AL1.6", 
    "8", 
    "DT", 
    "B", 
    "1", 
    "Identification Date"
  ], 
  "AL1-4": [
    "AL1.4", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0128", 
    "Allergy Severity Code"
  ], 
  "AL1-5": [
    "AL1.5", 
    "15", 
    "ST", 
    "O", 
    "*", 
    "Allergy Reaction Code"
  ], 
  "AL1-2": [
    "AL1.2", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0127", 
    "Allergen Type Code"
  ], 
  "AL1-3": [
    "AL1.3", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Allergen Code/Mnemonic/Description"
  ], 
  "AL1-1": [
    "AL1.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Set ID - AL1"
  ]
};
DB['AL1'] = AL1;

var APR = {
  "APR-1": [
    "APR.1", 
    "80", 
    "SCV", 
    "O", 
    "*", 
    "0294", 
    "Time Selection Criteria"
  ], 
  "APR-3": [
    "APR.3", 
    "80", 
    "SCV", 
    "O", 
    "*", 
    "0294", 
    "Location Selection Criteria"
  ], 
  "APR-2": [
    "APR.2", 
    "80", 
    "SCV", 
    "O", 
    "*", 
    "0294", 
    "Resource Selection Criteria"
  ], 
  "APR-5": [
    "APR.5", 
    "80", 
    "SCV", 
    "O", 
    "*", 
    "Filler Override Criteria"
  ], 
  "APR-4": [
    "APR.4", 
    "5", 
    "NM", 
    "O", 
    "1", 
    "Slot Spacing Criteria"
  ]
};
DB['APR'] = APR;

var ARQ = {
  "ARQ-25": [
    "ARQ.25", 
    "22", 
    "EI", 
    "C", 
    "*", 
    "Filler Order Number"
  ], 
  "ARQ-24": [
    "ARQ.24", 
    "22", 
    "EI", 
    "C", 
    "*", 
    "Placer Order Number"
  ], 
  "ARQ-23": [
    "ARQ.23", 
    "75", 
    "EI", 
    "O", 
    "1", 
    "Parent Filler Appointment ID"
  ], 
  "ARQ-22": [
    "ARQ.22", 
    "75", 
    "EI", 
    "O", 
    "1", 
    "Parent Placer Appointment ID"
  ], 
  "ARQ-21": [
    "ARQ.21", 
    "80", 
    "PL", 
    "O", 
    "1", 
    "Entered by Location"
  ], 
  "ARQ-20": [
    "ARQ.20", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Entered By Phone Number"
  ], 
  "ARQ-16": [
    "ARQ.16", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Placer Contact Phone Number"
  ], 
  "ARQ-17": [
    "ARQ.17", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Placer Contact Address"
  ], 
  "ARQ-14": [
    "ARQ.14", 
    "5", 
    "ST", 
    "O", 
    "1", 
    "Repeating Interval Duration"
  ], 
  "ARQ-15": [
    "ARQ.15", 
    "250", 
    "XCN", 
    "R", 
    "*", 
    "Placer Contact Person"
  ], 
  "ARQ-12": [
    "ARQ.12", 
    "5", 
    "ST", 
    "O", 
    "1", 
    "Priority-ARQ"
  ], 
  "ARQ-13": [
    "ARQ.13", 
    "100", 
    "RI", 
    "O", 
    "1", 
    "Repeating Interval"
  ], 
  "ARQ-10": [
    "ARQ.10", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Appointment Duration Units"
  ], 
  "ARQ-11": [
    "ARQ.11", 
    "53", 
    "DR", 
    "O", 
    "*", 
    "Requested Start Date/Time Range"
  ], 
  "ARQ-18": [
    "ARQ.18", 
    "80", 
    "PL", 
    "O", 
    "1", 
    "Placer Contact Location"
  ], 
  "ARQ-19": [
    "ARQ.19", 
    "250", 
    "XCN", 
    "R", 
    "*", 
    "Entered By Person"
  ], 
  "ARQ-4": [
    "ARQ.4", 
    "22", 
    "EI", 
    "O", 
    "1", 
    "Placer Group Number"
  ], 
  "ARQ-5": [
    "ARQ.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Schedule ID"
  ], 
  "ARQ-6": [
    "ARQ.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Request Event Reason"
  ], 
  "ARQ-7": [
    "ARQ.7", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0276", 
    "Appointment Reason"
  ], 
  "ARQ-1": [
    "ARQ.1", 
    "75", 
    "EI", 
    "R", 
    "1", 
    "Placer Appointment ID"
  ], 
  "ARQ-2": [
    "ARQ.2", 
    "75", 
    "EI", 
    "C", 
    "1", 
    "Filler Appointment ID"
  ], 
  "ARQ-3": [
    "ARQ.3", 
    "5", 
    "NM", 
    "C", 
    "1", 
    "Occurrence Number"
  ], 
  "ARQ-8": [
    "ARQ.8", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0277", 
    "Appointment Type"
  ], 
  "ARQ-9": [
    "ARQ.9", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Appointment Duration"
  ]
};
DB['ARQ'] = ARQ;

var AUT = {
  "AUT-10": [
    "AUT.10", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Process Date"
  ], 
  "AUT-8": [
    "AUT.8", 
    "2", 
    "NM", 
    "O", 
    "1", 
    "Requested Number of Treatments"
  ], 
  "AUT-9": [
    "AUT.9", 
    "2", 
    "NM", 
    "O", 
    "1", 
    "Authorized Number of Treatments"
  ], 
  "AUT-1": [
    "AUT.1", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0072", 
    "Authorizing Payor, Plan ID"
  ], 
  "AUT-2": [
    "AUT.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0285", 
    "Authorizing Payor, Company ID"
  ], 
  "AUT-3": [
    "AUT.3", 
    "45", 
    "ST", 
    "O", 
    "1", 
    "Authorizing Payor, Company Name"
  ], 
  "AUT-4": [
    "AUT.4", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Authorization Effective Date"
  ], 
  "AUT-5": [
    "AUT.5", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Authorization Expiration Date"
  ], 
  "AUT-6": [
    "AUT.6", 
    "30", 
    "EI", 
    "C", 
    "1", 
    "Authorization Identifier"
  ], 
  "AUT-7": [
    "AUT.7", 
    "25", 
    "CP", 
    "O", 
    "1", 
    "Reimbursement Limit"
  ]
};
DB['AUT'] = AUT;

var BLC = {
  "BLC-2": [
    "BLC.2", 
    "83", 
    "CQ", 
    "O", 
    "1", 
    "Blood Amount"
  ], 
  "BLC-1": [
    "BLC.1", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0426", 
    "Blood Product Code"
  ]
};
DB['BLC'] = BLC;

var BLG = {
  "BLG-3": [
    "BLG.3", 
    "100", 
    "CX", 
    "O", 
    "1", 
    "Account ID"
  ], 
  "BLG-2": [
    "BLG.2", 
    "50", 
    "ID", 
    "O", 
    "1", 
    "0122", 
    "Charge Type"
  ], 
  "BLG-1": [
    "BLG.1", 
    "40", 
    "CCD", 
    "O", 
    "1", 
    "0100", 
    "When to Charge"
  ]
};
DB['BLG'] = BLG;

var CDM = {
  "CDM-8": [
    "CDM.8", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0183", 
    "Active/Inactive Flag"
  ], 
  "CDM-9": [
    "CDM.9", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0463", 
    "Inventory Number"
  ], 
  "CDM-4": [
    "CDM.4", 
    "250", 
    "ST", 
    "O", 
    "1", 
    "Charge Description Long"
  ], 
  "CDM-5": [
    "CDM.5", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0268", 
    "Description Override Indicator"
  ], 
  "CDM-6": [
    "CDM.6", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Exploding Charges"
  ], 
  "CDM-7": [
    "CDM.7", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0088", 
    "Procedure Code"
  ], 
  "CDM-12": [
    "CDM.12", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Contract Organization"
  ], 
  "CDM-1": [
    "CDM.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0132", 
    "Primary Key Value - CDM"
  ], 
  "CDM-2": [
    "CDM.2", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Charge Code Alias"
  ], 
  "CDM-3": [
    "CDM.3", 
    "20", 
    "ST", 
    "R", 
    "1", 
    "Charge Description Short"
  ], 
  "CDM-13": [
    "CDM.13", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Room Fee Indicator"
  ], 
  "CDM-10": [
    "CDM.10", 
    "12", 
    "NM", 
    "O", 
    "1", 
    "Resource Load"
  ], 
  "CDM-11": [
    "CDM.11", 
    "250", 
    "CK", 
    "O", 
    "*", 
    "Contract Number"
  ]
};
DB['CDM'] = CDM;

var CM0 = {
  "CM0-11": [
    "CM0.11", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Contact's Address"
  ], 
  "CM0-10": [
    "CM0.10", 
    "250", 
    "XTN", 
    "O", 
    "1", 
    "Contact's Telephone Number"
  ], 
  "CM0-8": [
    "CM0.8", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Last Accrual Date"
  ], 
  "CM0-9": [
    "CM0.9", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Contact for Study"
  ], 
  "CM0-6": [
    "CM0.6", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Last IRB Approval Date"
  ], 
  "CM0-7": [
    "CM0.7", 
    "8", 
    "NM", 
    "O", 
    "1", 
    "Total Accrual to Date"
  ], 
  "CM0-4": [
    "CM0.4", 
    "300", 
    "ST", 
    "R", 
    "1", 
    "Title of Study"
  ], 
  "CM0-5": [
    "CM0.5", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Chairman of Study"
  ], 
  "CM0-2": [
    "CM0.2", 
    "60", 
    "EI", 
    "R", 
    "1", 
    "Sponsor Study ID"
  ], 
  "CM0-3": [
    "CM0.3", 
    "60", 
    "EI", 
    "O", 
    "3", 
    "Alternate Study ID"
  ], 
  "CM0-1": [
    "CM0.1", 
    "4", 
    "SI", 
    "O", 
    "1", 
    "Set ID - CM0"
  ]
};
DB['CM0'] = CM0;

var CM1 = {
  "CM1-3": [
    "CM1.3", 
    "300", 
    "ST", 
    "R", 
    "1", 
    "Description of Study Phase"
  ], 
  "CM1-2": [
    "CM1.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Study Phase Identifier"
  ], 
  "CM1-1": [
    "CM1.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID - CM1"
  ]
};
DB['CM1'] = CM1;

var CM2 = {
  "CM2-1": [
    "CM2.1", 
    "4", 
    "SI", 
    "O", 
    "1", 
    "Set ID- CM2"
  ], 
  "CM2-2": [
    "CM2.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Scheduled Time Point"
  ], 
  "CM2-3": [
    "CM2.3", 
    "300", 
    "ST", 
    "O", 
    "1", 
    "Description of Time Point"
  ], 
  "CM2-4": [
    "CM2.4", 
    "250", 
    "CE", 
    "R", 
    "200", 
    "Events Scheduled This Time Point"
  ]
};
DB['CM2'] = CM2;

var CNS = {
  "CNS-1": [
    "CNS.1", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Starting Notification Reference Number"
  ], 
  "CNS-2": [
    "CNS.2", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Ending Notification Reference Number"
  ], 
  "CNS-3": [
    "CNS.3", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Starting Notification Date/Time"
  ], 
  "CNS-4": [
    "CNS.4", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Ending Notification Date/Time"
  ], 
  "CNS-5": [
    "CNS.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Starting Notification Code"
  ], 
  "CNS-6": [
    "CNS.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Ending Notification Code"
  ]
};
DB['CNS'] = CNS;

var CSP = {
  "CSP-1": [
    "CSP.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Study Phase Identifier"
  ], 
  "CSP-2": [
    "CSP.2", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Date/time Study Phase Began"
  ], 
  "CSP-3": [
    "CSP.3", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date/time Study Phase Ended"
  ], 
  "CSP-4": [
    "CSP.4", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Study Phase Evaluability"
  ]
};
DB['CSP'] = CSP;

var CSR = {
  "CSR-11": [
    "CSR.11", 
    "26", 
    "TS", 
    "O", 
    "3", 
    "Study Randomization Date/time"
  ], 
  "CSR-13": [
    "CSR.13", 
    "250", 
    "CE", 
    "O", 
    "3", 
    "Stratum for Study Randomization"
  ], 
  "CSR-14": [
    "CSR.14", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Patient Evaluability Status"
  ], 
  "CSR-12": [
    "CSR.12", 
    "250", 
    "CE", 
    "O", 
    "3", 
    "Randomized Study Arm"
  ], 
  "CSR-15": [
    "CSR.15", 
    "26", 
    "TS", 
    "C", 
    "1", 
    "Date/time Ended Study"
  ], 
  "CSR-10": [
    "CSR.10", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Patient Study Eligibility Status"
  ], 
  "CSR-8": [
    "CSR.8", 
    "250", 
    "XCN", 
    "R", 
    "*", 
    "Study Authorizing Provider"
  ], 
  "CSR-9": [
    "CSR.9", 
    "26", 
    "TS", 
    "C", 
    "1", 
    "Date/time Patient Study Consent Signed"
  ], 
  "CSR-6": [
    "CSR.6", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Date/Time Of Patient Study Registration"
  ], 
  "CSR-7": [
    "CSR.7", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Person Performing Study Registration"
  ], 
  "CSR-4": [
    "CSR.4", 
    "30", 
    "CX", 
    "R", 
    "1", 
    "Sponsor Patient ID"
  ], 
  "CSR-5": [
    "CSR.5", 
    "30", 
    "CX", 
    "O", 
    "1", 
    "Alternate Patient ID - CSR"
  ], 
  "CSR-2": [
    "CSR.2", 
    "60", 
    "EI", 
    "O", 
    "1", 
    "Alternate Study ID"
  ], 
  "CSR-3": [
    "CSR.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Institution Registering the Patient"
  ], 
  "CSR-16": [
    "CSR.16", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Reason Ended Study"
  ], 
  "CSR-1": [
    "CSR.1", 
    "60", 
    "EI", 
    "R", 
    "1", 
    "Sponsor Study ID"
  ]
};
DB['CSR'] = CSR;

var CSS = {
  "CSS-3": [
    "CSS.3", 
    "250", 
    "CE", 
    "O", 
    "3", 
    "Study Quality Control Codes"
  ], 
  "CSS-2": [
    "CSS.2", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Study Scheduled Patient Time Point"
  ], 
  "CSS-1": [
    "CSS.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Study Scheduled Time Point"
  ]
};
DB['CSS'] = CSS;

var CTD = {
  "CTD-1": [
    "CTD.1", 
    "250", 
    "CE", 
    "R", 
    "*", 
    "0131", 
    "Contact Role"
  ], 
  "CTD-3": [
    "CTD.3", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Contact Address"
  ], 
  "CTD-2": [
    "CTD.2", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Contact Name"
  ], 
  "CTD-5": [
    "CTD.5", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Contact Communication Information"
  ], 
  "CTD-4": [
    "CTD.4", 
    "60", 
    "PL", 
    "O", 
    "1", 
    "Contact Location"
  ], 
  "CTD-7": [
    "CTD.7", 
    "100", 
    "PI", 
    "O", 
    "*", 
    "Contact Identifiers"
  ], 
  "CTD-6": [
    "CTD.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0185", 
    "Preferred Method of Contact"
  ]
};
DB['CTD'] = CTD;

var CTI = {
  "CTI-1": [
    "CTI.1", 
    "60", 
    "EI", 
    "R", 
    "1", 
    "Sponsor Study ID"
  ], 
  "CTI-2": [
    "CTI.2", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Study Phase Identifier"
  ], 
  "CTI-3": [
    "CTI.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Study Scheduled Time Point"
  ]
};
DB['CTI'] = CTI;

var DB1 = {
  "DB1-1": [
    "DB1.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID - DB1"
  ], 
  "DB1-3": [
    "DB1.3", 
    "250", 
    "CX", 
    "O", 
    "*", 
    "Disabled Person Identifier"
  ], 
  "DB1-2": [
    "DB1.2", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0334", 
    "Disabled Person Code"
  ], 
  "DB1-5": [
    "DB1.5", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Disability Start Date"
  ], 
  "DB1-4": [
    "DB1.4", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Disability Indicator"
  ], 
  "DB1-7": [
    "DB1.7", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Disability Return to Work Date"
  ], 
  "DB1-6": [
    "DB1.6", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Disability End Date"
  ], 
  "DB1-8": [
    "DB1.8", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Disability Unable to Work Date"
  ]
};
DB['DB1'] = DB1;

var DG1 = {
  "DG1-2": [
    "DG1.2", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0053", 
    "Diagnosis Coding Method"
  ], 
  "DG1-3": [
    "DG1.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0051", 
    "Diagnosis Code - DG1"
  ], 
  "DG1-16": [
    "DG1.16", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Diagnosing Clinician"
  ], 
  "DG1-1": [
    "DG1.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID - DG1"
  ], 
  "DG1-6": [
    "DG1.6", 
    "2", 
    "IS", 
    "R", 
    "1", 
    "0052", 
    "Diagnosis Type"
  ], 
  "DG1-7": [
    "DG1.7", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0118", 
    "Major Diagnostic Category"
  ], 
  "DG1-4": [
    "DG1.4", 
    "40", 
    "ST", 
    "O", 
    "1", 
    "Diagnosis Description"
  ], 
  "DG1-5": [
    "DG1.5", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Diagnosis Date/Time"
  ], 
  "DG1-13": [
    "DG1.13", 
    "12", 
    "CP", 
    "O", 
    "1", 
    "Outlier Cost"
  ], 
  "DG1-12": [
    "DG1.12", 
    "3", 
    "NM", 
    "O", 
    "1", 
    "Outlier Days"
  ], 
  "DG1-8": [
    "DG1.8", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0055", 
    "Diagnostic Related Group"
  ], 
  "DG1-9": [
    "DG1.9", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "DRG Approval Indicator"
  ], 
  "DG1-18": [
    "DG1.18", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Confidential Indicator"
  ], 
  "DG1-19": [
    "DG1.19", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Attestation Date/Time"
  ], 
  "DG1-17": [
    "DG1.17", 
    "3", 
    "IS", 
    "O", 
    "1", 
    "0228", 
    "Diagnosis Classification"
  ], 
  "DG1-15": [
    "DG1.15", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0359", 
    "Diagnosis Priority"
  ], 
  "DG1-14": [
    "DG1.14", 
    "4", 
    "ST", 
    "O", 
    "1", 
    "Grouper Version And Type"
  ], 
  "DG1-10": [
    "DG1.10", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0056", 
    "DRG Grouper Review Code"
  ], 
  "DG1-11": [
    "DG1.11", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0083", 
    "Outlier Type"
  ]
};
DB['DG1'] = DG1;

var DRG = {
  "DRG-11": [
    "DRG.11", 
    "21", 
    "IS", 
    "O", 
    "1", 
    "0415", 
    "DRG Transfer Type"
  ], 
  "DRG-10": [
    "DRG.10", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Confidential Indicator"
  ], 
  "DRG-9": [
    "DRG.9", 
    "9", 
    "CP", 
    "O", 
    "1", 
    "Outlier Reimbursement"
  ], 
  "DRG-8": [
    "DRG.8", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0229", 
    "DRG Payor"
  ], 
  "DRG-3": [
    "DRG.3", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "DRG Approval Indicator"
  ], 
  "DRG-2": [
    "DRG.2", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "DRG Assigned Date/Time"
  ], 
  "DRG-1": [
    "DRG.1", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0055", 
    "Diagnostic Related Group"
  ], 
  "DRG-7": [
    "DRG.7", 
    "12", 
    "CP", 
    "O", 
    "1", 
    "Outlier Cost"
  ], 
  "DRG-6": [
    "DRG.6", 
    "3", 
    "NM", 
    "O", 
    "1", 
    "Outlier Days"
  ], 
  "DRG-5": [
    "DRG.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0083", 
    "Outlier Type"
  ], 
  "DRG-4": [
    "DRG.4", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0056", 
    "DRG Grouper Review Code"
  ]
};
DB['DRG'] = DRG;

var DSC = {
  "DSC-1": [
    "DSC.1", 
    "180", 
    "ST", 
    "O", 
    "1", 
    "Continuation Pointer"
  ], 
  "DSC-2": [
    "DSC.2", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0398", 
    "Continuation Style"
  ]
};
DB['DSC'] = DSC;

var DSP = {
  "DSP-3": [
    "DSP.3", 
    "300", 
    "TX", 
    "R", 
    "1", 
    "Data Line"
  ], 
  "DSP-2": [
    "DSP.2", 
    "4", 
    "SI", 
    "O", 
    "1", 
    "Display Level"
  ], 
  "DSP-1": [
    "DSP.1", 
    "4", 
    "SI", 
    "O", 
    "1", 
    "Set ID - DSP"
  ], 
  "DSP-5": [
    "DSP.5", 
    "20", 
    "TX", 
    "O", 
    "1", 
    "Result ID"
  ], 
  "DSP-4": [
    "DSP.4", 
    "2", 
    "ST", 
    "O", 
    "1", 
    "Logical Break Point"
  ]
};
DB['DSP'] = DSP;

var ECD = {
  "ECD-2": [
    "ECD.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0368", 
    "Remote Control Command"
  ], 
  "ECD-3": [
    "ECD.3", 
    "80", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Response Required"
  ], 
  "ECD-1": [
    "ECD.1", 
    "20", 
    "NM", 
    "R", 
    "1", 
    "Reference Command Number"
  ], 
  "ECD-4": [
    "ECD.4", 
    "200", 
    "TQ", 
    "O", 
    "1", 
    "Requested Completion Time"
  ], 
  "ECD-5": [
    "ECD.5", 
    "65536", 
    "ST", 
    "O", 
    "*", 
    "Parameters"
  ]
};
DB['ECD'] = ECD;

var ECR = {
  "ECR-1": [
    "ECR.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0387", 
    "Command Response"
  ], 
  "ECR-2": [
    "ECR.2", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Date/Time Completed"
  ], 
  "ECR-3": [
    "ECR.3", 
    "65536", 
    "ST", 
    "O", 
    "*", 
    "Command Response Parameters"
  ]
};
DB['ECR'] = ECR;

var EDU = {
  "EDU-6": [
    "EDU.6", 
    "250", 
    "XON", 
    "O", 
    "1", 
    "School"
  ], 
  "EDU-7": [
    "EDU.7", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0402", 
    "School Type Code"
  ], 
  "EDU-4": [
    "EDU.4", 
    "52", 
    "DR", 
    "O", 
    "1", 
    "Academic Degree Program Participation Date Range"
  ], 
  "EDU-5": [
    "EDU.5", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Academic Degree Granted Date"
  ], 
  "EDU-2": [
    "EDU.2", 
    "10", 
    "IS", 
    "O", 
    "1", 
    "0360", 
    "Academic Degree"
  ], 
  "EDU-3": [
    "EDU.3", 
    "52", 
    "DR", 
    "O", 
    "1", 
    "Academic Degree Program Date Range"
  ], 
  "EDU-1": [
    "EDU.1", 
    "60", 
    "SI", 
    "R", 
    "1", 
    "Set ID - EDU"
  ], 
  "EDU-8": [
    "EDU.8", 
    "250", 
    "XAD", 
    "O", 
    "1", 
    "School Address"
  ]
};
DB['EDU'] = EDU;

var EQL = {
  "EQL-1": [
    "EQL.1", 
    "32", 
    "ST", 
    "O", 
    "1", 
    "Query Tag"
  ], 
  "EQL-2": [
    "EQL.2", 
    "1", 
    "ID", 
    "R", 
    "1", 
    "0106", 
    "Query/Response Format Code"
  ], 
  "EQL-3": [
    "EQL.3", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "EQL Query Name"
  ], 
  "EQL-4": [
    "EQL.4", 
    "4096", 
    "ST", 
    "R", 
    "1", 
    "EQL Query Statement"
  ]
};
DB['EQL'] = EQL;

var EQP = {
  "EQP-4": [
    "EQP.4", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "End Date/Time"
  ], 
  "EQP-5": [
    "EQP.5", 
    "65536", 
    "FT", 
    "R", 
    "1", 
    "Transaction Data"
  ], 
  "EQP-1": [
    "EQP.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0450", 
    "Event type"
  ], 
  "EQP-2": [
    "EQP.2", 
    "20", 
    "ST", 
    "O", 
    "1", 
    "File Name"
  ], 
  "EQP-3": [
    "EQP.3", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Start Date/Time"
  ]
};
DB['EQP'] = EQP;

var EQU = {
  "EQU-5": [
    "EQU.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0367", 
    "Alert Level"
  ], 
  "EQU-4": [
    "EQU.4", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0366", 
    "Local/Remote Control State"
  ], 
  "EQU-1": [
    "EQU.1", 
    "22", 
    "EI", 
    "R", 
    "1", 
    "Equipment Instance Identifier"
  ], 
  "EQU-3": [
    "EQU.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0365", 
    "Equipment State"
  ], 
  "EQU-2": [
    "EQU.2", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Event Date/Time"
  ]
};
DB['EQU'] = EQU;

var ERQ = {
  "ERQ-1": [
    "ERQ.1", 
    "32", 
    "ST", 
    "O", 
    "1", 
    "Query Tag"
  ], 
  "ERQ-2": [
    "ERQ.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Event Identifier"
  ], 
  "ERQ-3": [
    "ERQ.3", 
    "256", 
    "QIP", 
    "O", 
    "*", 
    "Input Parameter List"
  ]
};
DB['ERQ'] = ERQ;

var ERR = {
  "ERR-1": [
    "ERR.1", 
    "80", 
    "ELD", 
    "R", 
    "*", 
    "Error Code and Location"
  ]
};
DB['ERR'] = ERR;

var EVN = {
  "EVN-3": [
    "EVN.3", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date/Time Planned Event"
  ], 
  "EVN-2": [
    "EVN.2", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Recorded Date/Time"
  ], 
  "EVN-1": [
    "EVN.1", 
    "3", 
    "ID", 
    "B", 
    "1", 
    "0003", 
    "Event Type Code"
  ], 
  "EVN-7": [
    "EVN.7", 
    "180", 
    "HD", 
    "O", 
    "1", 
    "Event Facility"
  ], 
  "EVN-6": [
    "EVN.6", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Event Occurred"
  ], 
  "EVN-5": [
    "EVN.5", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "0188", 
    "Operator ID"
  ], 
  "EVN-4": [
    "EVN.4", 
    "3", 
    "IS", 
    "O", 
    "1", 
    "0062", 
    "Event Reason Code"
  ]
};
DB['EVN'] = EVN;

var FAC = {
  "FAC-12": [
    "FAC.12", 
    "250", 
    "XTN", 
    "O", 
    "1", 
    "Signature Authority Telecommunication"
  ], 
  "FAC-11": [
    "FAC.11", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Signature Authority Address"
  ], 
  "FAC-8": [
    "FAC.8", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Contact Telecommunication"
  ], 
  "FAC-9": [
    "FAC.9", 
    "250", 
    "XCN", 
    "R", 
    "*", 
    "Signature Authority"
  ], 
  "FAC-4": [
    "FAC.4", 
    "250", 
    "XTN", 
    "R", 
    "1", 
    "Facility Telecommunication"
  ], 
  "FAC-5": [
    "FAC.5", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Contact Person"
  ], 
  "FAC-6": [
    "FAC.6", 
    "60", 
    "ST", 
    "O", 
    "*", 
    "Contact Title"
  ], 
  "FAC-7": [
    "FAC.7", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Contact Address"
  ], 
  "FAC-10": [
    "FAC.10", 
    "60", 
    "ST", 
    "O", 
    "1", 
    "Signature Authority Title"
  ], 
  "FAC-1": [
    "FAC.1", 
    "20", 
    "EI", 
    "R", 
    "1", 
    "Facility ID-FAC"
  ], 
  "FAC-2": [
    "FAC.2", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0331", 
    "Facility Type"
  ], 
  "FAC-3": [
    "FAC.3", 
    "250", 
    "XAD", 
    "R", 
    "*", 
    "Facility Address"
  ]
};
DB['FAC'] = FAC;

var FT1 = {
  "FT1-24": [
    "FT1.24", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Entered By Code"
  ], 
  "FT1-25": [
    "FT1.25", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0088", 
    "Procedure Code"
  ], 
  "FT1-26": [
    "FT1.26", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0340", 
    "Procedure Code Modifier"
  ], 
  "FT1-20": [
    "FT1.20", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "0084", 
    "Performed By Code"
  ], 
  "FT1-21": [
    "FT1.21", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Ordered By Code"
  ], 
  "FT1-22": [
    "FT1.22", 
    "12", 
    "CP", 
    "O", 
    "1", 
    "Unit Cost"
  ], 
  "FT1-23": [
    "FT1.23", 
    "22", 
    "EI", 
    "O", 
    "1", 
    "Filler Order Number"
  ], 
  "FT1-9": [
    "FT1.9", 
    "40", 
    "ST", 
    "O", 
    "1", 
    "Transaction Description - Alt"
  ], 
  "FT1-8": [
    "FT1.8", 
    "40", 
    "ST", 
    "O", 
    "1", 
    "Transaction Description"
  ], 
  "FT1-1": [
    "FT1.1", 
    "4", 
    "SI", 
    "O", 
    "1", 
    "Set ID - FT1"
  ], 
  "FT1-3": [
    "FT1.3", 
    "10", 
    "ST", 
    "O", 
    "1", 
    "Transaction Batch ID"
  ], 
  "FT1-2": [
    "FT1.2", 
    "12", 
    "ST", 
    "O", 
    "1", 
    "Transaction ID"
  ], 
  "FT1-5": [
    "FT1.5", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Transaction Posting Date"
  ], 
  "FT1-4": [
    "FT1.4", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Transaction Date"
  ], 
  "FT1-7": [
    "FT1.7", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0132", 
    "Transaction Code"
  ], 
  "FT1-6": [
    "FT1.6", 
    "8", 
    "IS", 
    "R", 
    "1", 
    "0017", 
    "Transaction Type"
  ], 
  "FT1-11": [
    "FT1.11", 
    "12", 
    "CP", 
    "O", 
    "1", 
    "Transaction Amount - Extended"
  ], 
  "FT1-10": [
    "FT1.10", 
    "6", 
    "NM", 
    "O", 
    "1", 
    "Transaction Quantity"
  ], 
  "FT1-13": [
    "FT1.13", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0049", 
    "Department Code"
  ], 
  "FT1-12": [
    "FT1.12", 
    "12", 
    "CP", 
    "O", 
    "1", 
    "Transaction Amount - Unit"
  ], 
  "FT1-15": [
    "FT1.15", 
    "12", 
    "CP", 
    "O", 
    "1", 
    "Insurance Amount"
  ], 
  "FT1-14": [
    "FT1.14", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0072", 
    "Insurance Plan ID"
  ], 
  "FT1-17": [
    "FT1.17", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0024", 
    "Fee Schedule"
  ], 
  "FT1-16": [
    "FT1.16", 
    "80", 
    "PL", 
    "O", 
    "1", 
    "Assigned Patient Location"
  ], 
  "FT1-19": [
    "FT1.19", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0051", 
    "Diagnosis Code - FT1"
  ], 
  "FT1-18": [
    "FT1.18", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0018", 
    "Patient Type"
  ]
};
DB['FT1'] = FT1;

var GOL = {
  "GOL-16": [
    "GOL.16", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Goal Evaluation"
  ], 
  "GOL-17": [
    "GOL.17", 
    "300", 
    "ST", 
    "O", 
    "*", 
    "Goal Evaluation Comment"
  ], 
  "GOL-14": [
    "GOL.14", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Previous Goal Review Date/Time"
  ], 
  "GOL-15": [
    "GOL.15", 
    "200", 
    "TQ", 
    "O", 
    "1", 
    "Goal Review Interval"
  ], 
  "GOL-12": [
    "GOL.12", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Current Goal Review Date/Time"
  ], 
  "GOL-13": [
    "GOL.13", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Next Goal Review Date/Time"
  ], 
  "GOL-10": [
    "GOL.10", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Goal Management Discipline"
  ], 
  "GOL-11": [
    "GOL.11", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Current Goal Review Status"
  ], 
  "GOL-18": [
    "GOL.18", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Goal Life Cycle Status"
  ], 
  "GOL-19": [
    "GOL.19", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Goal Life Cycle Status Date/Time"
  ], 
  "GOL-4": [
    "GOL.4", 
    "60", 
    "EI", 
    "R", 
    "1", 
    "Goal Instance ID"
  ], 
  "GOL-5": [
    "GOL.5", 
    "60", 
    "EI", 
    "O", 
    "1", 
    "Episode of Care ID"
  ], 
  "GOL-6": [
    "GOL.6", 
    "60", 
    "NM", 
    "O", 
    "1", 
    "Goal List Priority"
  ], 
  "GOL-7": [
    "GOL.7", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Goal Established Date/Time"
  ], 
  "GOL-1": [
    "GOL.1", 
    "2", 
    "ID", 
    "R", 
    "1", 
    "0287", 
    "Action Code"
  ], 
  "GOL-2": [
    "GOL.2", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Action Date/Time"
  ], 
  "GOL-3": [
    "GOL.3", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Goal ID"
  ], 
  "GOL-21": [
    "GOL.21", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Goal Target Name"
  ], 
  "GOL-20": [
    "GOL.20", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Goal Target Type"
  ], 
  "GOL-8": [
    "GOL.8", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Expected Goal Achieve Date/Time"
  ], 
  "GOL-9": [
    "GOL.9", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Goal Classification"
  ]
};
DB['GOL'] = GOL;

var GP1 = {
  "GP1-1": [
    "GP1.1", 
    "3", 
    "IS", 
    "R", 
    "1", 
    "0455", 
    "Type of Bill Code"
  ], 
  "GP1-2": [
    "GP1.2", 
    "3", 
    "IS", 
    "O", 
    "*", 
    "0456", 
    "Revenue Code"
  ], 
  "GP1-3": [
    "GP1.3", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0457", 
    "Overall Claim Disposition Code"
  ], 
  "GP1-4": [
    "GP1.4", 
    "2", 
    "IS", 
    "O", 
    "*", 
    "0458", 
    "OCE Edits per Visit Code"
  ], 
  "GP1-5": [
    "GP1.5", 
    "12", 
    "CP", 
    "O", 
    "1", 
    "Outlier Cost"
  ]
};
DB['GP1'] = GP1;

var GP2 = {
  "GP2-13": [
    "GP2.13", 
    "12", 
    "CP", 
    "O", 
    "1", 
    "Co-Pay Amount"
  ], 
  "GP2-12": [
    "GP2.12", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0470", 
    "Reimbursement Type Code"
  ], 
  "GP2-11": [
    "GP2.11", 
    "12", 
    "CP", 
    "O", 
    "1", 
    "Expected HCFA Payment Amount"
  ], 
  "GP2-10": [
    "GP2.10", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0469", 
    "Packaging Status Code"
  ], 
  "GP2-14": [
    "GP2.14", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Pay Rate per Unit"
  ], 
  "GP2-9": [
    "GP2.9", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0468", 
    "Payment Adjustment Code"
  ], 
  "GP2-8": [
    "GP2.8", 
    "1", 
    "IS", 
    "O", 
    "*", 
    "0467", 
    "Modifier Edit Code"
  ], 
  "GP2-3": [
    "GP2.3", 
    "12", 
    "CP", 
    "O", 
    "1", 
    "Charge"
  ], 
  "GP2-2": [
    "GP2.2", 
    "7", 
    "NM", 
    "O", 
    "1", 
    "Number of Service Units"
  ], 
  "GP2-1": [
    "GP2.1", 
    "3", 
    "IS", 
    "O", 
    "1", 
    "0456", 
    "Revenue Code"
  ], 
  "GP2-7": [
    "GP2.7", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0466", 
    "Ambulatory Payment Classification Code"
  ], 
  "GP2-6": [
    "GP2.6", 
    "3", 
    "IS", 
    "O", 
    "*", 
    "0458", 
    "OCE Edit Code"
  ], 
  "GP2-5": [
    "GP2.5", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0460", 
    "Denial or Rejection Code"
  ], 
  "GP2-4": [
    "GP2.4", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0459", 
    "Reimbursement Action Code"
  ]
};
DB['GP2'] = GP2;

var GT1 = {
  "GT1-55": [
    "GT1.55", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0005", 
    "Guarantor Race"
  ], 
  "GT1-53": [
    "GT1.53", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0311", 
    "Job Status"
  ], 
  "GT1-51": [
    "GT1.51", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Guarantor Employer's Organization Name"
  ], 
  "GT1-34": [
    "GT1.34", 
    "2", 
    "IS", 
    "O", 
    "*", 
    "0009", 
    "Ambulatory Status"
  ], 
  "GT1-36": [
    "GT1.36", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0296", 
    "Primary Language"
  ], 
  "GT1-30": [
    "GT1.30", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0002", 
    "Guarantor Marital Status Code"
  ], 
  "GT1-52": [
    "GT1.52", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0295", 
    "Handicap"
  ], 
  "GT1-31": [
    "GT1.31", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Guarantor Hire Effective Date"
  ], 
  "GT1-32": [
    "GT1.32", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Employment Stop Date"
  ], 
  "GT1-35": [
    "GT1.35", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0171", 
    "Citizenship"
  ], 
  "GT1-49": [
    "GT1.49", 
    "20", 
    "ST", 
    "O", 
    "1", 
    "Job Title"
  ], 
  "GT1-48": [
    "GT1.48", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0063", 
    "Contact Relationship"
  ], 
  "GT1-33": [
    "GT1.33", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0223", 
    "Living Dependency"
  ], 
  "GT1-29": [
    "GT1.29", 
    "250", 
    "CX", 
    "O", 
    "*", 
    "Guarantor Employer ID Number"
  ], 
  "GT1-28": [
    "GT1.28", 
    "3", 
    "NM", 
    "O", 
    "1", 
    "Guarantor Household Size"
  ], 
  "GT1-27": [
    "GT1.27", 
    "10", 
    "CP", 
    "O", 
    "1", 
    "Guarantor Household Annual Income"
  ], 
  "GT1-26": [
    "GT1.26", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0218", 
    "Guarantor Charge Adjustment Code"
  ], 
  "GT1-25": [
    "GT1.25", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Guarantor Death Flag"
  ], 
  "GT1-24": [
    "GT1.24", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Guarantor Death Date And Time"
  ], 
  "GT1-23": [
    "GT1.23", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0341", 
    "Guarantor Credit Rating Code"
  ], 
  "GT1-22": [
    "GT1.22", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Guarantor Billing Hold Flag"
  ], 
  "GT1-21": [
    "GT1.21", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Guarantor Organization Name"
  ], 
  "GT1-20": [
    "GT1.20", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0066", 
    "Guarantor Employment Status"
  ], 
  "GT1-4": [
    "GT1.4", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Guarantor Spouse Name"
  ], 
  "GT1-5": [
    "GT1.5", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Guarantor Address"
  ], 
  "GT1-6": [
    "GT1.6", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Guarantor Ph Num - Home"
  ], 
  "GT1-7": [
    "GT1.7", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Guarantor Ph Num - Business"
  ], 
  "GT1-1": [
    "GT1.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID - GT1"
  ], 
  "GT1-2": [
    "GT1.2", 
    "250", 
    "CX", 
    "O", 
    "*", 
    "Guarantor Number"
  ], 
  "GT1-3": [
    "GT1.3", 
    "250", 
    "XPN", 
    "R", 
    "*", 
    "Guarantor Name"
  ], 
  "GT1-37": [
    "GT1.37", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0220", 
    "Living Arrangement"
  ], 
  "GT1-8": [
    "GT1.8", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Guarantor Date/Time Of Birth"
  ], 
  "GT1-9": [
    "GT1.9", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0001", 
    "Guarantor Administrative Sex"
  ], 
  "GT1-41": [
    "GT1.41", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0006", 
    "Religion"
  ], 
  "GT1-40": [
    "GT1.40", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0231", 
    "Student Indicator"
  ], 
  "GT1-43": [
    "GT1.43", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0212", 
    "Nationality"
  ], 
  "GT1-47": [
    "GT1.47", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0222", 
    "Contact Reason"
  ], 
  "GT1-54": [
    "GT1.54", 
    "50", 
    "FC", 
    "O", 
    "1", 
    "0064", 
    "Guarantor Financial Class"
  ], 
  "GT1-42": [
    "GT1.42", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Mother's Maiden Name"
  ], 
  "GT1-45": [
    "GT1.45", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Contact Person's Name"
  ], 
  "GT1-44": [
    "GT1.44", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0189", 
    "Ethnic Group"
  ], 
  "GT1-16": [
    "GT1.16", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Guarantor Employer Name"
  ], 
  "GT1-17": [
    "GT1.17", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Guarantor Employer Address"
  ], 
  "GT1-14": [
    "GT1.14", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Guarantor Date - End"
  ], 
  "GT1-15": [
    "GT1.15", 
    "2", 
    "NM", 
    "O", 
    "1", 
    "Guarantor Priority"
  ], 
  "GT1-12": [
    "GT1.12", 
    "11", 
    "ST", 
    "O", 
    "1", 
    "Guarantor SSN"
  ], 
  "GT1-13": [
    "GT1.13", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Guarantor Date - Begin"
  ], 
  "GT1-10": [
    "GT1.10", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0068", 
    "Guarantor Type"
  ], 
  "GT1-11": [
    "GT1.11", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0063", 
    "Guarantor Relationship"
  ], 
  "GT1-38": [
    "GT1.38", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0215", 
    "Publicity Code"
  ], 
  "GT1-39": [
    "GT1.39", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Protection Indicator"
  ], 
  "GT1-50": [
    "GT1.50", 
    "20", 
    "JCC", 
    "O", 
    "1", 
    "0327", 
    "Job Code/Class"
  ], 
  "GT1-46": [
    "GT1.46", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Contact Person's Telephone Number"
  ], 
  "GT1-18": [
    "GT1.18", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Guarantor Employer Phone Number"
  ], 
  "GT1-19": [
    "GT1.19", 
    "250", 
    "CX", 
    "O", 
    "*", 
    "Guarantor Employee ID Number"
  ]
};
DB['GT1'] = GT1;

var IAM = {
  "IAM-11": [
    "IAM.11", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Onset Date"
  ], 
  "IAM-10": [
    "IAM.10", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Allergen Group Code/Mnemonic/Description"
  ], 
  "IAM-13": [
    "IAM.13", 
    "8", 
    "TS", 
    "O", 
    "1", 
    "Reported Date/Time"
  ], 
  "IAM-12": [
    "IAM.12", 
    "60", 
    "ST", 
    "O", 
    "1", 
    "Onset Date Text"
  ], 
  "IAM-15": [
    "IAM.15", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0063", 
    "Relationship to Patient Code"
  ], 
  "IAM-14": [
    "IAM.14", 
    "250", 
    "XPN", 
    "O", 
    "1", 
    "Reported By"
  ], 
  "IAM-17": [
    "IAM.17", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0438", 
    "Allergy Clinical Status Code"
  ], 
  "IAM-16": [
    "IAM.16", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0437", 
    "Alert Device Code"
  ], 
  "IAM-19": [
    "IAM.19", 
    "250", 
    "XON", 
    "O", 
    "1", 
    "Statused by Organization"
  ], 
  "IAM-18": [
    "IAM.18", 
    "250", 
    "XCN", 
    "O", 
    "1", 
    "Statused by Person"
  ], 
  "IAM-20": [
    "IAM.20", 
    "8", 
    "TS", 
    "O", 
    "1", 
    "Statused at Date/Time"
  ], 
  "IAM-9": [
    "IAM.9", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0436", 
    "Sensitivity to Causative Agent Code"
  ], 
  "IAM-8": [
    "IAM.8", 
    "60", 
    "ST", 
    "O", 
    "1", 
    "Action Reason"
  ], 
  "IAM-1": [
    "IAM.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID - IAM"
  ], 
  "IAM-3": [
    "IAM.3", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Allergen Code/Mnemonic/Description"
  ], 
  "IAM-2": [
    "IAM.2", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0127", 
    "Allergen Type Code"
  ], 
  "IAM-5": [
    "IAM.5", 
    "15", 
    "ST", 
    "O", 
    "*", 
    "Allergy Reaction Code"
  ], 
  "IAM-4": [
    "IAM.4", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0128", 
    "Allergy Severity Code"
  ], 
  "IAM-7": [
    "IAM.7", 
    "80", 
    "EI", 
    "R", 
    "1", 
    "Allergy Unique Identifier"
  ], 
  "IAM-6": [
    "IAM.6", 
    "250", 
    "CNE", 
    "R", 
    "1", 
    "0323", 
    "Allergy Action Code"
  ]
};
DB['IAM'] = IAM;

var IN1 = {
  "IN1-34": [
    "IN1.34", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Delay Before L.R. Day"
  ], 
  "IN1-35": [
    "IN1.35", 
    "8", 
    "IS", 
    "O", 
    "1", 
    "0042", 
    "Company Plan Code"
  ], 
  "IN1-36": [
    "IN1.36", 
    "15", 
    "ST", 
    "O", 
    "1", 
    "Policy Number"
  ], 
  "IN1-37": [
    "IN1.37", 
    "12", 
    "CP", 
    "O", 
    "1", 
    "Policy Deductible"
  ], 
  "IN1-30": [
    "IN1.30", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Verification By"
  ], 
  "IN1-31": [
    "IN1.31", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0098", 
    "Type Of Agreement Code"
  ], 
  "IN1-32": [
    "IN1.32", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0022", 
    "Billing Status"
  ], 
  "IN1-33": [
    "IN1.33", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Lifetime Reserve Days"
  ], 
  "IN1-38": [
    "IN1.38", 
    "12", 
    "CP", 
    "O", 
    "1", 
    "Policy Limit - Amount"
  ], 
  "IN1-39": [
    "IN1.39", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Policy Limit - Days"
  ], 
  "IN1-18": [
    "IN1.18", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Insured's Date Of Birth"
  ], 
  "IN1-19": [
    "IN1.19", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Insured's Address"
  ], 
  "IN1-12": [
    "IN1.12", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Plan Effective Date"
  ], 
  "IN1-13": [
    "IN1.13", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Plan Expiration Date"
  ], 
  "IN1-10": [
    "IN1.10", 
    "250", 
    "CX", 
    "O", 
    "*", 
    "Insured's Group Emp ID"
  ], 
  "IN1-11": [
    "IN1.11", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Insured's Group Emp Name"
  ], 
  "IN1-16": [
    "IN1.16", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Name Of Insured"
  ], 
  "IN1-17": [
    "IN1.17", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0063", 
    "Insured's Relationship To Patient"
  ], 
  "IN1-14": [
    "IN1.14", 
    "250", 
    "AUI", 
    "O", 
    "1", 
    "Authorization Information"
  ], 
  "IN1-15": [
    "IN1.15", 
    "3", 
    "IS", 
    "O", 
    "1", 
    "0086", 
    "Plan Type"
  ], 
  "IN1-23": [
    "IN1.23", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Notice Of Admission Flag"
  ], 
  "IN1-22": [
    "IN1.22", 
    "2", 
    "ST", 
    "O", 
    "1", 
    "Coord Of Ben. Priority"
  ], 
  "IN1-21": [
    "IN1.21", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0173", 
    "Coordination Of Benefits"
  ], 
  "IN1-20": [
    "IN1.20", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0135", 
    "Assignment Of Benefits"
  ], 
  "IN1-27": [
    "IN1.27", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0093", 
    "Release Information Code"
  ], 
  "IN1-26": [
    "IN1.26", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Report Of Eligibility Date"
  ], 
  "IN1-25": [
    "IN1.25", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Report Of Eligibility Flag"
  ], 
  "IN1-24": [
    "IN1.24", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Notice Of Admission Date"
  ], 
  "IN1-29": [
    "IN1.29", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Verification Date/Time"
  ], 
  "IN1-28": [
    "IN1.28", 
    "15", 
    "ST", 
    "O", 
    "1", 
    "Pre-Admit Cert"
  ], 
  "IN1-45": [
    "IN1.45", 
    "2", 
    "ST", 
    "O", 
    "1", 
    "Verification Status"
  ], 
  "IN1-44": [
    "IN1.44", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Insured's Employer's Address"
  ], 
  "IN1-47": [
    "IN1.47", 
    "3", 
    "IS", 
    "O", 
    "1", 
    "0309", 
    "Coverage Type"
  ], 
  "IN1-46": [
    "IN1.46", 
    "8", 
    "IS", 
    "O", 
    "1", 
    "0072", 
    "Prior Insurance Plan ID"
  ], 
  "IN1-41": [
    "IN1.41", 
    "12", 
    "CP", 
    "O", 
    "1", 
    "Room Rate - Private"
  ], 
  "IN1-40": [
    "IN1.40", 
    "12", 
    "CP", 
    "O", 
    "1", 
    "Room Rate - Semi-Private"
  ], 
  "IN1-43": [
    "IN1.43", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0001", 
    "Insured's Administrative Sex"
  ], 
  "IN1-42": [
    "IN1.42", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0066", 
    "Insured's Employment Status"
  ], 
  "IN1-49": [
    "IN1.49", 
    "250", 
    "CX", 
    "O", 
    "*", 
    "Insured's ID Number"
  ], 
  "IN1-48": [
    "IN1.48", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0295", 
    "Handicap"
  ], 
  "IN1-1": [
    "IN1.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID - IN1"
  ], 
  "IN1-2": [
    "IN1.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0072", 
    "Insurance Plan ID"
  ], 
  "IN1-3": [
    "IN1.3", 
    "250", 
    "CX", 
    "R", 
    "*", 
    "Insurance Company ID"
  ], 
  "IN1-4": [
    "IN1.4", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Insurance Company Name"
  ], 
  "IN1-5": [
    "IN1.5", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Insurance Company Address"
  ], 
  "IN1-6": [
    "IN1.6", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Insurance Co Contact Person"
  ], 
  "IN1-7": [
    "IN1.7", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Insurance Co Phone Number"
  ], 
  "IN1-8": [
    "IN1.8", 
    "12", 
    "ST", 
    "O", 
    "1", 
    "Group Number"
  ], 
  "IN1-9": [
    "IN1.9", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Group Name"
  ]
};
DB['IN1'] = IN1;

var IN2 = {
  "IN2-48": [
    "IN2.48", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0311", 
    "Job Status"
  ], 
  "IN2-49": [
    "IN2.49", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Employer Contact Person Name"
  ], 
  "IN2-64": [
    "IN2.64", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Insured's Employer Phone Number"
  ], 
  "IN2-69": [
    "IN2.69", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Insured Organization Name And ID"
  ], 
  "IN2-40": [
    "IN2.40", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Mother's Maiden Name"
  ], 
  "IN2-41": [
    "IN2.41", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0212", 
    "Nationality"
  ], 
  "IN2-42": [
    "IN2.42", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0189", 
    "Ethnic Group"
  ], 
  "IN2-43": [
    "IN2.43", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0002", 
    "Marital Status"
  ], 
  "IN2-44": [
    "IN2.44", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Insured's Employment Start Date"
  ], 
  "IN2-45": [
    "IN2.45", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Employment Stop Date"
  ], 
  "IN2-46": [
    "IN2.46", 
    "20", 
    "ST", 
    "O", 
    "1", 
    "Job Title"
  ], 
  "IN2-47": [
    "IN2.47", 
    "20", 
    "JCC", 
    "O", 
    "1", 
    "Job Code/Class"
  ], 
  "IN2-53": [
    "IN2.53", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Insured's Contact Person Phone Number"
  ], 
  "IN2-57": [
    "IN2.57", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0232", 
    "Insurance Co. Contact Reason"
  ], 
  "IN2-68": [
    "IN2.68", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Stoploss Limit Flag"
  ], 
  "IN2-56": [
    "IN2.56", 
    "8", 
    "DT", 
    "O", 
    "*", 
    "Relationship To The Patient Stop Date"
  ], 
  "IN2-32": [
    "IN2.32", 
    "2", 
    "IS", 
    "O", 
    "*", 
    "0009", 
    "Ambulatory Status"
  ], 
  "IN2-33": [
    "IN2.33", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0171", 
    "Citizenship"
  ], 
  "IN2-72": [
    "IN2.72", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0344", 
    "HCFA Patient's Relationship to Insured"
  ], 
  "IN2-31": [
    "IN2.31", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0223", 
    "Living Dependency"
  ], 
  "IN2-30": [
    "IN2.30", 
    "250", 
    "DDI", 
    "O", 
    "1", 
    "Daily Deductible"
  ], 
  "IN2-19": [
    "IN2.19", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Baby Coverage"
  ], 
  "IN2-18": [
    "IN2.18", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Military Non-Avail Cert On File"
  ], 
  "IN2-35": [
    "IN2.35", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0220", 
    "Living Arrangement"
  ], 
  "IN2-34": [
    "IN2.34", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0296", 
    "Primary Language"
  ], 
  "IN2-37": [
    "IN2.37", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Protection Indicator"
  ], 
  "IN2-36": [
    "IN2.36", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0215", 
    "Publicity Code"
  ], 
  "IN2-13": [
    "IN2.13", 
    "25", 
    "ST", 
    "O", 
    "1", 
    "Military Station"
  ], 
  "IN2-12": [
    "IN2.12", 
    "25", 
    "ST", 
    "O", 
    "1", 
    "Military Organization"
  ], 
  "IN2-11": [
    "IN2.11", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0342", 
    "Dependent Of Military Recipient"
  ], 
  "IN2-10": [
    "IN2.10", 
    "20", 
    "ST", 
    "O", 
    "1", 
    "Military ID Number"
  ], 
  "IN2-17": [
    "IN2.17", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Military Retire Date"
  ], 
  "IN2-16": [
    "IN2.16", 
    "3", 
    "IS", 
    "O", 
    "1", 
    "0142", 
    "Military Status"
  ], 
  "IN2-15": [
    "IN2.15", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0141", 
    "Military Rank/Grade"
  ], 
  "IN2-14": [
    "IN2.14", 
    "14", 
    "IS", 
    "O", 
    "1", 
    "0140", 
    "Military Service"
  ], 
  "IN2-55": [
    "IN2.55", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Relationship To The Patient Start Date"
  ], 
  "IN2-62": [
    "IN2.62", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0063", 
    "Guarantor's Relationship To Insured"
  ], 
  "IN2-65": [
    "IN2.65", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0343", 
    "Military Handicapped Program"
  ], 
  "IN2-51": [
    "IN2.51", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0222", 
    "Employer Contact Reason"
  ], 
  "IN2-59": [
    "IN2.59", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0312", 
    "Policy Scope"
  ], 
  "IN2-52": [
    "IN2.52", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Insured's Contact Person's Name"
  ], 
  "IN2-66": [
    "IN2.66", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Suspend Flag"
  ], 
  "IN2-50": [
    "IN2.50", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Employer Contact Person Phone Number"
  ], 
  "IN2-71": [
    "IN2.71", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0005", 
    "Race"
  ], 
  "IN2-70": [
    "IN2.70", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Insured Employer Organization Name And ID"
  ], 
  "IN2-63": [
    "IN2.63", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Insured's Phone Number - Home"
  ], 
  "IN2-39": [
    "IN2.39", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0006", 
    "Religion"
  ], 
  "IN2-60": [
    "IN2.60", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0313", 
    "Policy Source"
  ], 
  "IN2-54": [
    "IN2.54", 
    "2", 
    "IS", 
    "O", 
    "*", 
    "0222", 
    "Insured's Contact Person Reason"
  ], 
  "IN2-38": [
    "IN2.38", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0231", 
    "Student Indicator"
  ], 
  "IN2-61": [
    "IN2.61", 
    "250", 
    "CX", 
    "O", 
    "1", 
    "Patient Member Number"
  ], 
  "IN2-58": [
    "IN2.58", 
    "250", 
    "XTN", 
    "O", 
    "1", 
    "Insurance Co Contact Phone Number"
  ], 
  "IN2-9": [
    "IN2.9", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Military Sponsor Name"
  ], 
  "IN2-8": [
    "IN2.8", 
    "15", 
    "ST", 
    "O", 
    "1", 
    "Medicaid Case Number"
  ], 
  "IN2-3": [
    "IN2.3", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Insured's Employer's Name and ID"
  ], 
  "IN2-2": [
    "IN2.2", 
    "11", 
    "ST", 
    "O", 
    "1", 
    "Insured's Social Security Number"
  ], 
  "IN2-1": [
    "IN2.1", 
    "250", 
    "CX", 
    "O", 
    "*", 
    "Insured's Employee ID"
  ], 
  "IN2-67": [
    "IN2.67", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Copay Limit Flag"
  ], 
  "IN2-7": [
    "IN2.7", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Medicaid Case Name"
  ], 
  "IN2-6": [
    "IN2.6", 
    "15", 
    "ST", 
    "O", 
    "1", 
    "Medicare Health Ins Card Number"
  ], 
  "IN2-5": [
    "IN2.5", 
    "1", 
    "IS", 
    "O", 
    "*", 
    "0137", 
    "Mail Claim Party"
  ], 
  "IN2-4": [
    "IN2.4", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0139", 
    "Employer Information Data"
  ], 
  "IN2-22": [
    "IN2.22", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Special Coverage Approval Name"
  ], 
  "IN2-23": [
    "IN2.23", 
    "30", 
    "ST", 
    "O", 
    "1", 
    "Special Coverage Approval Title"
  ], 
  "IN2-20": [
    "IN2.20", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Combine Baby Bill"
  ], 
  "IN2-21": [
    "IN2.21", 
    "1", 
    "ST", 
    "O", 
    "1", 
    "Blood Deductible"
  ], 
  "IN2-26": [
    "IN2.26", 
    "250", 
    "CX", 
    "O", 
    "*", 
    "Payor Subscriber ID"
  ], 
  "IN2-27": [
    "IN2.27", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0144", 
    "Eligibility Source"
  ], 
  "IN2-24": [
    "IN2.24", 
    "8", 
    "IS", 
    "O", 
    "*", 
    "0143", 
    "Non-Covered Insurance Code"
  ], 
  "IN2-25": [
    "IN2.25", 
    "250", 
    "CX", 
    "O", 
    "*", 
    "Payor ID"
  ], 
  "IN2-28": [
    "IN2.28", 
    "250", 
    "RMC", 
    "O", 
    "*", 
    "Room Coverage Type/Amount"
  ], 
  "IN2-29": [
    "IN2.29", 
    "250", 
    "PTA", 
    "O", 
    "*", 
    "Policy Type/Amount"
  ]
};
DB['IN2'] = IN2;

var IN3 = {
  "IN3-18": [
    "IN3.18", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0346", 
    "Certification Agency"
  ], 
  "IN3-19": [
    "IN3.19", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Certification Agency Phone Number"
  ], 
  "IN3-10": [
    "IN3.10", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Certification End Date"
  ], 
  "IN3-11": [
    "IN3.11", 
    "3", 
    "DTN", 
    "O", 
    "1", 
    "0149", 
    "Days"
  ], 
  "IN3-12": [
    "IN3.12", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0233", 
    "Non-Concur Code/Description"
  ], 
  "IN3-13": [
    "IN3.13", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Non-Concur Effective Date/Time"
  ], 
  "IN3-14": [
    "IN3.14", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "0010", 
    "Physician Reviewer"
  ], 
  "IN3-15": [
    "IN3.15", 
    "48", 
    "ST", 
    "O", 
    "1", 
    "Certification Contact"
  ], 
  "IN3-16": [
    "IN3.16", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Certification Contact Phone Number"
  ], 
  "IN3-17": [
    "IN3.17", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0345", 
    "Appeal Reason"
  ], 
  "IN3-25": [
    "IN3.25", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "0010", 
    "Second Opinion Physician"
  ], 
  "IN3-24": [
    "IN3.24", 
    "1", 
    "IS", 
    "O", 
    "*", 
    "0152", 
    "Second Opinion Documentation Received"
  ], 
  "IN3-21": [
    "IN3.21", 
    "48", 
    "ST", 
    "O", 
    "1", 
    "Case Manager"
  ], 
  "IN3-20": [
    "IN3.20", 
    "40", 
    "PCF", 
    "O", 
    "*", 
    "Pre-Certification Req/Window"
  ], 
  "IN3-23": [
    "IN3.23", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0151", 
    "Second Opinion Status"
  ], 
  "IN3-22": [
    "IN3.22", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Second Opinion Date"
  ], 
  "IN3-8": [
    "IN3.8", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Operator"
  ], 
  "IN3-9": [
    "IN3.9", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Certification Begin Date"
  ], 
  "IN3-6": [
    "IN3.6", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Certification Date/Time"
  ], 
  "IN3-7": [
    "IN3.7", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Certification Modify Date/Time"
  ], 
  "IN3-4": [
    "IN3.4", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Certification Required"
  ], 
  "IN3-5": [
    "IN3.5", 
    "10", 
    "MOP", 
    "O", 
    "1", 
    "0148", 
    "Penalty"
  ], 
  "IN3-2": [
    "IN3.2", 
    "250", 
    "CX", 
    "O", 
    "1", 
    "Certification Number"
  ], 
  "IN3-3": [
    "IN3.3", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Certified By"
  ], 
  "IN3-1": [
    "IN3.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID - IN3"
  ]
};
DB['IN3'] = IN3;

var INV = {
  "INV-18": [
    "INV.18", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0386", 
    "Supplier Identifier"
  ], 
  "INV-17": [
    "INV.17", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0385", 
    "Manufacturer Identifier"
  ], 
  "INV-16": [
    "INV.16", 
    "200", 
    "ST", 
    "O", 
    "1", 
    "Manufacturer Lot Number"
  ], 
  "INV-15": [
    "INV.15", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Test/Fluid Identifier"
  ], 
  "INV-14": [
    "INV.14", 
    "200", 
    "TQ", 
    "O", 
    "1", 
    "On Board Stability Duration"
  ], 
  "INV-13": [
    "INV.13", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "First Used Date/Time"
  ], 
  "INV-12": [
    "INV.12", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Expiration Date/Time"
  ], 
  "INV-11": [
    "INV.11", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Quantity Units"
  ], 
  "INV-10": [
    "INV.10", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Consumption Quantity"
  ], 
  "INV-7": [
    "INV.7", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Initial Quantity"
  ], 
  "INV-6": [
    "INV.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Position on Carrier"
  ], 
  "INV-5": [
    "INV.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Container Carrier Identifier"
  ], 
  "INV-4": [
    "INV.4", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Inventory Container Identifier"
  ], 
  "INV-3": [
    "INV.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0384", 
    "Substance Type"
  ], 
  "INV-2": [
    "INV.2", 
    "250", 
    "CE", 
    "R", 
    "*", 
    "0383", 
    "Substance Status"
  ], 
  "INV-1": [
    "INV.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0451", 
    "Substance Identifier"
  ], 
  "INV-9": [
    "INV.9", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Available Quantity"
  ], 
  "INV-8": [
    "INV.8", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Current Quantity"
  ]
};
DB['INV'] = INV;

var ISD = {
  "ISD-2": [
    "ISD.2", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0368", 
    "Interaction Type Identifier"
  ], 
  "ISD-3": [
    "ISD.3", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0387", 
    "Interaction Active State"
  ], 
  "ISD-1": [
    "ISD.1", 
    "20", 
    "NM", 
    "R", 
    "1", 
    "Reference Interaction Number"
  ]
};
DB['ISD'] = ISD;

var LAN = {
  "LAN-4": [
    "LAN.4", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0404", 
    "Language Proficiency Code"
  ], 
  "LAN-3": [
    "LAN.3", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0403", 
    "Language Ability Code"
  ], 
  "LAN-2": [
    "LAN.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0296", 
    "Language Code"
  ], 
  "LAN-1": [
    "LAN.1", 
    "60", 
    "SI", 
    "R", 
    "1", 
    "Set ID - LAN"
  ]
};
DB['LAN'] = LAN;

var LCC = {
  "LCC-1": [
    "LCC.1", 
    "200", 
    "PL", 
    "R", 
    "1", 
    "Primary Key Value - LCC"
  ], 
  "LCC-2": [
    "LCC.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0264", 
    "Location Department"
  ], 
  "LCC-3": [
    "LCC.3", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0129", 
    "Accommodation Type"
  ], 
  "LCC-4": [
    "LCC.4", 
    "250", 
    "CE", 
    "R", 
    "*", 
    "0132", 
    "Charge Code"
  ]
};
DB['LCC'] = LCC;

var LCH = {
  "LCH-3": [
    "LCH.3", 
    "80", 
    "EI", 
    "O", 
    "1", 
    "Segment Unique Key"
  ], 
  "LCH-2": [
    "LCH.2", 
    "3", 
    "ID", 
    "O", 
    "1", 
    "0206", 
    "Segment Action Code"
  ], 
  "LCH-1": [
    "LCH.1", 
    "200", 
    "PL", 
    "R", 
    "1", 
    "Primary Key Value - LCH"
  ], 
  "LCH-5": [
    "LCH.5", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Location Characteristic Value-LCH"
  ], 
  "LCH-4": [
    "LCH.4", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0324", 
    "Location Characteristic ID"
  ]
};
DB['LCH'] = LCH;

var LDP = {
  "LDP-2": [
    "LDP.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0264", 
    "Location Department"
  ], 
  "LDP-3": [
    "LDP.3", 
    "3", 
    "IS", 
    "O", 
    "*", 
    "0069", 
    "Location Service"
  ], 
  "LDP-1": [
    "LDP.1", 
    "200", 
    "PL", 
    "R", 
    "1", 
    "Primary Key Value - LDP"
  ], 
  "LDP-6": [
    "LDP.6", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0183", 
    "Active/Inactive Flag"
  ], 
  "LDP-7": [
    "LDP.7", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Activation Date  LDP"
  ], 
  "LDP-4": [
    "LDP.4", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0265", 
    "Specialty Type"
  ], 
  "LDP-5": [
    "LDP.5", 
    "1", 
    "IS", 
    "O", 
    "*", 
    "0004", 
    "Valid Patient Classes"
  ], 
  "LDP-8": [
    "LDP.8", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Inactivation Date - LDP"
  ], 
  "LDP-9": [
    "LDP.9", 
    "80", 
    "ST", 
    "O", 
    "1", 
    "Inactivated Reason"
  ], 
  "LDP-12": [
    "LDP.12", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0462", 
    "Location Cost Center"
  ], 
  "LDP-10": [
    "LDP.10", 
    "80", 
    "VH", 
    "O", 
    "*", 
    "0267", 
    "Visiting Hours"
  ], 
  "LDP-11": [
    "LDP.11", 
    "250", 
    "XTN", 
    "O", 
    "1", 
    "Contact Phone"
  ]
};
DB['LDP'] = LDP;

var LOC = {
  "LOC-4": [
    "LOC.4", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Organization Name - LOC"
  ], 
  "LOC-5": [
    "LOC.5", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Location Address"
  ], 
  "LOC-6": [
    "LOC.6", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Location Phone"
  ], 
  "LOC-7": [
    "LOC.7", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0461", 
    "License Number"
  ], 
  "LOC-1": [
    "LOC.1", 
    "200", 
    "PL", 
    "R", 
    "1", 
    "Primary Key Value - LOC"
  ], 
  "LOC-2": [
    "LOC.2", 
    "48", 
    "ST", 
    "O", 
    "1", 
    "Location Description"
  ], 
  "LOC-3": [
    "LOC.3", 
    "2", 
    "IS", 
    "R", 
    "*", 
    "0260", 
    "Location Type - LOC"
  ], 
  "LOC-8": [
    "LOC.8", 
    "3", 
    "IS", 
    "O", 
    "*", 
    "0261", 
    "Location Equipment"
  ], 
  "LOC-9": [
    "LOC.9", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0442", 
    "Location Service Code"
  ]
};
DB['LOC'] = LOC;

var LRL = {
  "LRL-1": [
    "LRL.1", 
    "200", 
    "PL", 
    "R", 
    "1", 
    "Primary Key Value - LRL"
  ], 
  "LRL-2": [
    "LRL.2", 
    "3", 
    "ID", 
    "O", 
    "1", 
    "0206", 
    "Segment Action Code"
  ], 
  "LRL-3": [
    "LRL.3", 
    "80", 
    "EI", 
    "O", 
    "1", 
    "Segment Unique Key"
  ], 
  "LRL-4": [
    "LRL.4", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0325", 
    "Location Relationship ID"
  ], 
  "LRL-5": [
    "LRL.5", 
    "250", 
    "XON", 
    "C", 
    "*", 
    "Organizational Location Relationship Value"
  ], 
  "LRL-6": [
    "LRL.6", 
    "80", 
    "PL", 
    "C", 
    "1", 
    "Patient Location Relationship Value"
  ]
};
DB['LRL'] = LRL;

var MFA = {
  "MFA-4": [
    "MFA.4", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0181", 
    "MFN Record Level Error Return"
  ], 
  "MFA-5": [
    "MFA.5", 
    "250", 
    "CE", 
    "R", 
    "*", 
    "Primary Key Value - MFA"
  ], 
  "MFA-6": [
    "MFA.6", 
    "3", 
    "ID", 
    "R", 
    "*", 
    "0355", 
    "Primary Key Value Type - MFA"
  ], 
  "MFA-1": [
    "MFA.1", 
    "3", 
    "ID", 
    "R", 
    "1", 
    "0180", 
    "Record-Level Event Code"
  ], 
  "MFA-2": [
    "MFA.2", 
    "20", 
    "ST", 
    "C", 
    "1", 
    "MFN Control ID"
  ], 
  "MFA-3": [
    "MFA.3", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Event Completion Date/Time"
  ]
};
DB['MFA'] = MFA;

var MFE = {
  "MFE-1": [
    "MFE.1", 
    "3", 
    "ID", 
    "R", 
    "1", 
    "0180", 
    "Record-Level Event Code"
  ], 
  "MFE-2": [
    "MFE.2", 
    "20", 
    "ST", 
    "C", 
    "1", 
    "MFN Control ID"
  ], 
  "MFE-3": [
    "MFE.3", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Effective Date/Time"
  ], 
  "MFE-4": [
    "MFE.4", 
    "200", 
    "VARIES", 
    "R", 
    "*", 
    "Primary Key Value - MFE"
  ], 
  "MFE-5": [
    "MFE.5", 
    "3", 
    "ID", 
    "R", 
    "*", 
    "0355", 
    "Primary Key Value Type"
  ]
};
DB['MFE'] = MFE;

var MFI = {
  "MFI-4": [
    "MFI.4", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Entered Date/Time"
  ], 
  "MFI-5": [
    "MFI.5", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Effective Date/Time"
  ], 
  "MFI-6": [
    "MFI.6", 
    "2", 
    "ID", 
    "R", 
    "1", 
    "0179", 
    "Response Level Code"
  ], 
  "MFI-1": [
    "MFI.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0175", 
    "Master File Identifier"
  ], 
  "MFI-2": [
    "MFI.2", 
    "180", 
    "HD", 
    "O", 
    "1", 
    "Master File Application Identifier"
  ], 
  "MFI-3": [
    "MFI.3", 
    "3", 
    "ID", 
    "R", 
    "1", 
    "0178", 
    "File-Level Event Code"
  ]
};
DB['MFI'] = MFI;

var MRG = {
  "MRG-2": [
    "MRG.2", 
    "250", 
    "CX", 
    "B", 
    "*", 
    "Prior Alternate Patient ID"
  ], 
  "MRG-3": [
    "MRG.3", 
    "250", 
    "CX", 
    "O", 
    "1", 
    "Prior Patient Account Number"
  ], 
  "MRG-1": [
    "MRG.1", 
    "250", 
    "CX", 
    "R", 
    "*", 
    "Prior Patient Identifier List"
  ], 
  "MRG-6": [
    "MRG.6", 
    "250", 
    "CX", 
    "O", 
    "1", 
    "Prior Alternate Visit ID"
  ], 
  "MRG-7": [
    "MRG.7", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Prior Patient Name"
  ], 
  "MRG-4": [
    "MRG.4", 
    "250", 
    "CX", 
    "B", 
    "1", 
    "Prior Patient ID"
  ], 
  "MRG-5": [
    "MRG.5", 
    "250", 
    "CX", 
    "O", 
    "1", 
    "Prior Visit Number"
  ]
};
DB['MRG'] = MRG;

var MSA = {
  "MSA-3": [
    "MSA.3", 
    "80", 
    "ST", 
    "O", 
    "1", 
    "Text Message"
  ], 
  "MSA-2": [
    "MSA.2", 
    "20", 
    "ST", 
    "R", 
    "1", 
    "Message Control ID"
  ], 
  "MSA-1": [
    "MSA.1", 
    "2", 
    "ID", 
    "R", 
    "1", 
    "0008", 
    "Acknowledgement Code"
  ], 
  "MSA-6": [
    "MSA.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0357", 
    "Error Condition"
  ], 
  "MSA-5": [
    "MSA.5", 
    "1", 
    "ID", 
    "B", 
    "1", 
    "0102", 
    "Delayed Acknowledgment Type"
  ], 
  "MSA-4": [
    "MSA.4", 
    "15", 
    "NM", 
    "O", 
    "1", 
    "Expected Sequence Number"
  ]
};
DB['MSA'] = MSA;

var MSH = {
  "MSH-6": [
    "MSH.6", 
    "180", 
    "HD", 
    "O", 
    "1", 
    "0362", 
    "Receiving Facility"
  ], 
  "MSH-7": [
    "MSH.7", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Date/Time Of Message"
  ], 
  "MSH-4": [
    "MSH.4", 
    "180", 
    "HD", 
    "O", 
    "1", 
    "0362", 
    "Sending Facility"
  ], 
  "MSH-5": [
    "MSH.5", 
    "180", 
    "HD", 
    "O", 
    "1", 
    "0361", 
    "Receiving Application"
  ], 
  "MSH-2": [
    "MSH.2", 
    "4", 
    "ST", 
    "R", 
    "1", 
    "Encoding Characters"
  ], 
  "MSH-3": [
    "MSH.3", 
    "180", 
    "HD", 
    "O", 
    "1", 
    "0361", 
    "Sending Application"
  ], 
  "MSH-1": [
    "MSH.1", 
    "1", 
    "ST", 
    "R", 
    "1", 
    "Field Separator"
  ], 
  "MSH-21": [
    "MSH.21", 
    "10", 
    "ID", 
    "O", 
    "*", 
    "0449", 
    "Conformance Statement ID"
  ], 
  "MSH-8": [
    "MSH.8", 
    "40", 
    "ST", 
    "O", 
    "1", 
    "Security"
  ], 
  "MSH-9": [
    "MSH.9", 
    "15", 
    "MSG", 
    "R", 
    "1", 
    "Message Type"
  ], 
  "MSH-10": [
    "MSH.10", 
    "20", 
    "ST", 
    "R", 
    "1", 
    "Message Control ID"
  ], 
  "MSH-11": [
    "MSH.11", 
    "3", 
    "PT", 
    "R", 
    "1", 
    "Processing ID"
  ], 
  "MSH-12": [
    "MSH.12", 
    "60", 
    "VID", 
    "R", 
    "1", 
    "Version ID"
  ], 
  "MSH-13": [
    "MSH.13", 
    "15", 
    "NM", 
    "O", 
    "1", 
    "Sequence Number"
  ], 
  "MSH-14": [
    "MSH.14", 
    "180", 
    "ST", 
    "O", 
    "1", 
    "Continuation Pointer"
  ], 
  "MSH-15": [
    "MSH.15", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0155", 
    "Accept Acknowledgment Type"
  ], 
  "MSH-16": [
    "MSH.16", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0155", 
    "Application Acknowledgment Type"
  ], 
  "MSH-17": [
    "MSH.17", 
    "3", 
    "ID", 
    "O", 
    "1", 
    "0399", 
    "Country Code"
  ], 
  "MSH-18": [
    "MSH.18", 
    "16", 
    "ID", 
    "O", 
    "*", 
    "0211", 
    "Character Set"
  ], 
  "MSH-19": [
    "MSH.19", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Principal Language Of Message"
  ], 
  "MSH-20": [
    "MSH.20", 
    "20", 
    "ID", 
    "O", 
    "1", 
    "0356", 
    "Alternate Character Set Handling Scheme"
  ]
};
DB['MSH'] = MSH;

var NCK = {
  "NCK-1": [
    "NCK.1", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "System Date/Time"
  ]
};
DB['NCK'] = NCK;

var NDS = {
  "NDS-4": [
    "NDS.4", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Notification Code"
  ], 
  "NDS-3": [
    "NDS.3", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0367", 
    "Notification Alert Severity"
  ], 
  "NDS-2": [
    "NDS.2", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Notification Date/Time"
  ], 
  "NDS-1": [
    "NDS.1", 
    "20", 
    "NM", 
    "R", 
    "1", 
    "Notification Reference Number"
  ]
};
DB['NDS'] = NDS;

var NK1 = {
  "NK1-36": [
    "NK1.36", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0295", 
    "Handicap"
  ], 
  "NK1-37": [
    "NK1.37", 
    "16", 
    "ST", 
    "O", 
    "1", 
    "Contact Person Social Security Number"
  ], 
  "NK1-29": [
    "NK1.29", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0222", 
    "Contact Reason"
  ], 
  "NK1-28": [
    "NK1.28", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0189", 
    "Ethnic Group"
  ], 
  "NK1-27": [
    "NK1.27", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0212", 
    "Nationality"
  ], 
  "NK1-26": [
    "NK1.26", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Mother's Maiden Name"
  ], 
  "NK1-25": [
    "NK1.25", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0006", 
    "Religion"
  ], 
  "NK1-24": [
    "NK1.24", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0231", 
    "Student Indicator"
  ], 
  "NK1-23": [
    "NK1.23", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Protection Indicator"
  ], 
  "NK1-22": [
    "NK1.22", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0215", 
    "Publicity Code"
  ], 
  "NK1-21": [
    "NK1.21", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0220", 
    "Living Arrangement"
  ], 
  "NK1-20": [
    "NK1.20", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0296", 
    "Primary Language"
  ], 
  "NK1-4": [
    "NK1.4", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Address"
  ], 
  "NK1-5": [
    "NK1.5", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Phone Number"
  ], 
  "NK1-6": [
    "NK1.6", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Business Phone Number"
  ], 
  "NK1-7": [
    "NK1.7", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0131", 
    "Contact Role"
  ], 
  "NK1-1": [
    "NK1.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID - NK1"
  ], 
  "NK1-2": [
    "NK1.2", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "NK Name"
  ], 
  "NK1-3": [
    "NK1.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0063", 
    "Relationship"
  ], 
  "NK1-8": [
    "NK1.8", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Start Date"
  ], 
  "NK1-9": [
    "NK1.9", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "End Date"
  ], 
  "NK1-16": [
    "NK1.16", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date/Time Of Birth"
  ], 
  "NK1-17": [
    "NK1.17", 
    "2", 
    "IS", 
    "O", 
    "*", 
    "0223", 
    "Living Dependency"
  ], 
  "NK1-14": [
    "NK1.14", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0002", 
    "Marital Status"
  ], 
  "NK1-15": [
    "NK1.15", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0001", 
    "Administrative Sex"
  ], 
  "NK1-12": [
    "NK1.12", 
    "250", 
    "CX", 
    "O", 
    "1", 
    "Next of Kin / Associated Parties Employee Number"
  ], 
  "NK1-13": [
    "NK1.13", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Organization Name - NK1"
  ], 
  "NK1-10": [
    "NK1.10", 
    "60", 
    "ST", 
    "O", 
    "1", 
    "Next of Kin / Associated Parties Job Title"
  ], 
  "NK1-11": [
    "NK1.11", 
    "20", 
    "JCC", 
    "O", 
    "1", 
    "Next of Kin / Associated Parties Job Code/Class"
  ], 
  "NK1-18": [
    "NK1.18", 
    "2", 
    "IS", 
    "O", 
    "*", 
    "0009", 
    "Ambulatory Status"
  ], 
  "NK1-19": [
    "NK1.19", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0171", 
    "Citizenship"
  ], 
  "NK1-30": [
    "NK1.30", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Contact Person's Name"
  ], 
  "NK1-31": [
    "NK1.31", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Contact Person's Telephone Number"
  ], 
  "NK1-32": [
    "NK1.32", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Contact Person's Address"
  ], 
  "NK1-33": [
    "NK1.33", 
    "250", 
    "CX", 
    "O", 
    "*", 
    "Next of Kin/Associated Party's Identifiers"
  ], 
  "NK1-34": [
    "NK1.34", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0311", 
    "Job Status"
  ], 
  "NK1-35": [
    "NK1.35", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0005", 
    "Race"
  ]
};
DB['NK1'] = NK1;

var NPU = {
  "NPU-1": [
    "NPU.1", 
    "80", 
    "PL", 
    "R", 
    "1", 
    "Bed Location"
  ], 
  "NPU-2": [
    "NPU.2", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0116", 
    "Bed Status"
  ]
};
DB['NPU'] = NPU;

var NSC = {
  "NSC-8": [
    "NSC.8", 
    "30", 
    "HD", 
    "O", 
    "1", 
    "New Application"
  ], 
  "NSC-9": [
    "NSC.9", 
    "30", 
    "HD", 
    "O", 
    "1", 
    "New Facility"
  ], 
  "NSC-2": [
    "NSC.2", 
    "30", 
    "ST", 
    "O", 
    "1", 
    "Current CPU"
  ], 
  "NSC-3": [
    "NSC.3", 
    "30", 
    "ST", 
    "O", 
    "1", 
    "Current Fileserver"
  ], 
  "NSC-1": [
    "NSC.1", 
    "4", 
    "IS", 
    "R", 
    "1", 
    "0409", 
    "Application Change Type"
  ], 
  "NSC-6": [
    "NSC.6", 
    "30", 
    "ST", 
    "O", 
    "1", 
    "New CPU"
  ], 
  "NSC-7": [
    "NSC.7", 
    "30", 
    "ST", 
    "O", 
    "1", 
    "New Fileserver"
  ], 
  "NSC-4": [
    "NSC.4", 
    "30", 
    "HD", 
    "O", 
    "1", 
    "Current Application"
  ], 
  "NSC-5": [
    "NSC.5", 
    "30", 
    "HD", 
    "O", 
    "1", 
    "Current Facility"
  ]
};
DB['NSC'] = NSC;

var NST = {
  "NST-5": [
    "NST.5", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Statistics End"
  ], 
  "NST-4": [
    "NST.4", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Statistics Start"
  ], 
  "NST-7": [
    "NST.7", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Send Character Count"
  ], 
  "NST-6": [
    "NST.6", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Receive Character Count"
  ], 
  "NST-1": [
    "NST.1", 
    "1", 
    "ID", 
    "R", 
    "1", 
    "0136", 
    "Statistics Available"
  ], 
  "NST-3": [
    "NST.3", 
    "3", 
    "ID", 
    "O", 
    "1", 
    "0332", 
    "Source Type"
  ], 
  "NST-2": [
    "NST.2", 
    "30", 
    "ST", 
    "O", 
    "1", 
    "Source Identifier"
  ], 
  "NST-9": [
    "NST.9", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Messages Sent"
  ], 
  "NST-8": [
    "NST.8", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Messages Received"
  ], 
  "NST-15": [
    "NST.15", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Application control-level Errors"
  ], 
  "NST-14": [
    "NST.14", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Receive Timeouts"
  ], 
  "NST-11": [
    "NST.11", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Length Errors Received"
  ], 
  "NST-10": [
    "NST.10", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Checksum Errors Received"
  ], 
  "NST-13": [
    "NST.13", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Connect Timeouts"
  ], 
  "NST-12": [
    "NST.12", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Other Errors Received"
  ]
};
DB['NST'] = NST;

var NTE = {
  "NTE-4": [
    "NTE.4", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0364", 
    "Comment Type"
  ], 
  "NTE-1": [
    "NTE.1", 
    "4", 
    "SI", 
    "O", 
    "1", 
    "Set ID - NTE"
  ], 
  "NTE-3": [
    "NTE.3", 
    "65536", 
    "FT", 
    "O", 
    "*", 
    "Comment"
  ], 
  "NTE-2": [
    "NTE.2", 
    "8", 
    "ID", 
    "O", 
    "1", 
    "0105", 
    "Source of Comment"
  ]
};
DB['NTE'] = NTE;

var OBR = {
  "OBR-39": [
    "OBR.39", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Collector's Comment *"
  ], 
  "OBR-43": [
    "OBR.43", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Planned Patient Transport Comment"
  ], 
  "OBR-38": [
    "OBR.38", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Transport Logistics of Collected Sample *"
  ], 
  "OBR-20": [
    "OBR.20", 
    "60", 
    "ST", 
    "O", 
    "1", 
    "Filler Field 1 +"
  ], 
  "OBR-21": [
    "OBR.21", 
    "60", 
    "ST", 
    "O", 
    "1", 
    "Filler Field 2 +"
  ], 
  "OBR-22": [
    "OBR.22", 
    "26", 
    "TS", 
    "C", 
    "1", 
    "Results Rpt/Status Chng - Date/Time +"
  ], 
  "OBR-23": [
    "OBR.23", 
    "40", 
    "MOC", 
    "O", 
    "1", 
    "Charge to Practice +"
  ], 
  "OBR-24": [
    "OBR.24", 
    "10", 
    "ID", 
    "O", 
    "1", 
    "0074", 
    "Diagnostic Serv Sect ID"
  ], 
  "OBR-25": [
    "OBR.25", 
    "1", 
    "ID", 
    "C", 
    "1", 
    "0123", 
    "Result Status +"
  ], 
  "OBR-26": [
    "OBR.26", 
    "400", 
    "PRL", 
    "O", 
    "1", 
    "Parent Result +"
  ], 
  "OBR-27": [
    "OBR.27", 
    "200", 
    "TQ", 
    "O", 
    "*", 
    "Quantity/Timing"
  ], 
  "OBR-28": [
    "OBR.28", 
    "250", 
    "XCN", 
    "O", 
    "5", 
    "Result Copies To"
  ], 
  "OBR-29": [
    "OBR.29", 
    "200", 
    "EIP", 
    "O", 
    "1", 
    "Parent Number"
  ], 
  "OBR-40": [
    "OBR.40", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Transport Arrangement Responsibility"
  ], 
  "OBR-41": [
    "OBR.41", 
    "30", 
    "ID", 
    "O", 
    "1", 
    "0224", 
    "Transport Arranged"
  ], 
  "OBR-46": [
    "OBR.46", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0411", 
    "Placer Supplemental Service Information"
  ], 
  "OBR-47": [
    "OBR.47", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0411", 
    "Filler Supplemental Service Information"
  ], 
  "OBR-44": [
    "OBR.44", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0088", 
    "Procedure Code"
  ], 
  "OBR-45": [
    "OBR.45", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0340", 
    "Procedure Code Modifier"
  ], 
  "OBR-33": [
    "OBR.33", 
    "200", 
    "NDL", 
    "O", 
    "*", 
    "Assistant Result Interpreter +"
  ], 
  "OBR-32": [
    "OBR.32", 
    "200", 
    "NDL", 
    "O", 
    "1", 
    "Principal Result Interpreter +"
  ], 
  "OBR-15": [
    "OBR.15", 
    "300", 
    "SPS", 
    "O", 
    "1", 
    "Specimen Source"
  ], 
  "OBR-14": [
    "OBR.14", 
    "26", 
    "TS", 
    "C", 
    "1", 
    "Specimen Received Date/Time *"
  ], 
  "OBR-17": [
    "OBR.17", 
    "250", 
    "XTN", 
    "O", 
    "2", 
    "Order Callback Phone Number"
  ], 
  "OBR-16": [
    "OBR.16", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Ordering Provider"
  ], 
  "OBR-11": [
    "OBR.11", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0065", 
    "Specimen Action Code *"
  ], 
  "OBR-10": [
    "OBR.10", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Collector Identifier *"
  ], 
  "OBR-13": [
    "OBR.13", 
    "300", 
    "ST", 
    "O", 
    "1", 
    "Relevant Clinical Info."
  ], 
  "OBR-12": [
    "OBR.12", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Danger Code"
  ], 
  "OBR-37": [
    "OBR.37", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Number of Sample Containers *"
  ], 
  "OBR-36": [
    "OBR.36", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Scheduled Date/Time +"
  ], 
  "OBR-35": [
    "OBR.35", 
    "200", 
    "NDL", 
    "O", 
    "*", 
    "Transcriptionist +"
  ], 
  "OBR-34": [
    "OBR.34", 
    "200", 
    "NDL", 
    "O", 
    "*", 
    "Technician +"
  ], 
  "OBR-19": [
    "OBR.19", 
    "60", 
    "ST", 
    "O", 
    "1", 
    "Placer Field 2"
  ], 
  "OBR-18": [
    "OBR.18", 
    "60", 
    "ST", 
    "O", 
    "1", 
    "Placer Field 1"
  ], 
  "OBR-31": [
    "OBR.31", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Reason for Study"
  ], 
  "OBR-30": [
    "OBR.30", 
    "20", 
    "ID", 
    "O", 
    "1", 
    "0124", 
    "Transportation Mode"
  ], 
  "OBR-5": [
    "OBR.5", 
    "2", 
    "ID", 
    "B", 
    "1", 
    "Priority"
  ], 
  "OBR-4": [
    "OBR.4", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Universal Service Identifier"
  ], 
  "OBR-7": [
    "OBR.7", 
    "26", 
    "TS", 
    "C", 
    "1", 
    "Observation Date/Time  "
  ], 
  "OBR-6": [
    "OBR.6", 
    "26", 
    "TS", 
    "B", 
    "1", 
    "Requested Date/Time"
  ], 
  "OBR-1": [
    "OBR.1", 
    "4", 
    "SI", 
    "O", 
    "1", 
    "Set ID - OBR"
  ], 
  "OBR-3": [
    "OBR.3", 
    "22", 
    "EI", 
    "C", 
    "1", 
    "Filler Order Number"
  ], 
  "OBR-2": [
    "OBR.2", 
    "22", 
    "EI", 
    "C", 
    "1", 
    "Placer Order Number"
  ], 
  "OBR-42": [
    "OBR.42", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0225", 
    "Escort Required"
  ], 
  "OBR-9": [
    "OBR.9", 
    "20", 
    "CQ", 
    "O", 
    "1", 
    "Collection Volume *"
  ], 
  "OBR-8": [
    "OBR.8", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Observation End Date/Time  "
  ]
};
DB['OBR'] = OBR;

var OBX = {
  "OBX-3": [
    "OBX.3", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Observation Identifier"
  ], 
  "OBX-2": [
    "OBX.2", 
    "2", 
    "ID", 
    "C", 
    "1", 
    "0125", 
    "Value Type"
  ], 
  "OBX-1": [
    "OBX.1", 
    "4", 
    "SI", 
    "O", 
    "1", 
    "Set ID - OBX"
  ], 
  "OBX-10": [
    "OBX.10", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0080", 
    "Nature of Abnormal Test"
  ], 
  "OBX-7": [
    "OBX.7", 
    "60", 
    "ST", 
    "O", 
    "1", 
    "References Range"
  ], 
  "OBX-6": [
    "OBX.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Units"
  ], 
  "OBX-5": [
    "OBX.5", 
    "65536", 
    "VARIES", 
    "C", 
    "*", 
    "Observation Value"
  ], 
  "OBX-4": [
    "OBX.4", 
    "20", 
    "ST", 
    "C", 
    "1", 
    "Observation Sub-Id"
  ], 
  "OBX-13": [
    "OBX.13", 
    "20", 
    "ST", 
    "O", 
    "1", 
    "User Defined Access Checks"
  ], 
  "OBX-9": [
    "OBX.9", 
    "5", 
    "NM", 
    "O", 
    "5", 
    "Probability"
  ], 
  "OBX-8": [
    "OBX.8", 
    "5", 
    "IS", 
    "O", 
    "1", 
    "0078", 
    "Abnormal Flags"
  ], 
  "OBX-11": [
    "OBX.11", 
    "1", 
    "ID", 
    "R", 
    "1", 
    "0085", 
    "Observation Result Status"
  ], 
  "OBX-18": [
    "OBX.18", 
    "22", 
    "EI", 
    "O", 
    "*", 
    "Equipment Instance Identifier"
  ], 
  "OBX-19": [
    "OBX.19", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date/Time of the Analysis"
  ], 
  "OBX-17": [
    "OBX.17", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Observation Method"
  ], 
  "OBX-12": [
    "OBX.12", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date Last Observation Normal Value"
  ], 
  "OBX-14": [
    "OBX.14", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date/Time of the Observation"
  ], 
  "OBX-15": [
    "OBX.15", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Producer's ID"
  ], 
  "OBX-16": [
    "OBX.16", 
    "250", 
    "XCN", 
    "O", 
    "1", 
    "Responsible Observer"
  ]
};
DB['OBX'] = OBX;

var ODS = {
  "ODS-2": [
    "ODS.2", 
    "250", 
    "CE", 
    "O", 
    "10", 
    "Service Period"
  ], 
  "ODS-3": [
    "ODS.3", 
    "250", 
    "CE", 
    "R", 
    "20", 
    "Diet, Supplement, or Preference Code"
  ], 
  "ODS-1": [
    "ODS.1", 
    "1", 
    "ID", 
    "R", 
    "1", 
    "0159", 
    "Type"
  ], 
  "ODS-4": [
    "ODS.4", 
    "80", 
    "ST", 
    "O", 
    "2", 
    "Text Instruction"
  ]
};
DB['ODS'] = ODS;

var ODT = {
  "ODT-1": [
    "ODT.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0160", 
    "Tray Type"
  ], 
  "ODT-3": [
    "ODT.3", 
    "80", 
    "ST", 
    "O", 
    "1", 
    "Text Instruction"
  ], 
  "ODT-2": [
    "ODT.2", 
    "250", 
    "CE", 
    "O", 
    "10", 
    "Service Period"
  ]
};
DB['ODT'] = ODT;

var OM1 = {
  "OM1-39": [
    "OM1.39", 
    "200", 
    "TX", 
    "O", 
    "1", 
    "Factors that may Affect Affect the Observation"
  ], 
  "OM1-38": [
    "OM1.38", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Procedure Medication"
  ], 
  "OM1-35": [
    "OM1.35", 
    "80", 
    "TX", 
    "O", 
    "1", 
    "Rules that Trigger Reflex Testing"
  ], 
  "OM1-34": [
    "OM1.34", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Reflex Tests/Observations"
  ], 
  "OM1-37": [
    "OM1.37", 
    "200", 
    "TX", 
    "O", 
    "1", 
    "Patient Preparation"
  ], 
  "OM1-36": [
    "OM1.36", 
    "65536", 
    "CE", 
    "O", 
    "1", 
    "Fixed Canned Message"
  ], 
  "OM1-31": [
    "OM1.31", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Observations Required to Interpret the Observation"
  ], 
  "OM1-30": [
    "OM1.30", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0177", 
    "Confidentiality Code"
  ], 
  "OM1-33": [
    "OM1.33", 
    "65536", 
    "CE", 
    "O", 
    "1", 
    "Contraindications to Observations"
  ], 
  "OM1-32": [
    "OM1.32", 
    "65536", 
    "TX", 
    "O", 
    "1", 
    "Interpretation of Observations"
  ], 
  "OM1-9": [
    "OM1.9", 
    "30", 
    "ST", 
    "O", 
    "1", 
    "Preferred Report Name for the Observation"
  ], 
  "OM1-8": [
    "OM1.8", 
    "200", 
    "ST", 
    "R", 
    "*", 
    "Other Names"
  ], 
  "OM1-7": [
    "OM1.7", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Other Service/Test/Observation IDs for the Observation"
  ], 
  "OM1-6": [
    "OM1.6", 
    "200", 
    "TX", 
    "O", 
    "1", 
    "Observation Description"
  ], 
  "OM1-5": [
    "OM1.5", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Producer ID"
  ], 
  "OM1-4": [
    "OM1.4", 
    "1", 
    "ID", 
    "R", 
    "1", 
    "0136", 
    "Specimen Required"
  ], 
  "OM1-3": [
    "OM1.3", 
    "12", 
    "ID", 
    "O", 
    "*", 
    "0125", 
    "Permitted Data Types"
  ], 
  "OM1-2": [
    "OM1.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Producer's Service/Test/Observation ID"
  ], 
  "OM1-1": [
    "OM1.1", 
    "4", 
    "NM", 
    "R", 
    "1", 
    "Sequence Number - Test/ Observation Master File"
  ], 
  "OM1-44": [
    "OM1.44", 
    "200", 
    "TX", 
    "O", 
    "1", 
    "Challenge Information"
  ], 
  "OM1-45": [
    "OM1.45", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0258", 
    "Relationship Modifier"
  ], 
  "OM1-46": [
    "OM1.46", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Target Anatomic Site Of Test"
  ], 
  "OM1-47": [
    "OM1.47", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0259", 
    "Modality Of Imaging Measurement"
  ], 
  "OM1-40": [
    "OM1.40", 
    "60", 
    "ST", 
    "O", 
    "*", 
    "Service/Test/Observation Performance Schedule"
  ], 
  "OM1-41": [
    "OM1.41", 
    "65536", 
    "TX", 
    "O", 
    "1", 
    "Description of Test Methods"
  ], 
  "OM1-42": [
    "OM1.42", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0254", 
    "Kind of Quantity Observed"
  ], 
  "OM1-43": [
    "OM1.43", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0255", 
    "Point Versus Interval"
  ], 
  "OM1-28": [
    "OM1.28", 
    "1000", 
    "XAD", 
    "O", 
    "*", 
    "Address of Outside Site"
  ], 
  "OM1-29": [
    "OM1.29", 
    "400", 
    "XTN", 
    "O", 
    "1", 
    "Phone Number of Outside Site"
  ], 
  "OM1-26": [
    "OM1.26", 
    "5", 
    "ID", 
    "O", 
    "1", 
    "0169", 
    "Reporting Priority"
  ], 
  "OM1-27": [
    "OM1.27", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Outside Site"
  ], 
  "OM1-24": [
    "OM1.24", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Processing Time"
  ], 
  "OM1-25": [
    "OM1.25", 
    "40", 
    "ID", 
    "O", 
    "*", 
    "0168", 
    "Processing Priority"
  ], 
  "OM1-22": [
    "OM1.22", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Effective Date/Time of Change"
  ], 
  "OM1-23": [
    "OM1.23", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Typical Turn-Around Time"
  ], 
  "OM1-20": [
    "OM1.20", 
    "20", 
    "ST", 
    "O", 
    "1", 
    "Report Display Order"
  ], 
  "OM1-21": [
    "OM1.21", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date/Time Stamp for any change in Definition for the Observation"
  ], 
  "OM1-17": [
    "OM1.17", 
    "250", 
    "XTN", 
    "O", 
    "1", 
    "Telephone Number of Section"
  ], 
  "OM1-16": [
    "OM1.16", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Observation Producing Department/Section"
  ], 
  "OM1-15": [
    "OM1.15", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Portable Device Indicator"
  ], 
  "OM1-14": [
    "OM1.14", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Coded Representation of Method"
  ], 
  "OM1-13": [
    "OM1.13", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Identity of Instrument Used to Perform this Study"
  ], 
  "OM1-12": [
    "OM1.12", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Orderability"
  ], 
  "OM1-11": [
    "OM1.11", 
    "200", 
    "ST", 
    "O", 
    "1", 
    "Preferred Long Name for the Observation"
  ], 
  "OM1-10": [
    "OM1.10", 
    "8", 
    "ST", 
    "O", 
    "1", 
    "Preferred Short Name or Mnemonic for Observation"
  ], 
  "OM1-19": [
    "OM1.19", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Report Subheader"
  ], 
  "OM1-18": [
    "OM1.18", 
    "1", 
    "IS", 
    "R", 
    "1", 
    "0174", 
    "Nature of Service/Test/Observation"
  ]
};
DB['OM1'] = OM1;

var OM2 = {
  "OM2-4": [
    "OM2.4", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Corresponding SI Units of Measure"
  ], 
  "OM2-5": [
    "OM2.5", 
    "60", 
    "TX", 
    "O", 
    "1", 
    "SI Conversion Factor"
  ], 
  "OM2-6": [
    "OM2.6", 
    "250", 
    "RFR", 
    "O", 
    "1", 
    "Reference"
  ], 
  "OM2-7": [
    "OM2.7", 
    "205", 
    "NR", 
    "O", 
    "1", 
    "Critical Range for Ordinal and Continuous Observations"
  ], 
  "OM2-1": [
    "OM2.1", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Sequence Number - Test/ Observation Master File"
  ], 
  "OM2-2": [
    "OM2.2", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Units of Measure"
  ], 
  "OM2-3": [
    "OM2.3", 
    "10", 
    "NM", 
    "O", 
    "*", 
    "Range of Decimal Precision"
  ], 
  "OM2-8": [
    "OM2.8", 
    "250", 
    "RFR", 
    "O", 
    "1", 
    "Absolute Range for Ordinal and Continuous Observations"
  ], 
  "OM2-9": [
    "OM2.9", 
    "250", 
    "DLT", 
    "O", 
    "*", 
    "Delta Check Criteria"
  ], 
  "OM2-10": [
    "OM2.10", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Minimum Meaningful Increments"
  ]
};
DB['OM2'] = OM2;

var OM3 = {
  "OM3-1": [
    "OM3.1", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Sequence Number - Test/ Observation Master File"
  ], 
  "OM3-3": [
    "OM3.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Valid Coded \"Answers\""
  ], 
  "OM3-2": [
    "OM3.2", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Preferred Coding System"
  ], 
  "OM3-5": [
    "OM3.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Abnormal Text/Codes for Categorical Observations"
  ], 
  "OM3-4": [
    "OM3.4", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Normal Text/Codes for Categorical Observations"
  ], 
  "OM3-7": [
    "OM3.7", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0125", 
    "Value Type"
  ], 
  "OM3-6": [
    "OM3.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Critical Text/Codes for Categorical Observations"
  ]
};
DB['OM3'] = OM3;

var OM4 = {
  "OM4-6": [
    "OM4.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Specimen"
  ], 
  "OM4-7": [
    "OM4.7", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0371", 
    "Additive"
  ], 
  "OM4-4": [
    "OM4.4", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Container Volume"
  ], 
  "OM4-5": [
    "OM4.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Container Units"
  ], 
  "OM4-2": [
    "OM4.2", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0170", 
    "Derived Specimen"
  ], 
  "OM4-3": [
    "OM4.3", 
    "60", 
    "TX", 
    "O", 
    "1", 
    "Container Description"
  ], 
  "OM4-1": [
    "OM4.1", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Sequence Number - Test/ Observation Master File"
  ], 
  "OM4-8": [
    "OM4.8", 
    "10240", 
    "TX", 
    "O", 
    "1", 
    "Preparation"
  ], 
  "OM4-9": [
    "OM4.9", 
    "10240", 
    "TX", 
    "O", 
    "1", 
    "Special Handling Requirements"
  ], 
  "OM4-10": [
    "OM4.10", 
    "20", 
    "CQ", 
    "O", 
    "1", 
    "Normal Collection Volume"
  ], 
  "OM4-11": [
    "OM4.11", 
    "20", 
    "CQ", 
    "O", 
    "1", 
    "Minimum Collection Volume"
  ], 
  "OM4-12": [
    "OM4.12", 
    "10240", 
    "TX", 
    "O", 
    "1", 
    "Specimen Requirements"
  ], 
  "OM4-13": [
    "OM4.13", 
    "1", 
    "ID", 
    "O", 
    "*", 
    "0027", 
    "Specimen Priorities"
  ], 
  "OM4-14": [
    "OM4.14", 
    "20", 
    "CQ", 
    "O", 
    "1", 
    "Specimen Retention Time"
  ]
};
DB['OM4'] = OM4;

var OM5 = {
  "OM5-3": [
    "OM5.3", 
    "250", 
    "ST", 
    "O", 
    "1", 
    "Observation ID Suffixes"
  ], 
  "OM5-2": [
    "OM5.2", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Test/Observations Included within an Ordered Test Battery"
  ], 
  "OM5-1": [
    "OM5.1", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Sequence Number - Test/ Observation Master File"
  ]
};
DB['OM5'] = OM5;

var OM6 = {
  "OM6-1": [
    "OM6.1", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Sequence Number - Test/ Observation Master File"
  ], 
  "OM6-2": [
    "OM6.2", 
    "10240", 
    "TX", 
    "O", 
    "1", 
    "Derivation Rule"
  ]
};
DB['OM6'] = OM6;

var OM7 = {
  "OM7-19": [
    "OM7.19", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Effective Date/Time of Change"
  ], 
  "OM7-18": [
    "OM7.18", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "0414", 
    "Consent Waiting Period Units"
  ], 
  "OM7-15": [
    "OM7.15", 
    "5", 
    "NM", 
    "O", 
    "1", 
    "Consent Interval Quantity"
  ], 
  "OM7-14": [
    "OM7.14", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Consent Effective End Date/Time"
  ], 
  "OM7-17": [
    "OM7.17", 
    "5", 
    "NM", 
    "O", 
    "1", 
    "Consent Waiting Period Quantity"
  ], 
  "OM7-16": [
    "OM7.16", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "0414", 
    "Consent Interval Units"
  ], 
  "OM7-11": [
    "OM7.11", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Consent Indicator"
  ], 
  "OM7-10": [
    "OM7.10", 
    "60", 
    "IS", 
    "O", 
    "1", 
    "0335", 
    "Test/Service Default Frequency"
  ], 
  "OM7-13": [
    "OM7.13", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Consent Effective Start Date/Time"
  ], 
  "OM7-12": [
    "OM7.12", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0413", 
    "Consent Identifier"
  ], 
  "OM7-9": [
    "OM7.9", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Test/Service Default Duration Units"
  ], 
  "OM7-8": [
    "OM7.8", 
    "5", 
    "NM", 
    "O", 
    "1", 
    "Test/Service Default Duration Quantity"
  ], 
  "OM7-5": [
    "OM7.5", 
    "200", 
    "ST", 
    "O", 
    "*", 
    "Category Synonym"
  ], 
  "OM7-4": [
    "OM7.4", 
    "200", 
    "TX", 
    "O", 
    "1", 
    "Category Description"
  ], 
  "OM7-7": [
    "OM7.7", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Effective Test/Service End Date/Time"
  ], 
  "OM7-6": [
    "OM7.6", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Effective Test/Service Start Date/Time"
  ], 
  "OM7-1": [
    "OM7.1", 
    "4", 
    "NM", 
    "R", 
    "1", 
    "Sequence Number - Test/ Observation Master File"
  ], 
  "OM7-3": [
    "OM7.3", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0412", 
    "Category Identifier"
  ], 
  "OM7-2": [
    "OM7.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Universal Service Identifier"
  ], 
  "OM7-20": [
    "OM7.20", 
    "250", 
    "XCN", 
    "O", 
    "1", 
    "Entered By"
  ], 
  "OM7-21": [
    "OM7.21", 
    "200", 
    "PL", 
    "O", 
    "*", 
    "Orderable-at Location"
  ], 
  "OM7-22": [
    "OM7.22", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0473", 
    "Formulary Status"
  ], 
  "OM7-23": [
    "OM7.23", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Special Order Indicator"
  ], 
  "OM7-24": [
    "OM7.24", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0132", 
    "Primary Key Value - CDM"
  ]
};
DB['OM7'] = OM7;

var ORC = {
  "ORC-23": [
    "ORC.23", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Ordering Facility Phone Number"
  ], 
  "ORC-22": [
    "ORC.22", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Ordering Facility Address"
  ], 
  "ORC-21": [
    "ORC.21", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Ordering Facility Name"
  ], 
  "ORC-20": [
    "ORC.20", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0339", 
    "Advanced Beneficiary Notice Code"
  ], 
  "ORC-25": [
    "ORC.25", 
    "250", 
    "CWE", 
    "O", 
    "1", 
    "Order Status Modifier"
  ], 
  "ORC-24": [
    "ORC.24", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Ordering Provider Address"
  ], 
  "ORC-18": [
    "ORC.18", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Entering Device"
  ], 
  "ORC-19": [
    "ORC.19", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Action By"
  ], 
  "ORC-12": [
    "ORC.12", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Ordering Provider"
  ], 
  "ORC-13": [
    "ORC.13", 
    "80", 
    "PL", 
    "O", 
    "1", 
    "Enterer's Location"
  ], 
  "ORC-10": [
    "ORC.10", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Entered By"
  ], 
  "ORC-11": [
    "ORC.11", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Verified By"
  ], 
  "ORC-16": [
    "ORC.16", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Order Control Code Reason"
  ], 
  "ORC-17": [
    "ORC.17", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Entering Organization"
  ], 
  "ORC-14": [
    "ORC.14", 
    "250", 
    "XTN", 
    "O", 
    "2", 
    "Call Back Phone Number"
  ], 
  "ORC-15": [
    "ORC.15", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Order Effective Date/Time"
  ], 
  "ORC-1": [
    "ORC.1", 
    "2", 
    "ID", 
    "R", 
    "1", 
    "0119", 
    "Order Control"
  ], 
  "ORC-2": [
    "ORC.2", 
    "22", 
    "EI", 
    "C", 
    "1", 
    "Placer Order Number"
  ], 
  "ORC-3": [
    "ORC.3", 
    "22", 
    "EI", 
    "C", 
    "1", 
    "Filler Order Number"
  ], 
  "ORC-4": [
    "ORC.4", 
    "22", 
    "EI", 
    "O", 
    "1", 
    "Placer Group Number"
  ], 
  "ORC-5": [
    "ORC.5", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0038", 
    "Order Status"
  ], 
  "ORC-6": [
    "ORC.6", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0121", 
    "Response Flag"
  ], 
  "ORC-7": [
    "ORC.7", 
    "200", 
    "TQ", 
    "O", 
    "*", 
    "Quantity/Timing"
  ], 
  "ORC-8": [
    "ORC.8", 
    "200", 
    "EIP", 
    "O", 
    "1", 
    "Parent Order"
  ], 
  "ORC-9": [
    "ORC.9", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date/Time of Transaction"
  ]
};
DB['ORC'] = ORC;

var ORG = {
  "ORG-11": [
    "ORG.11", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Board Approval Indicator"
  ], 
  "ORG-10": [
    "ORG.10", 
    "2", 
    "CE", 
    "O", 
    "1", 
    "0066", 
    "Employment Status Code"
  ], 
  "ORG-8": [
    "ORG.8", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0454", 
    "Health Care Provider Area of Specialization Code"
  ], 
  "ORG-9": [
    "ORG.9", 
    "52", 
    "DR", 
    "O", 
    "1", 
    "Effective Date Range"
  ], 
  "ORG-4": [
    "ORG.4", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Primary Org Unit Indicator"
  ], 
  "ORG-5": [
    "ORG.5", 
    "60", 
    "CX", 
    "O", 
    "1", 
    "Practitioner Org Unit Identifier"
  ], 
  "ORG-6": [
    "ORG.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0452", 
    "Health Care Provider Type Code"
  ], 
  "ORG-7": [
    "ORG.7", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0453", 
    "Health Care Provider Classification Code"
  ], 
  "ORG-12": [
    "ORG.12", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Primary Care Physician Indicator"
  ], 
  "ORG-1": [
    "ORG.1", 
    "60", 
    "SI", 
    "R", 
    "1", 
    "Set ID - ORG"
  ], 
  "ORG-2": [
    "ORG.2", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0405", 
    "Organization Unit Code"
  ], 
  "ORG-3": [
    "ORG.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0474", 
    "Organization Unit Type Code - ORG"
  ]
};
DB['ORG'] = ORG;

var PCR = {
  "PCR-19": [
    "PCR.19", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0242", 
    "Device Operator Qualifications"
  ], 
  "PCR-18": [
    "PCR.18", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date Product Returned To Manufacturer"
  ], 
  "PCR-11": [
    "PCR.11", 
    "8", 
    "IS", 
    "O", 
    "1", 
    "0245", 
    "Product Problem"
  ], 
  "PCR-10": [
    "PCR.10", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Indication For Product Use"
  ], 
  "PCR-13": [
    "PCR.13", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0246", 
    "Product Available For Inspection"
  ], 
  "PCR-12": [
    "PCR.12", 
    "30", 
    "ST", 
    "O", 
    "3", 
    "Product Serial/Lot Number"
  ], 
  "PCR-15": [
    "PCR.15", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0247", 
    "Product Evaluation Status"
  ], 
  "PCR-14": [
    "PCR.14", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Product Evaluation Performed"
  ], 
  "PCR-17": [
    "PCR.17", 
    "8", 
    "ID", 
    "O", 
    "1", 
    "0248", 
    "Evaluated Product Source"
  ], 
  "PCR-16": [
    "PCR.16", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Product Evaluation Results"
  ], 
  "PCR-20": [
    "PCR.20", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0250", 
    "Relatedness Assessment"
  ], 
  "PCR-21": [
    "PCR.21", 
    "2", 
    "ID", 
    "O", 
    "6", 
    "0251", 
    "Action Taken In Response To The Event"
  ], 
  "PCR-22": [
    "PCR.22", 
    "2", 
    "ID", 
    "O", 
    "6", 
    "0252", 
    "Event Causality Observations"
  ], 
  "PCR-23": [
    "PCR.23", 
    "1", 
    "ID", 
    "O", 
    "3", 
    "0253", 
    "Indirect Exposure Mechanism"
  ], 
  "PCR-1": [
    "PCR.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Implicated Product"
  ], 
  "PCR-3": [
    "PCR.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Product Class"
  ], 
  "PCR-2": [
    "PCR.2", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0249", 
    "Generic Product"
  ], 
  "PCR-5": [
    "PCR.5", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Product Manufacture Date"
  ], 
  "PCR-4": [
    "PCR.4", 
    "8", 
    "CQ", 
    "O", 
    "1", 
    "Total Duration Of Therapy"
  ], 
  "PCR-7": [
    "PCR.7", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Product Implantation Date"
  ], 
  "PCR-6": [
    "PCR.6", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Product Expiration Date"
  ], 
  "PCR-9": [
    "PCR.9", 
    "8", 
    "IS", 
    "O", 
    "1", 
    "0244", 
    "Single Use Device"
  ], 
  "PCR-8": [
    "PCR.8", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Product Explantation Date"
  ]
};
DB['PCR'] = PCR;

var PD1 = {
  "PD1-21": [
    "PD1.21", 
    "3", 
    "IS", 
    "O", 
    "1", 
    "0142", 
    "Military Status"
  ], 
  "PD1-9": [
    "PD1.9", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Separate Bill"
  ], 
  "PD1-8": [
    "PD1.8", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0316", 
    "Organ Donor Code"
  ], 
  "PD1-20": [
    "PD1.20", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0141", 
    "Military Rank/Grade"
  ], 
  "PD1-3": [
    "PD1.3", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Patient Primary Facility"
  ], 
  "PD1-2": [
    "PD1.2", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0220", 
    "Living Arrangement"
  ], 
  "PD1-1": [
    "PD1.1", 
    "2", 
    "IS", 
    "O", 
    "*", 
    "0223", 
    "Living Dependency"
  ], 
  "PD1-7": [
    "PD1.7", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0315", 
    "Living Will Code"
  ], 
  "PD1-6": [
    "PD1.6", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0295", 
    "Handicap"
  ], 
  "PD1-5": [
    "PD1.5", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0231", 
    "Student Indicator"
  ], 
  "PD1-4": [
    "PD1.4", 
    "250", 
    "XCN", 
    "B", 
    "*", 
    "Patient Primary Care Provider Name ", 
    "&", 
    " ID No."
  ], 
  "PD1-19": [
    "PD1.19", 
    "5", 
    "IS", 
    "O", 
    "1", 
    "0140", 
    "Military Branch"
  ], 
  "PD1-18": [
    "PD1.18", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Publicity Code Effective Date"
  ], 
  "PD1-13": [
    "PD1.13", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Protection Indicator Effective Date"
  ], 
  "PD1-12": [
    "PD1.12", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Protection Indicator"
  ], 
  "PD1-11": [
    "PD1.11", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0215", 
    "Publicity Code"
  ], 
  "PD1-10": [
    "PD1.10", 
    "250", 
    "CX", 
    "O", 
    "*", 
    "Duplicate Patient"
  ], 
  "PD1-17": [
    "PD1.17", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Immunization Registry Status Effective Date"
  ], 
  "PD1-16": [
    "PD1.16", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0441", 
    "Immunization Registry Status"
  ], 
  "PD1-15": [
    "PD1.15", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0435", 
    "Advance Directive Code"
  ], 
  "PD1-14": [
    "PD1.14", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Place of Worship"
  ]
};
DB['PD1'] = PD1;

var PDA = {
  "PDA-9": [
    "PDA.9", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Coroner Indicator"
  ], 
  "PDA-8": [
    "PDA.8", 
    "250", 
    "XCN", 
    "O", 
    "1", 
    "Autopsy Performed By"
  ], 
  "PDA-3": [
    "PDA.3", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Death Certified Indicator"
  ], 
  "PDA-2": [
    "PDA.2", 
    "80", 
    "PL", 
    "O", 
    "1", 
    "Death Location"
  ], 
  "PDA-1": [
    "PDA.1", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Death Cause Code"
  ], 
  "PDA-7": [
    "PDA.7", 
    "53", 
    "DR", 
    "O", 
    "1", 
    "Autopsy Start and End Date/Time"
  ], 
  "PDA-6": [
    "PDA.6", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Autopsy Indicator"
  ], 
  "PDA-5": [
    "PDA.5", 
    "250", 
    "XCN", 
    "O", 
    "1", 
    "Death Certified By"
  ], 
  "PDA-4": [
    "PDA.4", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Death Certificate Signed Date/Time"
  ]
};
DB['PDA'] = PDA;

var PDC = {
  "PDC-5": [
    "PDC.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Generic Name"
  ], 
  "PDC-4": [
    "PDC.4", 
    "60", 
    "ST", 
    "O", 
    "1", 
    "Device Family Name"
  ], 
  "PDC-7": [
    "PDC.7", 
    "60", 
    "ST", 
    "O", 
    "1", 
    "Catalogue Identifier"
  ], 
  "PDC-6": [
    "PDC.6", 
    "60", 
    "ST", 
    "O", 
    "*", 
    "Model Identifier"
  ], 
  "PDC-1": [
    "PDC.1", 
    "250", 
    "XON", 
    "R", 
    "*", 
    "Manufacturer/Distributor"
  ], 
  "PDC-3": [
    "PDC.3", 
    "60", 
    "ST", 
    "R", 
    "1", 
    "Brand Name"
  ], 
  "PDC-2": [
    "PDC.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Country"
  ], 
  "PDC-9": [
    "PDC.9", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Product Code"
  ], 
  "PDC-8": [
    "PDC.8", 
    "60", 
    "ST", 
    "O", 
    "*", 
    "Other Identifier"
  ], 
  "PDC-15": [
    "PDC.15", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date Last Marketed"
  ], 
  "PDC-14": [
    "PDC.14", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date First Marketed"
  ], 
  "PDC-11": [
    "PDC.11", 
    "60", 
    "ST", 
    "O", 
    "1", 
    "Marketing Approval ID"
  ], 
  "PDC-10": [
    "PDC.10", 
    "4", 
    "ID", 
    "O", 
    "1", 
    "0330", 
    "Marketing Basis"
  ], 
  "PDC-13": [
    "PDC.13", 
    "12", 
    "CQ", 
    "O", 
    "1", 
    "Expected Shelf Life"
  ], 
  "PDC-12": [
    "PDC.12", 
    "12", 
    "CQ", 
    "O", 
    "1", 
    "Labeled Shelf Life"
  ]
};
DB['PDC'] = PDC;

var PEO = {
  "PEO-21": [
    "PEO.21", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Primary Observer Telephone"
  ], 
  "PEO-20": [
    "PEO.20", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Primary Observer Address"
  ], 
  "PEO-23": [
    "PEO.23", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0242", 
    "Confirmation Provided By"
  ], 
  "PEO-22": [
    "PEO.22", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0242", 
    "Primary Observer's Qualification"
  ], 
  "PEO-25": [
    "PEO.25", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0243", 
    "Primary Observer's identity May Be Divulged"
  ], 
  "PEO-24": [
    "PEO.24", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Primary Observer Aware Date/Time"
  ], 
  "PEO-2": [
    "PEO.2", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Event Symptom/Diagnosis Code"
  ], 
  "PEO-3": [
    "PEO.3", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Event Onset Date/Time"
  ], 
  "PEO-1": [
    "PEO.1", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Event Identifiers Used"
  ], 
  "PEO-6": [
    "PEO.6", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Event Ended Data/Time"
  ], 
  "PEO-7": [
    "PEO.7", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Event Location Occurred Address"
  ], 
  "PEO-4": [
    "PEO.4", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Event Exacerbation Date/Time"
  ], 
  "PEO-5": [
    "PEO.5", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Event Improved Date/Time"
  ], 
  "PEO-8": [
    "PEO.8", 
    "1", 
    "ID", 
    "O", 
    "*", 
    "0237", 
    "Event Qualification"
  ], 
  "PEO-9": [
    "PEO.9", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0238", 
    "Event Serious"
  ], 
  "PEO-14": [
    "PEO.14", 
    "600", 
    "FT", 
    "O", 
    "*", 
    "Event From Original Reporter"
  ], 
  "PEO-15": [
    "PEO.15", 
    "600", 
    "FT", 
    "O", 
    "*", 
    "Event Description From Patient"
  ], 
  "PEO-16": [
    "PEO.16", 
    "600", 
    "FT", 
    "O", 
    "*", 
    "Event Description From Practitioner"
  ], 
  "PEO-17": [
    "PEO.17", 
    "600", 
    "FT", 
    "O", 
    "*", 
    "Event Description From Autopsy"
  ], 
  "PEO-10": [
    "PEO.10", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0239", 
    "Event Expected"
  ], 
  "PEO-11": [
    "PEO.11", 
    "1", 
    "ID", 
    "O", 
    "*", 
    "0240", 
    "Event Outcome"
  ], 
  "PEO-12": [
    "PEO.12", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0241", 
    "Patient Outcome"
  ], 
  "PEO-13": [
    "PEO.13", 
    "600", 
    "FT", 
    "O", 
    "*", 
    "Event Description From Others"
  ], 
  "PEO-18": [
    "PEO.18", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Cause Of Death"
  ], 
  "PEO-19": [
    "PEO.19", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Primary Observer Name"
  ]
};
DB['PEO'] = PEO;

var PES = {
  "PES-13": [
    "PES.13", 
    "1", 
    "ID", 
    "O", 
    "*", 
    "0236", 
    "Event Reported To"
  ], 
  "PES-8": [
    "PES.8", 
    "600", 
    "FT", 
    "O", 
    "1", 
    "Sender Comment"
  ], 
  "PES-9": [
    "PES.9", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Sender Aware Date/Time"
  ], 
  "PES-6": [
    "PES.6", 
    "2", 
    "NM", 
    "O", 
    "1", 
    "Sender Sequence Number"
  ], 
  "PES-7": [
    "PES.7", 
    "600", 
    "FT", 
    "O", 
    "*", 
    "Sender Event Description"
  ], 
  "PES-4": [
    "PES.4", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Sender Telephone"
  ], 
  "PES-5": [
    "PES.5", 
    "75", 
    "EI", 
    "O", 
    "1", 
    "Sender Event Identifier"
  ], 
  "PES-2": [
    "PES.2", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Sender Individual Name"
  ], 
  "PES-3": [
    "PES.3", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Sender Address"
  ], 
  "PES-1": [
    "PES.1", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Sender Organization Name"
  ], 
  "PES-10": [
    "PES.10", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Event Report Date"
  ], 
  "PES-11": [
    "PES.11", 
    "3", 
    "ID", 
    "O", 
    "2", 
    "0234", 
    "Event Report Timing/Type"
  ], 
  "PES-12": [
    "PES.12", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0235", 
    "Event Report Source"
  ]
};
DB['PES'] = PES;

var PID = {
  "PID-20": [
    "PID.20", 
    "25", 
    "DLN", 
    "O", 
    "1", 
    "Driver's License Number - Patient"
  ], 
  "PID-21": [
    "PID.21", 
    "250", 
    "CX", 
    "O", 
    "*", 
    "Mother's Identifier"
  ], 
  "PID-22": [
    "PID.22", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0189", 
    "Ethnic Group"
  ], 
  "PID-23": [
    "PID.23", 
    "250", 
    "ST", 
    "O", 
    "1", 
    "Birth Place"
  ], 
  "PID-24": [
    "PID.24", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Multiple Birth Indicator"
  ], 
  "PID-25": [
    "PID.25", 
    "2", 
    "NM", 
    "O", 
    "1", 
    "Birth Order"
  ], 
  "PID-26": [
    "PID.26", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0171", 
    "Citizenship"
  ], 
  "PID-27": [
    "PID.27", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0172", 
    "Veterans Military Status"
  ], 
  "PID-28": [
    "PID.28", 
    "250", 
    "CE", 
    "B", 
    "1", 
    "0212", 
    "Nationality"
  ], 
  "PID-29": [
    "PID.29", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Patient Death Date and Time"
  ], 
  "PID-5": [
    "PID.5", 
    "250", 
    "XPN", 
    "R", 
    "*", 
    "Patient Name"
  ], 
  "PID-4": [
    "PID.4", 
    "20", 
    "CX", 
    "B", 
    "*", 
    "Alternate Patient ID - PID"
  ], 
  "PID-7": [
    "PID.7", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date/Time Of Birth"
  ], 
  "PID-6": [
    "PID.6", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Mother's Maiden Name"
  ], 
  "PID-1": [
    "PID.1", 
    "4", 
    "SI", 
    "O", 
    "1", 
    "Set ID - PID"
  ], 
  "PID-3": [
    "PID.3", 
    "250", 
    "CX", 
    "R", 
    "*", 
    "Patient Identifier List"
  ], 
  "PID-2": [
    "PID.2", 
    "20", 
    "CX", 
    "B", 
    "1", 
    "Patient ID"
  ], 
  "PID-32": [
    "PID.32", 
    "20", 
    "IS", 
    "O", 
    "*", 
    "0445", 
    "Identity Reliability Code"
  ], 
  "PID-9": [
    "PID.9", 
    "250", 
    "XPN", 
    "B", 
    "*", 
    "Patient Alias"
  ], 
  "PID-8": [
    "PID.8", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0001", 
    "Administrative Sex"
  ], 
  "PID-38": [
    "PID.38", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0429", 
    "Production Class Code"
  ], 
  "PID-36": [
    "PID.36", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "0447", 
    "Breed Code"
  ], 
  "PID-15": [
    "PID.15", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0296", 
    "Primary Language"
  ], 
  "PID-14": [
    "PID.14", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Phone Number - Business"
  ], 
  "PID-17": [
    "PID.17", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0006", 
    "Religion"
  ], 
  "PID-16": [
    "PID.16", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0002", 
    "Marital Status"
  ], 
  "PID-11": [
    "PID.11", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Patient Address"
  ], 
  "PID-10": [
    "PID.10", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0005", 
    "Race"
  ], 
  "PID-13": [
    "PID.13", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Phone Number - Home"
  ], 
  "PID-12": [
    "PID.12", 
    "4", 
    "IS", 
    "B", 
    "1", 
    "0289", 
    "County Code"
  ], 
  "PID-37": [
    "PID.37", 
    "80", 
    "ST", 
    "O", 
    "1", 
    "Strain"
  ], 
  "PID-33": [
    "PID.33", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Last Update Date/Time"
  ], 
  "PID-35": [
    "PID.35", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "0446", 
    "Species Code"
  ], 
  "PID-34": [
    "PID.34", 
    "40", 
    "HD", 
    "O", 
    "1", 
    "Last Update Facility"
  ], 
  "PID-19": [
    "PID.19", 
    "16", 
    "ST", 
    "B", 
    "1", 
    "SSN Number - Patient"
  ], 
  "PID-18": [
    "PID.18", 
    "250", 
    "CX", 
    "O", 
    "1", 
    "Patient Account Number"
  ], 
  "PID-31": [
    "PID.31", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Identity Unknown Indicator"
  ], 
  "PID-30": [
    "PID.30", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Patient Death Indicator"
  ]
};
DB['PID'] = PID;

var PR1 = {
  "PR1-16": [
    "PR1.16", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0340", 
    "Procedure Code Modifier"
  ], 
  "PR1-9": [
    "PR1.9", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0019", 
    "Anesthesia Code"
  ], 
  "PR1-8": [
    "PR1.8", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "0010", 
    "Anesthesiologist"
  ], 
  "PR1-5": [
    "PR1.5", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Procedure Date/Time"
  ], 
  "PR1-4": [
    "PR1.4", 
    "40", 
    "ST", 
    "O", 
    "1", 
    "Procedure Description"
  ], 
  "PR1-7": [
    "PR1.7", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Procedure Minutes"
  ], 
  "PR1-6": [
    "PR1.6", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0230", 
    "Procedure Functional Type"
  ], 
  "PR1-1": [
    "PR1.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID - PR1"
  ], 
  "PR1-10": [
    "PR1.10", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Anesthesia Minutes"
  ], 
  "PR1-3": [
    "PR1.3", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0088", 
    "Procedure Code"
  ], 
  "PR1-2": [
    "PR1.2", 
    "3", 
    "IS", 
    "O", 
    "1", 
    "0089", 
    "Procedure Coding Method"
  ], 
  "PR1-15": [
    "PR1.15", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0051", 
    "Associated Diagnosis Code"
  ], 
  "PR1-13": [
    "PR1.13", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0059", 
    "Consent Code"
  ], 
  "PR1-14": [
    "PR1.14", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0418", 
    "Procedure Priority"
  ], 
  "PR1-12": [
    "PR1.12", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "0010", 
    "Procedure Practitioner"
  ], 
  "PR1-17": [
    "PR1.17", 
    "20", 
    "IS", 
    "O", 
    "1", 
    "0416", 
    "Procedure DRG Type"
  ], 
  "PR1-11": [
    "PR1.11", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "0010", 
    "Surgeon"
  ], 
  "PR1-18": [
    "PR1.18", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0417", 
    "Tissue Type Code"
  ]
};
DB['PR1'] = PR1;

var PRA = {
  "PRA-12": [
    "PRA.12", 
    "60", 
    "SI", 
    "O", 
    "1", 
    "Set ID - PRA"
  ], 
  "PRA-11": [
    "PRA.11", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0401", 
    "Government Reimbursement Billing Eligibility"
  ], 
  "PRA-9": [
    "PRA.9", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Institution"
  ], 
  "PRA-8": [
    "PRA.8", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Date Entered Practice"
  ], 
  "PRA-5": [
    "PRA.5", 
    "100", 
    "SPD", 
    "O", 
    "*", 
    "0337", 
    "Specialty"
  ], 
  "PRA-4": [
    "PRA.4", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0187", 
    "Provider Billing"
  ], 
  "PRA-7": [
    "PRA.7", 
    "200", 
    "PIP", 
    "O", 
    "*", 
    "Privileges"
  ], 
  "PRA-6": [
    "PRA.6", 
    "100", 
    "PLN", 
    "O", 
    "*", 
    "0338", 
    "Practitioner ID Numbers"
  ], 
  "PRA-1": [
    "PRA.1", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Primary Key Value - PRA"
  ], 
  "PRA-10": [
    "PRA.10", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Date Left Practice"
  ], 
  "PRA-3": [
    "PRA.3", 
    "3", 
    "IS", 
    "O", 
    "*", 
    "0186", 
    "Practitioner Category"
  ], 
  "PRA-2": [
    "PRA.2", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0358", 
    "Practitioner Group"
  ]
};
DB['PRA'] = PRA;

var PRB = {
  "PRB-10": [
    "PRB.10", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Problem Classification"
  ], 
  "PRB-11": [
    "PRB.11", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Problem Management Discipline"
  ], 
  "PRB-12": [
    "PRB.12", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Problem Persistence"
  ], 
  "PRB-13": [
    "PRB.13", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Problem Confirmation Status"
  ], 
  "PRB-14": [
    "PRB.14", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Problem Life Cycle Status"
  ], 
  "PRB-15": [
    "PRB.15", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Problem Life Cycle Status Date/Time"
  ], 
  "PRB-16": [
    "PRB.16", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Problem Date of Onset"
  ], 
  "PRB-17": [
    "PRB.17", 
    "80", 
    "ST", 
    "O", 
    "1", 
    "Problem Onset Text"
  ], 
  "PRB-18": [
    "PRB.18", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Problem Ranking"
  ], 
  "PRB-19": [
    "PRB.19", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Certainty of Problem"
  ], 
  "PRB-6": [
    "PRB.6", 
    "60", 
    "NM", 
    "O", 
    "1", 
    "Problem List Priority"
  ], 
  "PRB-7": [
    "PRB.7", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Problem Established Date/Time"
  ], 
  "PRB-4": [
    "PRB.4", 
    "60", 
    "EI", 
    "R", 
    "1", 
    "Problem Instance ID"
  ], 
  "PRB-5": [
    "PRB.5", 
    "60", 
    "EI", 
    "O", 
    "1", 
    "Episode of Care ID"
  ], 
  "PRB-2": [
    "PRB.2", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Action Date/Time"
  ], 
  "PRB-3": [
    "PRB.3", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Problem ID"
  ], 
  "PRB-1": [
    "PRB.1", 
    "2", 
    "ID", 
    "R", 
    "1", 
    "0287", 
    "Action Code"
  ], 
  "PRB-8": [
    "PRB.8", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Anticipated Problem Resolution Date/Time"
  ], 
  "PRB-9": [
    "PRB.9", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Actual Problem Resolution Date/Time"
  ], 
  "PRB-25": [
    "PRB.25", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Security/Sensitivity"
  ], 
  "PRB-24": [
    "PRB.24", 
    "200", 
    "ST", 
    "O", 
    "1", 
    "Family/Significant Other Awareness of Problem/Prognosis"
  ], 
  "PRB-21": [
    "PRB.21", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Individual Awareness of Problem"
  ], 
  "PRB-20": [
    "PRB.20", 
    "5", 
    "NM", 
    "O", 
    "1", 
    "Probability of Problem"
  ], 
  "PRB-23": [
    "PRB.23", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Individual Awareness of Prognosis"
  ], 
  "PRB-22": [
    "PRB.22", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Problem Prognosis"
  ]
};
DB['PRB'] = PRB;

var PRC = {
  "PRC-13": [
    "PRC.13", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0268", 
    "Price Override Flag"
  ], 
  "PRC-18": [
    "PRC.18", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0269", 
    "Charge On Indicator"
  ], 
  "PRC-15": [
    "PRC.15", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Chargeable Flag"
  ], 
  "PRC-12": [
    "PRC.12", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Effective End Date"
  ], 
  "PRC-14": [
    "PRC.14", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0293", 
    "Billing Category"
  ], 
  "PRC-11": [
    "PRC.11", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Effective Start Date"
  ], 
  "PRC-3": [
    "PRC.3", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0184", 
    "Department"
  ], 
  "PRC-2": [
    "PRC.2", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0464", 
    "Facility ID - PRC"
  ], 
  "PRC-1": [
    "PRC.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0132", 
    "Primary Key Value - PRC"
  ], 
  "PRC-10": [
    "PRC.10", 
    "12", 
    "MO", 
    "O", 
    "1", 
    "Maximum Price"
  ], 
  "PRC-7": [
    "PRC.7", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Minimum Quantity"
  ], 
  "PRC-6": [
    "PRC.6", 
    "200", 
    "ST", 
    "O", 
    "*", 
    "Formula"
  ], 
  "PRC-5": [
    "PRC.5", 
    "12", 
    "CP", 
    "C", 
    "*", 
    "Price"
  ], 
  "PRC-4": [
    "PRC.4", 
    "1", 
    "IS", 
    "O", 
    "*", 
    "0004", 
    "Valid Patient Classes"
  ], 
  "PRC-17": [
    "PRC.17", 
    "12", 
    "MO", 
    "O", 
    "1", 
    "Cost"
  ], 
  "PRC-9": [
    "PRC.9", 
    "12", 
    "MO", 
    "O", 
    "1", 
    "Minimum Price"
  ], 
  "PRC-8": [
    "PRC.8", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Maximum Quantity"
  ], 
  "PRC-16": [
    "PRC.16", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0183", 
    "Active/Inactive Flag"
  ]
};
DB['PRC'] = PRC;

var PRD = {
  "PRD-4": [
    "PRD.4", 
    "60", 
    "PL", 
    "O", 
    "1", 
    "Provider Location"
  ], 
  "PRD-5": [
    "PRD.5", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Provider Communication Information"
  ], 
  "PRD-6": [
    "PRD.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0185", 
    "Preferred Method of Contact"
  ], 
  "PRD-7": [
    "PRD.7", 
    "100", 
    "PI", 
    "O", 
    "*", 
    "Provider Identifiers"
  ], 
  "PRD-1": [
    "PRD.1", 
    "250", 
    "CE", 
    "R", 
    "*", 
    "0286", 
    "Provider Role"
  ], 
  "PRD-2": [
    "PRD.2", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Provider Name"
  ], 
  "PRD-3": [
    "PRD.3", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Provider Address"
  ], 
  "PRD-8": [
    "PRD.8", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Effective Start Date of Provider Role"
  ], 
  "PRD-9": [
    "PRD.9", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Effective End Date of Provider Role"
  ]
};
DB['PRD'] = PRD;

var PSH = {
  "PSH-14": [
    "PSH.14", 
    "2", 
    "NM", 
    "O", 
    "8", 
    "Number of Product Experience Reports Filed by Distributor"
  ], 
  "PSH-13": [
    "PSH.13", 
    "2", 
    "NM", 
    "O", 
    "8", 
    "Number of Product Experience Reports Filed by Facility"
  ], 
  "PSH-12": [
    "PSH.12", 
    "600", 
    "FT", 
    "O", 
    "1", 
    "Quantity in Use Comment"
  ], 
  "PSH-11": [
    "PSH.11", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0329", 
    "Quantity in Use Method"
  ], 
  "PSH-10": [
    "PSH.10", 
    "12", 
    "CQ", 
    "O", 
    "1", 
    "Quantity in Use"
  ], 
  "PSH-9": [
    "PSH.9", 
    "600", 
    "FT", 
    "O", 
    "1", 
    "Quantity Distributed Comment"
  ], 
  "PSH-8": [
    "PSH.8", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0329", 
    "Quantity Distributed Method"
  ], 
  "PSH-7": [
    "PSH.7", 
    "12", 
    "CQ", 
    "O", 
    "1", 
    "Quantity Distributed"
  ], 
  "PSH-6": [
    "PSH.6", 
    "12", 
    "CQ", 
    "O", 
    "1", 
    "Quantity Manufactured"
  ], 
  "PSH-5": [
    "PSH.5", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Report Interval End Date"
  ], 
  "PSH-4": [
    "PSH.4", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Report Interval Start Date"
  ], 
  "PSH-3": [
    "PSH.3", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Report Date"
  ], 
  "PSH-2": [
    "PSH.2", 
    "60", 
    "ST", 
    "O", 
    "1", 
    "Report Form Identifier"
  ], 
  "PSH-1": [
    "PSH.1", 
    "60", 
    "ST", 
    "R", 
    "1", 
    "Report Type"
  ]
};
DB['PSH'] = PSH;

var PTH = {
  "PTH-6": [
    "PTH.6", 
    "26", 
    "TS", 
    "C", 
    "1", 
    "Change Pathway Life Cycle Status Date/Time"
  ], 
  "PTH-4": [
    "PTH.4", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Pathway Established Date/Time"
  ], 
  "PTH-5": [
    "PTH.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Pathway Life Cycle Status"
  ], 
  "PTH-2": [
    "PTH.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Pathway ID"
  ], 
  "PTH-3": [
    "PTH.3", 
    "60", 
    "EI", 
    "R", 
    "1", 
    "Pathway Instance ID"
  ], 
  "PTH-1": [
    "PTH.1", 
    "2", 
    "ID", 
    "R", 
    "1", 
    "0287", 
    "Action Code"
  ]
};
DB['PTH'] = PTH;

var PV1 = {
  "PV1-28": [
    "PV1.28", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0073", 
    "Interest Code"
  ], 
  "PV1-29": [
    "PV1.29", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0110", 
    "Transfer to Bad Debt Code"
  ], 
  "PV1-24": [
    "PV1.24", 
    "2", 
    "IS", 
    "O", 
    "*", 
    "0044", 
    "Contract Code"
  ], 
  "PV1-25": [
    "PV1.25", 
    "8", 
    "DT", 
    "O", 
    "*", 
    "Contract Effective Date"
  ], 
  "PV1-26": [
    "PV1.26", 
    "12", 
    "NM", 
    "O", 
    "*", 
    "Contract Amount"
  ], 
  "PV1-27": [
    "PV1.27", 
    "3", 
    "NM", 
    "O", 
    "*", 
    "Contract Period"
  ], 
  "PV1-20": [
    "PV1.20", 
    "50", 
    "FC", 
    "O", 
    "*", 
    "0064", 
    "Financial Class"
  ], 
  "PV1-21": [
    "PV1.21", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0032", 
    "Charge Price Indicator"
  ], 
  "PV1-22": [
    "PV1.22", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0045", 
    "Courtesy Code"
  ], 
  "PV1-23": [
    "PV1.23", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0046", 
    "Credit Rating"
  ], 
  "PV1-48": [
    "PV1.48", 
    "12", 
    "NM", 
    "O", 
    "1", 
    "Total Adjustments"
  ], 
  "PV1-49": [
    "PV1.49", 
    "12", 
    "NM", 
    "O", 
    "1", 
    "Total Payments"
  ], 
  "PV1-46": [
    "PV1.46", 
    "12", 
    "NM", 
    "O", 
    "1", 
    "Current Patient Balance"
  ], 
  "PV1-47": [
    "PV1.47", 
    "12", 
    "NM", 
    "O", 
    "1", 
    "Total Charges"
  ], 
  "PV1-44": [
    "PV1.44", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Admit Date/Time"
  ], 
  "PV1-45": [
    "PV1.45", 
    "26", 
    "TS", 
    "O", 
    "*", 
    "Discharge Date/Time"
  ], 
  "PV1-42": [
    "PV1.42", 
    "80", 
    "PL", 
    "O", 
    "1", 
    "Pending Location"
  ], 
  "PV1-43": [
    "PV1.43", 
    "80", 
    "PL", 
    "O", 
    "1", 
    "Prior Temporary Location"
  ], 
  "PV1-40": [
    "PV1.40", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0116", 
    "Bed Status"
  ], 
  "PV1-41": [
    "PV1.41", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0117", 
    "Account Status"
  ], 
  "PV1-39": [
    "PV1.39", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0115", 
    "Servicing Facility"
  ], 
  "PV1-9": [
    "PV1.9", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "0010", 
    "Consulting Doctor"
  ], 
  "PV1-8": [
    "PV1.8", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "0010", 
    "Referring Doctor"
  ], 
  "PV1-38": [
    "PV1.38", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0114", 
    "Diet Type"
  ], 
  "PV1-1": [
    "PV1.1", 
    "4", 
    "SI", 
    "O", 
    "1", 
    "Set ID - PV1"
  ], 
  "PV1-3": [
    "PV1.3", 
    "80", 
    "PL", 
    "O", 
    "1", 
    "Assigned Patient Location"
  ], 
  "PV1-2": [
    "PV1.2", 
    "1", 
    "IS", 
    "R", 
    "1", 
    "0004", 
    "Patient Class"
  ], 
  "PV1-5": [
    "PV1.5", 
    "250", 
    "CX", 
    "O", 
    "1", 
    "Preadmit Number"
  ], 
  "PV1-4": [
    "PV1.4", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0007", 
    "Admission Type"
  ], 
  "PV1-7": [
    "PV1.7", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "0010", 
    "Attending Doctor"
  ], 
  "PV1-6": [
    "PV1.6", 
    "80", 
    "PL", 
    "O", 
    "1", 
    "Prior Patient Location"
  ], 
  "PV1-11": [
    "PV1.11", 
    "80", 
    "PL", 
    "O", 
    "1", 
    "Temporary Location"
  ], 
  "PV1-10": [
    "PV1.10", 
    "3", 
    "IS", 
    "O", 
    "1", 
    "0069", 
    "Hospital Service"
  ], 
  "PV1-13": [
    "PV1.13", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0092", 
    "Re-admission Indicator"
  ], 
  "PV1-12": [
    "PV1.12", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0087", 
    "Preadmit Test Indicator"
  ], 
  "PV1-15": [
    "PV1.15", 
    "2", 
    "IS", 
    "O", 
    "*", 
    "0009", 
    "Ambulatory Status"
  ], 
  "PV1-14": [
    "PV1.14", 
    "6", 
    "IS", 
    "O", 
    "1", 
    "0023", 
    "Admit Source"
  ], 
  "PV1-17": [
    "PV1.17", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "0010", 
    "Admitting Doctor"
  ], 
  "PV1-16": [
    "PV1.16", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0099", 
    "VIP Indicator"
  ], 
  "PV1-19": [
    "PV1.19", 
    "250", 
    "CX", 
    "O", 
    "1", 
    "Visit Number"
  ], 
  "PV1-18": [
    "PV1.18", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0018", 
    "Patient Type"
  ], 
  "PV1-31": [
    "PV1.31", 
    "10", 
    "IS", 
    "O", 
    "1", 
    "0021", 
    "Bad Debt Agency Code"
  ], 
  "PV1-30": [
    "PV1.30", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Transfer to Bad Debt Date"
  ], 
  "PV1-37": [
    "PV1.37", 
    "25", 
    "DLD", 
    "O", 
    "1", 
    "0113", 
    "Discharged to Location"
  ], 
  "PV1-36": [
    "PV1.36", 
    "3", 
    "IS", 
    "O", 
    "1", 
    "0112", 
    "Discharge Disposition"
  ], 
  "PV1-35": [
    "PV1.35", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Delete Account Date"
  ], 
  "PV1-34": [
    "PV1.34", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0111", 
    "Delete Account Indicator"
  ], 
  "PV1-33": [
    "PV1.33", 
    "12", 
    "NM", 
    "O", 
    "1", 
    "Bad Debt Recovery Amount"
  ], 
  "PV1-32": [
    "PV1.32", 
    "12", 
    "NM", 
    "O", 
    "1", 
    "Bad Debt Transfer Amount"
  ], 
  "PV1-51": [
    "PV1.51", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0326", 
    "Visit Indicator"
  ], 
  "PV1-50": [
    "PV1.50", 
    "250", 
    "CX", 
    "O", 
    "1", 
    "0203", 
    "Alternate Visit ID"
  ], 
  "PV1-52": [
    "PV1.52", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "0010", 
    "Other Healthcare Provider"
  ]
};
DB['PV1'] = PV1;

var PV2 = {
  "PV2-44": [
    "PV2.44", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0316", 
    "Organ Donor Code"
  ], 
  "PV2-43": [
    "PV2.43", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0315", 
    "Living Will Code"
  ], 
  "PV2-41": [
    "PV2.41", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0433", 
    "Precaution Code"
  ], 
  "PV2-42": [
    "PV2.42", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0434", 
    "Patient Condition Code"
  ], 
  "PV2-14": [
    "PV2.14", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Previous Service Date"
  ], 
  "PV2-15": [
    "PV2.15", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Employment Illness Related Indicator"
  ], 
  "PV2-16": [
    "PV2.16", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0213", 
    "Purge Status Code"
  ], 
  "PV2-17": [
    "PV2.17", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Purge Status Date"
  ], 
  "PV2-10": [
    "PV2.10", 
    "3", 
    "NM", 
    "O", 
    "1", 
    "Estimated Length of Inpatient Stay"
  ], 
  "PV2-11": [
    "PV2.11", 
    "3", 
    "NM", 
    "O", 
    "1", 
    "Actual Length of Inpatient Stay"
  ], 
  "PV2-12": [
    "PV2.12", 
    "50", 
    "ST", 
    "O", 
    "1", 
    "Visit Description"
  ], 
  "PV2-13": [
    "PV2.13", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Referral Source Code"
  ], 
  "PV2-40": [
    "PV2.40", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0432", 
    "Admission Level of Care Code"
  ], 
  "PV2-18": [
    "PV2.18", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0214", 
    "Special Program Code"
  ], 
  "PV2-19": [
    "PV2.19", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Retention Indicator"
  ], 
  "PV2-38": [
    "PV2.38", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0430", 
    "Mode of Arrival Code"
  ], 
  "PV2-39": [
    "PV2.39", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0431", 
    "Recreational Drug Use Code"
  ], 
  "PV2-32": [
    "PV2.32", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Billing Media Code"
  ], 
  "PV2-33": [
    "PV2.33", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Expected Surgery Date and Time"
  ], 
  "PV2-30": [
    "PV2.30", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0218", 
    "Patient Charge Adjustment Code"
  ], 
  "PV2-31": [
    "PV2.31", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0219", 
    "Recurring Service Code"
  ], 
  "PV2-36": [
    "PV2.36", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Newborn Baby Indicator"
  ], 
  "PV2-37": [
    "PV2.37", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Baby Detained Indicator"
  ], 
  "PV2-34": [
    "PV2.34", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Military Partnership Code"
  ], 
  "PV2-35": [
    "PV2.35", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Military Non-Availability Code"
  ], 
  "PV2-2": [
    "PV2.2", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0129", 
    "Accommodation Code"
  ], 
  "PV2-3": [
    "PV2.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Admit Reason"
  ], 
  "PV2-1": [
    "PV2.1", 
    "80", 
    "PL", 
    "C", 
    "1", 
    "Prior Pending Location"
  ], 
  "PV2-6": [
    "PV2.6", 
    "25", 
    "ST", 
    "O", 
    "1", 
    "Patient Valuables Location"
  ], 
  "PV2-7": [
    "PV2.7", 
    "2", 
    "IS", 
    "O", 
    "*", 
    "0130", 
    "Visit User Code"
  ], 
  "PV2-4": [
    "PV2.4", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Transfer Reason"
  ], 
  "PV2-5": [
    "PV2.5", 
    "25", 
    "ST", 
    "O", 
    "*", 
    "Patient Valuables"
  ], 
  "PV2-8": [
    "PV2.8", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Expected Admit Date/Time"
  ], 
  "PV2-9": [
    "PV2.9", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Expected Discharge Date/Time"
  ], 
  "PV2-29": [
    "PV2.29", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "First Similar Illness Date"
  ], 
  "PV2-28": [
    "PV2.28", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Signature on File Date"
  ], 
  "PV2-21": [
    "PV2.21", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0215", 
    "Visit Publicity Code"
  ], 
  "PV2-20": [
    "PV2.20", 
    "1", 
    "NM", 
    "O", 
    "1", 
    "Expected Number of Insurance Plans"
  ], 
  "PV2-23": [
    "PV2.23", 
    "250", 
    "XON", 
    "O", 
    "*", 
    "Clinic Organization Name"
  ], 
  "PV2-22": [
    "PV2.22", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Visit Protection Indicator"
  ], 
  "PV2-25": [
    "PV2.25", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0217", 
    "Visit Priority Code"
  ], 
  "PV2-24": [
    "PV2.24", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0216", 
    "Patient Status Code"
  ], 
  "PV2-27": [
    "PV2.27", 
    "2", 
    "IS", 
    "O", 
    "1", 
    "0112", 
    "Expected Discharge Disposition"
  ], 
  "PV2-26": [
    "PV2.26", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Previous Treatment Date"
  ], 
  "PV2-47": [
    "PV2.47", 
    "26", 
    "TS", 
    "C", 
    "1", 
    "Expected LOA Return Date/Time"
  ], 
  "PV2-46": [
    "PV2.46", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Patient Status Effective Date"
  ], 
  "PV2-45": [
    "PV2.45", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0435", 
    "Advance Directive Code"
  ]
};
DB['PV2'] = PV2;

var QAK = {
  "QAK-3": [
    "QAK.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Message Query Name"
  ], 
  "QAK-2": [
    "QAK.2", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0208", 
    "Query Response Status"
  ], 
  "QAK-1": [
    "QAK.1", 
    "32", 
    "ST", 
    "C", 
    "1", 
    "Query Tag"
  ], 
  "QAK-6": [
    "QAK.6", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Hits remaining"
  ], 
  "QAK-5": [
    "QAK.5", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "This payload"
  ], 
  "QAK-4": [
    "QAK.4", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Hit Count Total"
  ]
};
DB['QAK'] = QAK;

var QID = {
  "QID-1": [
    "QID.1", 
    "32", 
    "ST", 
    "R", 
    "1", 
    "Query Tag"
  ], 
  "QID-2": [
    "QID.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0471", 
    "Message Query Name"
  ]
};
DB['QID'] = QID;

var QPD = {
  "QPD-3": [
    "QPD.3", 
    "256", 
    "VARIES", 
    "O", 
    "1", 
    "User Parameters"
  ], 
  "QPD-2": [
    "QPD.2", 
    "32", 
    "ST", 
    "O", 
    "1", 
    "Query Tag"
  ], 
  "QPD-1": [
    "QPD.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0471", 
    "Message Query Name"
  ]
};
DB['QPD'] = QPD;

var QRD = {
  "QRD-12": [
    "QRD.12", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0108", 
    "Query Results Level"
  ], 
  "QRD-11": [
    "QRD.11", 
    "20", 
    "VR", 
    "O", 
    "*", 
    "What Data Code Value Qual."
  ], 
  "QRD-9": [
    "QRD.9", 
    "250", 
    "CE", 
    "R", 
    "*", 
    "0048", 
    "What Subject Filter"
  ], 
  "QRD-8": [
    "QRD.8", 
    "250", 
    "XCN", 
    "R", 
    "*", 
    "Who Subject Filter"
  ], 
  "QRD-5": [
    "QRD.5", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0107", 
    "Deferred Response Type"
  ], 
  "QRD-4": [
    "QRD.4", 
    "10", 
    "ST", 
    "R", 
    "1", 
    "Query ID"
  ], 
  "QRD-7": [
    "QRD.7", 
    "10", 
    "CQ", 
    "R", 
    "1", 
    "0126", 
    "Quantity Limited Request"
  ], 
  "QRD-6": [
    "QRD.6", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Deferred Response Date/Time"
  ], 
  "QRD-1": [
    "QRD.1", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Query Date/Time"
  ], 
  "QRD-10": [
    "QRD.10", 
    "250", 
    "CE", 
    "R", 
    "*", 
    "What Department Data Code"
  ], 
  "QRD-3": [
    "QRD.3", 
    "1", 
    "ID", 
    "R", 
    "1", 
    "0091", 
    "Query Priority"
  ], 
  "QRD-2": [
    "QRD.2", 
    "1", 
    "ID", 
    "R", 
    "1", 
    "0106", 
    "Query Format Code"
  ]
};
DB['QRD'] = QRD;

var QRF = {
  "QRF-3": [
    "QRF.3", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "When Data End Date/Time"
  ], 
  "QRF-2": [
    "QRF.2", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "When Data Start Date/Time"
  ], 
  "QRF-1": [
    "QRF.1", 
    "20", 
    "ST", 
    "R", 
    "*", 
    "Where Subject Filter"
  ], 
  "QRF-10": [
    "QRF.10", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Search Confidence Threshold"
  ], 
  "QRF-7": [
    "QRF.7", 
    "12", 
    "ID", 
    "O", 
    "*", 
    "0157", 
    "Which Date/Time Status Qualifier"
  ], 
  "QRF-6": [
    "QRF.6", 
    "12", 
    "ID", 
    "O", 
    "*", 
    "0156", 
    "Which Date/Time Qualifier"
  ], 
  "QRF-5": [
    "QRF.5", 
    "60", 
    "ST", 
    "O", 
    "*", 
    "Other QRY Subject Filter"
  ], 
  "QRF-4": [
    "QRF.4", 
    "60", 
    "ST", 
    "O", 
    "*", 
    "What User Qualifier"
  ], 
  "QRF-9": [
    "QRF.9", 
    "60", 
    "TQ", 
    "O", 
    "1", 
    "When Quantity/Timing Qualifier"
  ], 
  "QRF-8": [
    "QRF.8", 
    "12", 
    "ID", 
    "O", 
    "*", 
    "0158", 
    "Date/Time Selection Qualifier"
  ]
};
DB['QRF'] = QRF;

var QRI = {
  "QRI-1": [
    "QRI.1", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Candidate Confidence"
  ], 
  "QRI-2": [
    "QRI.2", 
    "2", 
    "IS", 
    "O", 
    "*", 
    "0392", 
    "Match Reason Code"
  ], 
  "QRI-3": [
    "QRI.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0393", 
    "Algorithm Descriptor"
  ]
};
DB['QRI'] = QRI;

var RCP = {
  "RCP-5": [
    "RCP.5", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0395", 
    "Modify Indicator"
  ], 
  "RCP-4": [
    "RCP.4", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Execution and Delivery Time"
  ], 
  "RCP-7": [
    "RCP.7", 
    "256", 
    "ID", 
    "O", 
    "*", 
    "Segment group inclusion"
  ], 
  "RCP-6": [
    "RCP.6", 
    "512", 
    "SRT", 
    "O", 
    "*", 
    "Sort-by Field"
  ], 
  "RCP-1": [
    "RCP.1", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0091", 
    "Query Priority"
  ], 
  "RCP-3": [
    "RCP.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0394", 
    "Response Modality"
  ], 
  "RCP-2": [
    "RCP.2", 
    "10", 
    "CQ", 
    "O", 
    "1", 
    "0126", 
    "Quantity Limited Request"
  ]
};
DB['RCP'] = RCP;

var RDF = {
  "RDF-2": [
    "RDF.2", 
    "40", 
    "RCD", 
    "R", 
    "*", 
    "0440", 
    "Column Description"
  ], 
  "RDF-1": [
    "RDF.1", 
    "3", 
    "NM", 
    "R", 
    "1", 
    "Number of Columns per Row"
  ]
};
DB['RDF'] = RDF;

var RDT = {
  "RDT-1": [
    "RDT.1", 
    "0", 
    "VARIES", 
    "R", 
    "1", 
    "Column Value"
  ]
};
DB['RDT'] = RDT;

var RF1 = {
  "RF1-11": [
    "RF1.11", 
    "30", 
    "EI", 
    "O", 
    "*", 
    "External Referral Identifier"
  ], 
  "RF1-10": [
    "RF1.10", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0336", 
    "Referral Reason"
  ], 
  "RF1-9": [
    "RF1.9", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Process Date"
  ], 
  "RF1-8": [
    "RF1.8", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Expiration Date"
  ], 
  "RF1-7": [
    "RF1.7", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Effective Date"
  ], 
  "RF1-6": [
    "RF1.6", 
    "30", 
    "EI", 
    "R", 
    "1", 
    "Originating Referral Identifier"
  ], 
  "RF1-5": [
    "RF1.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0284", 
    "Referral Category"
  ], 
  "RF1-4": [
    "RF1.4", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0282", 
    "Referral Disposition"
  ], 
  "RF1-3": [
    "RF1.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0281", 
    "Referral Type"
  ], 
  "RF1-2": [
    "RF1.2", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0280", 
    "Referral Priority"
  ], 
  "RF1-1": [
    "RF1.1", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0283", 
    "Referral Status"
  ]
};
DB['RF1'] = RF1;

var RGS = {
  "RGS-2": [
    "RGS.2", 
    "3", 
    "ID", 
    "C", 
    "1", 
    "0206", 
    "Segment Action Code"
  ], 
  "RGS-3": [
    "RGS.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Resource Group ID"
  ], 
  "RGS-1": [
    "RGS.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID - RGS"
  ]
};
DB['RGS'] = RGS;

var RMI = {
  "RMI-2": [
    "RMI.2", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date/Time Incident"
  ], 
  "RMI-3": [
    "RMI.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0428", 
    "Incident Type Code"
  ], 
  "RMI-1": [
    "RMI.1", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0427", 
    "Risk Management Incident Code"
  ]
};
DB['RMI'] = RMI;

var ROL = {
  "ROL-12": [
    "ROL.12", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Phone"
  ], 
  "ROL-11": [
    "ROL.11", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Office/Home Address"
  ], 
  "ROL-9": [
    "ROL.9", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Provider Type"
  ], 
  "ROL-8": [
    "ROL.8", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Role Action Reason"
  ], 
  "ROL-5": [
    "ROL.5", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Role Begin Date/Time"
  ], 
  "ROL-4": [
    "ROL.4", 
    "250", 
    "XCN", 
    "R", 
    "*", 
    "Role Person"
  ], 
  "ROL-7": [
    "ROL.7", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Role Duration"
  ], 
  "ROL-6": [
    "ROL.6", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Role End Date/Time"
  ], 
  "ROL-1": [
    "ROL.1", 
    "60", 
    "EI", 
    "C", 
    "1", 
    "Role Instance ID"
  ], 
  "ROL-10": [
    "ROL.10", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0406", 
    "Organization Unit Type - ROL"
  ], 
  "ROL-3": [
    "ROL.3", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0443", 
    "Role-ROL"
  ], 
  "ROL-2": [
    "ROL.2", 
    "2", 
    "ID", 
    "R", 
    "1", 
    "0287", 
    "Action Code"
  ]
};
DB['ROL'] = ROL;

var RQ1 = {
  "RQ1-6": [
    "RQ1.6", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Taxable"
  ], 
  "RQ1-7": [
    "RQ1.7", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Substitute Allowed"
  ], 
  "RQ1-4": [
    "RQ1.4", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Vendor ID"
  ], 
  "RQ1-5": [
    "RQ1.5", 
    "16", 
    "ST", 
    "C", 
    "1", 
    "Vendor Catalog"
  ], 
  "RQ1-2": [
    "RQ1.2", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Manufacturer Identifier"
  ], 
  "RQ1-3": [
    "RQ1.3", 
    "16", 
    "ST", 
    "C", 
    "1", 
    "Manufacturer's Catalog"
  ], 
  "RQ1-1": [
    "RQ1.1", 
    "10", 
    "ST", 
    "O", 
    "1", 
    "Anticipated Price"
  ]
};
DB['RQ1'] = RQ1;

var RQD = {
  "RQD-9": [
    "RQD.9", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Deliver To ID"
  ], 
  "RQD-8": [
    "RQD.8", 
    "30", 
    "IS", 
    "O", 
    "1", 
    "0320", 
    "Item Natural Account Code"
  ], 
  "RQD-7": [
    "RQD.7", 
    "30", 
    "IS", 
    "O", 
    "1", 
    "0319", 
    "Dept. Cost Center"
  ], 
  "RQD-6": [
    "RQD.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Requisition Unit of Measure"
  ], 
  "RQD-5": [
    "RQD.5", 
    "6", 
    "NM", 
    "O", 
    "1", 
    "Requisition Quantity"
  ], 
  "RQD-4": [
    "RQD.4", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Hospital Item Code"
  ], 
  "RQD-3": [
    "RQD.3", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Item Code - External"
  ], 
  "RQD-2": [
    "RQD.2", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Item Code - Internal"
  ], 
  "RQD-1": [
    "RQD.1", 
    "4", 
    "SI", 
    "O", 
    "1", 
    "Requisition Line Number"
  ], 
  "RQD-10": [
    "RQD.10", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Date Needed"
  ]
};
DB['RQD'] = RQD;

var RXA = {
  "RXA-1": [
    "RXA.1", 
    "4", 
    "NM", 
    "R", 
    "1", 
    "Give Sub-ID Counter"
  ], 
  "RXA-3": [
    "RXA.3", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Date/Time Start of Administration"
  ], 
  "RXA-2": [
    "RXA.2", 
    "4", 
    "NM", 
    "R", 
    "1", 
    "Administration Sub-ID Counter"
  ], 
  "RXA-5": [
    "RXA.5", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0292", 
    "Administered Code"
  ], 
  "RXA-4": [
    "RXA.4", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Date/Time End of Administration"
  ], 
  "RXA-7": [
    "RXA.7", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Administered Units"
  ], 
  "RXA-6": [
    "RXA.6", 
    "20", 
    "NM", 
    "R", 
    "1", 
    "Administered Amount"
  ], 
  "RXA-9": [
    "RXA.9", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Administration Notes"
  ], 
  "RXA-8": [
    "RXA.8", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Administered Dosage Form"
  ], 
  "RXA-19": [
    "RXA.19", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Indication"
  ], 
  "RXA-18": [
    "RXA.18", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Substance/Treatment Refusal Reason"
  ], 
  "RXA-11": [
    "RXA.11", 
    "200", 
    "LA2", 
    "C", 
    "1", 
    "Administered-at Location"
  ], 
  "RXA-10": [
    "RXA.10", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Administering Provider"
  ], 
  "RXA-13": [
    "RXA.13", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Administered Strength"
  ], 
  "RXA-12": [
    "RXA.12", 
    "20", 
    "ST", 
    "C", 
    "1", 
    "Administered Per"
  ], 
  "RXA-15": [
    "RXA.15", 
    "20", 
    "ST", 
    "O", 
    "*", 
    "Substance Lot Number"
  ], 
  "RXA-14": [
    "RXA.14", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Administered Strength Units"
  ], 
  "RXA-17": [
    "RXA.17", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0227", 
    "Substance Manufacturer Name"
  ], 
  "RXA-16": [
    "RXA.16", 
    "26", 
    "TS", 
    "O", 
    "*", 
    "Substance Expiration Date"
  ], 
  "RXA-20": [
    "RXA.20", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0322", 
    "Completion Status"
  ], 
  "RXA-21": [
    "RXA.21", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0323", 
    "Action Code-RXA"
  ], 
  "RXA-22": [
    "RXA.22", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "System Entry Date/Time"
  ]
};
DB['RXA'] = RXA;

var RXC = {
  "RXC-7": [
    "RXC.7", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Supplementary Code"
  ], 
  "RXC-6": [
    "RXC.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Component Strength Units"
  ], 
  "RXC-5": [
    "RXC.5", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Component Strength"
  ], 
  "RXC-4": [
    "RXC.4", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Component Units"
  ], 
  "RXC-3": [
    "RXC.3", 
    "20", 
    "NM", 
    "R", 
    "1", 
    "Component Amount"
  ], 
  "RXC-2": [
    "RXC.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Component Code"
  ], 
  "RXC-1": [
    "RXC.1", 
    "1", 
    "ID", 
    "R", 
    "1", 
    "0166", 
    "RX Component Type"
  ]
};
DB['RXC'] = RXC;

var RXD = {
  "RXD-23": [
    "RXD.23", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Dispense Package Size Unit"
  ], 
  "RXD-22": [
    "RXD.22", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Dispense Package Size"
  ], 
  "RXD-21": [
    "RXD.21", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Indication"
  ], 
  "RXD-20": [
    "RXD.20", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0227", 
    "Substance Manufacturer Name"
  ], 
  "RXD-27": [
    "RXD.27", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Packaging/Assembly Location"
  ], 
  "RXD-26": [
    "RXD.26", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Initiating Location"
  ], 
  "RXD-25": [
    "RXD.25", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Supplementary Code"
  ], 
  "RXD-24": [
    "RXD.24", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0321", 
    "Dispense Package Method"
  ], 
  "RXD-1": [
    "RXD.1", 
    "4", 
    "NM", 
    "R", 
    "1", 
    "Dispense Sub-ID Counter"
  ], 
  "RXD-2": [
    "RXD.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0292", 
    "Dispense/Give Code"
  ], 
  "RXD-3": [
    "RXD.3", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Date/Time Dispensed"
  ], 
  "RXD-4": [
    "RXD.4", 
    "20", 
    "NM", 
    "R", 
    "1", 
    "Actual Dispense Amount"
  ], 
  "RXD-5": [
    "RXD.5", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Actual Dispense Units"
  ], 
  "RXD-6": [
    "RXD.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Actual Dosage Form"
  ], 
  "RXD-7": [
    "RXD.7", 
    "20", 
    "ST", 
    "R", 
    "1", 
    "Prescription Number"
  ], 
  "RXD-8": [
    "RXD.8", 
    "20", 
    "NM", 
    "C", 
    "1", 
    "Number of Refills Remaining"
  ], 
  "RXD-9": [
    "RXD.9", 
    "200", 
    "ST", 
    "O", 
    "*", 
    "Dispense Notes"
  ], 
  "RXD-18": [
    "RXD.18", 
    "20", 
    "ST", 
    "O", 
    "*", 
    "Substance Lot Number"
  ], 
  "RXD-19": [
    "RXD.19", 
    "26", 
    "TS", 
    "O", 
    "*", 
    "Substance Expiration Date"
  ], 
  "RXD-12": [
    "RXD.12", 
    "10", 
    "CQ", 
    "O", 
    "1", 
    "Total Daily Dose"
  ], 
  "RXD-13": [
    "RXD.13", 
    "200", 
    "LA2", 
    "C", 
    "1", 
    "Dispense-To Location"
  ], 
  "RXD-10": [
    "RXD.10", 
    "200", 
    "XCN", 
    "O", 
    "*", 
    "Dispensing Provider"
  ], 
  "RXD-11": [
    "RXD.11", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0167", 
    "Substitution Status"
  ], 
  "RXD-16": [
    "RXD.16", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Actual Strength"
  ], 
  "RXD-17": [
    "RXD.17", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Actual Strength Unit"
  ], 
  "RXD-14": [
    "RXD.14", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Needs Human Review"
  ], 
  "RXD-15": [
    "RXD.15", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Pharmacy/Treatment Supplier's Special Dispensing Instructions"
  ]
};
DB['RXD'] = RXD;

var RXE = {
  "RXE-20": [
    "RXE.20", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Needs Human Review"
  ], 
  "RXE-21": [
    "RXE.21", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Pharmacy/Treatment Supplier's Special Dispensing Instructions"
  ], 
  "RXE-22": [
    "RXE.22", 
    "20", 
    "ST", 
    "C", 
    "1", 
    "Give Per"
  ], 
  "RXE-23": [
    "RXE.23", 
    "6", 
    "ST", 
    "O", 
    "1", 
    "Give Rate Amount"
  ], 
  "RXE-24": [
    "RXE.24", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Give Rate Units"
  ], 
  "RXE-25": [
    "RXE.25", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Give Strength"
  ], 
  "RXE-26": [
    "RXE.26", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Give Strength Units"
  ], 
  "RXE-27": [
    "RXE.27", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Give Indication"
  ], 
  "RXE-28": [
    "RXE.28", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Dispense Package Size"
  ], 
  "RXE-29": [
    "RXE.29", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Dispense Package Size Unit"
  ], 
  "RXE-5": [
    "RXE.5", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Give Units"
  ], 
  "RXE-4": [
    "RXE.4", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Give Amount - Maximum"
  ], 
  "RXE-7": [
    "RXE.7", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Provider's Administration Instructions"
  ], 
  "RXE-6": [
    "RXE.6", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Give Dosage Form"
  ], 
  "RXE-1": [
    "RXE.1", 
    "200", 
    "TQ", 
    "R", 
    "1", 
    "Quantity/Timing"
  ], 
  "RXE-3": [
    "RXE.3", 
    "20", 
    "NM", 
    "R", 
    "1", 
    "Give Amount - Minimum"
  ], 
  "RXE-2": [
    "RXE.2", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0292", 
    "Give Code"
  ], 
  "RXE-9": [
    "RXE.9", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0167", 
    "Substitution Status"
  ], 
  "RXE-8": [
    "RXE.8", 
    "200", 
    "LA1", 
    "C", 
    "1", 
    "Deliver-To Location"
  ], 
  "RXE-15": [
    "RXE.15", 
    "20", 
    "ST", 
    "C", 
    "1", 
    "Prescription Number"
  ], 
  "RXE-14": [
    "RXE.14", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Pharmacist/Treatment Supplier's Verifier ID"
  ], 
  "RXE-17": [
    "RXE.17", 
    "20", 
    "NM", 
    "C", 
    "1", 
    "Number of Refills/Doses Dispensed"
  ], 
  "RXE-16": [
    "RXE.16", 
    "20", 
    "NM", 
    "C", 
    "1", 
    "Number of Refills Remaining"
  ], 
  "RXE-11": [
    "RXE.11", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Dispense Units"
  ], 
  "RXE-10": [
    "RXE.10", 
    "20", 
    "NM", 
    "C", 
    "1", 
    "Dispense Amount"
  ], 
  "RXE-13": [
    "RXE.13", 
    "250", 
    "XCN", 
    "C", 
    "*", 
    "Ordering Provider's DEA Number"
  ], 
  "RXE-12": [
    "RXE.12", 
    "3", 
    "NM", 
    "O", 
    "1", 
    "Number of Refills"
  ], 
  "RXE-19": [
    "RXE.19", 
    "10", 
    "CQ", 
    "C", 
    "1", 
    "Total Daily Dose"
  ], 
  "RXE-18": [
    "RXE.18", 
    "26", 
    "TS", 
    "C", 
    "1", 
    "D/T of Most Recent Refill or Dose Dispensed"
  ], 
  "RXE-31": [
    "RXE.31", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Supplementary Code"
  ], 
  "RXE-30": [
    "RXE.30", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0321", 
    "Dispense Package Method"
  ]
};
DB['RXE'] = RXE;

var RXG = {
  "RXG-9": [
    "RXG.9", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Administration Notes"
  ], 
  "RXG-8": [
    "RXG.8", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Give Dosage Form"
  ], 
  "RXG-3": [
    "RXG.3", 
    "200", 
    "TQ", 
    "R", 
    "1", 
    "Quantity/Timing"
  ], 
  "RXG-2": [
    "RXG.2", 
    "4", 
    "NM", 
    "O", 
    "1", 
    "Dispense Sub-ID Counter"
  ], 
  "RXG-1": [
    "RXG.1", 
    "4", 
    "NM", 
    "R", 
    "1", 
    "Give Sub-ID Counter"
  ], 
  "RXG-7": [
    "RXG.7", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Give Units"
  ], 
  "RXG-6": [
    "RXG.6", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Give Amount - Maximum"
  ], 
  "RXG-5": [
    "RXG.5", 
    "20", 
    "NM", 
    "R", 
    "1", 
    "Give Amount - Minimum"
  ], 
  "RXG-4": [
    "RXG.4", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0292", 
    "Give Code"
  ], 
  "RXG-22": [
    "RXG.22", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Indication"
  ], 
  "RXG-20": [
    "RXG.20", 
    "26", 
    "TS", 
    "O", 
    "*", 
    "Substance Expiration Date"
  ], 
  "RXG-21": [
    "RXG.21", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0227", 
    "Substance Manufacturer Name"
  ], 
  "RXG-19": [
    "RXG.19", 
    "20", 
    "ST", 
    "O", 
    "*", 
    "Substance Lot Number"
  ], 
  "RXG-18": [
    "RXG.18", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Give Strength Units"
  ], 
  "RXG-13": [
    "RXG.13", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Pharmacy/Treatment Supplier's Special Administration Instructions"
  ], 
  "RXG-12": [
    "RXG.12", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Needs Human Review"
  ], 
  "RXG-11": [
    "RXG.11", 
    "200", 
    "LA2", 
    "O", 
    "1", 
    "Dispense-To Location"
  ], 
  "RXG-10": [
    "RXG.10", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0167", 
    "Substitution Status"
  ], 
  "RXG-17": [
    "RXG.17", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Give Strength"
  ], 
  "RXG-16": [
    "RXG.16", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Give Rate Units"
  ], 
  "RXG-15": [
    "RXG.15", 
    "6", 
    "ST", 
    "O", 
    "1", 
    "Give Rate Amount"
  ], 
  "RXG-14": [
    "RXG.14", 
    "20", 
    "ST", 
    "C", 
    "1", 
    "Give Per"
  ]
};
DB['RXG'] = RXG;

var RXO = {
  "RXO-22": [
    "RXO.22", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Requested Give Rate Units"
  ], 
  "RXO-23": [
    "RXO.23", 
    "10", 
    "CQ", 
    "O", 
    "1", 
    "Total Daily Dose"
  ], 
  "RXO-20": [
    "RXO.20", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Indication"
  ], 
  "RXO-21": [
    "RXO.21", 
    "6", 
    "ST", 
    "O", 
    "1", 
    "Requested Give Rate Amount"
  ], 
  "RXO-24": [
    "RXO.24", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Supplementary Code"
  ], 
  "RXO-3": [
    "RXO.3", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Requested Give Amount - Maximum"
  ], 
  "RXO-2": [
    "RXO.2", 
    "20", 
    "NM", 
    "C", 
    "1", 
    "Requested Give Amount - Minimum"
  ], 
  "RXO-1": [
    "RXO.1", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Requested Give Code"
  ], 
  "RXO-7": [
    "RXO.7", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Provider's Administration Instructions"
  ], 
  "RXO-6": [
    "RXO.6", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Provider's Pharmacy/Treatment Instructions"
  ], 
  "RXO-5": [
    "RXO.5", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Requested Dosage Form"
  ], 
  "RXO-4": [
    "RXO.4", 
    "250", 
    "CE", 
    "C", 
    "1", 
    "Requested Give Units"
  ], 
  "RXO-9": [
    "RXO.9", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0161", 
    "Allow Substitutions"
  ], 
  "RXO-8": [
    "RXO.8", 
    "200", 
    "LA1", 
    "O", 
    "1", 
    "Deliver-To Location"
  ], 
  "RXO-13": [
    "RXO.13", 
    "3", 
    "NM", 
    "O", 
    "1", 
    "Number of Refills"
  ], 
  "RXO-12": [
    "RXO.12", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Requested Dispense Units"
  ], 
  "RXO-11": [
    "RXO.11", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Requested Dispense Amount"
  ], 
  "RXO-10": [
    "RXO.10", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Requested Dispense Code"
  ], 
  "RXO-17": [
    "RXO.17", 
    "20", 
    "ST", 
    "C", 
    "1", 
    "Requested Give Per"
  ], 
  "RXO-16": [
    "RXO.16", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Needs Human Review"
  ], 
  "RXO-15": [
    "RXO.15", 
    "250", 
    "XCN", 
    "C", 
    "*", 
    "Pharmacist/Treatment Supplier's Verifier ID"
  ], 
  "RXO-14": [
    "RXO.14", 
    "250", 
    "XCN", 
    "C", 
    "*", 
    "Ordering Provider's DEA Number"
  ], 
  "RXO-19": [
    "RXO.19", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Requested Give Strength Units"
  ], 
  "RXO-18": [
    "RXO.18", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Requested Give Strength"
  ]
};
DB['RXO'] = RXO;

var RXR = {
  "RXR-2": [
    "RXR.2", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0163", 
    "Administration Site"
  ], 
  "RXR-3": [
    "RXR.3", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0164", 
    "Administration Device"
  ], 
  "RXR-1": [
    "RXR.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "0162", 
    "Route"
  ], 
  "RXR-4": [
    "RXR.4", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0165", 
    "Administration Method"
  ], 
  "RXR-5": [
    "RXR.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Routing Instruction"
  ]
};
DB['RXR'] = RXR;

var SAC = {
  "SAC-33": [
    "SAC.33", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Hemolysis Index Units"
  ], 
  "SAC-32": [
    "SAC.32", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Hemolysis Index"
  ], 
  "SAC-31": [
    "SAC.31", 
    "20", 
    "SN", 
    "O", 
    "1", 
    "Temperature"
  ], 
  "SAC-30": [
    "SAC.30", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0373", 
    "Treatment"
  ], 
  "SAC-37": [
    "SAC.37", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Icterus Index Units"
  ], 
  "SAC-36": [
    "SAC.36", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Icterus Index"
  ], 
  "SAC-35": [
    "SAC.35", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Lipemia Index Units"
  ], 
  "SAC-34": [
    "SAC.34", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Lipemia Index"
  ], 
  "SAC-39": [
    "SAC.39", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Fibrin Index Units"
  ], 
  "SAC-38": [
    "SAC.38", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Fibrin Index"
  ], 
  "SAC-19": [
    "SAC.19", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Bottom Delta"
  ], 
  "SAC-18": [
    "SAC.18", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Barrier Delta"
  ], 
  "SAC-11": [
    "SAC.11", 
    "80", 
    "NA", 
    "O", 
    "1", 
    "Position in Carrier"
  ], 
  "SAC-10": [
    "SAC.10", 
    "80", 
    "EI", 
    "O", 
    "1", 
    "Carrier Identifier"
  ], 
  "SAC-13": [
    "SAC.13", 
    "80", 
    "EI", 
    "O", 
    "1", 
    "Tray Identifier"
  ], 
  "SAC-12": [
    "SAC.12", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0379", 
    "Tray Type - SAC"
  ], 
  "SAC-15": [
    "SAC.15", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Location"
  ], 
  "SAC-14": [
    "SAC.14", 
    "80", 
    "NA", 
    "O", 
    "1", 
    "Position in Tray"
  ], 
  "SAC-17": [
    "SAC.17", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Container Diameter"
  ], 
  "SAC-16": [
    "SAC.16", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Container Height"
  ], 
  "SAC-24": [
    "SAC.24", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Volume  Units"
  ], 
  "SAC-25": [
    "SAC.25", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0380", 
    "Separator Type"
  ], 
  "SAC-26": [
    "SAC.26", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0381", 
    "Cap Type"
  ], 
  "SAC-27": [
    "SAC.27", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0371", 
    "Additive"
  ], 
  "SAC-20": [
    "SAC.20", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Container Height/Diameter/Delta Units"
  ], 
  "SAC-21": [
    "SAC.21", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Container Volume"
  ], 
  "SAC-22": [
    "SAC.22", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Available Volume"
  ], 
  "SAC-23": [
    "SAC.23", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Initial Specimen Volume"
  ], 
  "SAC-28": [
    "SAC.28", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Specimen Component"
  ], 
  "SAC-29": [
    "SAC.29", 
    "20", 
    "SN", 
    "O", 
    "1", 
    "Dilution Factor"
  ], 
  "SAC-44": [
    "SAC.44", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0377", 
    "Other Environmental Factors"
  ], 
  "SAC-42": [
    "SAC.42", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0375", 
    "Artificial Blood"
  ], 
  "SAC-43": [
    "SAC.43", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0376", 
    "Special Handling Considerations"
  ], 
  "SAC-40": [
    "SAC.40", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0374", 
    "System Induced Contaminants"
  ], 
  "SAC-41": [
    "SAC.41", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0382", 
    "Drug Interference"
  ], 
  "SAC-1": [
    "SAC.1", 
    "80", 
    "EI", 
    "O", 
    "1", 
    "External Accession Identifier"
  ], 
  "SAC-3": [
    "SAC.3", 
    "80", 
    "EI", 
    "O", 
    "1", 
    "Container Identifier"
  ], 
  "SAC-2": [
    "SAC.2", 
    "80", 
    "EI", 
    "O", 
    "1", 
    "Accession Identifier"
  ], 
  "SAC-5": [
    "SAC.5", 
    "80", 
    "EI", 
    "O", 
    "1", 
    "Equipment Container Identifier"
  ], 
  "SAC-4": [
    "SAC.4", 
    "80", 
    "EI", 
    "O", 
    "1", 
    "Primary"
  ], 
  "SAC-7": [
    "SAC.7", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Registration Date/Time"
  ], 
  "SAC-6": [
    "SAC.6", 
    "300", 
    "SPS", 
    "O", 
    "1", 
    "Specimen Source"
  ], 
  "SAC-9": [
    "SAC.9", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0378", 
    "Carrier Type"
  ], 
  "SAC-8": [
    "SAC.8", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0370", 
    "Container Status"
  ]
};
DB['SAC'] = SAC;

var SCH = {
  "SCH-23": [
    "SCH.23", 
    "75", 
    "EI", 
    "O", 
    "1", 
    "Parent Placer Appointment ID"
  ], 
  "SCH-22": [
    "SCH.22", 
    "80", 
    "PL", 
    "O", 
    "1", 
    "Entered by Location"
  ], 
  "SCH-21": [
    "SCH.21", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Entered By Phone Number"
  ], 
  "SCH-20": [
    "SCH.20", 
    "250", 
    "XCN", 
    "R", 
    "*", 
    "Entered By Person"
  ], 
  "SCH-27": [
    "SCH.27", 
    "22", 
    "EI", 
    "C", 
    "*", 
    "Filler Order Number"
  ], 
  "SCH-26": [
    "SCH.26", 
    "22", 
    "EI", 
    "C", 
    "*", 
    "Placer Order Number"
  ], 
  "SCH-25": [
    "SCH.25", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0278", 
    "Filler Status Code"
  ], 
  "SCH-24": [
    "SCH.24", 
    "75", 
    "EI", 
    "C", 
    "1", 
    "Parent Filler Appointment ID"
  ], 
  "SCH-8": [
    "SCH.8", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0277", 
    "Appointment Type"
  ], 
  "SCH-9": [
    "SCH.9", 
    "20", 
    "NM", 
    "O", 
    "1", 
    "Appointment Duration"
  ], 
  "SCH-1": [
    "SCH.1", 
    "75", 
    "EI", 
    "C", 
    "1", 
    "Placer Appointment ID"
  ], 
  "SCH-2": [
    "SCH.2", 
    "75", 
    "EI", 
    "C", 
    "1", 
    "Filler Appointment ID"
  ], 
  "SCH-3": [
    "SCH.3", 
    "5", 
    "NM", 
    "C", 
    "1", 
    "Occurrence Number"
  ], 
  "SCH-4": [
    "SCH.4", 
    "22", 
    "EI", 
    "O", 
    "1", 
    "Placer Group Number"
  ], 
  "SCH-5": [
    "SCH.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Schedule ID"
  ], 
  "SCH-6": [
    "SCH.6", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Event Reason"
  ], 
  "SCH-7": [
    "SCH.7", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0276", 
    "Appointment Reason"
  ], 
  "SCH-12": [
    "SCH.12", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Placer Contact Person"
  ], 
  "SCH-13": [
    "SCH.13", 
    "250", 
    "XTN", 
    "O", 
    "1", 
    "Placer Contact Phone Number"
  ], 
  "SCH-10": [
    "SCH.10", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Appointment Duration Units"
  ], 
  "SCH-11": [
    "SCH.11", 
    "200", 
    "TQ", 
    "R", 
    "*", 
    "Appointment Timing Quantity"
  ], 
  "SCH-16": [
    "SCH.16", 
    "250", 
    "XCN", 
    "R", 
    "*", 
    "Filler Contact Person"
  ], 
  "SCH-17": [
    "SCH.17", 
    "250", 
    "XTN", 
    "O", 
    "1", 
    "Filler Contact Phone Number"
  ], 
  "SCH-14": [
    "SCH.14", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Placer Contact Address"
  ], 
  "SCH-15": [
    "SCH.15", 
    "80", 
    "PL", 
    "O", 
    "1", 
    "Placer Contact Location"
  ], 
  "SCH-18": [
    "SCH.18", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Filler Contact Address"
  ], 
  "SCH-19": [
    "SCH.19", 
    "80", 
    "PL", 
    "O", 
    "1", 
    "Filler Contact Location"
  ]
};
DB['SCH'] = SCH;

var SID = {
  "SID-4": [
    "SID.4", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0385", 
    "Substance Manufacturer Identifier"
  ], 
  "SID-2": [
    "SID.2", 
    "20", 
    "ST", 
    "O", 
    "1", 
    "Substance Lot Number"
  ], 
  "SID-3": [
    "SID.3", 
    "200", 
    "ST", 
    "O", 
    "1", 
    "Substance Container Identifier"
  ], 
  "SID-1": [
    "SID.1", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Application / Method Identifier"
  ]
};
DB['SID'] = SID;

var SPR = {
  "SPR-4": [
    "SPR.4", 
    "256", 
    "QIP", 
    "O", 
    "*", 
    "Input Parameter List"
  ], 
  "SPR-3": [
    "SPR.3", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Stored Procedure Name"
  ], 
  "SPR-2": [
    "SPR.2", 
    "1", 
    "ID", 
    "R", 
    "1", 
    "0106", 
    "Query/Response Format Code"
  ], 
  "SPR-1": [
    "SPR.1", 
    "32", 
    "ST", 
    "O", 
    "1", 
    "Query Tag"
  ]
};
DB['SPR'] = SPR;

var STF = {
  "STF-28": [
    "STF.28", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0189", 
    "Ethnic Group"
  ], 
  "STF-29": [
    "STF.29", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Re-activation Approval Indicator"
  ], 
  "STF-26": [
    "STF.26", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Date Next DMV Review"
  ], 
  "STF-27": [
    "STF.27", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0005", 
    "Race"
  ], 
  "STF-24": [
    "STF.24", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Auto Ins. Expires"
  ], 
  "STF-25": [
    "STF.25", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Date Last DMV Review"
  ], 
  "STF-22": [
    "STF.22", 
    "25", 
    "DLN", 
    "O", 
    "1", 
    "Driver's License Number - Staff"
  ], 
  "STF-23": [
    "STF.23", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Copy  Auto Ins"
  ], 
  "STF-20": [
    "STF.20", 
    "2", 
    "CE", 
    "O", 
    "1", 
    "0066", 
    "Employment Status Code"
  ], 
  "STF-21": [
    "STF.21", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Additional Insured on  Auto"
  ], 
  "STF-9": [
    "STF.9", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0069", 
    "Hospital Service"
  ], 
  "STF-8": [
    "STF.8", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0184", 
    "Department"
  ], 
  "STF-7": [
    "STF.7", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0183", 
    "Active/Inactive Flag"
  ], 
  "STF-6": [
    "STF.6", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Date/Time Of Birth"
  ], 
  "STF-5": [
    "STF.5", 
    "1", 
    "IS", 
    "O", 
    "1", 
    "0001", 
    "Administrative Sex"
  ], 
  "STF-4": [
    "STF.4", 
    "2", 
    "IS", 
    "O", 
    "*", 
    "0182", 
    "Staff Type"
  ], 
  "STF-3": [
    "STF.3", 
    "250", 
    "XPN", 
    "O", 
    "*", 
    "Staff Name"
  ], 
  "STF-2": [
    "STF.2", 
    "60", 
    "CX", 
    "O", 
    "*", 
    "Staff ID Code"
  ], 
  "STF-1": [
    "STF.1", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Primary Key Value - STF"
  ], 
  "STF-17": [
    "STF.17", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0002", 
    "Marital Status"
  ], 
  "STF-16": [
    "STF.16", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0185", 
    "Preferred Method of Contact"
  ], 
  "STF-15": [
    "STF.15", 
    "40", 
    "ST", 
    "O", 
    "*", 
    "E-Mail Address"
  ], 
  "STF-14": [
    "STF.14", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "Backup Person ID"
  ], 
  "STF-13": [
    "STF.13", 
    "26", 
    "DIN", 
    "O", 
    "*", 
    "Institution Inactivation Date"
  ], 
  "STF-12": [
    "STF.12", 
    "26", 
    "DIN", 
    "O", 
    "*", 
    "Institution Activation Date"
  ], 
  "STF-11": [
    "STF.11", 
    "250", 
    "XAD", 
    "O", 
    "*", 
    "Office/Home Address"
  ], 
  "STF-10": [
    "STF.10", 
    "250", 
    "XTN", 
    "O", 
    "*", 
    "Phone"
  ], 
  "STF-19": [
    "STF.19", 
    "20", 
    "JCC", 
    "O", 
    "1", 
    "Job Code/Class"
  ], 
  "STF-18": [
    "STF.18", 
    "20", 
    "ST", 
    "O", 
    "1", 
    "Job Title"
  ]
};
DB['STF'] = STF;

var TCC = {
  "TCC-12": [
    "TCC.12", 
    "20", 
    "SN", 
    "O", 
    "1", 
    "Equipment Dynamic Range"
  ], 
  "TCC-13": [
    "TCC.13", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Units"
  ], 
  "TCC-10": [
    "TCC.10", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Automatic Repeat Allowed"
  ], 
  "TCC-11": [
    "TCC.11", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Automatic Reflex Allowed"
  ], 
  "TCC-14": [
    "TCC.14", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0388", 
    "Processing Type"
  ], 
  "TCC-1": [
    "TCC.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Universal Service Identifier"
  ], 
  "TCC-2": [
    "TCC.2", 
    "80", 
    "EI", 
    "R", 
    "1", 
    "Test Application Identifier"
  ], 
  "TCC-3": [
    "TCC.3", 
    "300", 
    "SPS", 
    "O", 
    "1", 
    "Specimen Source"
  ], 
  "TCC-4": [
    "TCC.4", 
    "20", 
    "SN", 
    "O", 
    "1", 
    "Auto-Dilution Factor Default"
  ], 
  "TCC-5": [
    "TCC.5", 
    "20", 
    "SN", 
    "O", 
    "1", 
    "Rerun Dilution Factor Default"
  ], 
  "TCC-6": [
    "TCC.6", 
    "20", 
    "SN", 
    "O", 
    "1", 
    "Pre-Dilution Factor Default"
  ], 
  "TCC-7": [
    "TCC.7", 
    "20", 
    "SN", 
    "O", 
    "1", 
    "Endogenous Content of Pre-Dilution Diluent"
  ], 
  "TCC-8": [
    "TCC.8", 
    "10", 
    "NM", 
    "O", 
    "1", 
    "Inventory Limits Warning Level"
  ], 
  "TCC-9": [
    "TCC.9", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Automatic Rerun Allowed"
  ]
};
DB['TCC'] = TCC;

var TCD = {
  "TCD-7": [
    "TCD.7", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Reflex Allowed"
  ], 
  "TCD-6": [
    "TCD.6", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0136", 
    "Automatic Repeat Allowed"
  ], 
  "TCD-5": [
    "TCD.5", 
    "20", 
    "SN", 
    "O", 
    "1", 
    "Endogenous Content of Pre-Dilution Diluent"
  ], 
  "TCD-4": [
    "TCD.4", 
    "20", 
    "SN", 
    "O", 
    "1", 
    "Pre-Dilution Factor"
  ], 
  "TCD-3": [
    "TCD.3", 
    "20", 
    "SN", 
    "O", 
    "1", 
    "Rerun Dilution Factor"
  ], 
  "TCD-2": [
    "TCD.2", 
    "20", 
    "SN", 
    "O", 
    "1", 
    "Auto-Dilution Factor"
  ], 
  "TCD-1": [
    "TCD.1", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Universal Service Identifier"
  ], 
  "TCD-8": [
    "TCD.8", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0389", 
    "Analyte Repeat Status"
  ]
};
DB['TCD'] = TCD;

var TXA = {
  "TXA-9": [
    "TXA.9", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Originator Code/Name"
  ], 
  "TXA-8": [
    "TXA.8", 
    "26", 
    "TS", 
    "O", 
    "*", 
    "Edit Date/Time"
  ], 
  "TXA-3": [
    "TXA.3", 
    "2", 
    "ID", 
    "C", 
    "1", 
    "0191", 
    "Document Content Presentation"
  ], 
  "TXA-2": [
    "TXA.2", 
    "30", 
    "IS", 
    "R", 
    "1", 
    "0270", 
    "Document Type"
  ], 
  "TXA-1": [
    "TXA.1", 
    "4", 
    "SI", 
    "R", 
    "1", 
    "Set ID- TXA"
  ], 
  "TXA-7": [
    "TXA.7", 
    "26", 
    "TS", 
    "C", 
    "1", 
    "Transcription Date/Time"
  ], 
  "TXA-6": [
    "TXA.6", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Origination Date/Time"
  ], 
  "TXA-5": [
    "TXA.5", 
    "250", 
    "XCN", 
    "C", 
    "*", 
    "Primary Activity Provider Code/Name"
  ], 
  "TXA-4": [
    "TXA.4", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Activity Date/Time"
  ], 
  "TXA-22": [
    "TXA.22", 
    "250", 
    "PPN", 
    "C", 
    "*", 
    "Authentication Person, Time Stamp"
  ], 
  "TXA-23": [
    "TXA.23", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Distributed Copies"
  ], 
  "TXA-20": [
    "TXA.20", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0275", 
    "Document Storage Status"
  ], 
  "TXA-21": [
    "TXA.21", 
    "30", 
    "ST", 
    "C", 
    "1", 
    "Document Change Reason"
  ], 
  "TXA-19": [
    "TXA.19", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0273", 
    "Document Availability Status"
  ], 
  "TXA-18": [
    "TXA.18", 
    "2", 
    "ID", 
    "O", 
    "1", 
    "0272", 
    "Document Confidentiality Status"
  ], 
  "TXA-13": [
    "TXA.13", 
    "30", 
    "EI", 
    "C", 
    "1", 
    "Parent Document Number"
  ], 
  "TXA-12": [
    "TXA.12", 
    "30", 
    "EI", 
    "R", 
    "1", 
    "Unique Document Number"
  ], 
  "TXA-11": [
    "TXA.11", 
    "250", 
    "XCN", 
    "C", 
    "*", 
    "Transcriptionist Code/Name"
  ], 
  "TXA-10": [
    "TXA.10", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Assigned Document Authenticator"
  ], 
  "TXA-17": [
    "TXA.17", 
    "2", 
    "ID", 
    "R", 
    "1", 
    "0271", 
    "Document Completion Status"
  ], 
  "TXA-16": [
    "TXA.16", 
    "30", 
    "ST", 
    "O", 
    "1", 
    "Unique Document File Name"
  ], 
  "TXA-15": [
    "TXA.15", 
    "22", 
    "EI", 
    "O", 
    "1", 
    "Filler Order Number"
  ], 
  "TXA-14": [
    "TXA.14", 
    "22", 
    "EI", 
    "O", 
    "*", 
    "Placer Order Number"
  ]
};
DB['TXA'] = TXA;

var UB1 = {
  "UB1-23": [
    "UB1.23", 
    "17", 
    "ST", 
    "O", 
    "1", 
    "UB-82 Locator 45"
  ], 
  "UB1-22": [
    "UB1.22", 
    "8", 
    "ST", 
    "O", 
    "1", 
    "UB-82 Locator 27"
  ], 
  "UB1-21": [
    "UB1.21", 
    "7", 
    "ST", 
    "O", 
    "1", 
    "UB-82 Locator 9"
  ], 
  "UB1-20": [
    "UB1.20", 
    "30", 
    "ST", 
    "O", 
    "1", 
    "UB-82 Locator 2"
  ], 
  "UB1-8": [
    "UB1.8", 
    "3", 
    "NM", 
    "O", 
    "1", 
    "Covered Days -"
  ], 
  "UB1-9": [
    "UB1.9", 
    "3", 
    "NM", 
    "O", 
    "1", 
    "Non Covered Days -"
  ], 
  "UB1-1": [
    "UB1.1", 
    "4", 
    "SI", 
    "O", 
    "1", 
    "Set ID - UB1"
  ], 
  "UB1-2": [
    "UB1.2", 
    "1", 
    "NM", 
    "O", 
    "1", 
    "Blood Deductible"
  ], 
  "UB1-3": [
    "UB1.3", 
    "2", 
    "NM", 
    "O", 
    "1", 
    "Blood Furnished-Pints Of"
  ], 
  "UB1-4": [
    "UB1.4", 
    "2", 
    "NM", 
    "O", 
    "1", 
    "Blood Replaced-Pints"
  ], 
  "UB1-5": [
    "UB1.5", 
    "2", 
    "NM", 
    "O", 
    "1", 
    "Blood Not Replaced-Pints"
  ], 
  "UB1-6": [
    "UB1.6", 
    "2", 
    "NM", 
    "O", 
    "1", 
    "Co-Insurance Days"
  ], 
  "UB1-7": [
    "UB1.7", 
    "14", 
    "IS", 
    "O", 
    "5", 
    "0043", 
    "Condition Code"
  ], 
  "UB1-12": [
    "UB1.12", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0348", 
    "Special Program Indicator"
  ], 
  "UB1-13": [
    "UB1.13", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0349", 
    "PSRO/UR Approval Indicator"
  ], 
  "UB1-10": [
    "UB1.10", 
    "12", 
    "UVC", 
    "O", 
    "8", 
    "0153", 
    "Value Amount ", 
    "&", 
    " Code"
  ], 
  "UB1-11": [
    "UB1.11", 
    "2", 
    "NM", 
    "O", 
    "1", 
    "Number Of Grace Days"
  ], 
  "UB1-16": [
    "UB1.16", 
    "20", 
    "OCD", 
    "O", 
    "5", 
    "0350", 
    "Occurrence"
  ], 
  "UB1-17": [
    "UB1.17", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "0351", 
    "Occurrence Span"
  ], 
  "UB1-14": [
    "UB1.14", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "PSRO/UR Approved Stay-Fm"
  ], 
  "UB1-15": [
    "UB1.15", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "PSRO/UR Approved Stay-To"
  ], 
  "UB1-18": [
    "UB1.18", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Occur Span Start Date"
  ], 
  "UB1-19": [
    "UB1.19", 
    "8", 
    "DT", 
    "O", 
    "1", 
    "Occur Span End Date"
  ]
};
DB['UB1'] = UB1;

var UB2 = {
  "UB2-13": [
    "UB2.13", 
    "4", 
    "ST", 
    "O", 
    "23", 
    "UB92 Locator 49"
  ], 
  "UB2-15": [
    "UB2.15", 
    "27", 
    "ST", 
    "O", 
    "1", 
    "UB92 Locator 57"
  ], 
  "UB2-12": [
    "UB2.12", 
    "23", 
    "ST", 
    "O", 
    "3", 
    "Document Control Number"
  ], 
  "UB2-14": [
    "UB2.14", 
    "14", 
    "ST", 
    "O", 
    "5", 
    "UB92 Locator 56"
  ], 
  "UB2-11": [
    "UB2.11", 
    "5", 
    "ST", 
    "O", 
    "1", 
    "UB92 Locator 31"
  ], 
  "UB2-3": [
    "UB2.3", 
    "2", 
    "IS", 
    "O", 
    "7", 
    "0043", 
    "Condition Code"
  ], 
  "UB2-2": [
    "UB2.2", 
    "3", 
    "ST", 
    "O", 
    "1", 
    "Co-Insurance Days"
  ], 
  "UB2-1": [
    "UB2.1", 
    "4", 
    "SI", 
    "O", 
    "1", 
    "Set ID - UB2"
  ], 
  "UB2-10": [
    "UB2.10", 
    "12", 
    "ST", 
    "O", 
    "2", 
    "UB92 Locator 11"
  ], 
  "UB2-7": [
    "UB2.7", 
    "11", 
    "OCD", 
    "O", 
    "8", 
    "0350", 
    "Occurrence Code ", 
    "&", 
    " Date"
  ], 
  "UB2-6": [
    "UB2.6", 
    "11", 
    "UVC", 
    "O", 
    "12", 
    "0153", 
    "Value Amount ", 
    "&", 
    " Code"
  ], 
  "UB2-5": [
    "UB2.5", 
    "4", 
    "ST", 
    "O", 
    "1", 
    "Non-Covered Days"
  ], 
  "UB2-4": [
    "UB2.4", 
    "3", 
    "ST", 
    "O", 
    "1", 
    "Covered Days"
  ], 
  "UB2-17": [
    "UB2.17", 
    "3", 
    "NM", 
    "O", 
    "1", 
    "Special Visit Count"
  ], 
  "UB2-9": [
    "UB2.9", 
    "29", 
    "ST", 
    "O", 
    "2", 
    "UB92 Locator 2"
  ], 
  "UB2-8": [
    "UB2.8", 
    "28", 
    "OSP", 
    "O", 
    "2", 
    "0351", 
    "Occurrence Span Code/Dates"
  ], 
  "UB2-16": [
    "UB2.16", 
    "2", 
    "ST", 
    "O", 
    "2", 
    "UB92 Locator 78"
  ]
};
DB['UB2'] = UB2;

var URD = {
  "URD-1": [
    "URD.1", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "R/U Date/Time"
  ], 
  "URD-3": [
    "URD.3", 
    "250", 
    "XCN", 
    "R", 
    "*", 
    "R/U Who Subject Definition"
  ], 
  "URD-2": [
    "URD.2", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0109", 
    "Report Priority"
  ], 
  "URD-5": [
    "URD.5", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "R/U What Department Code"
  ], 
  "URD-4": [
    "URD.4", 
    "250", 
    "CE", 
    "O", 
    "*", 
    "0048", 
    "R/U What Subject Definition"
  ], 
  "URD-7": [
    "URD.7", 
    "1", 
    "ID", 
    "O", 
    "1", 
    "0108", 
    "R/U Results Level"
  ], 
  "URD-6": [
    "URD.6", 
    "20", 
    "ST", 
    "O", 
    "*", 
    "R/U Display/Print Locations"
  ]
};
DB['URD'] = URD;

var URS = {
  "URS-6": [
    "URS.6", 
    "12", 
    "ID", 
    "O", 
    "*", 
    "0156", 
    "R/U Which Date/Time Qualifier"
  ], 
  "URS-7": [
    "URS.7", 
    "12", 
    "ID", 
    "O", 
    "*", 
    "0157", 
    "R/U Which Date/Time Status Qualifier"
  ], 
  "URS-4": [
    "URS.4", 
    "20", 
    "ST", 
    "O", 
    "*", 
    "R/U What User Qualifier"
  ], 
  "URS-5": [
    "URS.5", 
    "20", 
    "ST", 
    "O", 
    "*", 
    "R/U Other Results Subject Definition"
  ], 
  "URS-2": [
    "URS.2", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "R/U When Data Start Date/Time"
  ], 
  "URS-3": [
    "URS.3", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "R/U When Data End Date/Time"
  ], 
  "URS-1": [
    "URS.1", 
    "20", 
    "ST", 
    "R", 
    "*", 
    "R/U Where Subject Definition"
  ], 
  "URS-8": [
    "URS.8", 
    "12", 
    "ID", 
    "O", 
    "*", 
    "0158", 
    "R/U Date/Time Selection Qualifier"
  ], 
  "URS-9": [
    "URS.9", 
    "60", 
    "TQ", 
    "O", 
    "1", 
    "R/U Quantity/Timing Qualifier"
  ]
};
DB['URS'] = URS;

var VAR = {
  "VAR-1": [
    "VAR.1", 
    "60", 
    "EI", 
    "R", 
    "1", 
    "Variance Instance ID"
  ], 
  "VAR-3": [
    "VAR.3", 
    "26", 
    "TS", 
    "O", 
    "1", 
    "Stated Variance Date/Time"
  ], 
  "VAR-2": [
    "VAR.2", 
    "26", 
    "TS", 
    "R", 
    "1", 
    "Documented Date/Time"
  ], 
  "VAR-5": [
    "VAR.5", 
    "250", 
    "CE", 
    "O", 
    "1", 
    "Variance Classification"
  ], 
  "VAR-4": [
    "VAR.4", 
    "250", 
    "XCN", 
    "O", 
    "*", 
    "Variance Originator"
  ], 
  "VAR-6": [
    "VAR.6", 
    "512", 
    "ST", 
    "O", 
    "*", 
    "Variance Description"
  ]
};
DB['VAR'] = VAR;

var VTQ = {
  "VTQ-1": [
    "VTQ.1", 
    "32", 
    "ST", 
    "O", 
    "1", 
    "Query Tag"
  ], 
  "VTQ-3": [
    "VTQ.3", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "VT Query Name"
  ], 
  "VTQ-2": [
    "VTQ.2", 
    "1", 
    "ID", 
    "R", 
    "1", 
    "0106", 
    "Query/Response Format Code"
  ], 
  "VTQ-5": [
    "VTQ.5", 
    "256", 
    "QSC", 
    "O", 
    "*", 
    "Selection Criteria"
  ], 
  "VTQ-4": [
    "VTQ.4", 
    "250", 
    "CE", 
    "R", 
    "1", 
    "Virtual Table Name"
  ]
};
DB['VTQ'] = VTQ;

