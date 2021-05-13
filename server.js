const express = require('express');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 2128

const app = express();

app.use(express.static(path.join(__dirname, './public')));



app.listen(port, () => {
  console.log(`Now listening to server on port: ${port}`);
});
