const mysql = require("mysql2");

let db_con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "10k93K23k954!",
});

db_con.connect((err) => {
    if (err) {
        console.log("Database Connection Failed!", err);
    } else {
        console.log("Database connection successful")
    }
})

module.exports = db_con;