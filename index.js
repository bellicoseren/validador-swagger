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
// ruteo
app.post('/:path', function(req, res)
{
  //console.log("Validadaor de cabeceras:  "+req.getHeaders('Content-Type', 'text/plain'));
  // console.log(req);
  var path= swagger.paths[req.originalUrl];
  if(path == null)
  {
    throw new Error("No existe la deficion en Swagger para validar el path: "+ req.originalUrl);
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
  for(var property in propertiesRequired )
  {
    if( bodyreq[propertiesRequired[property]] == null )
    {
      console.log("Error: Propiedad requerida faltante: "+ propertiesRequired[property]);
      throw new Error("Propiedad requerida faltante: "+ propertiesRequired[property]);
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
    //agregar validación de tipos de dato integer, float, number
    if(typeDefinition=="integer")
    {
      typeDefinition="number"
    }
    // Comparar el tipo de dato que sea correcto, Solo aplica para las propiedades simples
    if( type != "object")
    {
      if(type != typeDefinition)
      {
        throw new Error ("Error de tipo de dato en la propiedad "+ property+ ", se esperaba " + typeDefinition +" y se recibio "+ type);
      }
      else {
        console.log("Propiedad validada con exito: "+property);
      }
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
            throw new Error("Propiedad requerida faltante en "+ property+"."+requiredInner[p]);
          }
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
          var innerTypeBody= typeof(bodyreq[property][proper]);
          var innerTypeDefinition= propertiesNames[property].properties[proper].type;
          if(innerTypeDefinition=="integer")
          {
            type="number"
          }
          if(innerTypeBody != innerTypeDefinition)
          {
            throw new Error ("Error de tipo de dato en la propiedad "+ property+ "." +proper + ", se esperaba " + innerTypeDefinition +" y se recibio "+ innerTypeBody);
          }
          else {
            console.log("Propiedad validada con exito: " + property+ "."+proper);
          }
        }


    }
    // console.log("Propiedad "+ property + " de tipo " + type );

  }

  console.log("-------------FIN VALIDACION-----------");
  console.log("*******************************************************************");
  res.send({ status: "OK"});

});



app.get('/index', function(req, res)
{
  res.sendfile(__dirname + '/public/index.html');
});
// escuchars
app.listen(port);
console.log("Servidor Express escuchando en modo %s", app.settings.env);
console.log("Esta ruta se accede a postman para hacer las peticiones con esta ruta :" + "http://localhost:9090/consultaDatosBasicos");
