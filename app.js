// app.js
const express = require('express');
const app = express();
const sql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
};

sql.connect(config, (err) => {
  if (err) console.log(err);
  else console.log('Connected to SQL Database');
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});