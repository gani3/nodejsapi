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

//respon untuk nested json tabel
exports.oknested = function (values, res) {
  const hasil = values.reduce((akumulasi, item) => {
    // tentukan key group
    if (akumulasi[item.nama]) {
      // membuat variabel grup nama mahasiswa
      const group = akumulasi[item.nama];
      // cek isi array yang memiliki relasi
      if (Array.isArray(group.matakuliah)) {
        //tambhakann value kedalam group mata kuliah
        group.matakuliah.push(item.matakuliah);
      } else {
        group.matakuliah = [group.matakuliah, item.matakuliah];
      }
    } else {
      akumulasi[item.nama] = item;
    }
    return akumulasi;
  }, {});

  const data = {
    'status': 200,
    'value': hasil
  };

  res.json(data);
  res.end();
}