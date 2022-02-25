'use strict';

const respon = require('./res');
const connect = require('./koneksi');

exports.index = function (req, res) {
  respon.ok("Aplikasi rest Api berhasil berjalan");

}