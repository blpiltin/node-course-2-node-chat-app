require('./config/config');

const path = require('path');
const express = require('express');

const PUBLIC_PATH = path.join(__dirname, '../public');
const PORT = process.env.PORT;

var app = express();

app.use(express.static(PUBLIC_PATH));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
