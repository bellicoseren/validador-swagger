'use strict';

var url = require('url');

var Sprint2 = require('./Sprint2Service');

module.exports.activacionPaperlessPOST = function activacionPaperlessPOST (req, res, next) {
  Sprint2.activacionPaperlessPOST(req.swagger.params, res, next);
};

module.exports.consultaCfdCfdiPOST = function consultaCfdCfdiPOST (req, res, next) {
  Sprint2.consultaCfdCfdiPOST(req.swagger.params, res, next);
};

module.exports.consultaCfdCfdiRetencionesPOST = function consultaCfdCfdiRetencionesPOST (req, res, next) {
  Sprint2.consultaCfdCfdiRetencionesPOST(req.swagger.params, res, next);
};

module.exports.consultaCtasServMultiTPOST = function consultaCtasServMultiTPOST (req, res, next) {
  Sprint2.consultaCtasServMultiTPOST(req.swagger.params, res, next);
};

module.exports.consultaCuentasAgregadasClientePOST = function consultaCuentasAgregadasClientePOST (req, res, next) {
  Sprint2.consultaCuentasAgregadasClientePOST(req.swagger.params, res, next);
};

module.exports.consultaDetalleCreditoPOST = function consultaDetalleCreditoPOST (req, res, next) {
  Sprint2.consultaDetalleCreditoPOST(req.swagger.params, res, next);
};

module.exports.consultaMesaDineroPOST = function consultaMesaDineroPOST (req, res, next) {
  Sprint2.consultaMesaDineroPOST(req.swagger.params, res, next);
};

module.exports.consultaMovimientosMultiTPOST = function consultaMovimientosMultiTPOST (req, res, next) {
  Sprint2.consultaMovimientosMultiTPOST(req.swagger.params, res, next);
};

module.exports.consultaMovimientosPOST = function consultaMovimientosPOST (req, res, next) {
  Sprint2.consultaMovimientosPOST(req.swagger.params, res, next);
};

module.exports.consultaMovsMesaDineroPOST = function consultaMovsMesaDineroPOST (req, res, next) {
  Sprint2.consultaMovsMesaDineroPOST(req.swagger.params, res, next);
};

module.exports.consultaRetencionesPOST = function consultaRetencionesPOST (req, res, next) {
  Sprint2.consultaRetencionesPOST(req.swagger.params, res, next);
};

module.exports.consultaSaldosMultiTPOST = function consultaSaldosMultiTPOST (req, res, next) {
  Sprint2.consultaSaldosMultiTPOST(req.swagger.params, res, next);
};

module.exports.estadoCuentaPDFPOST = function estadoCuentaPDFPOST (req, res, next) {
  Sprint2.estadoCuentaPDFPOST(req.swagger.params, res, next);
};

module.exports.estadoPaperlessPOST = function estadoPaperlessPOST (req, res, next) {
  Sprint2.estadoPaperlessPOST(req.swagger.params, res, next);
};

module.exports.movimientosDonacionesPOST = function movimientosDonacionesPOST (req, res, next) {
  Sprint2.movimientosDonacionesPOST(req.swagger.params, res, next);
};

module.exports.validaOTPPOST = function validaOTPPOST (req, res, next) {
  Sprint2.validaOTPPOST(req.swagger.params, res, next);
};
