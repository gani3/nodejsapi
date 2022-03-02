const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

// parse aplikasi yang berformat js ke json
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// membuat filer router berjalan sebagai route dari node js
const router = require('./config/router');
router(app);


// membuat akses ke web server
app.listen(port, () => {
  console.log(`Silahkan akses ke http://localhost:${port}`);
});