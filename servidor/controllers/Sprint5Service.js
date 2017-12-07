'use strict';

exports.aperturaCedePOST = function(args, res, next) {
  /**
   * Consolidar la información relevante respecto al diseño de la operación /aperturaCede del servicio requerido para la integración de Multivanet con T24.
   *
   * aperturaCede AperturaCede Diseño de la operación para aperturaCede
   * returns inline_response_200_45
   **/
  var examples = {};
  examples['application/json'] = {
  "folioInversion" : "ABC123456",
  "responseError" : "Problema con la peticion",
  "responseStatus" : 200.0
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.impuestosLocalesPOST = function(args, res, next) {
  /**
   * Este servicio solicita al core bancario T24 hacer el registro de los impuestos locales.
   *
   * impuestosLocales ImpuestosLocales impuestos locales
   * returns inline_response_200_46
   **/
  var examples = {};
  examples['application/json'] = {
  "htmlGdf" : "<table><tr><td></td></tr></table>",
  "responseError" : "Problema con la peticion",
  "responseStatus" : 200.0
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.tasasCedePOST = function(args, res, next) {
  /**
   * Consolidar la información relevante respecto al diseño de la operación/tasasCede del servicio requerido para la integración de Multivanet con T24.
   *
   * tasasCede TasasCede Diseño de la operación para tasasCede.
   * returns inline_response_200_47
   **/
  var examples = {};
  examples['application/json'] = {
  "responseError" : "Problema con la peticion",
  "tasas" : [ {
    "montoFinal" : 1000000.0,
    "plazo" : 30,
    "montoInicial" : 0.0,
    "tasa" : 0.3
  } ],
  "responseStatus" : 200.0
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

