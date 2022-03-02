'user strict';
module.exports = function (app) {

  const json = require('./controller');
  app.route('/').get(json.index);

  // menampilkan data dari controller
  app.route('/tampil').get(json.lihatsemuadata);
  app.route('/tampil/:id').get(json.detailData);

  // menambahkan data dari controller
  app.route('/tambah').post(json.tambahData);

  //menghapus data menggunakan api
  app.route('/edit').put(json.editData);

  //menghapus data menggunakan api
  app.route('/hapus').delete(json.hapusData);


}