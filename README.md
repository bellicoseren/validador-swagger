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
 }
 ```
