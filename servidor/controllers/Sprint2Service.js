'use strict';

exports.activacionPaperlessPOST = function(args, res, next) {
  /**
   * Consolidar la información relevante respecto al diseño de la operación/activacionPaperless del servicio requerido para la integración de Multivanet con T24
   *
   * activacionPaperless ActivacionPaperless activacionPaperless
   * returns inline_response_200_7
   **/
  var examples = {};
  examples['application/json'] = {
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

exports.consultaCfdCfdiPOST = function(args, res, next) {
  /**
   * Servicio de consulta Cfd y Cfdi para obtener el estado de cuenta timbrado de hasta 18 meses atras
   *
   * consultaCfdCfdi ConsultaCfdCfdi Consulta Cfd y Cfdi
   * returns byte[]
   **/
  var examples = {};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.consultaCfdCfdiRetencionesPOST = function(args, res, next) {
  /**
   * Este servicio obtiene el Cfd y Cfdi de Retenciones para el perido solicitado.
   *
   * consultaCfdCfdiRetenciones ConsultaCfdCfdiRetenciones Consulta Cfd y Cfdi de Retenciones
   * returns byte[]
   **/
  var examples = {};
  examples['application/json'] = "";
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.consultaCtasServMultiTPOST = function(args, res, next) {
  /**
   * Este servicio consulta el servicio de mesa de dinero de T24 para obtener la información de las cuentas registradas en la multitesorería de un cliente para traspasos, tanto de pago de servicios como traspaso de fondos. 
   *
   * consultaCtasServMultiT ConsultaCtasServMultiT Un consumidor solicita las cuentas de transferencia y servicios registrados para pago para un cliente
   * returns inline_response_200_11
   **/
  var examples = {};
  examples['application/json'] = {
  "servicios" : [ {
    "descripcionServicio" : "PAGO DE SKY",
    "descripcionTraspaso" : "PAGO DE SERVICIOS",
    "tipoServicio" : "15",
    "tipoTraspaso" : "94",
    "descripcionTipoCuenta" : "TARJETA DE DEBITO",
    "cuentaDestino" : "123456789",
    "nombre" : "WALDO TERRY",
    "RFC" : "ABCD01011970XYZ",
    "claveBanxico" : "12345",
    "CURP" : "ABCD123456789",
    "mobil" : "123456789",
    "maxTransacciones" : 5,
    "maxMonto" : 50000.0,
    "cliente" : 12456,
    "estatus" : "Activo",
    "cuentaOrigen" : "123456789",
    "tipoCuenta" : "03",
    "email" : "wterry@dominio.com"
  } ],
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

exports.consultaCuentasAgregadasClientePOST = function(args, res, next) {
  /**
   * Consolidar la información relevante respecto al diseño de la operación/consultaCuentasAgregadasCliente del serviciorequerido para la integración de Multivanet con T24
   *
   * consultaDatosBasicos, ConsultaDatosBasicos_1 Consumidor  que dibuja encabezado con datos de cliente
   * returns inline_response_200_10
   **/
  var examples = {};
  examples['application/json'] = {
  "responseError" : "Problema con la peticion",
  "listInversionesVistaCliente" : [ {
    "numeroDeCuenta" : "0123456",
    "descripcionProducto" : "Multiva Integra",
    "alias" : "MULTIVA INTEGRA DE PRUEBA",
    "idProducto" : "INT",
    "saldo" : 780000.0,
    "cuentaIntegra" : "789456"
  } ],
  "responseStatus" : 200.0,
  "listFondosCliente" : [ {
    "numeroDeCuenta" : "456789",
    "titulos" : 100,
    "valia" : -1.03,
    "descripcionProducto" : "Fondos",
    "valuacion" : 12000.0,
    "alias" : "FONDO DE PRUEBA",
    "idProducto" : "FND",
    "saldo" : 1000000.0,
    "precioMercado" : 120.0,
    "emisora" : "ABC-1234-AC1"
  } ],
  "listCuentasCliente" : [ {
    "numeroDeCuenta" : "123456",
    "lineaSobregiro" : 5000.0,
    "divisa" : "MXN",
    "interesesGenerados" : 2000.0,
    "CLABE" : "123456789012345",
    "movimientos" : 1,
    "saldo" : 1532.0,
    "saldoMovimientosDia" : 1989.5,
    "depositosSBC" : 15000.0,
    "nombreCuenta" : "CUENTA DE PRUEBA",
    "descripcionProducto" : "Cuenta de Cheques",
    "depositosPendientes" : 10000.0,
    "alias" : "CUENTA DE PRUEBA",
    "idProducto" : "CHQ"
  } ],
  "listInversionesCedeCliente" : [ {
    "numeroDeCuenta" : "789456",
    "interesesDevengados" : 1000.0,
    "plazo" : 30,
    "fechaVencimiento" : "19-07-2017",
    "fechaProximoPago" : "19-07-2017T09:00:00",
    "saldo" : 100000.5,
    "tasa" : 5.21,
    "saldoNeto" : 15.02,
    "ISRRetenido" : 14000.0,
    "apertura" : "13-05-2017T:01:00:00",
    "descripcionProducto" : "Inversion CEDE",
    "alias" : "CEDE DE PRUEBA",
    "idProducto" : "CEDE"
  } ],
  "listCreditosCliente" : [ {
    "numeroDeCuenta" : "7894560",
    "descripcionProducto" : "CREDITO DE PRUEBA",
    "contrato" : "123456",
    "alias" : "HIPOTECA CASA",
    "idProducto" : "CRED",
    "saldoTotal" : 1000000.0
  } ],
  "listInversionesPagareCliente" : [ {
    "numeroDeCuenta" : "789456",
    "interesDevengado" : 100.0,
    "plazo" : 30,
    "fechaVencimiento" : "19-07-2017",
    "saldo" : 100000.5,
    "interesPagar" : 100.0,
    "instruccionesVencimiento" : "instruccionesVencimiento",
    "tasa" : 5.21,
    "saldoNeto" : 15.02,
    "ISRRetenido" : 14000.0,
    "apertura" : "13-05-2017T00:57:00",
    "descripcionProducto" : "Inversion Pagare",
    "alias" : "PAGARE DE PRUEBA",
    "idProducto" : "PGR"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.consultaDetalleCreditoPOST = function(args, res, next) {
  /**
   * Consolidar la información relevante respecto al diseño de la operación /consultaDetalleCredito del servicio requerido para la integración de Multivanet con T24
   *
   * consultaDetalleCredito ConsultaDetalleCredito DatosCuentaRequest
   * returns inline_response_200_12
   **/
  var examples = {};
  examples['application/json'] = {
  "numeroDeCuenta" : "123456",
  "responseError" : "Problema con la peticion",
  "fechaVencimiento" : "18-07-2018",
  "plazo" : 12,
  "contrato" : "123456789",
  "responseStatus" : 200.0,
  "fechaDisposicion" : "17-07-2017",
  "importe" : "200000.00",
  "tasa" : 12.5,
  "pagosVencidos" : {
    "atraso" : 10,
    "fecha" : "17-08-2017",
    "capital" : 10000.0,
    "otrosCargos" : 0.0,
    "IVAmoratorio" : 15.0,
    "IVA" : 1500.0,
    "moratorio" : 500.0,
    "importePago" : 1150.0,
    "interes" : 9000.0
  },
  "saldoCapital" : 1000000.0,
  "estatus" : "estatus",
  "proximoPago" : {
    "atraso" : 10,
    "fecha" : "17-08-2017",
    "capital" : 1000.0,
    "otrosCargos" : 0.0,
    "IVAmoratorio" : 10.0,
    "IVA" : 150.0,
    "moratorio" : 500.0,
    "importePago" : 1150.0,
    "interes" : 900.0
  },
  "tipoCredito" : "SIMPLE",
  "montoInicial" : 2000000.0,
  "interesVigente" : 50000.0,
  "periodicidadPago" : "MENSUAL"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.consultaMesaDineroPOST = function(args, res, next) {
  /**
   * Este servicio obtene información de la posición del cliente. El servicio recibe el cliente y el periodo y devuelve ya sea la posición  del día o el estado del portafolio del cliente.
   *
   * consultaMesaDinero ConsultaMesaDinero Solicita la posición el día para un cliente.
   * returns inline_response_200_13
   **/
  var examples = {};
  examples['application/json'] = {
  "totalCartera" : 20000,
  "responseError" : "Problema con la peticion",
  "posiciones" : [ {
    "precio" : 200.0,
    "titulos" : 100.0,
    "inversion" : "S1-123-456",
    "serie" : "123",
    "valuacion" : 20000.0,
    "numeroCuenta" : "123456",
    "emisora" : "S1"
  } ],
  "efectivoDisponible" : 20000,
  "responseStatus" : 200.0,
  "valuacionPortafolio" : 30000
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.consultaMovimientosMultiTPOST = function(args, res, next) {
  /**
   * Este servicio englobará la consulta de movimientos múltiples (aquellos que ocurren con cuentas que conforman la multitesoreía de un cliente que tenga el servicio) en T24. 
   *
   * consultaMovimientosMultiT ConsultaMovimientosMultiT 1. Consumidor  que solicita la consulta de movimientos múltiples.
   * returns inline_response_200_15
   **/
  var examples = {};
  examples['application/json'] = {
  "listMovimientos" : [ {
    "descripcion" : "DESCRIPCION DEL MOVIMIENTO",
    "divisa" : "MXN",
    "cuentaDestino" : "123456789012345",
    "saldoInicial" : 21.5,
    "importe" : -21.5,
    "saldoDisponible" : 0.0,
    "cliente" : 12345678,
    "fecha" : "25-05-2017T08:47:00",
    "naturaleza" : "CARGO",
    "referenciaTransferencia" : "1234567",
    "cuentaOrigen" : "987654321012345",
    "folio" : "",
    "moneda" : "",
    "canal" : "MVNET"
  } ],
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

exports.consultaMovimientosPOST = function(args, res, next) {
  /**
   * Consolidar la información relevante respecto al diseño de la operación/consultaMovimientos del servicio requerido para la integración de Multivanet con T24
   *
   * consultaMovimientos ConsultaMovimientos consultaMovimientos
   * returns inline_response_200_14
   **/
  var examples = {};
  examples['application/json'] = {
  "listMovimientos" : [ {
    "descripcion" : "DESCRIPCION DEL MOVIMIENTO",
    "fecha" : "25-05-2017T08:47:00",
    "divisa" : "MXN",
    "cuentaDestino" : "123456789012345",
    "cuentaOrigen" : "987654321012345",
    "folio" : "ABCD12345",
    "CASFIM" : "789456",
    "referenciaNumerica" : 1234567,
    "canal" : "MVNET",
    "importe" : 21.5,
    "referencia" : "referencia"
  } ],
  "responseError" : "Problema con la peticion",
  "saldoInicial" : 0.0,
  "responseStatus" : 200.0
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.consultaMovsMesaDineroPOST = function(args, res, next) {
  /**
   * Consolidar la información relevante respecto al diseño de la operación /consultaMovsMesaDinero del servicio requerido para la integración de Multivanet con SABI
   *
   * consultaMovsMesaDinero ConsultaMovsMesaDinero consultaMovsMesaDinero
   * returns inline_response_200_16
   **/
  var examples = {};
  examples['application/json'] = {
  "responseError" : "Problema con la peticion",
  "saldo" : 2000000.0,
  "movimientos" : [ {
    "noTitulos" : 10,
    "precio" : 1200.0,
    "fechaLiquidacion" : "26-07-2017",
    "premio" : 500.0,
    "plazo" : 12,
    "folio" : "123456789",
    "concepto" : "CONCEPTO",
    "serie" : "78A",
    "tasaRendimiento" : 1.01,
    "importe" : 12000.0,
    "fechaOperacion" : "27-07-2017",
    "emisora" : "147"
  } ],
  "saldoFinDia" : 1000000.0,
  "responseStatus" : 200.0
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.consultaRetencionesPOST = function(args, res, next) {
  /**
   * Este servicio consulta el servicio de consulta de Retenciones de Cfd y Cfdi
   *
   * consultaRetenciones ConsultaRetenciones Consulta retenciones
   * returns inline_response_200_18
   **/
  var examples = {};
  examples['application/json'] = {
  "responseError" : "Problema con la peticion",
  "responseStatus" : 200.0,
  "listRetenciones" : [ {
    "noDeContrato" : "543210987654321",
    "RFCReceptor" : "QUVA790114FT5",
    "tipoDeConstancia" : "CRI",
    "noDeCliente" : "543210987654321",
    "uuid" : "SEFDAD1234-87465-ASDSD-14523"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.consultaSaldosMultiTPOST = function(args, res, next) {
  /**
   * Este servicio consulta T24 para obtener los saldos de todas las cuentas asociadas a la multitesorería de un cliente.
   *
   * consultaSaldosMultiT ConsultaSaldosMultiT Un consumidor solicita el saldo de las cuentas de multitesorería de un cliente.
   * returns inline_response_200_17
   **/
  var examples = {};
  examples['application/json'] = {
  "responseError" : "Problema con la peticion",
  "cuentas" : [ {
    "saldoDisponible" : 123000.0,
    "cliente" : 12456,
    "nombreCuenta" : "WALDO TERRY",
    "descripcionProducto" : "CHEQUES",
    "cuenta" : "123456789",
    "CLABE" : "123456789987456",
    "alias" : "AliasDeMiCuenta",
    "moneda" : "MXP",
    "idProducto" : "CHQ",
    "clientePadre" : 89456
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

exports.estadoCuentaPDFPOST = function(args, res, next) {
  /**
   * Estado de cuenta solicitado por el cliente y generado por el banco de la cuenta solicitada. Este estado de cuenta NO está timbrado
   *
   * estadoCuentaPDF EstadoCuentaPDF Estado de cuenta PDF
   * returns byte[]
   **/
  var examples = {};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.estadoPaperlessPOST = function(args, res, next) {
  /**
   * Consulta el servicio de estado de Paperless de una cuenta de cheques o crédito en T24
   *
   * estadoPaperless EstadoPaperless Estado paperless
   * returns inline_response_200_19
   **/
  var examples = {};
  examples['application/json'] = {
  "noCuentaParcialmente" : true,
  "responseError" : "Problema con la peticion",
  "omitirNombre" : true,
  "opcionImpresion" : "ACTIVA",
  "responseStatus" : 200.0
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.movimientosDonacionesPOST = function(args, res, next) {
  /**
   * Consulta el servicio de consulta de movimientos de donaciones, obteniendo todas las donaciones registradas en las cuentas de un cliente
   *
   * movimientosDonaciones MovimientosDonaciones Movimientos de donaciones
   * returns inline_response_200_20
   **/
  var examples = {};
  examples['application/json'] = {
  "responseError" : "Problema con la peticion",
  "listDonaciones" : [ {
    "descripcion" : "DESCRIPCION DEL DONATIVO",
    "fecha" : "13-05-2017T13:20:35 p.m.",
    "monto" : 200012.211,
    "estatus" : "NO APLICADA",
    "folio" : 123870212,
    "tipoDonativo" : "FUNDACION MULTIVA"
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

exports.validaOTPPOST = function(args, res, next) {
  /**
   * Servicio que realiza la validación del OTP
   *
   * validaOTP ValidaOTP Se requiere la validación de VACMAN del usuario y su OTP
   * returns inline_response_200_21
   **/
  var examples = {};
  examples['application/json'] = {
  "responseError" : "string",
  "antiPishing" : "string",
  "responseStatus" : 200
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

