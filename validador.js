// importar
var validador = require('./src/validateModel');
var bodyParser = require('body-parser');
var express = require('express');
var swagger = require('./index.json');
var modelo = require('./modelo');
var port
var basePath=""
var app = express();
var file = 'files/EstadodeCtaDemo.pdf';
//Se verifica variable de ambiente para puerto del validador
if(process.env.VALIDADOR_NODE_PORT)
    port = process.env.VALIDADOR_NODE_PORT
else
    port = 9094

app.use(bodyParser.raw(
  {
    type: "application/octet-stream"
  }
));
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));
app.use(bodyParser());

function validateArray(arrayBody, arrayDefinition, errors)
{
  var itemsDefinition= arrayDefinition.items;
  for( var itemArray in arrayBody )
  {
    validateObject(arrayBody[itemArray], itemsDefinition, errors);
    // var propertiesDef= item.properties;
    // for( var propertyDef in propertiesDef )
    // {
    //   var typeDef= propertyDef.type;
    //   var formatDef= propertyDef.format;
    //   var type= typeof(itemArray[propertyDef])
    //   console.log();
    // }
  }

}

function validateRequired(bodyreq, propertiesRequired, errors)
{
  for(var property in propertiesRequired )
  {
    if( bodyreq[propertiesRequired[property]] == null )
    {
      // throw new Error("Propiedad requerida faltante: "+ propertiesRequired[property]);
      console.log("Error: Propiedad requerida faltante: "+ propertiesRequired[property]);
      errors["required"][propertiesRequired[property]]="No se encontro la propiedad";
    }
  }
}

function validate(bodyreq, schemaDefinition, errors)
{
  errors["required"]= {};
  errors["type"]= {};
  errors["logic"]={};
  validateRequired(bodyreq, schemaDefinition.required,errors);
  validateObject(bodyreq, schemaDefinition, errors);
}

function validateObject(bodyreq, schemaDefinition, errors)
{

  var properties= schemaDefinition.properties;
  validateRequired(bodyreq, schemaDefinition.required, errors)

  for( property in properties )
  {
    //Significa que ya pasamos la validacion de requeridos, podriamos encontrarnos con una
    // propiedad que no esta en el body
    if(bodyreq[property] == null)
    {
      continue;
    }
    var type= typeof(bodyreq[property]);

    if(type !=  "object")
    {
      var typeDef= properties[property].type;
      var format= properties[property].format;
      console.log("-------------------***************-----------------");
      console.log(properties[property]);
      validateProperty(type,typeDef, format, property,properties[property],bodyreq[property], errors );
    }
    else
    {
      if(!Array.isArray(bodyreq[property]))
      {
        console.log("VALIDANDO OBJECT "+ bodyreq[property]);
        validateObject(bodyreq[property], properties[property], errors);
      }
      else
      {
        console.log("VALIDANDO ARRAY "+ bodyreq[property].length);
        validateArray(bodyreq[property], properties[property], errors);
      }

    }
  }
}
function validateProperty(type, typeDefinition, formatDefinition, propertyName, propertyDef, propertyBody , errors)
{
  var typeTemp= type;
  if( typeDefinition == "integer" && type == "number")
  {
    type= "integer";
  }
  //Los tipos de dato no coinciden
  if( type != typeDefinition)
  {
    // throw new Error( "El tipo de dato no coincide en el campo "+propertyName+", se esperaba "+ typeDefinition + "y se recibio" + type );
    errors["type"][propertyName]="El tipo de dato no coincide, se esperaba "+ typeDefinition +" y se recibio "+ type ;
    return;
  }
  //Validar que sea un float o douible en caso que asi se requiera
  if(typeDefinition == "number" && (formatDefinition == "float" || formatDefinition == "double") )
  {
    if( Number.isInteger(propertyBody) )
    {
      errors["type"][propertyName]="El tipo de dato no coincide, se esperaba "+ typeDefinition +" y se recibio Integer";

      // throw new Error("El tipo de dato no coincide en el campo "+ propertyName+",se esperaba " + typeDefinition+":"+formatDefinition+ " y se recibio "+type);
    }
  }
  //Validar que sea un entero en caso que asi se requiera
  else if(typeDefinition== "integer" && (formatDefinition == "int32" || formatDefinition == "int64"))
  {
    if( !Number.isInteger(propertyBody) )
    {
      errors["type"][propertyName]="El tipo de dato no coincide, se esperaba "+ typeDefinition +" y se recibio float" ;

      // throw new Error("El tipo de dato no coincide en el campo "+ propertyName+", se esperaba "+ typeDefinition + ":"+formatDefinition+ " y se recibio float");
    }
  }

  var minLength= propertyDef.minLength;
  var maxLength= propertyDef.maxLength;

  if(minLength != null && type == "string")
  {
    if(!( propertyBody.length >= minLength) )
    {
      errors["logic"][propertyName]="Se requiere una longitud minima ("+minLength+") en el campo "+propertyName ;

      // throw new Error("No se cumplio la longitud minima("+minLength+") del campo "+ propertyName);
    }
  }

  if( maxLength != null && type == "string")
  {
    if( !( propertyBody.length <= maxLength ) )
    {
      // throw new Error("No se cumplio la longitud máxima("+ maxLength +") del campo "+ propertyName);
      errors["logic"][propertyName]="Se requiere una longitud maxima ("+maxLength+") en el campo "+propertyName ;

    }
  }




}
// ruteo
app.set('json spaces', 0);
app.post('/:path', function(req, res){
  try {
    var errors={};
    var path= swagger.paths[req.originalUrl];
    if(path == null)
    {
      //throw new Error("No existe la deficion en Swagger para validar el path: "+ req.originalUrl);
      errors["pathError"]="No existe la definición en Swagger para validar el path "+ req.originalUrl;
     res.status(200).send({"errors":errors});
      //res.send(errors);
      return;
    }
    var bodyreq= req.body;
    errors["required"]={};
    errors["type"]={};
    errors["logic"]={};
    console.log("Path " + req.originalUrl + " validando...");


    validate(bodyreq, path.post.parameters[0].schema, errors);
    console.log("-------------FIN VALIDACION------------");
    console.log("*****************************************************************");
    if(isEmpty(errors.required) && isEmpty(errors.type) && isEmpty(errors.logic)){
      var nombreModelo= req.path.replace(basePath,"")
      var respuesta = modelo.obtenerModelo(nombreModelo.substring(1), bodyreq);
      console.log("Respuesta:  ", respuesta)
      if(respuesta._downloadFile){
        console.log("File")
        res.type('application/octet-stream').download(file);
      }
      else
        res.status(200).send(respuesta);
    }else{
      console.log("Errors:  ", errors)
      res.status(200).send({"errors":errors});
    }
  } catch (e) {
    console.log('There was an error on the process', e);
    res.status(500).send({"errors":"Problema con la peticion"});
  }
});

var isEmpty = function(obj) {
  return Object.keys(obj).length === 0;
}

// escucha
app.listen(port);
//console.log("Servidor Express escuchando en modo %s", app.settings.env);
console.log("Esta ruta se accede a postman para hacer las peticiones con esta ruta :" + "http://localhost:" +  port);
