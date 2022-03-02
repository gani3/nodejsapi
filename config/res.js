'use strict'; //untuk mengkonversi semua kode agar sesuai ketentuan js

// mengirim status apabila api berhasil dijalankan
exports.ok = function (values, res) {
  var data = {
    'status': 200,
    'values': values
  };
  res.json(data);
  res.end();
}