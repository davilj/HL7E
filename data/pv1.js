"PV1-1 Set ID - PV1 (SI) 00131
Definition: This field contains the number that identifies this transaction. For the first occurrence of the
segment, the sequence number shall be one, for the second occurrence, the sequence number shall be two,
etc.
"PV1-2 Patient class (IS) 00132
Definition: This field is used by systems to categorize patients by site. It does not have a consistent
industry-wide definition. It is subject to site-specific variations. Refer to User-defined Table 0004 -
Patient class for suggested values.
"PV1-3 Assigned patient location (PL) 00133
Components: <point of care (IS)> ^ <room (IS)> ^ <bed (IS)> ^ <facility (HD)> ^ <location status
(IS)> ^ <person location type (IS)> ^ <building (IS)> ^ <floor (IS)> ^ <location
description (ST)
Subcomponents of facility: <namespace ID (IS)> & <universal ID (ST)> & <universal ID type (ID)>
Definition: This field contains the patient’s initial assigned location or the location to which the patient is
being moved. The first component may be the nursing station for inpatient locations, or clinic or
department, for locations other than inpatient. For canceling a transaction or discharging a patient, the current location (after the cancellation event or before the discharge event) should be in this field. If a
value exists in the fifth component (location status), it supersedes the value in "PV1-40 - Bed Status.
"PV1-4 Admission type (IS) 00134
Definition: This field indicates the circumstances under which the patient was or will be admitted. Refer
to User-defined Table 0007 - Admission type for suggested values. In the US, it is recommended to report
the UB92 FL 19 "Type of Admission" in this field.
"PV1-5 Preadmit number (CX) 00135
Definition: This field uniquely identifies the patient’s pre-admit account. Some systems will continue to
use the pre-admit number as the billing number after the patient has been admitted. For backward
compatibility, a ST data type can be sent; however HL7 recommends use of the CX data type, like the
account number, for new implementations. The assigning authority and identifier type code are strongly
recommended for all CX data types.
"PV1-6 Prior patient location (PL) 00136
Definition: This field contains the prior patient location if the patient is being transferred. The old
location is null if the patient is new. If a value exists in the fifth component (location status), it supersedes
the value in PV1-40 - bed status.
"PV1-7 Attending doctor (XCN) 00137
Definition: This field contains the attending physician information. Multiple names and identifiers for
the same physician may be sent. The field sequences are not used to indicate multiple attending doctors.
The legal name must be sent in the first sequence. If the legal name is not sent, then a repeat delimiter
must be sent in the first sequence. Depending on local agreements, either ID or the name may be absent
in this field. Refer to User-defined Table 0010 - Physician ID for suggested values.
"PV1-8 Referring doctor (XCN) 00138
Definition: This field contains the referring physician information. Multiple names and identifiers for
the same physician may be sent. The field sequences are not used to indicate multiple referring doctors.
The legal name must be sent in the first sequence. If the legal name is not sent, then a repeat delimiter
must be sent in the first sequence. Depending on local agreements, either the ID or the name may be
absent from this field. Refer to User-defined Table 0010 - Physician ID for suggested values.
"PV1-9 Consulting doctor (XCN) 00139
Definition: This field has been retained for backward compatibility only. It is recommended to use
the ROL - Role segment for consulting physicians instead. This field contains the consulting physician
information. The field sequences are used to indicate multiple consulting doctors. Depending on local
agreements, either the ID or the name may be absent from this field. Refer to User-defined Table 0010 -
Physician ID for suggested values.
"PV1-10 Hospital service (IS) 00140
Definition: This field contains the treatment or type of surgery that the patient is scheduled to receive. It
is a required field with trigger events A01 (admit/visit notification), A02 (transfer a patient), A14
(pending admit), A15 (pending transfer). Refer to User-defined Table 0069 - Hospital service for
suggested values.
"PV1-11 Temporary location (PL) 00141
Definition: This field contains a location other than the assigned location required for a temporary period
of time (e.g., OR, operating theatre, etc.). If a value exists in the fifth component (location status), it
supersedes the value in PV1-40 - bed status.
"PV1-12 Preadmit test indicator (IS) 00142
Definition: This field indicates whether the patient must have pre-admission testing done in order to be
admitted. Refer to User-defined Table 0087 - Pre-admit test indicator for suggested values.
"PV1-13 Re-admission indicator (IS) 00143
Definition: This field indicates that a patient is being re-admitted to the healthcare facility and gives the
circumstances. We suggest using "R" for readmission or else null. Refer to User-defined Table 0092 -
Re-admission indicator for suggested values.
"PV1-14 Admit source (IS) 00144
Definition: This field indicates where the patient was admitted. Refer to User-defined Table 0023 -
Admit source for suggested values. In the US, this field is used on UB92 FL20 "Source of Admission".
The UB codes listed as examples are not an exhaustive or current list; refer to a UB specification for
additional information.
"PV1-15 Ambulatory status (IS) 00145
Definition: This field indicates any permanent or transient handicapped conditions. Refer to Userdefined
Table 0009 - Ambulatory status for suggested entries.
"PV1-16 VIP indicator (IS) 00146
Definition: This field identifies the type of VIP. Refer to User-defined Table 0099 - VIP indicator for
suggested values.
"PV1-17 Admitting doctor (XCN) 00147
Definition: This field contains the admitting physician information. Multiple names and identifiers for
the same physician may be sent. The field sequences are not used to indicate multiple admitting doctors.
The legal name must be sent in the first sequence. If the legal name is not sent, then a repeat delimiter
must be sent in the first sequence. By local agreement, the name or ID may be absent in this field. Refer
to User-defined Table 0010 - Physician ID for suggested values.
"PV1-18 Patient type (IS) 00148
Definition: This field contains site-specific values that identify the patient type. Refer to User-defined
Table 0018 - Patient type for suggested values.
"PV1-19 Visit number (CX) 00149
Definition: For backward compatibility, a NM data type may be sent, but HL7 recommends that new
implementations use the CX data type. This field contains the unique number assigned to each patient
visit. The assigning authority and identifier type code are strongly recommended for all CX data types.
"PV1-20 Financial class (FC) 00150
Definition: This field contains the financial class(es) assigned to the patient for the purpose of identifying
sources of reimbursement. Refer to User-defined Table 0064 - Financial class for suggested values.
"PV1-21 Charge price indicator (IS) 00151
Definition: This field contains the code used to determine which price schedule is to be used for room and
bed charges. Refer to User-defined Table 0032 - Charge/price indicator for suggested values.
"PV1-22 Courtesy code (IS) 00152
Definition: This field indicates whether the patient will be extended certain special courtesies. Refer to
User-defined Table 0045 - Courtesy code for suggested values.
"PV1-23 Credit rating (IS) 00153
Definition: This field contains the user-defined code to determine past credit experience. Refer to Userdefined
Table 0046 - Credit rating for suggested values.
"PV1-24 Contract code (IS) 00154
Definition: This field identifies the type of contract entered into by the healthcare facility and the
guarantor for the purpose of settling outstanding account balances. Refer to User-defined Table 0044 -
Contract code for suggested values.
"PV1-25 Contract effective date (DT) 00155
Definition: This field contains the date that the contract is to start or started.
"PV1-26 Contract amount (NM) 00156
Definition: This field contains the amount to be paid by the guarantor each period according to the
contract.
"PV1-27 Contract period (NM) 00157
Definition: This field specifies the duration of the contract for user-defined periods.
"PV1-28 Interest code (IS) 00158
Definition: This field indicates the amount of interest that will be charged the guarantor on any
outstanding amounts. Refer to User-defined Table 0073 - Interest rate code for suggested values.
"PV1-29 Transfer to bad debt code (IS) 00159
Definition: This field indicates that the account was transferred to bad debts and gives the reason. Refer
to User-defined Table 0110 - Transfer to bad debt code for suggested values.
"PV1-30 Transfer to bad debt date (DT) 00160
Definition: This field contains the date that the account was transferred to a bad debt status.
"PV1-31 Bad debt agency code (IS) 00161
Definition: This field can be used as a ST type for backward compatibility. This field uniquely
identifies the bad debt agency to which the account was transferred. This code is site defined. One
possible implementation would be to edit against a table such as User-defined Table 0021 - Bad debt
agency code; however, this is not required.
"PV1-32 Bad debt transfer amount (NM) 00162
Definition: This field contains the amount that was transferred to a bad debt status.
"PV1-33 Bad debt recovery amount (NM) 00163
Definition: This field contains the amount recovered from the guarantor on the account.
"PV1-34 Delete account indicator (IS) 00164
Definition: This field indicates that the account was deleted from the file and gives the reason. Refer to
User-defined Table 0111 - Delete account code for suggested values
"PV1-35 Delete account date (DT) 00165
Definition: This field contains the date that the account was deleted from the file.
"PV1-36 Discharge disposition (IS) 00166
Definition: This field contains the disposition of the patient at time of discharge (i.e., discharged to home,
expired, etc.). Refer to User-defined Table 0112 - Discharge disposition for suggested values. In the US,
this field is used on UB92 FL22. The UB codes listed as examples are not an exhaustive or current list;
refer to a UB specification for additional information.
"PV1-37 Discharged to location (CM) 00167
Definition: This field indicates the healthcare facility to which the patient was discharged. Refer to Userdefined
Table 0113 - Discharged to location for suggested values.
"PV1-38 Diet type (CE) 00168
Definition: This field indicates a special diet type for a patient. Refer to User-defined Table 0114 - Diet
type for suggested values.
"PV1-39 Servicing facility (IS) 00169
Definition: This field is used in a multiple facility environment to indicate the healthcare facility with
which this visit is associated. Refer to User-defined Table 0115 - Servicing facility for suggested values.
"PV1-40 Bed status (IS) 00170
Definition: This field has been retained for backward compatibility only. The information is now held
in the fifth component of the PL datatype in PV1-3. This field contains the status of the bed. Refer to
User-defined Table 0116 - Bed status for suggested values.
"PV1-41 Account status (IS) 00171
Definition: This field contains the account status. Refer to User-defined Table 0117 - Account status for
suggested values.
"PV1-42 Pending location (PL) 00172
Definition: This field indicates the point of care, room, bed, healthcare facility ID, and bed status to
which the patient may be moved. The first component may be the nursing station for inpatient locations,
or the clinic, department, or home for locations other than inpatient. If a value exists in the fifth
component (location status), it supersedes the value in PV1-40 - bed status.
"PV1-43 Prior temporary location (PL) 00173
Subcomponents of facility: <namespace ID (IS)> & <universal ID (ST)> & <universal ID type (ID)>
Definition: This field is used to reflect the patient’s temporary location (such as the operating
room/theatre or x-ray) prior to a transfer from a temporary location to an actual location, or from a
temporary location to another temporary location. The first component may be the nursing station for
inpatient locations, or the clinic, department, or home for locations other than inpatient.
"PV1-44 Admit date/time (TS) 00174
Definition: This field contains the admit date/time. It is to be used if the event date/time is different than
the admit date and time, i.e., a retroactive update. This field is also used to reflect the date/time of an
outpatient/emergency patient registration.
"PV1-45 Discharge date/time (TS) 00175
Definition: This field contains the discharge date/time. It is to be used if the event date/time is different
than the discharge date and time, that is, a retroactive update. This field is also used to reflect the
date/time of an outpatient/emergency patient discharge.
"PV1-46 Current patient balance (NM) 00176
Definition: This field contains the visit balance due.
"PV1-47 Total charges (NM) 00177
Definition: This field contains the total visit charges.
"PV1-48 Total adjustments (NM) 00178
Definition: This field contains the total adjustments for visit.
"PV1-49 Total payments (NM) 00179
Definition: This field contains the total payments for visit.
"PV1-50 Alternate visit ID (CX) 00180
Definition: This field contains the alternative, temporary, or pending optional visit ID number to be used
if needed. Refer to HL7 Table 0061 - Check digit scheme for valid values. Refer to HL7 Table 0203 -
Identifier type for valid values. The assigning authority and identifier type code are strongly
recommended for all CX data types.
"PV1-51 Visit indicator (IS) 01226
Definition: This field specifies the level on which data are being sent. It is the indicator used to send data
at two levels, visit and account. HL7 recommends sending an ‘A’ or no value when the data in the
message are at the account level, or ‘V’ to indicate that the data sent in the message are at the visit level.
Refer to User-defined Table 0326 - Visit indicator for suggested values.
The value of this element affects the context of data sent in PV1, PV2 and any associated hierarchical
segments (e.g. DB1, AL1, DG1, etc.).
"PV1-52 Other healthcare provider (XCN) 01274
Definition: This field has been retained for backward compatibility only. Use the ROL-Role Segment
to communicate providers not specified elsewhere. Refer to section 12.3.3 for the definition of the ROL
segment. This field contains the other healthcare providers (e.g. nurse care practitioner, midwife,
physician assistant). Multiple healthcare providers can be sent. Depending on local agreements, either
the ID or the name may be absent from this field. Use values in User-defined Table 0010 - Physician ID
for first component.
