'use strict';

var url = require('url');

var Sprint5 = require('./Sprint5Service');

module.exports.aperturaCedePOST = function aperturaCedePOST (req, res, next) {
  Sprint5.aperturaCedePOST(req.swagger.params, res, next);
};

module.exports.impuestosLocalesPOST = function impuestosLocalesPOST (req, res, next) {
  Sprint5.impuestosLocalesPOST(req.swagger.params, res, next);
};

module.exports.tasasCedePOST = function tasasCedePOST (req, res, next) {
  Sprint5.tasasCedePOST(req.swagger.params, res, next);
};
