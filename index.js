// importar
var validador = require('./src/validateModel');
var bodyParser = require('body-parser');
var express = require('express');
var swagger = require('./swagger.json');
let modelo = require('./modelo');
var port = 9090
// instanciar
var app = express();
app.use(bodyParser());





/*
**propertyBody: Contiene el valor de la propiedad en el body
*propertyDef: Contiene la defincion de la propiedad que esta en el swagger
*propertyName: Contiene el nombre de la propiedad que se esta validando
*/
function typeValidation(propertyBody, propertyDef, propertyName, errors)
{
  var type= typeof( propertyBody );
  var typeDefinition= propertyDef.type;
  var formatDefinition= propertyDef.format;
  console.log("type "+ propertyName +":"+ type);
  console.log(errors["type"]);
  if( typeDefinition == "integer" && type == "number")
  {
    type= "integer";
  }
  //Los tipos de dato no coinciden
  if( type != typeDefinition)
  {
    // throw new Error( "El tipo de dato no coincide en el campo "+propertyName+", se esperaba "+ typeDefinition + "y se recibio" + type );
    errors["type"][propertyName]="El tipo de dato no coincide, se esperaba "+ typeDefinition +" y se recibio "+ type ;
  }
  //Validar que sea un float o douible en caso que asi se requiera
  if(typeDefinition == "number" && (formatDefinition == "float" || formatDefinition == "double") )
  {
    if( Number.isInteger(propertyBody) )
    {
      errors["type"][propertyName]="El tipo de dato no coincide, se esperaba "+ typeDefinition +" y se recibio "+ type ;

      // throw new Error("El tipo de dato no coincide en el campo "+ propertyName+",se esperaba " + typeDefinition+":"+formatDefinition+ " y se recibio "+type);
    }
  }
  //Validar que sea un entero en caso que asi se requiera
  else if(typeDefinition= "integer" && (formatDefinition == "int32" || formatDefinition == "int64"))
  {
    if( !Number.isInteger(propertyBody) )
    {
      errors["type"][propertyName]="El tipo de dato no coincide, se esperaba "+ typeDefinition +" y se recibio "+ type ;

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

  return true;

}






// ruteo
app.post('/:path', function(req, res)
{

  var typeArray=typeof(req.body.array);
  console.log(typeArray);
  console.log(req.body.array);
  console.log(req.body.array.length);
  console.log(req.body.ticket.length);

  //console.log("Validadaor de cabeceras:  "+req.getHeaders('Content-Type', 'text/plain'));
  // console.log(req);
  var errors={};
  errors["required"]={};
  errors["type"]={};
  errors["logic"]={};
  var path= swagger.paths[req.originalUrl];
  if(path == null)
  {
    //throw new Error("No existe la deficion en Swagger para validar el path: "+ req.originalUrl);
    errors["pathError"]="No existe la definición en Swagger para validar el path "+ req.originalUrl;
    res.send(errors);
    return;
  }
  var bodyreq= req.body;

  console.log("Path " + req.originalUrl + " validando...");
  //Revisar si en todos los casos solo hay un parametro en el array parameters
  var propertiesNames= path.post.parameters[0].schema.properties;
  var propertiesRequired= path.post.parameters[0].schema.required;


  // console.log(propertiesNames);
  // console.log(propertiesRequired);
  // console.log(bodyreq);
  //Revisar required properties
  var requiredErrors=false;
  for(var property in propertiesRequired )
  {
    if( bodyreq[propertiesRequired[property]] == null )
    {
      console.log("Error: Propiedad requerida faltante: "+ propertiesRequired[property]);
      // throw new Error("Propiedad requerida faltante: "+ propertiesRequired[property]);
      errors["required"][propertiesRequired[property]]="Propiedad requerida";
      requiredErrors=true;
    }
  }

  for(var property in propertiesNames)
  {
    // Si la propiedad no existe en el body request, significa que es opcional y en este caso no
    // esta contenida en el body, por lo tanto se omite su validacion
    if(bodyreq[property] == null)
    {
      continue;
    }



    var type= typeof(bodyreq[property]);
    var typeDefinition= propertiesNames[property].type;
    var formtatDefinition= propertiesNames[property].format;

    //agregar validación de tipos de dato integer, float, number
    if(typeDefinition=="integer")
    {
      typeDefinition="number"
    }
    // Comparar el tipo de dato que sea correcto, Solo aplica para las propiedades simples
    if( type != "object")
    {
      typeValidation(bodyreq[property], propertiesNames[property], property, errors);
      // if(type != typeDefinition)
      // {
      //   throw new Error ("Error de tipo de dato en la propiedad "+ property+ ", se esperaba " + typeDefinition +" y se recibio "+ type);
      // }
      // else {
      //   console.log("Propiedad validada con exito: "+property);
      // }
    }// Comparar el tipo de dato de las propiedades internas de los objetos compuestos
    else
    {


        var innerPropertiesBody= bodyreq[property];
        var requiredInner= propertiesNames[property].required;
        var innerPropertiesDef= propertiesNames[property].properties;
        // Revisar que las propiedades internas esten completas
        for(var p in requiredInner)
        {
          if(innerPropertiesBody[requiredInner[p]] == null)
          {
            // throw new Error("Propiedad requerida faltante en "+ property+"."+requiredInner[p]);
            errors["required"][requiredInner[p]]="Propiedad requerida";
            requiredErrors=true;
          }
        }
        if(requiredErrors==true)
        {
          res.send(errors,202);
          return;
        }
        console.log("Validacion de propiedades requeridas EXITOSA: Objeto->"+ property);
        //Revisar que se cumplan los tipos de dato de las propiedades internas
        for(var proper in innerPropertiesDef)
        {
          // console.log("Test...............................");
          // console.log(proper);

          // Si la propiedad no existe en el body request, significa que es opcional y en este caso no
          // esta contenida en el body, por lo tanto se omite su validacion
          if(bodyreq[property][proper] == null)
          {
            continue;
          }


          typeValidation(bodyreq[property][proper], propertiesNames[property].properties[proper], proper,errors)

          // var innerTypeBody= typeof(bodyreq[property][proper]);
          // var innerTypeDefinition= propertiesNames[property].properties[proper].type;
          // if(innerTypeDefinition=="integer")
          // {
          //   type="number"
          // }
          // if(innerTypeBody != innerTypeDefinition)
          // {
          //   throw new Error ("Error de tipo de dato en la propiedad "+ property+ "." +proper + ", se esperaba " + innerTypeDefinition +" y se recibio "+ innerTypeBody);
          // }
          // else {
          //   console.log("Propiedad validada con exito: " + property+ "."+proper);
          // }


        }


    }
    // console.log("Propiedad "+ property + " de tipo " + type );

  }

  console.log("-------------FIN VALIDACION-----------");
  console.log("*******************************************************************");
  res.status(200).send(errors);

});



app.get('/index', function(req, res)
{
  res.sendfile(__dirname + '/public/index.html');
});
// escuchars
app.listen(port);
console.log("Servidor Express escuchando en modo %s", app.settings.env);
console.log("Esta ruta se accede a postman para hacer las peticiones con esta ruta :" + "http://localhost:9090/consultaDatosBasicos");
