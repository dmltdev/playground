const express = require("express");
const database = require("./sqlConnection");

const app = express();

app.listen(8890, () => {
  console.log("Server is up and running");
});

app.get("/createDatabase", (req, res) => {
  let databaseName = "gfg_db";

  let createQuery = `CREATE DATABASE ${databaseName}`;

  database.query(createQuery, err => {
    if (err) throw err;

    console.log("Database Created Successfully!");

    let useQuery = `USE ${databaseName}`;
    database.query(useQuery, err => {
      if (err) throw err;

      console.log("Using database");

      return res.send(`Created and using ${databaseName} database`);
    });
  });
});
