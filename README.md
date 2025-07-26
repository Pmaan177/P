# Employee API – Google Apps Script

This is a Google Apps Script backend connected to a Google Sheet for managing employee records.

## 🌐 Deployed API URL
https://script.googleusercontent.com/a/macros/grindlaysindia.com/echo?user_content_key=AehSKLhh5fpSfoD7bNAtjN7ZP2_r8j4nctOltJPJBcqiRof9ZVvilV-PPYjYK6N_5GWX40rIAGhzeEHMSzMX451s3ZoqDKpcczs5IWWBwYksiOugwdo4tcJL7hnZdfOVVdNivmXFQ6cMB_RA_6yrbNbAsEM0YrP2OmGmKhZOm-kZcZp3AZH0qXjHqOk55CrTiUzyXtOZebR116KhdWbGVbGka2l9Pz1WR8MLqr4y1Tp-V5l6ssUsmSwTg7j7Sru4UtWsx7-it8Re6VhkOJeoPZr4gJoJCzOI2Ag-ItU44APZAm_IeCIZoiq7n3h8hAG0GA&lib=MSJ7GApJ4qeKC8dL9vPv27OleQD_lePeS


## 📊 Google Sheet Used

- [Active Employee Sheet](https://docs.google.com/spreadsheets/d/17fQbMp7X_zJLo5RW93UPya0QmgZdimf_38ExA2O2TGM/edit?usp=sharing)
- Data range used: `A2:P200`

## 📁 Files

| File           | Description                             |
|----------------|-----------------------------------------|
| `Code.gs`      | Main Apps Script (backend logic)        |
| `appsscript.json` | Project settings for deployment     |

## 🛠️ How to Use (Testing)

1. **Copy the Deployment URL**
2. Open browser or use Postman
3. Add parameters like `?action=read` or `?action=add`
4. Use query parameters:
    - `action=read`
    - `emp_code=...`, `name=...`, etc. for `add` or `update`

## 👨‍💻 Author

Built by Grindlays Engine Parts Pvt. Ltd. (Vinay Maan)

---

Feel free to fork, star, and contribute!
