'use strict';

const consultaPerfilesPerf = {
  "facultadesSimples": [{
    nombre: 'Mult_Pf_privilege',
    activa: true,
    restriccionHorario: false,
    horaInicio: '09:00:00',
    horaFin: '18:00:00',
    tipoFacultad: 'FACULTAD_SIMPLE',
    isComponenteVisible: true,
    isComponenteHabilitado: true,
    portlet: true,
    nombrePortlet: 'PORTLET 1',
  },
  {
    nombre: 'Mul_Pf_Password_change',
    activa: true,
    restriccionHorario: false,
    horaInicio: '09:00:00',
    horaFin: '18:00:00',
    tipoFacultad: 'FACULTAD_SIMPLE',
    isComponenteVisible: true,
    isComponenteHabilitado: true,
    portlet: true,
    nombrePortlet: 'PORTLET 1',
  },
  {
    nombre: 'Mul_Pf_listAdditional_Otp',
    activa: true,
    restriccionHorario: false,
    horaInicio: '09:00:00',
    horaFin: '18:00:00',
    tipoFacultad: 'FACULTAD_SIMPLE',
    isComponenteVisible: true,
    isComponenteHabilitado: true,
    portlet: true,
    nombrePortlet: 'PORTLET 1',
  },
  {
    nombre: 'Mul_Pf_ActivateAditional_Otp',
    activa: true,
    restriccionHorario: false,
    horaInicio: '09:00:00',
    horaFin: '18:00:00',
    tipoFacultad: 'FACULTAD_SIMPLE',
    isComponenteVisible: true,
    isComponenteHabilitado: true,
    portlet: true,
    nombrePortlet: 'PORTLET 1',
  },
  {
    nombre: 'Mul_BlockAditional_Otp',
    activa: true,
    restriccionHorario: false,
    horaInicio: '09:00:00',
    horaFin: '18:00:00',
    tipoFacultad: 'FACULTAD_SIMPLE',
    isComponenteVisible: true,
    isComponenteHabilitado: true,
    portlet: true,
    nombrePortlet: 'PORTLET 1',
  },
  {
    nombre: 'Mul_Con_privilege',
    activa: true,
    restriccionHorario: false,
    horaInicio: '09:00:00',
    horaFin: '18:00:00',
    tipoFacultad: 'FACULTAD_SIMPLE',
    isComponenteVisible: true,
    isComponenteHabilitado: true,
    portlet: true,
    nombrePortlet: 'PORTLET 1',
  },
  {
    nombre: 'Mul_Con_Balance',
    activa: true,
    restriccionHorario: false,
    horaInicio: '09:00:00',
    horaFin: '18:00:00',
    tipoFacultad: 'FACULTAD_SIMPLE',
    isComponenteVisible: true,
    isComponenteHabilitado: true,
    portlet: true,
    nombrePortlet: 'PORTLET 1',
  },
  {
    nombre: 'Mul_Con_CFDI',
    activa: true,
    restriccionHorario: false,
    horaInicio: '09:00:00',
    horaFin: '18:00:00',
    tipoFacultad: 'FACULTAD_SIMPLE',
    isComponenteVisible: true,
    isComponenteHabilitado: true,
    portlet: true,
    nombrePortlet: 'PORTLET 1',
  },
  {
    nombre: 'Mul_Con_Retenciones_CFDI',
    activa: true,
    restriccionHorario: false,
    horaInicio: '09:00:00',
    horaFin: '18:00:00',
    tipoFacultad: 'FACULTAD_SIMPLE',
    isComponenteVisible: true,
    isComponenteHabilitado: true,
    portlet: true,
    nombrePortlet: 'PORTLET 1',
  },
  {
    nombre: 'Mul_Con_CEP_Recibido',
    activa: true,
    restriccionHorario: false,
    horaInicio: '09:00:00',
    horaFin: '18:00:00',
    tipoFacultad: 'FACULTAD_SIMPLE',
    isComponenteVisible: true,
    isComponenteHabilitado: true,
    portlet: true,
    nombrePortlet: 'PORTLET 1',
  },
  {
    nombre: 'Mul_Con_MoneyMarket',
    activa: true,
    restriccionHorario: false,
    horaInicio: '09:00:00',
    horaFin: '18:00:00',
    tipoFacultad: 'FACULTAD_SIMPLE',
    isComponenteVisible: true,
    isComponenteHabilitado: true,
    portlet: true,
    nombrePortlet: 'PORTLET 1',
  },
  {
    nombre: 'Mul_Con_Transactions',
    activa: true,
    restriccionHorario: false,
    horaInicio: '09:00:00',
    horaFin: '18:00:00',
    tipoFacultad: 'FACULTAD_SIMPLE',
    isComponenteVisible: true,
    isComponenteHabilitado: true,
    portlet: true,
    nombrePortlet: 'PORTLET 1',
  }],
  "responseStatus": 200,
  "responseError": ""
}

const bloqueoOTP = {
  "listTokens": [
    {
      "usuario": "String",
      "responseStatus": "Long",
      "responseError": "String"
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const activacionOTP = {
  "listTokens": [
    {
      "usuario": "String",
      "responseStatus": "Long",
      "responseError": "String"
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const listarTokensOTP = {
  "listTokens": [
    {
      "usuario": "string",
      "tokenSerial": "string",
      "nombreUsuario": "string",
      "fechaAlta": "date",
      "tokenStatus": "string"
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}
/** 
{
  "listTokens": [
  {
    "usuario": 4349121927,
    "tokenSerial": "500745HOSTVER",
    "nombreUsuario": "CATALINA MASON",
    "fechaAlta": "03-12-2017T00:5:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 3509848025,
    "tokenSerial": "844110HOSTVER",
    "nombreUsuario": "DELANEY WOLFE",
    "fechaAlta": "05-10-2017T00:3:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 3028717499,
    "tokenSerial": "160224HOSTVER",
    "nombreUsuario": "LEIGH MCMILLAN",
    "fechaAlta": "04-10-2017T00:15:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 2766695674,
    "tokenSerial": "528193HOSTVER",
    "nombreUsuario": "RENE BOOKER",
    "fechaAlta": "29-12-2017T00:19:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 7851783015,
    "tokenSerial": "349883HOSTVER",
    "nombreUsuario": "WELLS VASQUEZ",
    "fechaAlta": "18-12-2017T00:48:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 2771371033,
    "tokenSerial": "442035HOSTVER",
    "nombreUsuario": "HAMPTON FARRELL",
    "fechaAlta": "26-11-2017T00:49:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 2192341179,
    "tokenSerial": "390302HOSTVER",
    "nombreUsuario": "MCNEIL CAIN",
    "fechaAlta": "28-12-2017T00:55:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 5471024780,
    "tokenSerial": "184488HOSTVER",
    "nombreUsuario": "MURRAY FOREMAN",
    "fechaAlta": "29-09-2017T00:46:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 1847333953,
    "tokenSerial": "649929HOSTVER",
    "nombreUsuario": "MICHELE MCKAY",
    "fechaAlta": "02-11-2017T00:52:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 1416465372,
    "tokenSerial": "291068HOSTVER",
    "nombreUsuario": "SINGLETON FARMER",
    "fechaAlta": "21-11-2017T00:19:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 5370091857,
    "tokenSerial": "557128HOSTVER",
    "nombreUsuario": "SNOW HAMILTON",
    "fechaAlta": "13-10-2017T00:45:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 5304739872,
    "tokenSerial": "671361HOSTVER",
    "nombreUsuario": "TERI ELLIS",
    "fechaAlta": "28-10-2017T00:3:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 4360953695,
    "tokenSerial": "306392HOSTVER",
    "nombreUsuario": "TIA MCINTYRE",
    "fechaAlta": "03-10-2017T00:8:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 3867854819,
    "tokenSerial": "524970HOSTVER",
    "nombreUsuario": "ROACH HURST",
    "fechaAlta": "27-11-2017T00:23:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 4183733112,
    "tokenSerial": "284525HOSTVER",
    "nombreUsuario": "SHELLEY MELTON",
    "fechaAlta": "09-12-2017T00:33:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 4597380328,
    "tokenSerial": "284726HOSTVER",
    "nombreUsuario": "IRIS ONEILL",
    "fechaAlta": "10-12-2017T00:16:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 3655787438,
    "tokenSerial": "494910HOSTVER",
    "nombreUsuario": "BURNETT NEAL",
    "fechaAlta": "22-12-2017T00:47:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 8372057241,
    "tokenSerial": "365888HOSTVER",
    "nombreUsuario": "SONDRA NORRIS",
    "fechaAlta": "19-12-2017T00:27:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 8034481515,
    "tokenSerial": "340350HOSTVER",
    "nombreUsuario": "COCHRAN AVILA",
    "fechaAlta": "04-10-2017T00:22:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 2344843163,
    "tokenSerial": "898064HOSTVER",
    "nombreUsuario": "CATHRYN MOSS",
    "fechaAlta": "31-10-2017T00:36:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 6826945390,
    "tokenSerial": "740004HOSTVER",
    "nombreUsuario": "PHELPS JEFFERSON",
    "fechaAlta": "24-09-2017T00:44:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 1921330441,
    "tokenSerial": "524149HOSTVER",
    "nombreUsuario": "MERCER GREER",
    "fechaAlta": "25-10-2017T00:15:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 2922416581,
    "tokenSerial": "844199HOSTVER",
    "nombreUsuario": "KATHRYN MOON",
    "fechaAlta": "17-12-2017T00:14:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 4182604305,
    "tokenSerial": "519512HOSTVER",
    "nombreUsuario": "AUDREY WEBB",
    "fechaAlta": "27-12-2017T00:22:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 2563428975,
    "tokenSerial": "273205HOSTVER",
    "nombreUsuario": "FITZPATRICK HENRY",
    "fechaAlta": "24-10-2017T00:36:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 2579131088,
    "tokenSerial": "775294HOSTVER",
    "nombreUsuario": "JUSTINE FLYNN",
    "fechaAlta": "11-11-2017T00:2:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 2139515379,
    "tokenSerial": "436298HOSTVER",
    "nombreUsuario": "ETHEL PAUL",
    "fechaAlta": "23-11-2017T00:4:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 4936280454,
    "tokenSerial": "826571HOSTVER",
    "nombreUsuario": "LOVE STEPHENS",
    "fechaAlta": "05-11-2017T00:39:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 6068032485,
    "tokenSerial": "799210HOSTVER",
    "nombreUsuario": "WHITNEY AYERS",
    "fechaAlta": "14-11-2017T00:49:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 6070593070,
    "tokenSerial": "887228HOSTVER",
    "nombreUsuario": "SAMPSON SERRANO",
    "fechaAlta": "30-11-2017T00:33:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 4027387539,
    "tokenSerial": "440922HOSTVER",
    "nombreUsuario": "FORD BOND",
    "fechaAlta": "23-09-2017T00:12:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 6022600893,
    "tokenSerial": "158430HOSTVER",
    "nombreUsuario": "GLENNA BOYLE",
    "fechaAlta": "24-10-2017T00:23:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 2531613988,
    "tokenSerial": "663192HOSTVER",
    "nombreUsuario": "JODIE JACKSON",
    "fechaAlta": "11-11-2017T00:22:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 8376824601,
    "tokenSerial": "254705HOSTVER",
    "nombreUsuario": "MARSH HUGHES",
    "fechaAlta": "31-10-2017T00:11:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 5436259832,
    "tokenSerial": "216528HOSTVER",
    "nombreUsuario": "SIMON RANDALL",
    "fechaAlta": "09-10-2017T00:21:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 4801962886,
    "tokenSerial": "564661HOSTVER",
    "nombreUsuario": "LORRIE PATRICK",
    "fechaAlta": "25-11-2017T00:26:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 4260888776,
    "tokenSerial": "310931HOSTVER",
    "nombreUsuario": "MINDY BRYANT",
    "fechaAlta": "22-11-2017T00:12:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 6813180801,
    "tokenSerial": "592607HOSTVER",
    "nombreUsuario": "HINTON WALLS",
    "fechaAlta": "09-10-2017T00:11:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 4557269391,
    "tokenSerial": "826298HOSTVER",
    "nombreUsuario": "PALMER LESTER",
    "fechaAlta": "25-10-2017T00:44:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 3439250176,
    "tokenSerial": "776874HOSTVER",
    "nombreUsuario": "BRIANNA GILES",
    "fechaAlta": "07-12-2017T00:57:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 5063959580,
    "tokenSerial": "632323HOSTVER",
    "nombreUsuario": "MARISOL CERVANTES",
    "fechaAlta": "21-10-2017T00:39:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 5237251972,
    "tokenSerial": "688359HOSTVER",
    "nombreUsuario": "SUSANNE HUNT",
    "fechaAlta": "31-10-2017T00:2:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 5570027001,
    "tokenSerial": "253070HOSTVER",
    "nombreUsuario": "WENDI HICKS",
    "fechaAlta": "12-11-2017T00:51:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 4821739579,
    "tokenSerial": "116314HOSTVER",
    "nombreUsuario": "LITTLE ORTEGA",
    "fechaAlta": "09-11-2017T00:36:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 1036862809,
    "tokenSerial": "165068HOSTVER",
    "nombreUsuario": "BRADY MAXWELL",
    "fechaAlta": "14-10-2017T00:32:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 6016278671,
    "tokenSerial": "214798HOSTVER",
    "nombreUsuario": "FRENCH MCCULLOUGH",
    "fechaAlta": "02-12-2017T00:13:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 8741401841,
    "tokenSerial": "752955HOSTVER",
    "nombreUsuario": "LEONA MCGOWAN",
    "fechaAlta": "22-10-2017T00:30:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 6688895799,
    "tokenSerial": "472344HOSTVER",
    "nombreUsuario": "MOONEY BRITT",
    "fechaAlta": "10-11-2017T00:3:01",
    "tokenStatus": "t"
  },
  {
    "usuario": 5899911366,
    "tokenSerial": "460564HOSTVER",
    "nombreUsuario": "GIBSON GILLIAM",
    "fechaAlta": "24-12-2017T00:14:01",
    "tokenStatus": "f"
  },
  {
    "usuario": 5199251028,
    "tokenSerial": "514861HOSTVER",
    "nombreUsuario": "CELINA MARSH",
    "fechaAlta": "12-12-2017T00:38:01",
    "tokenStatus": "t"
  }
  ],
  "responseStatus": 200,
  "responseError": ""
}
**/

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
      "idServicio": 2,          
      "nombre": "PAGO DE NOMINA",
      "contratado": true
    },
    {
      "idServicio": 3,
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


/**const Validaotp = {
  "Antiphishing": 989999,
  "responseStatus": 200,
  "responseError": "Usuario correcto y token correcto"
}**/


function Validaotp(bodyreq){

console.log("USUARIO--------------"+bodyreq.otp);


  if( bodyreq.otp == "999"){
        var  respuesta =  {
          "responseStatus": 400,
          "responseError": ""
        };

   }else{
    var respuesta = {
          "Antiphishing": 989999,
          "responseStatus": 200,
          "responseError": "Usuario correcto y token correcto"
        };

    }
console.log("RESPUESTA-------------------------"+respuesta);
    return respuesta;
}


/**const modificaContrato = {
  "descripcion": "Operacion exitosa",
  "codigo": "0"
}**/

function modificaContrato(bodyreq){

console.log("USUARIO--------------"+bodyreq.usuario);


  if( bodyreq.usuario == "999"){
        var  respuesta =  {
              "descripcion": "Error",
              "codigo": "1"
            }; 
   }else{
    var respuesta =  {
             "descripcion": "Operacion exitosa",
              "codigo": "0"
            };
    }
console.log("RESPUESTA-------------------------"+respuesta);
    return respuesta;
}


const envioNotificaciones = {
  "responseStatus": 200,
  "responseError": ""
}

/**const cambioContrasena = {
  "listCambioContrasena": {
    "codigo": 0,
    "mensaje": ""
  },
  "responseStatus": 200,
  "responseError": ""
}
**/

const consultaPerfiles = {
  "responseStatus": 200,
  "responseError": "",
  "perfiles": [
    {
      "nombrePerfil": "PERFIL_1",
      "nombre": "NOMBRE",
      "facultadesSimples": [
        {
          "nombreFacultad": "FACULTAD_1",
          "controlHabilitado": true
        }
      ],
      "grupos": [
        ""
      ]
    }
  ]
}


function cambioContrasena(bodyreq){ 

  if( bodyreq.oldPassword == "999"){
        if( bodyreq.newPassword == "123" &&  bodyreq.confirmNewPassword == "123"){
        var respuesta ={
              "listCambioContrasena": [
                {
                  "codigo": "integer",
                  "mensaje": "string"
                }
              ],
              "responseStatus": 200,
              "responseError": ""
            };
        }else{
        var respuesta = {
            "responseStatus": 404,
            "responseError": "LAS CONTRASEÑAS QUE INGRESASTE NO SON IGUALES"
            };
        }
    }else{
        var respuesta = {
            "responseStatus": 404,
            "responseError": "TU CONTRASEÑA ACTUAL NO EXISTE"
            };
    } 
    return respuesta;
  }



//Sprint 1 adecuacion
/*
const consultaCuentasAgregadasCliente = {
    "listCuentasCliente": [{
        "numeroDeCuenta":" "",
     "   "idProducto": "",
        "descripcionProducto": "",
        "divisa": "",
        "saldo": 1532,
        "idSucursal": 124,
        "nombreSucursal": ""
    }, {
        "numeroDeCuenta":" "",
     "   "idProducto": "",
        "descripcionProducto": "",
        "divisa": "",
        "saldo": 1532,
        "idSucursal": 124,
        "nombreSucursal": ""
    }],
    "listCreditosCliente": [{
        "numeroDeCuenta":" "",
     "   "idProducto": "",
        "descripcionProducto": "",
        "divisa": "",
        "saldo": 1532,
        "idSucursal": 124,
        "nombreSucursal": ""
    }, {
        "numeroDeCuenta":" "",
     "   "idProducto": "",
        "descripcionProducto": "",
        "divisa": "",
        "saldo": 1532,
        "idSucursal": 124,
        "nombreSucursal": ""
    }],
    "listInversionesCliente": [{
        "numeroDeCuenta":" "",
     "   "idProducto": "",
        "descripcionProducto": "",
        "divisa": "",
        "saldo": 1532,
        "idSucursal": 124,
        "nombreSucursal": ""
    }, {
        "numeroDeCuenta":" "",
     "   "idProducto": "",
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
    "ListaProductos": [
      {
        "nombre": "String",
        "idProducto": "String"
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
      "nombre": "PAGO DE NOMINA",
      "contratado": true
    },
    {
      "nombre": "BANCA ELECTRONICA",
      "contratado": true,
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
    "numCliente": "Long",
    "nombre": "String",
    "listaDirecciones": [
      {
        "direccion": "String",
        "poblacion": "String",
        "ciudad": "String",
        "estado": "String",
        "cp": "String",
        "tipoDireccion": "String"
      }
    ],
    "rfc": "String",
    "listaTelefonos": [
      {
        "cvePais": "integer",
        "codArea": "integer",
        "telefono": "Long",
        "tipoTelefono": "String"
      }
    ],
    "listaEmails": [
      {
        "mail": "String",
        "activo": false,
        "tipoEmail": "String"
      }
    ],
    "tipoPersona": "String",
    "estatus": "String",
    "sucursal": "String",
    "vip": "String",
    "responseStatus": 200,
    "responseError": ""
  }

 /////////// Sprint 2  /////////////
 

 const consultaCuentasAgregadas = {  
   "listCuentasCliente":[  
   {  
     "nombreCuenta":"BERG ROSARIO",
     "numeroDeCuenta":"3873812345",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA ANIM",
     "divisa":"MXN",
     "depositosPendientes":9980,
     "depositosSBC":0,
     "saldoMovimientosDia":"",
     "movimientos":3,
     "lineaSobregiro":3022,
     "interesesGenerados":2025,
     "CLABE":"6357391630041472",
     "telefono":"7125656665",
     "saldo":1234567890123456,
     "alias":"RUBY - MAGNA"
   },
   {  
     "nombreCuenta":"FLEMING BENSON",
     "numeroDeCuenta":"4448467850",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA FUGIAT",
     "divisa":"MXN",
     "depositosPendientes":7853,
     "depositosSBC":2615,
     "saldoMovimientosDia":2719,
     "movimientos":1,
     "lineaSobregiro":1270,
     "interesesGenerados":1683,
     "CLABE":"2414223241854109",
     "telefono":"7125652323",
     "saldo":584573,
     "alias":"HOLMES QUIS"
   },
   {  
     "nombreCuenta":"GILMORE GREEN",
     "numeroDeCuenta":"5275646789",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA AD",
     "divisa":"MXN",
     "depositosPendientes":5598,
     "depositosSBC":1026,
     "saldoMovimientosDia":3872,
     "movimientos":9,
     "lineaSobregiro":4162,
     "interesesGenerados":4954,
     "CLABE":"8530758550208450",
     "telefono":"71256565645",
     "saldo":263062,
     "alias":"MATHEWS ENIM"
   },
   {  
     "nombreCuenta":"JANIS MOODY",
     "numeroDeCuenta":"1916356784",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA TEMPOR",
     "divisa":"MXN",
     "depositosPendientes":4279,
     "depositosSBC":3242,
     "saldoMovimientosDia":8902,
     "movimientos":1,
     "lineaSobregiro":3070,
     "interesesGenerados":3338,
     "CLABE":"5533138624650534",
     "telefono":"90995656665",
     "saldo":524595,
     "alias":"ROSANNA FUGIAT"
   },
   {  
     "nombreCuenta":"STRICKLAND SANCHEZ",
     "numeroDeCuenta":"2231345674",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA ALIQUA",
     "divisa":"MXN",
     "depositosPendientes":5496,
     "depositosSBC":1022,
     "saldoMovimientosDia":5385,
     "movimientos":7,
     "lineaSobregiro":4515,
     "interesesGenerados":1653,
     "CLABE":"9406411786255546",
     "telefono":"65545656665",
     "saldo":351250,
     "alias":"JEANNE QUIS"
   },
   {  
     "nombreCuenta":"FITZGERALD MEADOWS",
     "numeroDeCuenta":"7378434654",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA EXERCITATION",
     "divisa":"MXN",
     "depositosPendientes":5908,
     "depositosSBC":3065,
     "saldoMovimientosDia":6299,
     "movimientos":9,
     "lineaSobregiro":3728,
     "interesesGenerados":4310,
     "CLABE":"6231961653052986",
     "telefono":"7987656665",
     "saldo":40795,
     "alias":"GLOVER DESERUNT"
   },
   {  
     "nombreCuenta":"MONIQUE WHITLEY",
     "numeroDeCuenta":"2104456328",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA DOLORE",
     "divisa":"MXN",
     "depositosPendientes":9231,
     "depositosSBC":2967,
     "saldoMovimientosDia":4416,
     "movimientos":6,
     "lineaSobregiro":4773,
     "interesesGenerados":5584,
     "CLABE":"9016768587593992",
     "telefono":"0987656665",
     "saldo":304739,
     "alias":"TAYLOR ALIQUIP"
   },
   {  
     "nombreCuenta":"DOLLIE FINLEY",
     "numeroDeCuenta":"6953146785",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA INCIDIDUNT",
     "divisa":"MXN",
     "depositosPendientes":6370,
     "depositosSBC":1047,
     "saldoMovimientosDia":1137,
     "movimientos":3,
     "lineaSobregiro":3912,
     "interesesGenerados":3668,
     "CLABE":"8654073923620344",
     "telefono":"798798765",
     "saldo":596637,
     "alias":"BEST DOLOR"
   },
   {  
     "nombreCuenta":"LOGAN MASSEY",
     "numeroDeCuenta":"3104945632",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA ALIQUIP",
     "divisa":"MXN",
     "depositosPendientes":1695,
     "depositosSBC":1773,
     "saldoMovimientosDia":7481,
     "movimientos":7,
     "lineaSobregiro":4827,
     "interesesGenerados":4836,
     "CLABE":"1141792532062969",
     "telefono":"1234566665",
     "saldo":808057,
     "alias":"NADIA AD"
   },
   {  
     "nombreCuenta":"HAMPTON KELLY",
     "numeroDeCuenta":"5508346890",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA ADIPISICING",
     "divisa":"MXN",
     "depositosPendientes":5935,
     "depositosSBC":2948,
     "saldoMovimientosDia":6458,
     "movimientos":6,
     "lineaSobregiro":2078,
     "interesesGenerados":2360,
     "CLABE":"3024929704405096",
     "telefono":"716789665",
     "saldo":642845,
     "alias":"DURHAM CONSEQUAT"
   },
   {  
     "nombreCuenta":"HARRISON LAWSON",
     "numeroDeCuenta":"1085109768",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA ENIM",
     "divisa":"MXN",
     "depositosPendientes":7482,
     "depositosSBC":2485,
     "saldoMovimientosDia":1768,
     "movimientos":6,
     "lineaSobregiro":1456,
     "interesesGenerados":1420,
     "CLABE":"7383666342713216",
     "telefono":"71209889665",
     "saldo":891122,
     "alias":"MCINTOSH SINT"
   },
   {  
     "nombreCuenta":"BLACKBURN DUNLAP",
     "numeroDeCuenta":"7956532412",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA DO",
     "divisa":"MXN",
     "depositosPendientes":1124,
     "depositosSBC":2856,
     "saldoMovimientosDia":7791,
     "movimientos":4,
     "lineaSobregiro":4344,
     "interesesGenerados":1349,
     "CLABE":"9651922496187914",
     "telefono":"4367656665",
     "saldo":995748,
     "alias":"MACIAS QUI"
   },
   {  
     "nombreCuenta":"HILLARY SHELTON",
     "numeroDeCuenta":"8224245367",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA UT",
     "divisa":"MXN",
     "depositosPendientes":8446,
     "depositosSBC":1317,
     "saldoMovimientosDia":7870,
     "movimientos":8,
     "lineaSobregiro":4423,
     "interesesGenerados":2149,
     "CLABE":"9838918971754596",
     "telefono":"9885656665",
     "saldo":624469,
     "alias":"HOLCOMB ULLAMCO"
   },
   {  
     "nombreCuenta":"VIRGINIA MCFADDEN",
     "numeroDeCuenta":"3758545376",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA NOSTRUD",
     "divisa":"MXN",
     "depositosPendientes":9560,
     "depositosSBC":3572,
     "saldoMovimientosDia":5019,
     "movimientos":6,
     "lineaSobregiro":3830,
     "interesesGenerados":3602,
     "CLABE":"3830704143003909",
     "telefono":"5645656665",
     "saldo":325111,
     "alias":"RUSSO LABORIS"
   },
   {  
     "nombreCuenta":"DOROTHY DELANEY",
     "numeroDeCuenta":"9467654365",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA CONSECTETUR",
     "divisa":"MXN",
     "depositosPendientes":5720,
     "depositosSBC":1828,
     "saldoMovimientosDia":8012,
     "movimientos":10,
     "lineaSobregiro":3216,
     "interesesGenerados":1128,
     "CLABE":"8775753888969680",
     "telefono":"6985656665",
     "saldo":955181,
     "alias":"GARZA COMMODO"
   },
   {  
     "nombreCuenta":"OSBORN BECK",
     "numeroDeCuenta":"6678845345",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA EIUSMOD",
     "divisa":"MXN",
     "depositosPendientes":8748,
     "depositosSBC":1489,
     "saldoMovimientosDia":3518,
     "movimientos":9,
     "lineaSobregiro":3116,
     "interesesGenerados":3387,
     "CLABE":"2338990607011866",
     "telefono":"4325656665",
     "saldo":243173,
     "alias":"AMALIA AMET"
   },
   {  
     "nombreCuenta":"JODIE SERRANO",
     "numeroDeCuenta":"2886954678",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA DESERUNT",
     "divisa":"MXN",
     "depositosPendientes":2429,
     "depositosSBC":1470,
     "saldoMovimientosDia":5744,
     "movimientos":3,
     "lineaSobregiro":1541,
     "interesesGenerados":3189,
     "CLABE":"4459625898298295",
     "telefono":"8765656665",
     "saldo":526986,
     "alias":"KEISHA MOLLIT"
   },
   {  
     "nombreCuenta":"HESTER RIVAS",
     "numeroDeCuenta":"6756556476",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA IN",
     "divisa":"MXN",
     "depositosPendientes":5549,
     "depositosSBC":1396,
     "saldoMovimientosDia":7456,
     "movimientos":3,
     "lineaSobregiro":4603,
     "interesesGenerados":5879,
     "CLABE":"8039700793791198",
     "telefono":"1265656665",
     "saldo":11354,
     "alias":"SANCHEZ INCIDIDUNT"
   },
   {  
     "nombreCuenta":"AIDA GONZALEZ",
     "numeroDeCuenta":"9429554653",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA DOLORE",
     "divisa":"MXN",
     "depositosPendientes":9609,
     "depositosSBC":1183,
     "saldoMovimientosDia":4973,
     "movimientos":4,
     "lineaSobregiro":1439,
     "interesesGenerados":3893,
     "CLABE":"4991615214861048",
     "telefono":"5435656665",
     "saldo":464938,
     "alias":"SHEPARD REPREHENDERIT"
   },
   {  
     "nombreCuenta":"KERR MCCLURE",
     "numeroDeCuenta":"9369423127",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA ESSE",
     "divisa":"MXN",
     "depositosPendientes":1071,
     "depositosSBC":3472,
     "saldoMovimientosDia":2464,
     "movimientos":5,
     "lineaSobregiro":4513,
     "interesesGenerados":4607,
     "CLABE":"3556933423954500",
     "telefono":"4395656665",
     "saldo":282733,
     "alias":"BOND REPREHENDERIT"
   },
   {  
     "nombreCuenta":"SHARLENE GORDON",
     "numeroDeCuenta":"3603435467",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA DESERUNT",
     "divisa":"MXN",
     "depositosPendientes":5858,
     "depositosSBC":3969,
     "saldoMovimientosDia":3212,
     "movimientos":5,
     "lineaSobregiro":1272,
     "interesesGenerados":3508,
     "CLABE":"4769920988437920",
     "telefono":"4655656665",
     "saldo":648424,
     "alias":"LINDSEY NON"
   },
   {  
     "nombreCuenta":"GARCIA CAMPBELL",
     "numeroDeCuenta":"4799754678",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA VELIT",
     "divisa":"MXN",
     "depositosPendientes":8537,
     "depositosSBC":2293,
     "saldoMovimientosDia":5657,
     "movimientos":8,
     "lineaSobregiro":4196,
     "interesesGenerados":5325,
     "CLABE":"9580037845978432",
     "telefono":"7125988325",
     "saldo":626987,
     "alias":"SANTANA QUI"
   },
   {  
     "nombreCuenta":"RANDI NEWMAN",
     "numeroDeCuenta":"4859124356",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA NISI",
     "divisa":"MXN",
     "depositosPendientes":3352,
     "depositosSBC":2623,
     "saldoMovimientosDia":4380,
     "movimientos":7,
     "lineaSobregiro":1826,
     "interesesGenerados":4637,
     "CLABE":"8730420728195786",
     "telefono":"65409812",
     "saldo":854894,
     "alias":"LAUREL ESSE"
   },
   {  
     "nombreCuenta":"MADGE GREGORY",
     "numeroDeCuenta":"7021276897",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA MOLLIT",
     "divisa":"MXN",
     "depositosPendientes":2799,
     "depositosSBC":2756,
     "saldoMovimientosDia":8654,
     "movimientos":1,
     "lineaSobregiro":2761,
     "interesesGenerados":3733,
     "CLABE":"9722548139549464",
     "telefono":"7125998865",
     "saldo":515910,
     "alias":"PERRY SINT"
   },
   {  
     "nombreCuenta":"BEARD DOWNS",
     "numeroDeCuenta":"8894343511",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA LOREM",
     "divisa":"MXN",
     "depositosPendientes":6079,
     "depositosSBC":3789,
     "saldoMovimientosDia":1402,
     "movimientos":7,
     "lineaSobregiro":3696,
     "interesesGenerados":4396,
     "CLABE":"6250729462506608",
     "telefono":"7125644885",
     "saldo":224287,
     "alias":"CONWAY EA"
   },
   {  
     "nombreCuenta":"MEREDITH ONEIL",
     "numeroDeCuenta":"2068745365",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA EXCEPTEUR",
     "divisa":"MXN",
     "depositosPendientes":2543,
     "depositosSBC":2438,
     "saldoMovimientosDia":3666,
     "movimientos":1,
     "lineaSobregiro":1884,
     "interesesGenerados":1969,
     "CLABE":"2545026892873488",
     "telefono":"8760921435",
     "saldo":167399,
     "alias":"ROCHA ANIM"
   },
   {  
     "nombreCuenta":"KARLA KOCH",
     "numeroDeCuenta":"7358545654",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA ULLAMCO",
     "divisa":"MXN",
     "depositosPendientes":3516,
     "depositosSBC":3993,
     "saldoMovimientosDia":5588,
     "movimientos":9,
     "lineaSobregiro":2455,
     "interesesGenerados":4048,
     "CLABE":"9671645391827812",
     "telefono":"981234875",
     "saldo":659202,
     "alias":"BRYAN MAGNA"
   },
   {  
     "nombreCuenta":"CLARISSA HANEY",
     "numeroDeCuenta":"8969132409",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA EU",
     "divisa":"MXN",
     "depositosPendientes":3714,
     "depositosSBC":3662,
     "saldoMovimientosDia":2711,
     "movimientos":2,
     "lineaSobregiro":4705,
     "interesesGenerados":2689,
     "CLABE":"8519518733135406",
     "telefono":"0912873476",
     "saldo":747727,
     "alias":"HAWKINS EIUSMOD"
   },
   {  
     "nombreCuenta":"SANDERS PATEL",
     "numeroDeCuenta":"4167465789",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA INCIDIDUNT",
     "divisa":"MXN",
     "depositosPendientes":8221,
     "depositosSBC":1368,
     "saldoMovimientosDia":8436,
     "movimientos":2,
     "lineaSobregiro":2435,
     "interesesGenerados":3034,
     "CLABE":"6228474602698788",
     "telefono":"7129856665",
     "saldo":918327,
     "alias":"ADRIENNE DOLOR"
   },
   {  
     "nombreCuenta":"CASEY SANTIAGO",
     "numeroDeCuenta":"5808845678",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA DESERUNT",
     "divisa":"MXN",
     "depositosPendientes":6261,
     "depositosSBC":3421,
     "saldoMovimientosDia":5753,
     "movimientos":4,
     "lineaSobregiro":3928,
     "interesesGenerados":1737,
     "CLABE":"5523201193299208",
     "telefono":"0912673498",
     "saldo":227970,
     "alias":"DONALDSON PARIATUR"
   },
   {  
     "nombreCuenta":"KARINA CAMERON",
     "numeroDeCuenta":"6216854678",
     "idProducto":"CHQ",
     "descripcionProducto":"CUENTA ALIQUIP",
     "divisa":"MXN",
     "depositosPendientes":5052,
     "depositosSBC":2480,
     "saldoMovimientosDia":7138,
     "movimientos":4,
     "lineaSobregiro":3113,
     "interesesGenerados":2188,
     "CLABE":"1669199001128238",
     "telefono":"659823560",
     "saldo":645796,
     "alias":"HERMINIA ULLAMCO"
   }
   ],
   "listCreditosCliente":[  
   {  
     "contrato":"38738",
     "numeroDeCuenta":"5817673423",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE OVERFORK",
     "saldoTotal":1696.05,
     "alias":"HIPOTECA PLASMOS"
   },
   {  
     "contrato":"52756",
     "numeroDeCuenta":"7970353456",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE EVENTAGE",
     "saldoTotal":2867.79,
     "alias":"HIPOTECA ZENSURE"
   },
   {  
     "contrato":"44484",
     "numeroDeCuenta":"2655764356",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE ENOMEN",
     "saldoTotal":1257.28,
     "alias":"HIPOTECA MEDESIGN"
   },
   {  
     "contrato":"52756",
     "numeroDeCuenta":"2153824535",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE ERSUM",
     "saldoTotal":1869.71,
     "alias":"HIPOTECA KIDSTOCK"
   },
   {  
     "contrato":"44484",
     "numeroDeCuenta":"3887873241",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE PATHWAYS",
     "saldoTotal":2935.91,
     "alias":"HIPOTECA AVENETRO"
   },
   {  
     "contrato":"38738",
     "numeroDeCuenta":"3365649876",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE MARVANE",
     "saldoTotal":1527.6,
     "alias":"HIPOTECA MONDICIL"
   },
   {  
     "contrato":"44484",
     "numeroDeCuenta":"8034723245",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE ECLIPSENT",
     "saldoTotal":3549.58,
     "alias":"HIPOTECA ENTOGROK"
   },
   {  
     "contrato":"44484",
     "numeroDeCuenta":"8767014356",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE ZIDOX",
     "saldoTotal":2401.75,
     "alias":"HIPOTECA COMDOM"
   },
   {  
     "contrato":"38738",
     "numeroDeCuenta":"7537432134",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE APEXIA",
     "saldoTotal":2865.16,
     "alias":"HIPOTECA DYMI"
   },
   {  
     "contrato":"44484",
     "numeroDeCuenta":"8588843421",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE FRANSCENE",
     "saldoTotal":2644.52,
     "alias":"HIPOTECA QUALITERN"
   },
   {  
     "contrato":"52756",
     "numeroDeCuenta":"8569835698",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE XYMONK",
     "saldoTotal":1479.28,
     "alias":"HIPOTECA ORBAXTER"
   },
   {  
     "contrato":"44484",
     "numeroDeCuenta":"8935484356",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE CENTREXIN",
     "saldoTotal":3092.77,
     "alias":"HIPOTECA DOGSPA"
   },
   {  
     "contrato":"38738",
     "numeroDeCuenta":"4583348970",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE EXOBLUE",
     "saldoTotal":2111.76,
     "alias":"HIPOTECA CUBIX"
   },
   {  
     "contrato":"44484",
     "numeroDeCuenta":"6805468098",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE ZILLACON",
     "saldoTotal":3473.18,
     "alias":"HIPOTECA SENMAO"
   },
   {  
     "contrato":"44484",
     "numeroDeCuenta":"4367585678",
     "idProducto":"CRED",
     "descripcionProducto":"CREDITO DE FANGOLD",
     "saldoTotal":2466.54,
     "alias":"HIPOTECA PRISMATIC"
   }
   ],
   "listInversionesPagareCliente":[  
   {  
     "numeroDeCuenta":"2324224356",
     "folioInversion":"789456",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":90,
     "tasa":4.12,
     "saldo":70639,
     "interesDevengado":522.03,
     "interesPagar":403.77,
     "fechaVencimiento":"29-09-2017",
     "instruccionesVencimiento":"Prueba de instruccion",
     "alias":"PAGARE DE ZENTIX",
     "ISRRetenido":30461.15,
     "saldoNeto":3372.86,
     "apertura":"2015-11-19T09:47:39 +06:00"
   },
   {  
     "numeroDeCuenta":"4552474356",
     "folioInversion":"987654",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":60,
     "tasa":5.16,
     "saldo":44996,
     "interesDevengado":501.61,
     "interesPagar":845.58,
     "fechaVencimiento":"14-10-2017",
     "instruccionesVencimiento":" Prueba de instruccion 2",
     "alias":"PAGARE DE PORTICA",
     "ISRRetenido":23259.09,
     "saldoNeto":2262.81,
     "apertura":"2013-07-23T08:50:38 +05:00"
   },
   {  
     "numeroDeCuenta":"6133044356",
     "folioInversion":"123456",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":60,
     "tasa":5.1,
     "saldo":86386,
     "interesDevengado":155.54,
     "interesPagar":590.28,
     "fechaVencimiento":"26-10-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE OVERPLEX",
     "ISRRetenido":21479.7,
     "saldoNeto":1061.8,
     "apertura":"2012-06-21T10:17:05 +05:00"
   },
   {  
     "numeroDeCuenta":"6244123245",
     "folioInversion":"789012",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":90,
     "tasa":3.02,
     "saldo":53918,
     "interesDevengado":136.09,
     "interesPagar":882.26,
     "fechaVencimiento":"19-11-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE NETBOOK",
     "ISRRetenido":43386.15,
     "saldoNeto":4856.77,
     "apertura":"2012-12-04T10:50:51 +06:00"
   },
   {  
     "numeroDeCuenta":"7463644563",
     "folioInversion":"009988",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":90,
     "tasa":6.53,
     "saldo":18245,
     "interesDevengado":290.4,
     "interesPagar":679.23,
     "fechaVencimiento":"02-12-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE GEOFARM",
     "ISRRetenido":25043.65,
     "saldoNeto":9504.01,
     "apertura":"2014-11-17T04:35:02 +06:00"
   },
   {  
     "numeroDeCuenta":"2273978970",
     "folioInversion":"102938",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":90,
     "tasa":5.37,
     "saldo":68620,
     "interesDevengado":479.86,
     "interesPagar":362.75,
     "fechaVencimiento":"05-11-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE EGYPTO",
     "ISRRetenido":21792.11,
     "saldoNeto":8560.52,
     "apertura":"2012-01-27T02:35:39 +06:00"
   },
   {  
     "numeroDeCuenta":"7619557689",
     "folioInversion":"564738",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":120,
     "tasa":6.55,
     "saldo":46604,
     "interesDevengado":523.6,
     "interesPagar":610.93,
     "fechaVencimiento":"01-10-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE TALENDULA",
     "ISRRetenido":21030.69,
     "saldoNeto":2773.99,
     "apertura":"2013-06-18T02:04:57 +05:00"
   },
   {  
     "numeroDeCuenta":"3991866579",
     "folioInversion":"089786",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":30,
     "tasa":5.65,
     "saldo":17669,
     "interesDevengado":494.48,
     "interesPagar":578.86,
     "fechaVencimiento":"24-12-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE EDECINE",
     "ISRRetenido":17525.5,
     "saldoNeto":1398.52,
     "apertura":"2015-09-04T10:07:21 +05:00"
   },
   {  
     "numeroDeCuenta":"7317311234",
     "folioInversion":"132435",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":120,
     "tasa":2.47,
     "saldo":39451,
     "interesDevengado":262.2,
     "interesPagar":899.37,
     "fechaVencimiento":"13-12-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE JAMNATION",
     "ISRRetenido":27635.49,
     "saldoNeto":1236.59,
     "apertura":"2016-04-21T11:43:44 +05:00"
   },
   {  
     "numeroDeCuenta":"5718233425",
     "folioInversion":"768943",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":120,
     "tasa":1.9,
     "saldo":36946,
     "interesDevengado":135.97,
     "interesPagar":380.93,
     "fechaVencimiento":"04-10-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE ILLUMITY",
     "ISRRetenido":17102.78,
     "saldoNeto":6439.19,
     "apertura":"2013-11-08T01:49:10 +06:00"
   },
   {  
     "numeroDeCuenta":"3826942314",
     "folioInversion":"187265",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":60,
     "tasa":4.92,
     "saldo":59942,
     "interesDevengado":358.51,
     "interesPagar":793.3,
     "fechaVencimiento":"24-09-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE POOCHIES",
     "ISRRetenido":28772.84,
     "saldoNeto":1466.81,
     "apertura":"2013-09-05T03:23:49 +05:00"
   },
   {  
     "numeroDeCuenta":"7935453245",
     "folioInversion":"062941",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":90,
     "tasa":3.89,
     "saldo":30634,
     "interesDevengado":393.04,
     "interesPagar":309.1,
     "fechaVencimiento":"22-09-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE VERTIDE",
     "ISRRetenido":16456.17,
     "saldoNeto":9225.03,
     "apertura":"2013-07-18T07:55:57 +05:00"
   },
   {  
     "numeroDeCuenta":"2875782314",
     "folioInversion":"017439",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":60,
     "tasa":2.41,
     "saldo":31879,
     "interesDevengado":571.83,
     "interesPagar":263.55,
     "fechaVencimiento":"28-10-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE FLYBOYZ",
     "ISRRetenido":27947.57,
     "saldoNeto":6460,
     "apertura":"2016-03-02T09:09:09 +06:00"
   },
   {  
     "numeroDeCuenta":"3547704567",
     "folioInversion":"389601",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":120,
     "tasa":1.16,
     "saldo":86771,
     "interesDevengado":142.47,
     "interesPagar":809.51,
     "fechaVencimiento":"04-11-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE DANCITY",
     "ISRRetenido":14186.19,
     "saldoNeto":6770.9,
     "apertura":"2016-08-20T05:45:18 +05:00"
   },
   {  
     "numeroDeCuenta":"7936281287",
     "folioInversion":"874301",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":90,
     "tasa":5.14,
     "saldo":47259,
     "interesDevengado":404.94,
     "interesPagar":784.99,
     "fechaVencimiento":"24-10-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE MARTGO",
     "ISRRetenido":30436.97,
     "saldoNeto":3532.49,
     "apertura":"2015-03-17T01:14:46 +06:00"
   },
   {  
     "numeroDeCuenta":"5574004567",
     "folioInversion":"696732",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":30,
     "tasa":2.24,
     "saldo":66912,
     "interesDevengado":167.79,
     "interesPagar":823.03,
     "fechaVencimiento":"30-12-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE LETPRO",
     "ISRRetenido":30196.95,
     "saldoNeto":4945.89,
     "apertura":"2012-07-09T12:05:41 +05:00"
   },
   {  
     "numeroDeCuenta":"1627014356",
     "folioInversion":"194857",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":90,
     "tasa":5.21,
     "saldo":21453,
     "interesDevengado":539.06,
     "interesPagar":850.47,
     "fechaVencimiento":"17-10-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE COMTRAK",
     "ISRRetenido":36693.79,
     "saldoNeto":1885.39,
     "apertura":"2013-01-31T09:23:58 +06:00"
   },
   {  
     "numeroDeCuenta":"8144403245",
     "folioInversion":"789434",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":120,
     "tasa":4.31,
     "saldo":21179,
     "interesDevengado":153.88,
     "interesPagar":173.63,
     "fechaVencimiento":"23-10-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE VANTAGE",
     "ISRRetenido":41308.9,
     "saldoNeto":3622.13,
     "apertura":"2015-01-23T12:24:03 +06:00"
   },
   {  
     "numeroDeCuenta":"5166082345",
     "folioInversion":"569456",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":60,
     "tasa":5.9,
     "saldo":45443,
     "interesDevengado":592.72,
     "interesPagar":839.14,
     "fechaVencimiento":"08-11-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE JIMBIES",
     "ISRRetenido":15091.07,
     "saldoNeto":3665.58,
     "apertura":"2015-05-11T06:25:25 +05:00"
   },
   {  
     "numeroDeCuenta":"4918612313",
     "folioInversion":"789126",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":120,
     "tasa":3.72,
     "saldo":60393,
     "interesDevengado":449.4,
     "interesPagar":133.94,
     "fechaVencimiento":"23-10-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE KNOWLYSIS",
     "ISRRetenido":38477.03,
     "saldoNeto":7762.35,
     "apertura":"2012-12-09T09:07:00 +06:00"
   },
   {  
     "numeroDeCuenta":"6247112346",
     "folioInversion":"489496",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":120,
     "tasa":1.48,
     "saldo":62331,
     "interesDevengado":296.98,
     "interesPagar":463.39,
     "fechaVencimiento":"13-09-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE KROG",
     "ISRRetenido":24933.51,
     "saldoNeto":7783.13,
     "apertura":"2012-12-30T06:20:09 +06:00"
   },
   {  
     "numeroDeCuenta":"3306471232",
     "folioInversion":"059283",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":90,
     "tasa":2.77,
     "saldo":23329,
     "interesDevengado":305.64,
     "interesPagar":766.9,
     "fechaVencimiento":"29-10-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE ZORROMOP",
     "ISRRetenido":24440.32,
     "saldoNeto":1675.35,
     "apertura":"2014-12-19T07:06:53 +06:00"
   },
   {  
     "numeroDeCuenta":"2029321245",
     "folioInversion":"430456",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":120,
     "tasa":7.06,
     "saldo":68123,
     "interesDevengado":304.32,
     "interesPagar":281.09,
     "fechaVencimiento":"02-11-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE BRISTO",
     "ISRRetenido":11304.81,
     "saldoNeto":3681.59,
     "apertura":"2016-05-15T05:55:25 +05:00"
   },
   {  
     "numeroDeCuenta":"4404876789",
     "folioInversion":"156932",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":60,
     "tasa":3.77,
     "saldo":47844,
     "interesDevengado":152.61,
     "interesPagar":618.88,
     "fechaVencimiento":"16-12-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE ISONUS",
     "ISRRetenido":44127.63,
     "saldoNeto":9525.76,
     "apertura":"2014-04-20T11:46:46 +05:00"
   },
   {  
     "numeroDeCuenta":"5418922345",
     "folioInversion":"723456",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":120,
     "tasa":1,
     "saldo":68690,
     "interesDevengado":412.75,
     "interesPagar":686.7,
     "fechaVencimiento":"21-09-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE BULLZONE",
     "ISRRetenido":22531.24,
     "saldoNeto":4997.55,
     "apertura":"2013-11-05T09:56:26 +06:00"
   },
   {  
     "numeroDeCuenta":"3368054563",
     "folioInversion":"999456",
     "idProducto":"PGR",
     "descripcionProducto":"PGR",
     "plazo":60,
     "tasa":7.47,
     "saldo":83944,
     "interesDevengado":391.24,
     "interesPagar":201.37,
     "fechaVencimiento":"09-12-2017",
     "instruccionesVencimiento":"",
     "alias":"PAGARE DE ZAYA",
     "ISRRetenido":33100.4,
     "saldoNeto":1214.8,
     "apertura":"2012-08-27T12:34:19 +05:00"
   }
   ],
   "listInversionesCedeCliente":[  
   {  
     "idProducto":"CEDE",
     "folioInversion":"789456",
     "descripcionProducto":"Inversion CEDE OVATION",
     "plazo":60,
     "tasa":1.15,
     "saldo":10199,
     "interesesDevengados":201.4,
     "fechaVencimiento":"21-11-2017",
     "fechaProximoPago":"17-08-2017",
     "alias":"CEDE DE ACLIMA",
     "ISRRetenido":19516.17,
     "saldoNeto":5346.54,
     "apertura":"2015-11-04T06:38:10 +06:00"
   },
   {  
     "idProducto":"CEDE",
     "folioInversion":"787856",
     "descripcionProducto":"Inversion CEDE QUALITEX",
     "plazo":30,
     "tasa":3.64,
     "saldo":40373,
     "interesesDevengados":470.81,
     "fechaVencimiento":"24-11-2017",
     "fechaProximoPago":"17-05-2017",
     "alias":"CEDE DE ENORMO",
     "ISRRetenido":10871.11,
     "saldoNeto":6246.62,
     "apertura":"2012-10-17T08:17:49 +05:00"
   },
   {  
     "idProducto":"CEDE",
     "folioInversion":"789490",
     "descripcionProducto":"Inversion CEDE CINCYR",
     "plazo":30,
     "tasa":7.24,
     "saldo":34185,
     "interesesDevengados":261.58,
     "fechaVencimiento":"26-12-2017",
     "fechaProximoPago":"20-03-2017",
     "alias":"CEDE DE EQUITOX",
     "ISRRetenido":40874.85,
     "saldoNeto":7952.04,
     "apertura":"2012-06-06T05:55:29 +05:00"
   },
   { 
     "idProducto":"CEDE",
     "folioInversion":"784556",
     "descripcionProducto":"Inversion CEDE PLASMOX",
     "plazo":30,
     "tasa":7.39,
     "saldo":29659,
     "interesesDevengados":533.29,
     "fechaVencimiento":"08-11-2017",
     "fechaProximoPago":"11-06-2017",
     "alias":"CEDE DE RODEOLOGY",
     "ISRRetenido":47202.1,
     "saldoNeto":1772.55,
     "apertura":"2014-01-25T07:15:39 +06:00"
   },
   { 
     "idProducto":"CEDE",
     "folioInversion":"239456",
     "descripcionProducto":"Inversion CEDE VERBUS",
     "plazo":120,
     "tasa":4.08,
     "saldo":43801,
     "interesesDevengados":189.56,
     "fechaVencimiento":"27-09-2017",
     "fechaProximoPago":"19-02-2017",
     "alias":"CEDE DE MAGNEATO",
     "ISRRetenido":20538.42,
     "saldoNeto":7058.21,
     "apertura":"2014-02-27T10:31:32 +06:00"
   },
   { 
     "idProducto":"CEDE",
     "folioInversion":"789236",
     "descripcionProducto":"Inversion CEDE INFOTRIPS",
     "plazo":60,
     "tasa":3.58,
     "saldo":74537,
     "interesesDevengados":363.42,
     "fechaVencimiento":"20-12-2017",
     "fechaProximoPago":"06-01-2017",
     "alias":"CEDE DE FLUMBO",
     "ISRRetenido":35923.79,
     "saldoNeto":5858.77,
     "apertura":"2014-07-11T08:07:41 +05:00"
   },
   { 
     "idProducto":"CEDE",
     "folioInversion":"789423",
     "descripcionProducto":"Inversion CEDE MICRONAUT",
     "plazo":30,
     "tasa":2.18,
     "saldo":13769,
     "interesesDevengados":153.6,
     "fechaVencimiento":"14-11-2017",
     "fechaProximoPago":"11-03-2017",
     "alias":"CEDE DE FURNIGEER",
     "ISRRetenido":10688.65,
     "saldoNeto":9007.47,
     "apertura":"2012-06-11T07:50:25 +05:00"
   },
   { 
     "idProducto":"CEDE",
     "folioInversion":"789467",
     "descripcionProducto":"Inversion CEDE TEMORAK",
     "plazo":60,
     "tasa":4.76,
     "saldo":79290,
     "interesesDevengados":563.97,
     "fechaVencimiento":"13-12-2017",
     "fechaProximoPago":"31-08-2017",
     "alias":"CEDE DE COGENTRY",
     "ISRRetenido":32772.2,
     "saldoNeto":9805.97,
     "apertura":"2012-06-19T04:07:20 +05:00"
   },
   { 
     "idProducto":"CEDE",
     "folioInversion":"789467",
     "descripcionProducto":"Inversion CEDE DYMI",
     "plazo":120,
     "tasa":4.76,
     "saldo":29019,
     "interesesDevengados":445.9,
     "fechaVencimiento":"25-11-2017",
     "fechaProximoPago":"31-07-2017",
     "alias":"CEDE DE PREMIANT",
     "ISRRetenido":10285.55,
     "saldoNeto":5423.07,
     "apertura":"2013-10-25T05:23:44 +05:00"
   },
   { 
     "idProducto":"CEDE",
     "folioInversion":"789445",
     "descripcionProducto":"Inversion CEDE ZOLAR",
     "plazo":30,
     "tasa":7.5,
     "saldo":24065,
     "interesesDevengados":423.86,
     "fechaVencimiento":"30-09-2017",
     "fechaProximoPago":"27-08-2017",
     "alias":"CEDE DE BIOHAB",
     "ISRRetenido":48163.93,
     "saldoNeto":5750.09,
     "apertura":"2017-07-22T06:26:11 +05:00"
   },
   { 
     "idProducto":"CEDE",
     "folioInversion":"679456",
     "descripcionProducto":"Inversion CEDE SILODYNE",
     "plazo":90,
     "tasa":2.87,
     "saldo":80586,
     "interesesDevengados":434.5,
     "fechaVencimiento":"25-09-2017",
     "fechaProximoPago":"15-03-2017",
     "alias":"CEDE DE ISOPLEX",
     "ISRRetenido":17235.53,
     "saldoNeto":1894.37,
     "apertura":"2014-03-15T05:23:59 +06:00"
   },
   { 
     "idProducto":"CEDE",
     "folioInversion":"459456",
     "descripcionProducto":"Inversion CEDE ZOGAK",
     "plazo":120,
     "tasa":3,
     "saldo":74819,
     "interesesDevengados":347.76,
     "fechaVencimiento":"01-12-2017",
     "fechaProximoPago":"03-06-2017",
     "alias":"CEDE DE VURBO",
     "ISRRetenido":11915.55,
     "saldoNeto":1052.62,
     "apertura":"2013-07-02T07:44:43 +05:00"
   },
   { 
     "idProducto":"CEDE",
     "folioInversion":"909456",
     "descripcionProducto":"Inversion CEDE ELENTRIX",
     "plazo":60,
     "tasa":2.95,
     "saldo":38515,
     "interesesDevengados":130.41,
     "fechaVencimiento":"11-11-2017",
     "fechaProximoPago":"18-04-2017",
     "alias":"CEDE DE PHARMEX",
     "ISRRetenido":37824.73,
     "saldoNeto":7837.78,
     "apertura":"2017-01-16T10:53:50 +06:00"
   },
   { 
     "idProducto":"CEDE",
     "folioInversion":"789490",
     "descripcionProducto":"Inversion CEDE ZAPHIRE",
     "plazo":30,
     "tasa":6.46,
     "saldo":34016,
     "interesesDevengados":390.36,
     "fechaVencimiento":"16-12-2017",
     "fechaProximoPago":"25-06-2017",
     "alias":"CEDE DE CIPROMOX",
     "ISRRetenido":38133.63,
     "saldoNeto":2365.56,
     "apertura":"2012-03-26T09:31:58 +06:00"
   },
   { 
     "idProducto":"CEDE",
     "folioInversion":"009456",
     "descripcionProducto":"Inversion CEDE GINKOGENE",
     "plazo":60,
     "tasa":6.83,
     "saldo":55609,
     "interesesDevengados":120.21,
     "fechaVencimiento":"08-11-2017",
     "fechaProximoPago":"21-08-2017",
     "alias":"CEDE DE IDEGO",
     "ISRRetenido":14218.96,
     "saldoNeto":6515.09,
     "apertura":"2015-05-14T11:15:02 +05:00"
   },
   { 
     "idProducto":"CEDE",
     "folioInversion":"789006",
     "descripcionProducto":"Inversion CEDE VERAQ",
     "plazo":120,
     "tasa":5.1,
     "saldo":37469,
     "interesesDevengados":331.07,
     "fechaVencimiento":"31-12-2017",
     "fechaProximoPago":"13-01-2017",
     "alias":"CEDE DE LIMOZEN",
     "ISRRetenido":18442.54,
     "saldoNeto":7093.65,
     "apertura":"2013-05-30T06:00:03 +05:00"
   },
   { 
     "idProducto":"CEDE",
     "folioInversion":"789400",
     "descripcionProducto":"Inversion CEDE CANOPOLY",
     "plazo":60,
     "tasa":1.04,
     "saldo":18311,
     "interesesDevengados":404.76,
     "fechaVencimiento":"17-10-2017",
     "fechaProximoPago":"05-05-2017",
     "alias":"CEDE DE FANGOLD",
     "ISRRetenido":31861.87,
     "saldoNeto":5508.55,
     "apertura":"2016-05-24T05:35:10 +05:00"
   }
   ],
   "listInversionesVistaCliente":[  
   {  
     "numeroDeCuenta":"3883812343",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 0",
     "cuentaIntegra":502751,
     "saldo":458941.66,
     "alias":"MULTIVA INTEGRA DEGROK"
   },
   {  
     "numeroDeCuenta":"4431352314",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 1",
     "cuentaIntegra":539172,
     "saldo":189364.55,
     "alias":"MULTIVA INTEGRA DEMUSAPHICS"
   },
   {  
     "numeroDeCuenta":"3509717689",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 2",
     "cuentaIntegra":324926,
     "saldo":981244.6,
     "alias":"MULTIVA INTEGRA DEINSURON"
   },
   {  
     "numeroDeCuenta":"3234202314",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 3",
     "cuentaIntegra":515222,
     "saldo":558452.26,
     "alias":"MULTIVA INTEGRA DEZILLAR"
   },
   {  
     "numeroDeCuenta":"2175434356",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 4",
     "cuentaIntegra":790001,
     "saldo":624823.08,
     "alias":"MULTIVA INTEGRA DEIPLAX"
   },
   {  
     "numeroDeCuenta":"2350716789",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 5",
     "cuentaIntegra":882727,
     "saldo":264790.26,
     "alias":"MULTIVA INTEGRA DESUREMAX"
   },
   {  
     "numeroDeCuenta":"8851630989",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 6",
     "cuentaIntegra":899391,
     "saldo":888691.78,
     "alias":"MULTIVA INTEGRA DERECRISYS"
   },
   {  
     "numeroDeCuenta":"8491832546",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 7",
     "cuentaIntegra":354362,
     "saldo":169384,
     "alias":"MULTIVA INTEGRA DESPORTAN"
   },
   {  
     "numeroDeCuenta":"3452882546",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 8",
     "cuentaIntegra":131262,
     "saldo":117793.31,
     "alias":"MULTIVA INTEGRA DECOMSTRUCT"
   },
   {  
     "numeroDeCuenta":"5565414678",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 9",
     "cuentaIntegra":751401,
     "saldo":321235.25,
     "alias":"MULTIVA INTEGRA DEOULU"
   },
   {  
     "numeroDeCuenta":"1226443425",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 10",
     "cuentaIntegra":682622,
     "saldo":193185.85,
     "alias":"MULTIVA INTEGRA DEQUIZMO"
   },
   {  
     "numeroDeCuenta":"5345652435",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 11",
     "cuentaIntegra":497980,
     "saldo":475800.5,
     "alias":"MULTIVA INTEGRA DEOPTICON"
   },
   {  
     "numeroDeCuenta":"6158594689",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 12",
     "cuentaIntegra":494675,
     "saldo":537281.51,
     "alias":"MULTIVA INTEGRA DEEXTRO"
   },
   {  
     "numeroDeCuenta":"3477226478",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 13",
     "cuentaIntegra":574135,
     "saldo":510345.24,
     "alias":"MULTIVA INTEGRA DEENTALITY"
   },
   {  
     "numeroDeCuenta":"7041450789",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 14",
     "cuentaIntegra":268920,
     "saldo":752212.47,
     "alias":"MULTIVA INTEGRA DEAPPLIDECK"
   },
   {  
     "numeroDeCuenta":"2275403426",
     "idProducto":"INT",
     "descripcionProducto":"Multiva Integra 15",
     "cuentaIntegra":490821,
     "saldo":987771.85,
     "alias":"MULTIVA INTEGRA DESLAX"
   }
   ],
   "listFondosCliente":[  
   { 
     "idProducto":"FND",
     "descripcionProducto":"Fondos0",
     "saldo":657599.7,
     "alias":"FONDO DE BUGSALL",
     "emisora":"ABC-1234- AC0",
     "titulos":540,
     "precioMercado":414.04,
     "valuacion":22849.85,
     "valia":-6.54
   },
   { 
     "idProducto":"FND",
     "descripcionProducto":"Fondos1",
     "saldo":468097.85,
     "alias":"FONDO DE NAVIR",
     "emisora":"ABC-1234- AC1",
     "titulos":333,
     "precioMercado":125.41,
     "valuacion":56538.24,
     "valia":-5.45
   },
   { 
     "idProducto":"FND",
     "descripcionProducto":"Fondos2",
     "saldo":194110.04,
     "alias":"FONDO DE REALMO",
     "emisora":"ABC-1234- AC2",
     "titulos":647,
     "precioMercado":877.17,
     "valuacion":64268.73,
     "valia":-2.55
   },
   { 
     "idProducto":"FND",
     "descripcionProducto":"Fondos3",
     "saldo":613263.83,
     "alias":"FONDO DE AQUOAVO",
     "emisora":"ABC-1234- AC3",
     "titulos":650,
     "precioMercado":620.96,
     "valuacion":15069.2,
     "valia":0.78
   },
   { 
     "idProducto":"FND",
     "descripcionProducto":"Fondos4",
     "saldo":668384.77,
     "alias":"FONDO DE VIAGRAND",
     "emisora":"ABC-1234- AC4",
     "titulos":122,
     "precioMercado":655.19,
     "valuacion":63523.04,
     "valia":-8.99
   },
   { 
     "idProducto":"FND",
     "descripcionProducto":"Fondos5",
     "saldo":769361.54,
     "alias":"FONDO DE ENVIRE",
     "emisora":"ABC-1234- AC5",
     "titulos":386,
     "precioMercado":446.52,
     "valuacion":36577.61,
     "valia":-0.71
   },
   { 
     "idProducto":"FND",
     "descripcionProducto":"Fondos6",
     "saldo":788008.79,
     "alias":"FONDO DE NORSUL",
     "emisora":"ABC-1234- AC6",
     "titulos":233,
     "precioMercado":199.59,
     "valuacion":51422.76,
     "valia":-1.38
   },
   { 
     "idProducto":"FND",
     "descripcionProducto":"Fondos7",
     "saldo":927634.84,
     "alias":"FONDO DE CORECOM",
     "emisora":"ABC-1234- AC7",
     "titulos":199,
     "precioMercado":714.03,
     "valuacion":63146.33,
     "valia":-3.92
   },
   { 
     "idProducto":"FND",
     "descripcionProducto":"Fondos8",
     "saldo":259139.85,
     "alias":"FONDO DE TRIPSCH",
     "emisora":"ABC-1234- AC8",
     "titulos":641,
     "precioMercado":849.68,
     "valuacion":34759.1,
     "valia":-3.7
   },
   { 
     "idProducto":"FND",
     "descripcionProducto":"Fondos9",
     "saldo":335967.16,
     "alias":"FONDO DE AQUACINE",
     "emisora":"ABC-1234- AC9",
     "titulos":173,
     "precioMercado":705.29,
     "valuacion":43573.38,
     "valia":-2.54
   },
   { 
     "idProducto":"FND",
     "descripcionProducto":"Fondos10",
     "saldo":515263.35,
     "alias":"FONDO DE BIFLEX",
     "emisora":"ABC-1234- AC10",
     "titulos":163,
     "precioMercado":211.06,
     "valuacion":15866.52,
     "valia":-6.56
   },
   { 
     "idProducto":"FND",
     "descripcionProducto":"Fondos11",
     "saldo":844717.14,
     "alias":"FONDO DE NIQUENT",
     "emisora":"ABC-1234- AC11",
     "titulos":842,
     "precioMercado":446.77,
     "valuacion":69812.62,
     "valia":-1.49
   },
   { 
     "idProducto":"FND",
     "descripcionProducto":"Fondos12",
     "saldo":401770.56,
     "alias":"FONDO DE QUAILCOM",
     "emisora":"ABC-1234- AC12",
     "titulos":128,
     "precioMercado":529.45,
     "valuacion":19223.71,
     "valia":-0.29
   },
   { 
     "idProducto":"FND",
     "descripcionProducto":"Fondos13",
     "saldo":672815.43,
     "alias":"FONDO DE CAPSCREEN",
     "emisora":"ABC-1234- AC13",
     "titulos":693,
     "precioMercado":301.08,
     "valuacion":33945.39,
     "valia":-5.03
   }
   ],
   "responseStatus":200,
   "responseError":""
 }


 const consultaDetalleCredito = {
  "numeroDeCuenta":"1234567890",
  "contrato":"456789",
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
  "proximoPago":{
    "capital": 1000,
    "interes": 900,
    "IVA": 150,
    "otrosCargos": 0,
    "importePago": 1150,
    "fecha": "17-08-2017",
    "moratorio": 500,
    "IVAmoratorio": 10,
    "atraso": 10
  },
  "pagosVencidos": {
    "capital": 10000,
    "interes": 9000,
    "IVA": 1500,
    "otrosCargos": 0,
    "importePago": 1150,
    "fecha": "17-08-2017",
    "moratorio": 500,
    "IVAmoratorio": 15,
    "atraso": 10
  },
  "responseStatus": 200,
  "responseError": ""
}

function activacionPaperless(bodyreq){

    console.log("si llego----------------------"+bodyreq.otp);
    if( bodyreq.otp != "999"){
        var respuesta = {
          "responseStatus": 200,
          "responseError": ""
        };
    }else{
        var respuesta = {
            "responseStatus": 2431,
            "responseError": "ERROR OTP"
            };
    }
    return respuesta;
  }

const consultaMovimientos = {
   "saldoInicial": 40654,
   "listMovimientos": [
       {
           "folio": "g9x3XlWSDyr",
           "fecha": "2017-09-05T03:43:56Z",
           "descripcion": "Industrial",
           "importe": 7770.53,
           "naturaleza": "CARGO",
           "divisa": "MXN",
           "cuentaDestino": 12730,
           "cuentaOrigen": 23430,
           "referencia": 2487,
           "referenciaNumerica": 8429,
           "CASFIM": 7022,
           "claveRastreo": "ASDW223222",
           "canal": "Services"
       },
       {
           "folio": "NpF0CZH3Al",
           "fecha": "2017-09-08T10:23:41Z",
           "descripcion": "Jewelery",
           "importe": 6871.34,
           "naturaleza": "ABONO",
           "divisa": "MXN",
           "cuentaDestino": 13195,
           "cuentaOrigen": 26138,
           "referencia": 9458,
           "referenciaNumerica": 9153,
           "CASFIM": 6599,
           "claveRastreo": "BSDW223555",
           "canal": "Accounting"
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

/**const consultaCfdCfdi = {
  //Es un archivo
  "_downloadFile":true
}**/


const consultaCfdCfdiRetenciones = {
    //Es un archivo
    "_downloadFile":true
  }

function consultaCfdCfdi(bodyreq) {
	console.log("COnsulta de numero de cuenta---------  "+bodyreq.canal);
	  
	if (bodyreq.canal == "1234") {
      var respuesta = {
         //Es un archivo
    	"_downloadFile":true
	  };
	}else if(bodyreq.canal == "4321"){
	  var respuesta = {
	    "responseStatus": 4400,
	    "responseError": "No hay información disponible para esta consulta"
      };
	}else if(bodyreq.canal == "1111") {
      var respuesta = {
	    "responseStatus": 400,
	    "responseError": "responseError ESB"
    };
  }
	  return respuesta;
}


function consultaRetenciones(bodyreq){

    if( bodyreq.otp != "999"){
        var respuesta = {
            "listRetenciones": [
    {
      "tipoDeConstancia": "CRI",
      "noDeCliente": "543210987654321",
      "noDeContrato": 543210987654321,
      "RFCReceptor": "QUVA790114FT5",
      "uuid": "SEFDAD1234-87465-ASDSD-14523"
    }
    ],
    "responseStatus": 200,
    "responseError": ""
            };
    }else{
        var respuesta = {
            "responseStatus": 2004,
            "responseError": "OTP BLOQUEADO POR INACTIVIDAD"
            };
    }
    return respuesta;
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
      "CLABE":"123456789987451234",
      "moneda": "MXP"
    }
    ],
    "responseStatus": 200,
    "responseError": ""
  }

 /** const estadoCuentaPDF = {
    //Es un archivo
    "_downloadFile":true
  }**/
  
function estadoCuentaPDF(bodyreq){

	if (bodyreq.canal == "1234") {
        var respuesta = {
           //Es un archivo
    	   "_downloadFile":true
	    };
	}else if(bodyreq.canal == "4321"){
	    var respuesta = {
	       "responseStatus": 4400,
	       "responseError": ""
        };
	}else if(bodyreq.canal == "1111") {
        var respuesta = {
	       "responseStatus": 400,
	       "responseError": "responseError ESB"
        };
    }
    return respuesta;  
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
    },
    {
        "inversion": "R1-123-456",
        "emisora": "R1",
        "serie": "34",
        "titulos": 300,
        "precio": 540.09,
        "valuacion": 64180.09,
        "numeroCuenta": "00074531000",
    },
    {
        "inversion": "T1-123-456",
        "emisora": "T1",
        "serie": "74",
        "titulos": 3623,
        "precio": 640.09,
        "valuacion": 87180.09,
        "numeroCuenta": "00044332000",
    }

    ],
    "responseStatus": 200,
    "responseError": ""
  }


function validaOTP(bodyreq){

    if( bodyreq.otp != "999"){
        var respuesta = {
            "responseStatus": 200,
            "responseError": ""
            };
    }else{
        var respuesta = {
            "responseStatus": 2004,
            "responseError": "OTP BLOQUEADO POR INACTIVIDAD"
            };
    }
    return respuesta;
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
    "responseStatus": 200,
    "responseError": "",
    "reportes": [{
      "folio": "00001",
      "canal": "MVNET",
      "noCuenta": "3873812345",
      "tipoReporte": "TPB",
      "fechaInicio": "31 - 08 - 2017",
      "fechaFin": "31 - 08 - 2017",
      "horaProgramacion": "15: 00: 00",
      "separador": " | ",
      "formato": "CSV",
      "columnas": ["fecha", "monto"],
      "email": "lgrimes@multiva.com"
    }, {
      "folio": "00002",
      "canal": "MVNET",
      "noCuenta": "6953146785",
      "tipoReporte": "TPB",
      "fechaInicio": "31 - 08 - 2017",
      "fechaFin": "31 - 08 - 2017",
      "horaProgramacion": "15: 00: 00",
      "separador": " | ",
      "formato": "CSV",
      "columnas": ["fecha", "monto"],
      "email": "jperez@multiva.com"
    }, {
      "folio": "00005",
      "canal": "MVNET",
      "noCuenta": "4448467850",
      "tipoReporte": "TPB",
      "fechaInicio": "31 - 08 - 2017",
      "fechaFin": "31 - 08 - 2017",
      "horaProgramacion": "17: 00: 00",
      "separador": " | ",
      "formato": "CSV",
      "columnas": ["fecha", "monto"],
      "email": "mmunoz@multiva.com"
    }, {
      "folio": "00003",
      "canal": "MVNET",
      "noCuenta": "5508346890",
      "tipoReporte": "COBRANZA_REFERENCIADA",
      "fechaInicio": "31 - 08 - 2017",
      "fechaFin": "31 - 08 - 2017",
      "horaProgramacion": "19: 15: 00",
      "separador": " | ",
      "formato": "CSV",
      "columnas": ["fecha", "monto"],
      "email": "lgrimes@multiva.com"
    },{
      "folio": "00004",
      "canal": "MVNET",
      "noCuenta": "3104945632",
      "tipoReporte": "CONCILIACION_EMPRESA",
      "fechaInicio": "31 - 08 - 2017",
      "fechaFin": "31 - 08 - 2017",
      "horaProgramacion": "15: 00: 00",
      "separador": " | ",
      "formato": "CSV",
      "columnas": ["fecha", "monto"],
      "email": "lgrimes@multiva.com"
    }, {
      "folio": "00006",
      "canal": "MVNET",
      "noCuenta": "2104456328",
      "tipoReporte": "COBRANZA_REFERENCIADA",
      "fechaInicio": "31 - 08 - 2017",
      "fechaFin": "31 - 08 - 2017",
      "horaProgramacion": "15: 00: 00",
      "separador": " | ",
      "formato": "CSV",
      "columnas": ["fecha", "monto"],
      "email": "mmunoz@multiva.com"
    }, {
      "folio": "00007",
      "canal": "MVNET",
      "noCuenta": "1916356784",
      "tipoReporte": "TPB",
      "fechaInicio": "31 - 08 - 2017",
      "fechaFin": "31 - 08 - 2017",
      "horaProgramacion": "10: 00: 00",
      "separador": " | ",
      "formato": "CSV",
      "columnas": ["fecha", "monto"],
      "email": "asalazar@multiva.com"
    }, {
      "folio": "00008",
      "canal": "MVNET",
      "noCuenta": "2231345674",
      "tipoReporte": "CONCILIACION_EMPRESA",
      "fechaInicio": "31 - 08 - 2017",
      "fechaFin": "31 - 08 - 2017",
      "horaProgramacion": "12: 20: 00",
      "separador": " | ",
      "formato": "CSV",
      "columnas": ["fecha", "monto"],
      "email": "ecarrera@multiva.com"
    }, {
      "folio": "00009",
      "canal": "MVNET",
      "noCuenta": "5275646789",
      "tipoReporte": "TPB",
      "fechaInicio": "31 - 08 - 2017",
      "fechaFin": "31 - 08 - 2017",
      "horaProgramacion": "17: 35: 00",
      "separador": " | ",
      "formato": "CSV",
      "columnas": ["fecha", "monto"],
      "email": "jperez@multiva.com"
    }, {
      "folio": "00010",
      "canal": "MVNET",
      "noCuenta": "5275646789",
      "tipoReporte": "TPB",
      "fechaInicio": "31 - 08 - 2017",
      "fechaFin": "31 - 08 - 2017",
      "horaProgramacion": "19: 03: 00",
      "separador": " | ",
      "formato": "CSV",
      "columnas": ["fecha", "monto"],
      "email": "asalazar@multiva.com"
    }, {
      "folio": "00011",
      "canal": "MVNET",
      "noCuenta": "7378434654",
      "tipoReporte": "COBRANZA_REFERENCIADA",
      "fechaInicio": "31 - 08 - 2017",
      "fechaFin": "31 - 08 - 2017",
      "horaProgramacion": "11: 24: 00",
      "separador": " | ",
      "formato": "CSV",
      "columnas": ["fecha", "monto"],
      "email": "mmorales@multiva.com"
    }, {
      "folio": "00012",
      "canal": "MVNET",
      "noCuenta": "3873812345",
      "tipoReporte": "CONCILIACION_EMPRESA",
      "fechaInicio": "31 - 08 - 2017",
      "fechaFin": "31 - 08 - 2017",
      "horaProgramacion": "15: 02: 00",
      "separador": " | ",
      "formato": "CSV",
      "columnas": ["fecha", "monto"],
      "email": "ecarrera@multiva.com"
    }]
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
  "folioDispersion": "5642312345",
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
    "celularNotificacion": "5512233456",
    "email": "test@domain.com",
    "periodo": "semanal",
    "moneda": "MXN",  
    "terceroMultiva": {
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
      "banco": "12345689",
      "noTarjeta": "123456789101"
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
      "nodoAlfresco": "dispersion",
      "nombreArchivo": "dispersion.csv",
      "fechaRegistro": "01-09-2017T02:26:00",
      "fechaEjecucion": "01-09-2017T02:26:00",
      "estatus": "EJECUTADO",
      "operacion": "DISPERSION",
      "tipo": "RESPUESTA"
    }
  ]
}

const ejecutaTransaccion = {
  "responseStatus": 200,
  "responseError": "",
  "result": {
    "estatus": "NOT_APPLIED",
    "folioMultivanet": "0944",
    "folio": " ",
    "monto": 123456.1,
    "montoComision": 12345.1,
    "ivaComision": 0.1,
    "iva": 0.12,

  }
}

const catDispositivosMoviles = {
 "dispositivos": [
 {
  "descripcion": "ANDROID GALAXY NOTE 8",
  "idDispositivo": 1,
  "requiereIMEI": true
}
],
"responseError": "",
"responseStatus": 200
}

const cancelaOpProg = {
  "responseError": "",
  "responseStatus": 200
}

const consultaDispersionFondos = {
  "responseStatus": 200,
  "responseError": "",
  "dispersiones": [
    {
     "folio": "1234567",
      "cuentaDispersion": 5642312345,
      "nombreCuentaDispersion": "CUENTA DISPERSION 1",
      "nombreDispersion": "DISPERSION TEST",
      "horasEjecucion": [
        "12:00:00",
        "14:00:00",
        "16:00:00"
      ],
      "cuentasDestino": [
        {
          "cuenta": "4564523153498",
          "nombre": "CUENTA DESTINO 1",
          "montoTransferencia": 500.5,
          "tipoTransferencia": "SPEI",
          "CASFIM": "123456"
        }
      ]
    }
  ]
}

const impuestosLocales = {
  "htmlGdf":"<table><tr><td></td></tr></table>", 
	"responseStatus": 200,
	"responseError": ""
}

const aperturaPagare = {
  "folioInversion": "ABC123456",
	"responseStatus": 200,
	"responseError": ""
}

const aperturaIntegra = {
  "folioInversion": "123456",
  "responseStatus": 200,
  "responseError": ""
}

const depositoIntegra = {
  "responseStatus": 200,
  "responseError": ""
}
const tasasIntegra = {
    "tasas": [
        {
          "tasa": 0.3,
          "rangoInicial": 0,          
          "rangoFinal": 1000000,
          "montoMensual": 50000,
          "tasaMensual": 0.3
        }
      ],
  "responseStatus": 200,
  "responseError": ""
}

const aperturaCede = {
  "folioInversion": "ABC123456",
  "responseStatus": 200,
  "responseError": "Problema con la peticion"
}

const tasasCede = {
  "tasas": [{
    "tasa": 0.3,
		"montoInicial": 0.0,    
		"montoFinal": 1000000.00,
		"plazo": 30,
        "persona": "MORAL"
	}],
	"responseStatus": 200,
	"responseError": ""
}

const tasasPagare = {
  "tasas": [{
    "tasa": 0.3,
		"montoInicial": 0.0,    
		"montoFinal": 1000000.00,
		"plazo": 30
	}],
	"responseStatus": 200,
	"responseError": ""
}

function pagoImpuestosGdf(bodyreq){
  if (bodyreq.pagoImpuestosGdf.ctaOrigen == "1234") {
      var respuesta = {
        "responseStatus": 4400,
        "responseError": "Error al obtener los datos del archivo"
    };
	  }else if(bodyreq.pagoImpuestosGdf.ctaOrigen == "85652501"){
    var respuesta = {
	"responseStatus": 500,
	"responseError": "Internal Server Error",
	"pagoImpuestosGdf": {}
};
  }else{
    var respuesta ={
	"responseStatus": 200,
	"responseError": "",
	"response": {
		"idPagoImpuestos": 123456789,
		"folio": "123456789ABC",
		"ArchivoStream":"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QiAvSW1hZ2VDIC9JbWFnZUldCi9Gb250IDw8Cj4+Ci9YT2JqZWN0IDw8Ci9UUEwxIDUgMCBSCj4+Cj4+CmVuZG9iagoxMyAwIG9iago8PAovQ3JlYXRvciAoT25saW5lMlBERi5jb20pCi9Qcm9kdWNlciAoT25saW5lMlBERi5jb20pCi9DcmVhdGlvbkRhdGUgKEQ6MjAxODAyMDgxNzIwNTgpCj4+CmVuZG9iagoxNCAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMSAwIFIKL09wZW5BY3Rpb24gWzMgMCBSIC9GaXRIIG51bGxdCi9QYWdlTGF5b3V0IC9PbmVDb2x1bW4KPj4KZW5kb2JqCnhyZWYKMCAxNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAyNTcgMDAwMDAgbiAKMDAwMDAwNjI2MiAwMDAwMCBuIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAxMTcgMDAwMDAgbiAKMDAwMDAwMDM0NCAwMDAwMCBuIAowMDAwMDAwNjk3IDAwMDAwIG4gCjAwMDAwMDA3MjcgMDAwMDAgbiAKMDAwMDAwMDc1NyAwMDAwMCBuIAowMDAwMDAwODIyIDAwMDAwIG4gCjAwMDAwMDEwMDAgMDAwMDAgbiAKMDAwMDAwMTIxMiAwMDAwMCBuIAowMDAwMDAxNDYzIDAwMDAwIG4gCjAwMDAwMDYzNjggMDAwMDAgbiAKMDAwMDAwNjQ3NiAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDE1Ci9Sb290IDE0IDAgUgovSW5mbyAxMyAwIFIKL0lEIFs8M0ZFNUMwMTQyN0EyRjhCNzI0OEMxMENFNjM2NzUxNTM+PDNGRTVDMDE0MjdBMkY4QjcyNDhDMTBDRTYzNjc1MTUzPl0KPj4Kc3RhcnR4cmVmCjY1ODAKJSVFT0YK",
	}
  };
  }	  
 return respuesta;
}
const cambioInstruccion ={
  "responseStatus": 200,
  "responseError": ""
}
function movimientosDiputados(bodyreq){

  if(bodyreq.numeroDeCuenta == "4321" ){
    var respuesta = {
      "responseStatus": 4500,
      "responseError": "T24 FUERA DE LINEA"
  };
 }else if(bodyreq.numeroDeCuenta == "1234"){
    var respuesta = {
      "responseStatus": 4400,
      "responseError": "Error al obtener los datos del archivo"
  };
 }else if(bodyreq.otp == "1234"){
    var respuesta = {
      "responseStatus": 401,
      "responseError": "Error al validar el OTP"
}; 
 }else{
    var respuesta = {
	  "_downloadFile":true	
    };
  }
    return respuesta;
 }
    
 
const aperturaFondo ={
  "responseStatus": 200,
  "responseError": ""
}

const movimientosCFE ={
	"movimientos": [{
		"fecha": "10-10-2017",
		"monto": 1000000.00,
		"referencia": "1234567989",
		"canal": "MULTIVANET"
	}],
	"responseStatus": 200,
	"responseError": ""
}
 

 

function ejecutaOperacionLote(bodyreq){
console.log("otp----------"+bodyreq.otp);
    if( bodyreq.otp == "999"){
        var respuesta = {
            "responseStatus": 400,
            "responseError": ""
            };
    }else{
        var respuesta ={

          "folioOperacion": "123456",
          "estatus": "1234567",
          "responseStatus": 200,
          "responseError": ""

        };
    }
    return respuesta;
  }





function consultaPdfGdf(bodyreq){
	if (bodyreq.consultaPdfGdf.folio == "1234") {
      var respuesta = {
        "responseStatus": 4400,
        "responseError": "Error al obtener los datos del archivo"
	  };
	}else if(bodyreq.consultaPdfGdf.folio == "4321") {
    var respuesta = {
	"archivoStream":"",
	"responseStatus": 500,
	"responseError": "Internal Server Error"
};
  }else {
    var respuesta ={
      "archivoStream":"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QiAvSW1hZ2VDIC9JbWFnZUldCi9Gb250IDw8Cj4+Ci9YT2JqZWN0IDw8Ci9UUEwxIDUgMCBSCj4+Cj4+CmVuZG9iagoxMyAwIG9iago8PAovQ3JlYXRvciAoT25saW5lMlBERi5jb20pCi9Qcm9kdWNlciAoT25saW5lMlBERi5jb20pCi9DcmVhdGlvbkRhdGUgKEQ6MjAxODAyMDgxNzIwNTgpCj4+CmVuZG9iagoxNCAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMSAwIFIKL09wZW5BY3Rpb24gWzMgMCBSIC9GaXRIIG51bGxdCi9QYWdlTGF5b3V0IC9PbmVDb2x1bW4KPj4KZW5kb2JqCnhyZWYKMCAxNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAyNTcgMDAwMDAgbiAKMDAwMDAwNjI2MiAwMDAwMCBuIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAxMTcgMDAwMDAgbiAKMDAwMDAwMDM0NCAwMDAwMCBuIAowMDAwMDAwNjk3IDAwMDAwIG4gCjAwMDAwMDA3MjcgMDAwMDAgbiAKMDAwMDAwMDc1NyAwMDAwMCBuIAowMDAwMDAwODIyIDAwMDAwIG4gCjAwMDAwMDEwMDAgMDAwMDAgbiAKMDAwMDAwMTIxMiAwMDAwMCBuIAowMDAwMDAxNDYzIDAwMDAwIG4gCjAwMDAwMDYzNjggMDAwMDAgbiAKMDAwMDAwNjQ3NiAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDE1Ci9Sb290IDE0IDAgUgovSW5mbyAxMyAwIFIKL0lEIFs8M0ZFNUMwMTQyN0EyRjhCNzI0OEMxMENFNjM2NzUxNTM+PDNGRTVDMDE0MjdBMkY4QjcyNDhDMTBDRTYzNjc1MTUzPl0KPj4Kc3RhcnR4cmVmCjY1ODAKJSVFT0YK",
      "responseStatus": 200,
      "responseError": ""
    };
  }
  return respuesta;
}

function consultaArchivoLote(bodyreq){

    if( bodyreq.nodoAlfresco == "123456"){
       var respuesta = {
                           //Es un archivo
                    	   "_downloadFile":true
	                    };
    }else{
        var respuesta = {
                          "responseStatus": 1205,
                          "resposeError": "No se encontraron resultados"
                        };
    }
    return respuesta;
}

const solicitaOTPVirtual = {
  "responseStatus": 200,
  "responseError": ""
}


/*const obtenerReporteCobranza = {
    //Es un archivo
    "_downloadFile":true
}*/

function obtenerReporteCobranza(bodyreq){

      if (bodyreq.otp == "123456") {
        var respuesta = {"_downloadFile":true};

      }else if(bodyreq.otp == "200") {
         var respuesta = {
        "responseStatus": 200,
        "responseError": ""
    };
      }else if(bodyreq.otp == "404") {
         var respuesta = {
        "responseStatus": 404,
        "responseError": ""
    };
      }
  return respuesta;
}




function consultaFoliosGdf(bodyreq){

	if (bodyreq.idUsuario == "123456") {
      var respuesta = {
        "responseStatus": 4500,
        "responseError": "Ocurrió un error en T24"
    };
  }else if(bodyreq.idUsuario == "789123") {
    var respuesta = {
	"responseStatus": 500,
  "responseError": "Internal Server Error"
    };
	}else if(bodyreq.idUsuario == "654321") {
    var respuesta = {
	"responseStatus": 2003,
	"responseError": "Ticket invalido"
    };
	}else if(bodyreq.idUsuario == "987654") {
    var respuesta = {
	"responseStatus": 2004,
	"responseError": "Ticket duplicado"
    };
  }else {
    var respuesta ={
      "result": [
        {
          "folioOperacion": 12345678,
          "folioGDF": 8965433
        }
        ,
        {
          "folioOperacion": 45678903,
          "folioGDF": 543654
        }
      ],
      "responseStatus": 200,
      "responseError": ""
    };
  }
  return respuesta;
}

const consultaInfoRECA = {

  "result": {
    "descripcion": "CEDE Fijo",
    "tasa": 5.93,
    "GATNominal": 6.09,
    "GATReal": 2.16,
    "saldoMinimo": 1000000.22,
    "reca": "1234568-ABCD"
  },
  "responseStatus": 200,
  "responseError": ""

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////77


////////////////////////////////////////////////////////////


const actualizaDatosPersona = {
  "responseStatus": 200,
  "responseError": "",
  "result": {
    "folio": "12345678910"
  }
}
 
const AsignacionOtpUsuario = {
  "responseStatus": 200,
  "responseError": "",
  "result": [
    "string"
  ]
}
 

const consultaCuentasCliente = {
  "result": [
    {
      "idPersona": 1,
      "noCuenta": "0000000009",
      "tipoCuenta": "cheques",
      "alias": ""
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}


const consultaSucursales = {
  "sucursales": [
    {
      "id": 11,
      "calle": "",
      "noExterior": "",
      "nombre": "",
      "estado": "",
      "entrecalles": "",
      "país": "",
      "ciudad": "",
      "colonia": "",
      "codigoPostal": "",
      "municipio": ""
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}




const direccionesPorPersona = {
  "id": "11",
  "nombre": "",
  "listaDirecciones": [
    {
      "tipoDireccion": {
        "id": "11",
        "descripcion": ""
      },
      "pais": {
        "id": "11",
        "descripcion": "",
        "nacionalidad": ""
      },
      "estado": {
        "id": "11",
        "descripcion": ""
      },
      "id": "11",
      "calle": "",
      "noExterior": "",
      "noInterior": "",
      "entreCalles": "",
      "ciudad": "",
      "colonia": "",
      "codigoPostal": "",
      "esPrincipal": true,
      "municipio": ""
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const impresionComprobantes = {
  "responseStatus": 200,
  "responseError": ""
}





 /////////// Sprint F  /////////////

const personaFisicaPorFiltro = {
  "responseStatus": 200,
  "responseError": "",
  "result": {
    "Id": 9,
    "regimenFiscal": "Persona Moral",
    "nombre": "null",
    "razonSocial": "VASCO",
    "apellidoPaterno": "null",
    "apellidoMaterno": "null",
    "nombreCompleto": "null",
    "rfc": "VAS647909",
    "curp": "null",
    "direccion": [
      {
        "tipoDireccion": {
          "id": 1,
          "descripcion": "Fiscal"
        },
        "pais": {
          "id": 1,
          "descripcion": "México"
        },
        "estado": {
          "id": 1,
          "descripcion": "Distrito Federal"
        },
        "municipio": "null",
        "ciudad": "null",
        "colonia": "null",
        "codigoPostal": "null",
        "calle": "Calle",
        "noExterior": "182",
        "noInterior": "2",
        "entreCalles": "Pensamiento y laureles",
        "esPrincipal": true
      }
    ],
    "activo": true,
    "telefonos": [
      {
        "telefono": "12345678",
        "descTipoTelefono": "Casa",
        "esPrincipal": true
      }
    ],
    "correos": [
      {
        "correo": "ejemplo@ejemplo.com",
        "esPrincipal": true
      }
    ],
    "contactos": [
      {
        "tipoRelacion": {
          "id": 3,
          "descripcion": "Contacto"
        },
        "telefonos": [
          {
            "telefono": "5537136838",
            "descTipoTelefono": "Casa",
            "esPrincipal": true
          }
        ],
        "correos": [
          {
            "correo": "shernandez@mail.com.mx",
            "esPrincipal": true
          }
        ],
        "idContacto": 12,
        "nombre": "Silvano Ruiz Lopez",
        "email": "shernandez@mail.com.mx",
        "rfc": "SRLP654321ZA5",
        "isNomina": true
      }
    ]
  }
}

const consultaEstados = {
  "responseStatus": 200,
  "responseError": "",
  "estados": [
    {
      "id": 5,
      "descripcion": "5"
    }
  ]
}


const consultaStockTokens = {
  "responseStatus": 200,
  "responseError": "",
  "result": [
    {
      "idDispositivo": 12345,
      "numeroSerie": "MXS-9087-HDF",
      "numeroCaja": 1,
      "estatusCliente": "ASIGNADO",
      "fechaRegistro": "07/12/2017 06:12:42",
      "fechaAsignacion": "09/01/2018 12:30:42",
      "usuarioAdicional": {
        "id": 4,
        "nombre": "Juan",
        "apellidoMaterno": "Lopez",
        "apellidoPaterno": "Lopez",
        "perfil": "Adicional"
      },
      "sucursal": {
        "id": 3,
        "nombre": "Tecamachalco"
      },
      "solicitud": {
        "id": 1,
        "proveedor": {
          "id": 11,
          "nombre": "VASCO"
        }
      }
    }
  ]
}
 
const consultaMunicipioDelegacion = {
  "responseStatus": 200,
  "responseError": "",
  "municipiosDelegaciones": [
    {
      "id": 5,
      "nombre": "Venustiano C.",
      "claveMunicipioDelegacion": 5,
      "idEstado": 5
    }
  ]
}


const crearAbastecimientoTokensCliente = {
  "responseStatus": 200,
  "responseError": "",
  "result": [
    {
      "idSolicitud": 8,
      "fechaRegistro": "09-01-2018T15:42:00"
    }
  ]
}

const actualizaFacultamientoUsuario={
  "responseStatus": 200,
  "responseError": "",
  "result": {
    "folio": "12345678910"
  }
}

const consultaPerfilesPatronConGruposFacultades={
  "result": [
    {
      "id": 12345,
      "nombre": "string",
      "descripcion": "",
      "titular": 12345,
      "fechaModificacion": "23032017",
      "isActivo": true,
      "empresaPropietaria": "",
      "usuarioUltimaModificacion": 0,
      "listaGrupos": [
        {
          "nombre": "string",
          "id": "",
          "descripcion": "string",
          "listaFacultades": [
            {
              "id": 12345,
              "nombre": "string",
              "descripcion": "",
              "fechaModificacion": "23032017",
              "isActivo": true,
              "usuarioUltimaModificacion": 23032017,
              "cuenta": "",
              "tipoFacultad": "",
              "montoRestriccion": "",
              "nombrePortlet": "",
              "isPortlet": true,
              "isComponenteHabilitado": true,
              "isComponenteVisible": true,
              "isLayout": true,
              "urlLayout": "",
              "isGrupoBpm": true
            }
          ]
        }
      ],
      "responseStatus": 200,
      "responseError": ""
    }
  ]
}

const modificaPasswordUsuario={
  "responseStatus": 200,
  "responseError": "",
  "result": {
    "folio": "12345678910"
  }
}

const consultaFacultamientoUsuario={
  "result": {
    "idusuario": 0,
    "ticket": {
      "id_user": "123456",
      "id_creds": "12345678"
    },
    "canal": "WEB",
    "usuarioUltimaModificacion": 0,
    "isActivo": true,
    "limiteIndividual": "0.0",
    "limiteMancomunado": "0.0",
    "limiteOperable": "0.0",
    "rangoOperable": "true",
    "firmantes": {
      "usuarios": "[0]",
      "votos": 0
    },
    "firmantesFacultades": [
      {
        "nombre": "string",
        "firmantes": {
          "usuarios": "[0]",
          "votos": 0
        },
        "cuentas": [
          {
            "noCuenta": "string",
            "limiteIndividual": "0.0",
            "limiteMancomunado": "0.0",
            "limiteOperable": "0.0",
            "rangoOperable": "true"
          }
        ]
      }
    ],
    "perfiles": [
      {
        "id": 0,
        "nombre": "string",
        "patronOrigen": "string",
        "grupos": [
          {
            "id": 0,
            "nombre": "string",
            "facultades": "[string]"
          }
        ]
      }
    ],
    "cuentas": "[strings]"
  },
  "responseStatus": 200,
  "responseError": ""
}

const bloqueoUsuario={

  "responseStatus": 200,
  "responseError": "",
  "result": [
    {
      "id": 1,
      "activo": true
    }
  ]
}

const desbloqueoUsuario={

  "responseStatus": 200,
  "responseError": "",
  "result": [
    {
      "id": 1,
      "activo": true
    }
  ]
}

const consultaFirmantesPotenciales={
  "responseStatus": 200,
  "responseError": "",
  "firmantes": [
    {
      "idUsuario": 0,
      "Nombre": "Waldo Terry"
    }
  ]
}

const creaUsuarioAdicional={
  "responseStatus": 200,
  "responseError": "",
  "result": {
    "idUsuario": 0,
    "folio": "12345678910"
  }
}

const consultaOperacionesActivasUsuario = {
  "responseStatus": 200,
  "responseError": "",
  "tieneOperacionesActivas": true
}


const creaFacultamientoUsuario={
  "responseStatus": 200,
  "responseError": "",
  "result": [
    {
      "folio": "1234567890"
    }
  ]
}


const consultaAliasPorUsuario = {
  "existeAlias": false,
  "responseStatus": 200,
  "responseError": ""
}

const consultaLimitesUsuario = {
  "responseStatus": 200,
  "responseError": "",
  "result": [
    {
      "nombre": "",
      "alias": "",
      "rfc": "",
      "limiteIndividual": "",
      "limiteMancomunado": "",
      "limiteOperable": "",
      "rangoOperable": "",
      "activo": true,
      "dispositivo": {
        "idDispositivo": 1,
        "noSerie": "",
        "noCaja": 10
      }
    }
  ]
}


const resetPasswordUsuario = {
      "responseStatus": 200,
      "responseError": "",
      "result": {
        "folio": "12345678910"
      }
    }

const consultaEmpresasPorHolding = {
  "result": [
    {
      "idEmpresa": 1,
      "nombre": "EmpresaX"
    }

  ],
  "responseStatus": 200,
  "responseError": ""
}


const consultaBitacoraOperaciones = {
  "responseStatus": 200,
  "responseError": "",
  "result": [
    {
      "idBitacora": 1234567,
      "folio": "F0123UNASN3123",
      "fechaSolicitud": "21-04-2017T11:03:00",
      "fechaProgramada": "22-04-2017T11:03:00",
      "importe": 37192.12,
      "moneda": "MXN",
      "estatus": "APLICADA",
      "folio2": "F0123UNASN3123",
      "fechaAutorizacion": "21-04-2018T11:03:00",
      "folioAutorizacion": "FO2389JDS912",
      "medio": "MultivaNet",
      "concepto": "Pago de servicios financieros",
      "referencia": "128362518293",
      "claveRastreo": "1729HSQA9383712JD",
      "fechaAplicacion": "14-10-2017T17:47:00",
      "fechaLiquidacion": "14-10-2017T17:47:00",
      "idDispositivo": "AJDH1023731KDAD",
      "agente": "Jorge Posadas",
      "rfc": "ABCD123456ASD",
      "iva": 123.12,
      "comision": 13.12,
      "ivaComision": 3.12,
      "cuentaOrigenTipo": "CHQ",
      "cuentaOrigenNombre": "Provedores",
      "cuentaOrigen": "1237493749",
      "cuentaDestinoTipo": "Número Celular",
      "cuentaDestinoNombre": "Fincomun",
      "cuentaDestino": "5512345678",
      "usuarioCaptura": "123456",
      "conceptoEdoCuenta": "Pago",
      "celularBeneficiario": "1234567890",
      "tipoPago": 2,
      "tipoCredito": 1
    }
  ]
}
 
function consultaGATIntegra(bodyreq){

	if (bodyreq.cuenta == "1234") {
      var respuesta = {
          "responseStatus": 2003,
          "responseError": "Ticket invalido"
        };
  }else if(bodyreq.cuenta == "123") {
    var respuesta = {
          "responseStatus": 2004,
          "responseError": "Ticket duplicado"
        };
	}else if(bodyreq.cuenta == "12") {
    var respuesta = {
          "responseStatus": 4500,
          "responseError": "Ocurrió un error en T24"
        };
	} else {
    var respuesta ={
          "result": {
            "descripcion": "Multiva Integra",
            "pagoMensual": 10.12,
            "reca": "1234568-ABCD",
            "gatNominal": 1.12,
            "gatReal": 0.12,
            "tasaMensual": 10.12,
            "pagoDiario": 20.12,
            "fecha": "09/01/2018",
            "montoDesde": 0.12,
            "monto": 10.12,
            "montoHasta": 30.12,
            "gatAproximadoNominal": 10.12,
            "tasaDiaria": 10.12
          },
          "responseError": "",
          "responseStatus": 200
        };
   }
  return respuesta;
}


const consultaOpsFrecuentes = {
  "result": [
    {
      "tipoOperacion": "MUL_EJECUTA_SPEI",
      "aliasPreregistro": "alias",
      "cuentaOrigen": "124567891",
      "cuentaDestino": "98765432"
    }
  ],
  "responseStatus": 200,
  "responseError": ""
}

const consultaInhabiles = {

  "responseStatus": 200,
  "responseError": "",
  "result": [
    {
      "fecha": "21-03-2019"
    }
  ]
}


var mapaModelo = {
   //### ESB ####//
   /////////// Sprint 1  /////////////
   'consultaDatosBasicos': consultaDatosCliente,
   'consultaServiciosContratados':consultaServiciosContratados,
   'consultaProductosContratados':consultaProductosContratados,
   'modificaContrato':modificaContrato,
   'cambioContrasena':cambioContrasena,
   'consultaPerfiles':consultaPerfiles,
  //'consultaCuentasAgregadasCliente':consultaCuentasAgregadasCliente,
  'envioNotificaciones':envioNotificaciones,
  'listarTokensOTP':listarTokensOTP,
  'activacionOTP':activacionOTP,
  'bloqueoOTP':bloqueoOTP,
  'consultaPerfilesPerf': consultaPerfilesPerf,
  'login':login,
  'autentificacion':autentificacion,
  'consultaContrato':consultaContrato,
  'errorServicio':errorServicio,
  'consultaContratoerror':consultaContratoerror,
  /////////// Sprint 2  /////////////
  'consultaCuentasAgregadas':consultaCuentasAgregadas,
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
  'validaOTP': validaOTP,
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
 'ejecutaTransaccion':ejecutaTransaccion,
 'catDispositivosMoviles':catDispositivosMoviles,
 'cancelaOpProg':cancelaOpProg,
 'consultaDispersionFondos':consultaDispersionFondos,
 'ejecutaOperacionLote':ejecutaOperacionLote,
 'consultaArchivoLote':consultaArchivoLote,
//////////// Sprint 5 ////////////////////////
 'impuestosLocales': impuestosLocales,
 'aperturaPagare': aperturaPagare,
 'tasasIntegra': tasasIntegra,
 'aperturaIntegra': aperturaIntegra,
 'depositoIntegra': depositoIntegra,
 'aperturaCede':aperturaCede,
 'tasasCede': tasasCede,
 'tasasPagare': tasasPagare,
 'pagoImpuestosGdf':pagoImpuestosGdf,
 'cambioInstruccion': cambioInstruccion,
 'movimientosDiputados':movimientosDiputados,
 'aperturaFondo':aperturaFondo,
 'movimientosCFE':movimientosCFE,
 'consultaPdfGdf':consultaPdfGdf,
 'solicitaOTPVirtual':solicitaOTPVirtual,
 'foliosGDF':consultaFoliosGdf,
 'consultaInfoRECA':consultaInfoRECA,
 'consultaGATIntegra':consultaGATIntegra,
 'consultaOpsFrecuentes':consultaOpsFrecuentes,
 'impresionComprobantes':impresionComprobantes,


//////////Sprint F//////////////////
 'actualizaDatosPersona':actualizaDatosPersona,
 'consultaCuentasCliente':consultaCuentasCliente,
 'consultaSucursales':consultaSucursales,
 'direccionesPorPersona':direccionesPorPersona,
 'personaFisicaPorFiltro':personaFisicaPorFiltro,
 'consultaEstados':consultaEstados,
 'consultaMunicipioDelegacion':consultaMunicipioDelegacion,
 'crearAbastecimientoTokensCliente': crearAbastecimientoTokensCliente,
 'consultaOperacionesActivasUsuario': consultaOperacionesActivasUsuario,
 'consultaStockTokens': consultaStockTokens,
 'AsignacionOtpUsuario': AsignacionOtpUsuario,
 'actualizaFacultamientoUsuario': actualizaFacultamientoUsuario,
 'consultaPerfilesPatronConGruposFacultades':consultaPerfilesPatronConGruposFacultades,
 'modificaPasswordUsuario':modificaPasswordUsuario,
 'consultaFacultamientoUsuario':consultaFacultamientoUsuario,
 'bloqueoUsuario':bloqueoUsuario,
 'desbloqueoUsuario':desbloqueoUsuario,
 'consultaFirmantesPotenciales':consultaFirmantesPotenciales,
 'creaUsuarioAdicional':creaUsuarioAdicional,
 'creaFacultamientoUsuario': creaFacultamientoUsuario,
 'consultaAliasPorUsuario':consultaAliasPorUsuario,
 'consultaLimitesUsuario':consultaLimitesUsuario,
 'resetPasswordUsuario': resetPasswordUsuario,
 'consultaEmpresasPorHolding': consultaEmpresasPorHolding, 
 'consultaBitacoraOperaciones': consultaBitacoraOperaciones,
 'consultaInhabiles': consultaInhabiles


}


function obtenerModelo (nombreModelo,bodyreq){

  var modelo = mapaModelo[nombreModelo];
  if (typeof modelo === 'function') {
    return modelo(bodyreq);
  }else{
    return modelo;
  }
}



module.exports = {
  obtenerModelo
} 
