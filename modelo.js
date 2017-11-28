'use strict';

const consultaPerfiles = {
    "facultadesSimples": [
        {
            "nombre": "Mult_Pf_privilege",
            "activa": true,
            "restriccionHorario": true,
            "horaInicio": "15:30:00",
            "horaFin": "17:30:00",
            "tipoFacultad": "FACULTAD_SIMPLE",
            "isComponenteVisible": true,
            "isComponenteHabilitado": true,
            "portlet": true,
            "nombrePortlet": "PORTLET 1"
        },
        {
            "nombre": "Mul_Pf_listAdditional_Otp",
            "activa": true,
            "restriccionHorario": true,
            "horaInicio": "15:30:00",
            "horaFin": "17:30:00",
            "tipoFacultad": "FACULTAD_SIMPLE",
            "isComponenteVisible": true,
            "isComponenteHabilitado": true,
            "portlet": true,
            "nombrePortlet": "PORTLET 2"
        },
        {
            "nombre": "Mul_Pf_ActivateAditional_Otp",
            "activa": true,
            "restriccionHorario": true,
            "horaInicio": "15:30:00",
            "horaFin": "17:30:00",
            "tipoFacultad": "FACULTAD_SIMPLE",
            "isComponenteVisible": true,
            "isComponenteHabilitado": true,
            "portlet": true,
            "nombrePortlet": "PORTLET 3"
        },
        {
            "nombre": "Mul_BlockAditional_Otp",
            "activa": true,
            "restriccionHorario": true,
            "horaInicio": "15:30:00",
            "horaFin": "17:30:00",
            "tipoFacultad": "FACULTAD_SIMPLE",
            "isComponenteVisible": true,
            "isComponenteHabilitado": true,
            "portlet": true,
            "nombrePortlet": "PORTLET 4"
        },
        {
            "nombre": "Mul_Pf_Password_change",
            "activa": true,
            "restriccionHorario": true,
            "horaInicio": "15:30:00",
            "horaFin": "17:30:00",
            "tipoFacultad": "FACULTAD_SIMPLE",
            "isComponenteVisible": true,
            "isComponenteHabilitado": true,
            "portlet": true,
            "nombrePortlet": "PORTLET 5"
        }
    ],
    "responseStatus": 200,
    "responseError": ""
}

const bloqueoOTP = {
  "listTokens": [
    {
      "usuario": "1234567890",
      "responseStatus": 200,
      "responseError": ""
    },
    {
      "usuario": "9876543210",
      "responseStatus": 200,
      "responseError": ""
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const activacionOTP = {
  "listTokens": [
    {
      "usuario": "1234567890",
      "responseStatus": 200,
      "responseError": ""
    },
    {
      "usuario": "9876543210",
      "responseStatus": 200,
      "responseError": ""
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const listarTokensOTP = {
  "listTokens": [
    {
      "usuario": "1234567890",
      "tokenSerial": "7121804170B32HOSTVER",
      "nombreUsuario": "SAUL PEREZ SANCHEZ",
      "fechaAlta": "06-06-2017T08:20:13",
      "tokenStatus": "t"
    },
    {
      "usuario": "1234567890",
      "tokenSerial": "7121804170B32HOSTVER",
      "nombreUsuario": "RAUL PEREZ SANCHEZ",
      "fechaAlta": "06-06-2017T08:20:13",
      "tokenStatus": "t"
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const autentificacion = {
    fechaUltimoAcceso: "20170322163223.0Z",
    nombreUsuario: "Vaughn Grimes",
    medioAcceso: "teléfono",
    mail: "vaughn.grimes@orbean.tv",
    nombreRazonSocial: " ORBEAN, S.A. de C.V",
    responseError: "",
    consultaServiciosContratados: {
      listaServicios: [
        {
          contratado: true,
          nombre: "MULTITESORERIA"
        },
        {
          contratado: true,
          nombre: "PAGO DE NOMINA"
        }
      ]
    },
    listaTelefonos: {
      cvePais: 1,
      tipoTelefono: "celular",
      codArea: 964,
      telefono: "+1 (964) 436-2374"
    },
    responseStatus: 200,
    facultadesSimples: [{
        nombre: 'Mult_Pf_privilege',
        restriccionHorario: false,
        horaInicio: '09:00:00',
        horaFin: '18:00:00',
      },
      {
        nombre: 'Mul_Pf_Password_change',
        restriccionHorario: false,
        horaInicio: '09:00:00',
        horaFin: '18:00:00',
      },
      {
        nombre: 'Mul_Pf_listAdditional_Otp',
        restriccionHorario: false,
        horaInicio: '09:00:00',
        horaFin: '18:00:00',
      },
      {
        nombre: 'Mul_Pf_ActivateAditional_Otp',
        restriccionHorario: false,
        horaInicio: '09:00:00',
        horaFin: '18:00:00',
      },
      {
        nombre: 'Mul_BlockAditional_Otp',
        restriccionHorario: false,
        horaInicio: '09:00:00',
        horaFin: '18:00:00',
      },
      {
        nombre: 'Mul_Con_privilege',
        restriccionHorario: false,
        horaInicio: '09:00:00',
        horaFin: '18:00:00',
      },
      {
        nombre: 'Mul_Con_Balance',
        restriccionHorario: false,
        horaInicio: '09:00:00',
        horaFin: '18:00:00',
      },
      {
        nombre: 'Mul_Con_CFDI',
        restriccionHorario: false,
        horaInicio: '09:00:00',
        horaFin: '18:00:00',
      },
      {
        nombre: 'Mul_Con_Retenciones_CFDI',
        restriccionHorario: false,
        horaInicio: '09:00:00',
        horaFin: '18:00:00',
      },
      {
        nombre: 'Mul_Con_CEP_Recibido',
        restriccionHorario: false,
        horaInicio: '09:00:00',
        horaFin: '18:00:00',
      },
      {
        nombre: 'Mul_Con_MoneyMarket',
        restriccionHorario: false,
        horaInicio: '09:00:00',
        horaFin: '18:00:00',
      },
      {
        nombre: 'Mul_Con_Transactions',
        restriccionHorario: false,
        horaInicio: '09:00:00',
        horaFin: '18:00:00',
      }]
}



const login = {
    "nombreRazonSocial": "Empresa Mexicana de Autopartes A.S",
    "medioAcceso": null,
    "mail": null,
    "responseError": "",
    "consultaServiciosContratados": {
        "responseError": "",
        "listaServicios": [{
              "nombre": "TESORERIA",
              "contratado": true
          },
          {
              "id": 2,          
              "nombre": "PAGO DE NOMINA",
              "contratado": true
          },
          {
              "id": 3,
              "nombre": "BANCA ELECTRONICA",
              "contratado": true,
              "montoMaximoAutorizado": 10000.10
          }
        ],
        "responseStatus": 200
    },
    "nombreUsuario": null,
    "listaTelefonos": {
        "cvePais": 52,
        "tipoTelefono": "celular",
        "codArea": 55,
        "telefono": "5529017222"
    },
    "responseStatus": 200,
    "fechaUltimoAcceso": null
}

const errorServicio = {
    "responseStatus": 234,
    "responseError": "Error en validar el contrato"
}


const Validaotp = {
    "Antiphishing": 989999,
    "responseStatus": 200,
    "responseError": "Usuario correcto y token correcto"
}

const validaContrato = {
    "descripcion": "Operacion exitosa",
    "codigo": 0,
    "contrato": "0"
}

const envioNotificaciones = {
    "responseStatus": 200,
    "responseError": ""
}

const cambioContrasena = {
    "listCambioContrasena": {
        "codigo": 0,
        "mensaje": ""
    },
    "responseStatus": 200,
    "responseError": ""
}

//Sprint 1 adecuacion
/*
const consultaCuentasAgregadasCliente = {
    "listCuentasCliente": [{
        "numeroDeCuenta": "",
        "idProducto": "",
        "descripcionProducto": "",
        "divisa": "",
        "saldo": 1532,
        "idSucursal": 124,
        "nombreSucursal": ""
    }, {
        "numeroDeCuenta": "",
        "idProducto": "",
        "descripcionProducto": "",
        "divisa": "",
        "saldo": 1532,
        "idSucursal": 124,
        "nombreSucursal": ""
    }],
    "listCreditosCliente": [{
        "numeroDeCuenta": "",
        "idProducto": "",
        "descripcionProducto": "",
        "divisa": "",
        "saldo": 1532,
        "idSucursal": 124,
        "nombreSucursal": ""
    }, {
        "numeroDeCuenta": "",
        "idProducto": "",
        "descripcionProducto": "",
        "divisa": "",
        "saldo": 1532,
        "idSucursal": 124,
        "nombreSucursal": ""
    }],
    "listInversionesCliente": [{
        "numeroDeCuenta": "",
        "idProducto": "",
        "descripcionProducto": "",
        "divisa": "",
        "saldo": 1532,
        "idSucursal": 124,
        "nombreSucursal": ""
    }, {
        "numeroDeCuenta": "",
        "idProducto": "",
        "descripcionProducto": "",
        "divisa": "",
        "saldo": 1532,
        "idSucursal": 124,
        "nombreSucursal": ""
    }],
    "responseStatus": 200,
    "responseError": ""
}*/

const consultaProductosContratados = {
    "listaProductos": [{
            "nombre": "CUENTA DE CHEQUES",
            "idProducto": "CHQ"
        },
        {
            "nombre": "TARJETA DE CREDITO",
            "idProducto": "TDC"
        }
    ],
    "responseStatus": 200,
    "responseError": ""
}

const consultaServiciosContratados = {
    "listaServicios": [{
              "nombre": "TESORERIA",
              "contratado": true
          },
          {
              "id": 2,          
              "nombre": "PAGO DE NOMINA",
              "contratado": true
          },
          {
              "id": 3,
              "nombre": "BANCA ELECTRONICA",
              "contratado": true,
              "montoMaximoAutorizado": 10000.10
          }
    ],
    "responseStatus": 200,
    "responseError": ""
}

const consultaContrato = {
    "muestraContrato": true,
    "responseStatus": 200,
    "responseError": ""

}

const consultaContratoerror = {
    "muestraContrato": true,
    "responseStatus": 200,
    "responseError": ""

}


const consultaDatosCliente = {
    "numCliente": "123454354545",
    "nombre": "Empresa Mexicana de Autopartes A.S",
    "listaDirecciones": [{
        "direccion": "Naucalpan #12 colonia maravillas",
        "poblacion": "Estado de Mexico",
        "ciudad": "Mexico",
        "estado": "Estado de Mexico",
        "cp": "15420",
        "tipoDireccion": "1"
    }],
    "rfc": "DEGA880407HFLNR01",
    "listaTelefonos": [{
            "cvePais": 52,
            "codArea": 55,
            "telefono": "5529017222",
            "tipoTelefono": "celular"

        }, {
            "cvePais": 52,
            "codArea": 55,
            "telefono": "5529017223",
            "tipoTelefono": "celular"
        }, {
            "cvePais": 52,
            "codArea": 55,
            "telefono": "5529017224",
            "tipoTelefono": "celular"
        },

    ],
    "listaEmails": [{
        "mail": "enrique@gmail.com",
        "activo": true,
        "tipoEmail": "empresa"
    }],
    "tipoPersona": "moral",
    "estatus": "a",
    "sucursal": "313",
    "vip": "1",
    "responseStatus": 200,
    "responseError": ""
}

 /////////// Sprint 2  /////////////

const consultaCuentasAgregadasCliente = {
  "listCuentasCliente": [
    {
      "nombreCuenta": "CUENTA DE PRUEBA",
      "numeroDeCuenta": "123456",
      "idProducto": "CHQ",
      "descripcionProducto": "Cuenta de Cheques",
      "divisa": "MXN",
      "depositosPendientes": 10000,
      "depositosSBC": 15000,
      "saldoMovimientosDia": 1989.5,
      "movimientos": 1,
      "lineaSobregiro": 5000,
      "interesesGenerados": 2000,
      "CLABE": "123456789012345",
      "saldo": 1532,
      "alias": "CUENTA DE PRUEBA"
    }
  ],
  "listCreditosCliente": [
    {
      "contrato": "123456",
      "numeroDeCuenta": "7894560",
      "idProducto": "CRED",
      "descripcionProducto": "CREDITO DE PRUEBA",
      "saldoTotal": 1000000,
      "alias": "HIPOTECA CASA"
    }
  ],
  "listInversionesPagareCliente": [
    {
      "numeroDeCuenta": "789456",
      "idProducto": "PGR",
      "descripcionProducto": "Inversion Pagare",
      "plazo": 30,
      "tasa": 5.21,
      "saldo": 100000.5,
      "interesDevengado": 100,
      "interesPagar": 100,
      "fechaVencimiento": "19-07-2017",
      "instruccionesVencimiento": "instruccionesVencimiento",
      "alias": "PAGARE DE PRUEBA",
      "ISRRetenido": 14000,
      "saldoNeto": 15.02,
      "apertura": "13-05-2017T00:57:00"
    }
  ],
  "listInversionesCedeCliente": [
    {
      "numeroDeCuenta": "789456",
      "idProducto": "CEDE",
      "descripcionProducto": "Inversion CEDE",
      "plazo": 30,
      "tasa": 5.21,
      "saldo": 100000.5,
      "interesesDevengados": 1000,
      "fechaVencimiento": "19-07-2017",
      "fechaProximoPago": "19-07-2017T09:00:00",
      "alias": "CEDE DE PRUEBA",
      "ISRRetenido": 14000,
      "saldoNeto": 15.02,
      "apertura": "13-05-2017T:01:00:00"
    }
  ],
  "listInversionesVistaCliente": [
    {
      "numeroDeCuenta": "0123456",
      "idProducto": "INT",
      "descripcionProducto": "Chequera integral",
      "cuentaIntegra": "789456",
      "saldo": 780000,
      "alias": "Mi inversion"
    }
  ],
  "listFondosCliente": [
    {
      "numeroDeCuenta": "456789",
      "idProducto": "FND",
      "descripcionProducto": "Fondos",
      "saldo": 1000000,
      "alias": "FONDO DE PRUEBA",
      "emisora": "ABC-1234-AC1",
      "titulos": 100,
      "precioMercado": 120,
      "valuacion": 12000,
      "valia": -1.03
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const consultaDetalleCredito = {
    "numeroDeCuenta": "123456",
    "contrato": "123456789",
    "fechaDisposicion": "17-07-2017",
    "fechaVencimiento": "18-07-2018",
    "importe": "200000.00",
    "tipoCredito": "SIMPLE",
    "saldoCapital": 1000000,
    "interesVigente": 50000,
    "estatus": "estatus",
    "montoInicial": 2000000,
    "plazo": 12,
    "tasa": 12.5,
    "periodicidadPago": "MENSUAL",
    "proximoPago": [
      {
        "capital": 1000,
        "interes": 900,
        "IVA": 150,
        "otrosCargos": 0,
        "importePago": 1150,
        "fecha": "17-08-2017",
        "moratorio": 500,
        "IVAmoratorio": 10,
        "atraso": 10
      }
    ],
    "pagosVencidos": [
      {
        "capital": 10000,
        "interes": 9000,
        "IVA": 1500,
        "otrosCargos": 0,
        "importePago": 1150,
        "fecha": "17-08-2017",
        "moratorio": 500,
        "IVAmoratorio": 15,
        "atraso": 10
      }
    ],
    "responseStatus": 200,
    "responseError": "P"
}

const activacionPaperless = {
    "responseStatus": 200,
    "responseError": ""
}

const consultaMovimientos = {
  "saldoInicial": 0,
  "listMovimientos": [
    {
      "folio": "ABCD12345",
      "fecha": "25-05-2017T08:47:00",
      "descripcion": "DESCRIPCION DEL MOVIMIENTO",
      "importe": 21.5,
      "divisa": "MXN",
      "cuentaDestino": "123456789012345",
      "cuentaOrigen": "987654321012345",
      "referencia": "referencia",
      "referenciaNumerica": 1234567,
      "CASFIM": "789456",
      "canal": "MVNET"
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const consultaMovsMesaDinero = {
  "saldoFinDia": 1000000,
  "saldo": 2000000,
  "movimientos": [
    {
      "fechaLiquidacion": "26-07-2017",
      "fechaOperacion": "27-07-2017",
      "folio": "123456789",
      "concepto": "CONCEPTO",
      "emisora": "147",
      "serie": "78A",
      "noTitulos": 10,
      "tasaRendimiento": 1.01,
      "precio": 1200,
      "importe": 12000,
      "premio": 500,
      "plazo": 12
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const consultaMovimientosMultiT ={
  "listMovimientos": [
    {
      "cliente": 12345678,
      "fecha": "25-05-2017T08:47:00",
      "descripcion": "DESCRIPCION DEL MOVIMIENTO",
      "importe": -21.5,
      "naturaleza": "CARGO",
      "divisa": "MXN",
      "cuentaDestino": "123456789012345",
      "cuentaOrigen": "987654321012345",
      "saldoInicial": 21.5,
      "saldoDisponible": 0,
      "folio": "",
      "referenciaTransferencia": "1234567",
      "moneda": "",
      "canal": "MVNET"
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const consultaCfdCfdi = {
  //Es un archivo
  "_downloadFile":true
}


const consultaCfdCfdiRetenciones = {
    //Es un archivo
    "_downloadFile":true
}

const consultaRetenciones = {
  "listRetenciones": [
    {
      "tipoDeConstancia": "CRI",
      "noDeCliente": "543210987654321",
      "noDeContrato": "543210987654321",
      "RFCReceptor": "QUVA790114FT5",
      "uuid": "SEFDAD1234-87465-ASDSD-14523"
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const consultaCtasServMultiT ={
  "servicios": [
    {
      "cuentaOrigen": "123456789",
      "cliente": 12456,
      "nombre": "Enrique Gaona",
      "RFC": "ABCD01011970XYZ",
      "CURP": "ABCD123456789",
      "email": "wterry@dominio.com",
      "mobil": "123456789",
      "tipoServicio": "15",
      "descripcionServicio": "PAGO DE SKY",
      "tipoTraspaso": "94",
      "descripcionTraspaso": "PAGO DE SERVICIOS",
      "cuentaDestino": "123456789",
      "claveBanxico": "12345",
      "maxTransacciones": 5,
      "maxMonto": 50000,
      "estatus": "Activo",
      "tipoCuenta": "03",
      "descripcionTipoCuenta": "TARJETA DE DEBITO"
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const consultaSaldosMultiT = {
  "cuentas": [
    {
      "cuenta": "123456789",
      "cliente": 12456,
      "alias": "AliasDeMiCuenta",
      "nombreCuenta": "Enrique Gaona",
      "clientePadre": 89456,
      "saldoDisponible": 123000,
      "idProducto": "CHQ",
      "descripcionProducto": "CHEQUES",
      "CLABE": "123456789987456",
      "moneda": "MXP"
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const estadoCuentaPDF = {
    //Es un archivo
    "_downloadFile":true
}

const movimientosDonaciones = {
  "listDonaciones": [
    {
      "folio": 123870212,
      "fecha": "13-05-2017T13:20:35 p.m.",
      "tipoDonativo": "FUNDACION",
      "descripcion": "DESCRIPCION DEL DONATIVO",
      "estatus": "NO APLICADA",
      "monto": 200012.211
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const estadoPaperless = {
    "opcionImpresion": "ACTIVA",
    "omitirNombre": true,
    "noCuentaParcialmente": true,
    "responseStatus": 200,
    "responseError": ""
}

const consultaMesaDinero = {
  "efectivoDisponible": 20000,
  "totalCartera": 20000,
  "valuacionPortafolio": 30000,
  "posiciones": [
    {
      "inversion": "S1-123-456",
      "emisora": "S1",
      "serie": "123",
      "titulos": 100,
      "precio": 200,
      "valuacion": 20000,
      "numeroCuenta": "123456"
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const validaOTP = {
  "antiPishing": "12345",
  "responseStatus": 200,
  "responseError": ""
}



/////////// Sprint 3  /////////////


const sincronizaOTP = {
  "responseStatus": 200,
  "responseError": ""
}


const asociaMovil ={
  "responseStatus": 200,
  "responseError": ""
}

const consultaBancos = {
  "bancos": [
    {
      "CASFIM": "123456798",
      "nombreCorto": "BANCOMER",
      "nombre": "BANCOMER BBVA",
      "participaCECOBAN": false,
      "participaPROSA": false,
      "participaSPEI": false,
      "activoCECOBAN": false,
      "activoPROSA": false,
      "activoSPEI": false
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}
 


const obtenerCatalogoTipoTxn = {
  "responseStatus": 200,
  "responseError": "",
  "tiposTransaccion": [
    {
      "idTipoTransaccion": "1",
      "nombre": "Cuentas Propias",
      "participaRegistro": true,
      "participaTransaccion": true
    }
  ]
}

const obtenerCatalogoConvenios = {
  "responseStatus": 200,
  "responseError": "",
  "convenios": [
    {
      "id": 2,
      "nombre": "Pago de servicio telefonico"
    }
  ]
}

const eliminaPreregistro = {
    "responseStatus": 200,
    "responseError": ""
}

const consultaBines = {
  "responseStatus": 200,
  "responseError": "",
  "bines": [
    {
      "CASFIM": "123456",
      "nombreCorto": "BANCOMER",
      "bin": [
        "123456"
      ]
    }
  ]
}

const actualizaMovil = {
  "responseStatus": 200,
  "responseError": ""
}

const eliminaMovil = {
  "responseStatus": 200,
  "responseError": ""
}

const actualizarNIP = {
  "responseStatus": 200,
  "responseError": ""
}

const consultaCuentahabiente = {
  "responseStatus": 200,
  "responseError": "",
  "nombreCuentahabiente": "wterry@legosoft.com.mx"
}

const obtenerReporteCobranza = {
  "responseStatus": 200,
  "responseError": "",
  "rutaReporte": ""
}

const consultarAutorizaciones = {
  "responseStatus": 200,
  "responseError": "",
  "autorizaciones": [
    {
      "taskId": "123456789",
      "idPersona": 123456789,
      "nombreRazonSocial": "WALDO MANUEL TERRY DO REGO BARROS",
      "idPersonaSolicitante": 123456,
      "nombreSolicitante": "JULIO GARCIA",
      "folio": "QWERTY123456789",
      "descripcionOperacion": "tipo de preregistro + tipo de convenio/alta de preregistro/nombre de operacion",
      "montoOperacion": 123456000
    }
  ]
}

const guardaPreregistro = {
  "idPreregistro:":"123456",
  "responseStatus": 200,
  "responseError": ""
}

const obtenerPreregistroPorCliente = {
  "responseStatus": 200,
  "responseError": "",
  "preregistros": [
    {
      "idPreregistro": 1245,
      "estatus": "",
      "tipoCuenta": 2,
      "noCuenta": "",
      "idTipoTransaccion": 1,
      "alias": "ALIAS",
      "montoMaximo": 120000,
      "celularNotification": "5512233456",
      "email": "test@domain.com",
      "periodo": "semanal",
      "moneda": "MXN",
      "tercero": {
        "idProducto": "CHQ",
        "pagoProveedor": false
      },
      "interbancario": {
        "banco": "",
        "beneficiario": "Enrique Gaona",
        "pagoProveedor": false
      },
      "credito": {
        "banco": "123456789",
        "tipoCredito": 1
      },
      "servicio": {
        "noEstablecimiento": 15,
        "razonSocial": "Telefonos de Mexico"
      },
      "pagoTDC": {
        "noEstablecimiento": 15,
        "banco": "123456789"
      }
    }
  ]
}

const eliminaBarrido = {
  "responseStatus": 200,
  "responseError": ""
}

const eliminaDispersion = {
  "responseStatus": 200,
  "responseError": ""
}

const emiteVoto = {
  "responseStatus": 200,
  "responseError": ""
}

const actualizaAliasCuenta = {
  "responseStatus": 200,
  "responseError": ""
}

const consultaMovilesCliente = {
  "responseStatus": 200,
  "responseError": "",
  "moviles": [
    {
      "noSerie": "12345679",
      "imei": "12346"
    }
  ]
}

const registraMovilTouch = {
  "responseStatus": 200,
  "responseError": ""
}


const consultaReporteCobranza = {
  "responseError": "",
  "reportes": [
    {
      "noCuenta": "12131313113",
      "fechaInicio": "27-07-2017",
      "formato": "CSV",
      "folio": "12131313113",
      "tipoCuenta": "TPB",
      "horaProgramacion": "09:09:09",
      "fechaFin": "26-07-2017",
      "separador": "|",
      "email": "enrique@gmail.com",
      "columnas": [
        "fecha"
      ]
    }
  ],
  "responseStatus": 200
}

const eliminaReporteCobranza = {
  "responseError": "",
  "responseStatus": 200
}

const actualizarDatosBE = {
  "responseStatus": 200,
  "responseError": ""
}

const catCreditos = {
  "catTiposCreditos": [
    {
      "idTipoCredito": 1,
      "nombre": "Hipotecario"
    },
    {
      "idTipoCredito": 2,
      "nombre": "Automotriz"
    },
    {
      "idTipoCredito": 3,
      "nombre": "Personal"
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const catTipoCuenta = {
  "catTipoCuentas": [
    {
      "idTipoCuenta": 4,
      "nombre": "Celular",
      "tiposTransaccion": [
        2,
        3,
        10,
        11
      ]
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const actualizaReporteCobranza = {
  "responseStatus": 200,
  "responseError": ""
}

const actualizaPreregistro = {
  "responseStatus": 200,
  "responseError": ""
}

const barrerCuentas = {
  "folioBarrido": "5642312345",
  "responseStatus": 200,
  "responseError": ""
}

const dispersaFondos = {
  "responseStatus": 200,
  "responseError": ""
}

const actualizaDispersionFondos = {
  "responseStatus": 200,
  "responseError": ""
}

const consultaBarridoCuentas = {
  "responseStatus": 200,
  "responseError": "",
  "barridos": [
    {
      "folioBarrido": 265,
      "cuentaConcentradora": 5642312345,
      "nombreCuentaConcentradora": "CUENTA CONCENTRADORA",
      "horasEjecucion": [
        "12:00:00",
        "14:00:00",
        "16:00:00"
      ],
      "cuentasBarrer": [
        {
          "cuenta": "4564523153498",
          "montoMinDejar": 500,
          "nombre": "CUENTA 1"
        }
      ]
    }
  ]
} 

const actualizaBarrido = {
  "responseError": "",
  "responseStatus": 200
}

const desregistraMovil = {
  "responseError": "",
  "responseStatus": 200
}

const obtenerPreregistroPorClienteTransaccion = {
  "responseStatus": 200,
  "responseError": "",
  "preregistros": [
    {
      "idPreregistro": 1245,
      "estatus": "",
      "fechaAlta": "",
      "fechaModificacion": "",
      "tipoCuenta": 2,
      "noCuenta": "",
      "idTipoTransaccion": 1,
      "alias": "ALIAS",
      "montoMaximo": 120000,
      "celularNotification": "5512233456",
      "email": "test@domain.com",
      "moneda": "MXN",
      "periodo": "semanal",
      "tercero": {
        "idProducto": "CHQ",
        "beneficiario": "Enrique Gaona",
        "pagoProveedor": false,
        "referenciado": false
      },
      "interbancario": {
        "banco": "",
        "beneficiario": "Enrique Gaona",
        "rfcCurp": "TEDW123456789",
        "pagoProveedor": false
      },
      "credito": {
        "banco": "123456789",
        "tipoCredito": 1
      },
      "servicio": {
        "noEstablecimiento": 1,
        "razonSocial": "Teléfonos de México"
      },
      "pagoTDC": {
        "noEstablecimiento": 3,
        "banco": "12345689"
      }
    }
  ]
}

const consultaLotes = {
  "responseStatus": 200,
  "responseError": "",
  "lotes": [
    {
      "folio": "123456",
      "nombreArchivo": "dispersion.csv",
      "fechaRegistro": "01-09-2017T02:26:00",
      "fechaEjecucion": "01-09-2017T02:26:00",
      "estatus": "EJECUTADO",
      "operacion": "DISPERSION",
      "tipo": "RESPUESTA"
    }
  ]
}

const ejecutarTransaccion = {
  "responseError": "",
  "responseStatus": 200
}

const catDispositivosMoviles = {
   "dispositivos": [
    {
      "descripcion": "ANDROID GALAXY NOTE 8",
      "idDispositivo": 1
    }
  ],
  "responseError": "",
  "responseStatus": 200
}

const cancelaOpProg = {
  "responseError": "",
  "responseStatus": 200
}

var mapaModelo = {
   //### ESB ####//
   /////////// Sprint 1  /////////////
  'consultaDatosBasicos': consultaDatosCliente,
  'consultaServiciosContratados':consultaServiciosContratados,
  'consultaProductosContratados':consultaProductosContratados,
  'validaContrato':validaContrato,
  'cambioContrasena':cambioContrasena,
  //'consultaCuentasAgregadasCliente':consultaCuentasAgregadasCliente,
  'envioNotificaciones':envioNotificaciones,
  'listarTokensOTP':listarTokensOTP,
  'activacionOTP':activacionOTP,
  'bloqueoOTP':bloqueoOTP,
  'consultaPerfiles': consultaPerfiles,
  'login':login,
  'autentificacion':autentificacion,
  'consultaContrato':consultaContrato,
  'errorServicio':errorServicio,
  'consultaContratoerror':consultaContratoerror,
  /////////// Sprint 2  /////////////
  'consultaCuentasAgregadasCliente':consultaCuentasAgregadasCliente,
  'consultaSaldosMultiT':consultaSaldosMultiT,
  'consultaMovimientosMultiT':consultaMovimientosMultiT,
  'consultaCtasServMultiT':consultaCtasServMultiT,
  'estadoPaperless':estadoPaperless,
  'activacionPaperless':activacionPaperless,
  'consultaMovimientos':consultaMovimientos,
  'consultaMesaDinero':consultaMesaDinero,
  'consultaMovsMesaDinero':consultaMovsMesaDinero,
  'movimientosDonaciones':movimientosDonaciones,
  'consultaCfdCfdiRetenciones':consultaCfdCfdiRetenciones,
  'consultaRetenciones':consultaRetenciones,
  'consultaDetalleCredito':consultaDetalleCredito,
  'consultaCfdCfdi':consultaCfdCfdi,
  'estadoCuentaPDF':estadoCuentaPDF,
  'validaOTP':validaOTP,

 /////////// Sprint 3  /////////////
  'sincronizaOTP':sincronizaOTP,
  'asociaMovil':asociaMovil,
  'consultaBancos':consultaBancos,
  'obtenerCatalogoTipoTxn':obtenerCatalogoTipoTxn,
  'obtenerCatalogoConvenios':obtenerCatalogoConvenios,
  'eliminaPreregistro':eliminaPreregistro,
  'consultaBines':consultaBines,
  'actualizaMovil':actualizaMovil,
  'eliminaMovil':eliminaMovil,
  'actualizarNIP':actualizarNIP,
  'consultaCuentahabiente':consultaCuentahabiente,
  'obtenerReporteCobranza':obtenerReporteCobranza,
  'consultarAutorizaciones':consultarAutorizaciones,
  'guardaPreregistro':guardaPreregistro,
  'obtenerPreregistroPorCliente':obtenerPreregistroPorCliente,
  'eliminaBarrido':eliminaBarrido,
  'eliminaDispersion':eliminaDispersion,
  'emiteVoto':emiteVoto,
  'actualizaAliasCuenta':actualizaAliasCuenta,
  'consultaMovilesCliente':consultaMovilesCliente,
  'registraMovilTouch':registraMovilTouch,  
  'consultaReporteCobranza':consultaReporteCobranza,
  'eliminaReporteCobranza':eliminaReporteCobranza,
  'actualizarDatosBE':actualizarDatosBE,
  'catCreditos':catCreditos,
  'catTipoCuenta':catTipoCuenta,
  'actualizaReporteCobranza':actualizaReporteCobranza,
  'actualizaPreregistro':actualizaPreregistro,
  'barrerCuentas':barrerCuentas,
  'dispersaFondos':dispersaFondos,
  'actualizaDispersionFondos':actualizaDispersionFondos,
  'consultaBarridoCuentas':consultaBarridoCuentas,
  'actualizaBarrido':actualizaBarrido,
  'desregistraMovil':desregistraMovil,
  'obtenerPreregistroPorClienteTransaccion':obtenerPreregistroPorClienteTransaccion,
  'consultaLotes':consultaLotes,
  'ejecutarTransaccion':ejecutarTransaccion,
  'catDispositivosMoviles':catDispositivosMoviles,
  'cancelaOpProg':cancelaOpProg   
}

function obtenerModelo (nombreModelo){
    return mapaModelo[nombreModelo]
}

module.exports = {
  obtenerModelo
}
