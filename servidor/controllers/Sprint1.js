'use strict';

var url = require('url');

var Sprint1 = require('./Sprint1Service');

module.exports.activacionOTPPOST = function activacionOTPPOST (req, res, next) {
  Sprint1.activacionOTPPOST(req.swagger.params, res, next);
};

module.exports.bloqueoOTPPOST = function bloqueoOTPPOST (req, res, next) {
  Sprint1.bloqueoOTPPOST(req.swagger.params, res, next);
};

module.exports.cambioContrasenaPOST = function cambioContrasenaPOST (req, res, next) {
  Sprint1.cambioContrasenaPOST(req.swagger.params, res, next);
};

module.exports.consultaCuentasAgregadasClientePOST = function consultaCuentasAgregadasClientePOST (req, res, next) {
  Sprint1.consultaCuentasAgregadasClientePOST(req.swagger.params, res, next);
};

module.exports.consultaDatosBasicosPOST = function consultaDatosBasicosPOST (req, res, next) {
  Sprint1.consultaDatosBasicosPOST(req.swagger.params, res, next);
};

module.exports.consultaPerfilesPOST = function consultaPerfilesPOST (req, res, next) {
  Sprint1.consultaPerfilesPOST(req.swagger.params, res, next);
};

module.exports.consultaProductosContratadosPOST = function consultaProductosContratadosPOST (req, res, next) {
  Sprint1.consultaProductosContratadosPOST(req.swagger.params, res, next);
};

module.exports.consultaServiciosContratadosPOST = function consultaServiciosContratadosPOST (req, res, next) {
  Sprint1.consultaServiciosContratadosPOST(req.swagger.params, res, next);
};

module.exports.envioNotificacionesPOST = function envioNotificacionesPOST (req, res, next) {
  Sprint1.envioNotificacionesPOST(req.swagger.params, res, next);
};

module.exports.listarTokensOTPPOST = function listarTokensOTPPOST (req, res, next) {
  Sprint1.listarTokensOTPPOST(req.swagger.params, res, next);
};

module.exports.validaContratoPOST = function validaContratoPOST (req, res, next) {
  Sprint1.validaContratoPOST(req.swagger.params, res, next);
};
