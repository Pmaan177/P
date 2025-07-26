function doGet(e) {
  const sheet = SpreadsheetApp.openById("17fQbMp7X_zJLo5RW93UPya0QmgZdimf_38ExA2O2TGM").getSheetByName("Active Employee");
  const data = sheet.getRange("A2:P200").getValues();

  const keys = [
    "Emp Code", "Name", "Designation", "Department", "Category", "Mobile No",
    "Whatsapp No", "Address", "Date of Joining", "Duty Time", "Aadhar No",
    "Bank Name", "Account No", "IFSC", "ESIC No", "UAN No"
  ];

  if (e.parameter.code) {
    const empCode = e.parameter.code.trim();
    const emp = data.find(row => String(row[0]).trim() === empCode);

    if (emp) {
      const result = {};
      keys.forEach((key, i) => result[key] = emp[i]);
      return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService.createTextOutput(JSON.stringify({ error: "Employee not found" })).setMimeType(ContentService.MimeType.JSON);
    }
  }

  const result = data.map(row => {
    const obj = {};
    keys.forEach((key, i) => obj[key] = row[i]);
    return obj;
  });

  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}