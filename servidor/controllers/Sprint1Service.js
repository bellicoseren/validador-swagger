'use strict';

exports.activacionOTPPOST = function(args, res, next) {
  /**
   * Interfaz  que permitirá activar el OTP en el sistema TAM de Multiva.
   *
   * activacionOTP ActivacionOTP En esta interfaz se describe un servicio que se publicará para el uso del consumidor en tanto se completa la integración del ESB a TAM; bajo el entendido de que la firma expuesta en este servicio no cambiara cuando el desarrollo termine.
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "listTokens" : [ {
    "responseError" : "String",
    "usuario" : "String",
    "responseStatus" : "Long"
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

exports.bloqueoOTPPOST = function(args, res, next) {
  /**
   * Interfaz  que permitirá activar el OTP en el sistema TAM de Multiva.
   *
   * bloqueoOTP BloqueoOTP TAM validará si el token existe en la rama tokens de LDAP, si es correcto, verificará si el valor la bandera no está en 'f'. Si ambas cosas son ciertas, TAM realizará una modificación al valor del atributo estadoToken colocando el valor 'f' para el valor del token asociado.
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "listTokens" : [ {
    "responseError" : "String",
    "usuario" : "String",
    "responseStatus" : "Long"
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

exports.cambioContrasenaPOST = function(args, res, next) {
  /**
   * Servicio  que le permitira cambiar la informacion de contraseña de un usuario activo en el sistema TAM de Multiva. 
   *
   * cambioContrasena CambioContrasena  cambio de Contrasena
   * returns inline_response_200_1
   **/
  var examples = {};
  examples['application/json'] = {
  "responseError" : "Problema con la peticion",
  "listCambioContrasena" : [ {
    "codigo" : "integer",
    "mensaje" : "string"
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

exports.consultaCuentasAgregadasClientePOST = function(args, res, next) {
  /**
   * Interfaz  que le permitira consultar informacion de las cuentas agregadas de los clientes desde el core bancario T24 de Multiva.
   *
   * consultaCuentasAgregadasCliente ConsultaCuentasAgregadasCliente  Consulta Cuentas Agregadas Cliente
   * returns inline_response_200_2
   **/
  var examples = {};
  examples['application/json'] = {
  "responseError" : "Problema con la peticion",
  "listInversionesVistaCliente" : [ {
    "cuentaMultiva" : "string",
    "descripcionProducto" : "string",
    "alias" : "string",
    "idProducto" : "string",
    "saldo" : "Big Decimal",
    "cuentaIntegra" : "string"
  } ],
  "responseStatus" : 200.0,
  "listFondosCliente" : [ {
    "numeroDeCuenta" : "string",
    "descripcionProducto" : "string",
    "alias" : "string",
    "idProducto" : "string",
    "saldo" : "Big Decimal"
  } ],
  "listCuentasCliente" : [ {
    "numeroDeCuenta" : "string",
    "divisa" : "string",
    "descripcionProducto" : "string",
    "alias" : "string",
    "idProducto" : "string",
    "saldo" : "Big Decimal"
  } ],
  "listInversionesCedeCliente" : [ {
    "numeroDeCuenta" : "string",
    "plazo" : "integer",
    "descripcionProducto" : "string",
    "alias" : "string",
    "idProducto" : "string",
    "saldo" : "Big Decimal",
    "tasa" : "Big Decimal"
  } ],
  "listCreditosCliente" : [ {
    "numeroDeCuenta" : "string",
    "descripcionProducto" : "string",
    "alias" : "integer",
    "idProducto" : "string",
    "saldo" : "Big Decimal",
    "tasa" : "Big Decimal"
  } ],
  "listInversionesPagareCliente" : [ {
    "numeroDeCuenta" : "string",
    "plazo" : "integer",
    "descripcionProducto" : "string",
    "alias" : "string",
    "idProducto" : "string",
    "saldo" : "Big Decimal",
    "tasa" : "Big Decimal"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.consultaDatosBasicosPOST = function(args, res, next) {
  /**
   * Consolidar la información relevante respecto al diseño de la operacion /consultaDatosBasicos del servicio /cliente requerida para la integración de Multivanet con T24
   *
   * consultaDatosBasicos, ConsultaDatosBasicos Consumidor  que dibuja encabezado con datos de cliente
   * returns inline_response_200_3
   **/
  var examples = {};
  examples['application/json'] = {
  "listaDirecciones" : [ {
    "tipoDireccion" : "String",
    "estado" : "String",
    "ciudad" : "String",
    "direccion" : "String",
    "poblacion" : "String",
    "cp" : "String"
  } ],
  "listaEmails" : [ {
    "mail" : "String",
    "tipoEmail" : "String",
    "activo" : false
  } ],
  "tipoPersona" : "String",
  "estatus" : "String",
  "responseError" : "Problema con la peticion",
  "sucursal" : "String",
  "listaTelefonos" : [ {
    "cvePais" : "integer",
    "tipoTelefono" : "String",
    "codArea" : "integer",
    "telefono" : "Long"
  } ],
  "vip" : "String",
  "responseStatus" : 200.0,
  "numCliente" : "Long",
  "nombre" : "String",
  "rfc" : "String"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.consultaPerfilesPOST = function(args, res, next) {
  /**
   * Sin Descripción
   *
   * consultaPerfiles, ConsultaPerfiles Nos va a traer facultades Simples
   * returns inline_response_200_4
   **/
  var examples = {};
  examples['application/json'] = {
  "responseError" : "Problema con la peticion",
  "responseStatus" : 200.0,
  "facultadesSimples" : [ "String" ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.consultaProductosContratadosPOST = function(args, res, next) {
  /**
   * Consolidar la información relevante respecto al diseño de la operacion /consultaProductosContratados del servicio /cliente requerida para la integración de Multivanet con T24
   *
   * consultaProductosContratados ConsultaProductosContratados Devuelve un listado de los productos bancarios que han sido contratados por la persona proporcionada
   * returns inline_response_200_5
   **/
  var examples = {};
  examples['application/json'] = {
  "responseError" : "Problema con la peticion",
  "ListaProductos" : [ {
    "idProducto" : "String",
    "nombre" : "String"
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

exports.consultaServiciosContratadosPOST = function(args, res, next) {
  /**
   * Consolidar la información relevante respecto al diseño de la operacion /consultaServiciosContratados del servicio /cliente requerida para la integración de Multivanet con T24
   *
   * consultaServiciosContratados ConsultaServiciosContratados Devuelve un listado de los servicios existentes para personas morales, indicando cuales de ellos han sido contratados por la persona proporcionada
   * returns inline_response_200_6
   **/
  var examples = {};
  examples['application/json'] = {
  "responseError" : "Problema con la peticion",
  "listaServicios" : [ {
    "contratado" : true,
    "id" : 3,
    "nombre" : "BANCA ELECTRONICA",
    "montoMaximoAutorizado" : 10000.1
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

exports.envioNotificacionesPOST = function(args, res, next) {
  /**
   * Interfaz  que le permitirá a un usuario o sistema enviar notifiaciones de varios tipos.
   *
   * envioNotificaciones EnvioNotificaciones  Consulta Productos Contratadose
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

exports.listarTokensOTPPOST = function(args, res, next) {
  /**
   * Interfaz  que le permitira Listar los Tokens de OTP en el sistema TAM de Multiva.
   *
   * listarTokensOTP ListarTokensOTP Se requiere obtener los atributos (uid, cn, sn, createtimestamp,vascoTokenSerialNumber) para todos los usuarios asociados a la persona representada por idPersona; además se requiere obtener el atributo estadoToken para cada UID que fue obtenido en esta consulta.
   * returns inline_response_200_8
   **/
  var examples = {};
  examples['application/json'] = {
  "listTokens" : [ {
    "tokenStatus" : "string",
    "tokenSerial" : "string",
    "fechaAlta" : "date",
    "usuario" : "string",
    "nombreUsuario" : "string"
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

exports.validaContratoPOST = function(args, res, next) {
  /**
   * Este servicio es para  cambiar la bandera de que el usuario acepto el contrato
   *
   * contrato Contrato Se requiere del idCLiente del usuario y la bandera en un valor=1
   * returns inline_response_200_9
   **/
  var examples = {};
  examples['application/json'] = {
  "descripcion" : "Operacion exitosa",
  "codigo" : 0,
  "contrato" : "0"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

