const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {
  koneksi
} = require('./config/koneksi.js');
const port = 8080;



// parse aplikasi yang berformat js ke json
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Silahkan akses ke http://localhost:${port}`);
});

app.get('path', (req, res) => {

});