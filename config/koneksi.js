const mysql = require('mysql');

// proses pembuatan authentikasi database
const koneksi = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'belajar_nodejs_api'
});

// proses connce ke database
koneksi.connect((err) => {
  if (err) throw err;
  console.log('koneksi berhasil ke mysql');
});

module.exports = {
  koneksi
}