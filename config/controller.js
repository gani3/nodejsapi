'use strict';

const respon = require('./res');
const {
  koneksi
} = require('./koneksi');

exports.index = function (req, res) {
  respon.ok("Aplikasi rest Api berhasil berjalan", res);

}

// membaca semua data
exports.lihatsemuadata = function (req, res) {
  koneksi.query('SELECT * FROM mahasiswa', function (error, rows, field) {
    if (error) {
      console.log(error);
    } else {
      respon.ok(rows, res);
    }
  });
}

// mengambil data berdasarkan id
exports.detailData = function (req, res) {
  let id = req.params.id;
  koneksi.query(`SELECT * FROM mahasiswa WHERE idmahasiswa =  ${id}`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        respon.ok(rows, res);
      }
    });

  // tambah data menggunakan API


}