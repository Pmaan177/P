# Employee Details API (Google Apps Script)

This script fetches employee data from the "Active Employee" sheet in the linked Google Sheet.

## 📦 Features
- Get all employee data (JSON)
- Get specific employee by code

## 🌐 API URL

Deployed URL:  
[Open Web App](https://script.googleusercontent.com/a/macros/grindlaysindia.com/echo?user_content_key=AehSKLhh5fpSfoD7bNAtjN7ZP2_r8j4nctOltJPJBcqiRof9ZVvilV-PPYjYK6N_5GWX40rIAGhzeEHMSzMX451s3ZoqDKpcczs5IWWBwYksiOugwdo4tcJL7hnZdfOVVdNivmXFQ6cMB_RA_6yrbNbAsEM0YrP2OmGmKhZOm-kZcZp3AZH0qXjHqOk55CrTiUzyXtOZebR116KhdWbGVbGka2l9Pz1WR8MLqr4y1Tp-V5l6ssUsmSwTg7j7Sru4UtWsx7-it8Re6VhkOJeoPZr4gJoJCzOI2Ag-ItU44APZAm_IeCIZoiq7n3h8hAG0GA&lib=MSJ7GApJ4qeKC8dL9vPv27OleQD_lePeS)

### Google Sheet Used:
https://docs.google.com/spreadsheets/d/17fQbMp7X_zJLo5RW93UPya0QmgZdimf_38ExA2O2TGM/edit

## 🧾 Usage

### Get All Employees
```http
GET /
```

### Get Specific Employee by Code
```http
GET /?code=3
```

Returns:
```json
{
  "Emp Code": "3",
  "Name": "Amit Sharma",
  ...
}
```

---