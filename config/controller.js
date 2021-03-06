'use strict';

const respon = require('./res');
const koneksi = require('./koneksi');

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
}

// tambah data menggunakan API

exports.tambahData = function (req, res) {
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;
  koneksi.query(`INSERT INTO mahasiswa (nim,nama,jurusan) values (${nim},'${nama}','${jurusan}')`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        respon.ok('Berhasil Menambahkan Data', res);
      }
    });
}

exports.editData = function (req, res) {
  var idmahasiswa = req.body.idmahasiswa;
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;
  koneksi.query(`UPDATE mahasiswa SET nim = ${nim},nama="${nama}",jurusan="${jurusan}" WHERE idmahasiswa =${idmahasiswa}`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        respon.ok('Data berhasil di Update', res);
      }
    });
}
exports.hapusData = function (req, res) {
  const idmahasiswa = req.body.idmahasiswa;
  koneksi.query(`DELETE FROM mahasiswa WHERE idmahasiswa=${idmahasiswa}`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        respon.ok('Data berhasil Dihapus', res);
      }
    });
}


// menampilkan matakuliah relasi join tabel 

exports.tampilGroup = function (req, res) {
  koneksi.query(`SELECT mhs.idmahasiswa,mhs.nim,mhs.nama,mhs.jurusan,mt.matakuliah,mt.sks FROM krs JOIN matakuliah as mt JOIN mahasiswa as mhs WHERE krs.idmahasiswa=mhs.idmahasiswa AND krs.idmatakuliah = mt.idmatakuliah ORDER BY mhs.idmahasiswa;`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        respon.oknested(rows, res);
      }
    });
}