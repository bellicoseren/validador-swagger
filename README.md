# Validador Swagger

Proyecto que valida los campos con respecto al archivo Swagger como JSON

## Uso

Instalar las dependencias mediante

```
npm install
```
Despues levantar el servidor

```
node index.js
```
Cabe mencionar que si el archivo Swagger.json, si esta mal armado no podras realizar las pruebas correspondientes seguir la estructura del archivo Swagger para los siguientes servicios a validar.

```
{
 "/consultaDatosBasicos": {
   "post": {
     "tags": [
       "Sprint 1"
     ],
     "description": "Consolidar la información relevante respecto al diseño de la operacion /consultaDatosBasicos del servicio /cliente requerida para la integración de Multivanet con T24",
     "parameters": [
       {
         "in": "body",
         "name": "consultaDatosBasicos,",
         "description": "Consumidor  que dibuja encabezado con datos de cliente",
         "required": true,
         "schema": {
           "required": [
             "idPersona",
             "ticket",
             "canal"
           ],
           "properties": {
             "idPersona": {
               "type": "number",
               "format": "int64",
               "example": 123546345
             },
             "ticket": {
               "required": [
                 "id_user",
                 "id_creds"
               ],
               "properties": {
                 "id_user": {
                   "type": "string",
                   "example": "abc"
                 },
                 "id_creds": {
                   "type": "string",
                   "example": "1233"
                 }
               }
             },
             "canal": {
               "type": "string",
               "minLength": 1,
               "example": "WEB"
             }
           }
         }
       }
     ],
     "responses": {
       "200": {
         "description": "Servicio dummy que se publicara para el uso del consumidor en tanto se completa la integracion del ESB a T24. Bajo el entendido de que la firma expuesta en este servicio dummy no cambiara cuando el desarrollo termine",
         "schema": {
           "required": [
             "numCliente",
             "nombre"
           ],
           "properties": {
             "numCliente": {
               "description": "Número de cliente de T24",
               "type": "integer",
               "format": "int64",
               "example": "Long"
             },
             "nombre": {
               "description": "Nombre del cliente (agrega apellidos)",
               "type": "string",
               "example": "String"
             },
             "listaDirecciones": {
               "type": "array",
               "items": {
                 "properties": {
                   "direccion": {
                     "description": "Dirección del cliente, agrega calle y número",
                     "type": "string",
                     "example": "String"
                   },
                   "poblacion": {
                     "description": "Delegación o municipio.",
                     "type": "string",
                     "example": "String"
                   },
                   "ciudad": {
                     "description": "Ciudad.",
                     "type": "string",
                     "example": "String"
                   },
                   "estado": {
                     "description": "Estado",
                     "type": "string",
                     "example": "String"
                   },
                   "cp": {
                     "description": "Código postal.",
                     "type": "string",
                     "example": "String"
                   },
                   "tipoDireccion": {
                     "description": "Indica el tipo de dirección (fiscal, jurídica, de mensajes, etc.).",
                     "type": "string",
                     "example": "String"
                   }
                 }
               }
             },
             "rfc": {
               "description": "RFC del cliente",
               "type": "string",
               "example": "String"
             },
             "listaTelefonos": {
               "type": "array",
               "items": {
                 "description": "Solo se tomara el primer numero telefonico",
                 "properties": {
                   "cvePais": {
                     "description": "Clave Pais",
                     "type": "integer",
                     "format": "int64",
                     "example": "integer"
                   },
                   "codArea": {
                     "description": "Codigo Area",
                     "type": "integer",
                     "format": "int64",
                     "example": "integer"
                   },
                   "telefono": {
                     "description": "Número de teléfono",
                     "type": "integer",
                     "format": "int64",
                     "example": "Long"
                   },
                   "tipoTelefono": {
                     "description": "Indica el tipo de este teléfono (casa, oficina, fax, móvil, etc.).",
                     "type": "string",
                     "example": "String"
                   }
                 }
               }
             },
             "listaEmails": {
               "type": "array",
               "items": {
                 "description": "Solo se tomara el primer numero telefonico",
                 "properties": {
                   "mail": {
                     "description": "Correo electrónico.",
                     "type": "string",
                     "example": "String"
                   },
                   "activo": {
                     "description": "Bandera que indica si el correo en cuestión está activo o no.",
                     "type": "boolean",
                     "example": "Boolena"
                   },
                   "tipoEmail": {
                     "description": "Indica el uso que se le da al correo del cliente.",
                     "type": "string",
                     "example": "String"
                   }
                 }
               }
             },
             "tipoPersona": {
               "description": "Régimen fiscal de la persona, PM, PF o PFAE.",
               "type": "string",
               "example": "String"
             },
             "estatus": {
               "description": "Estatus del cliente.",
               "type": "string",
               "example": "String"
             },
             "sucursal": {
               "description": "Identificador de la sucursal asociada con el cliente.",
               "type": "string",
               "example": "String"
             },
             "vip": {
               "description": "Indica si el cliente es VIP",
               "type": "string",
               "example": "String"
             },
             "responseStatus": {
               "type": "number",
               "example": 200
             },
             "responseError": {
               "type": "string",
               "example": "Problema con la peticion"
             }
           }
         }
       }
     }
   }
   ```
   
Variable de ambiente para puerto del servidor

```
VALIDADOR_PORT=9094
```

### Importante
Cabe mencionar que es necesario antes de realizar cada prueba, actualizar el archivo ***"modelo.js"*** y reemplazar el archivo ***"index.json"*** de la siguiente manera:

Al archivo ***"modelo.js"***, como primer paso, se le debe agregar una constante (const) con el nombre del endPoint de nuestro nuevo servicio a probar, con el response(nuestra respuesta JSON) como valor:

```
const activacionOTP = {
  "listTokens": [{
    "usuario": 1234567890,
    "responseStatus": 200,
    "responseError": ""
  },{
    "usuario": 9876543210,
    "responseStatus": 200,
    "responseError": ""
  }],
  "responseStatus": 200,
  "responseError": ""
}
```

Como segundo paso, se debe agregar la constante definida en el objeto mapa ***"mapaModelo"*** como llave-valor bajo el mismo nombre del endPoint, tanto para la llave, como para el valor.

```
var mapaModelo = {
   //### ESB ####//
   /////////// Sprint 1  /////////////
   ... ... ... ...
   ... ... ... ...
   ... ... ... ...
   'activacionOTP':activacionOTP,
   ... ... ... ...
   ... ... ... ...
   ... ... ... ...
   /////////// Sprint 2  /////////////
   ... ... ... ...
   ... ... ... ...
   ... ... ... ...
   /////////// Sprint 3  /////////////
   ... ... ... ...
   ... ... ... ...
   ... ... ... ...
}
```

El archivo ***"index.json"***, debe ser reemplazado por el archivo "index.json" generado en nuestros proyectos swagger-xxx-api mediante el comando ***"multi-file-swagger index.yaml > index.json"*** después de cada nuevo cambio a validar.