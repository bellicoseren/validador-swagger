// importar
var validador = require('./src/validateModel');
var bodyParser = require('body-parser');
var express = require('express');
var swagger = require('./swagger.json');
let modelo = require('./modelo');
var port = process.env.VALIDADORPUERTO
// instanciar
var app = express();
app.use(bodyParser());
// ruteo
app.post('/:path', function(req, res)
{
  //console.log("Validadaor de cabeceras:  "+req.getHeaders('Content-Type', 'text/plain'));
  var data = swagger.paths[req.path].post.parameters;
  console.log("Valor que viene del Path: " + req.path);
  var listaDeRequeridos = data[0].schema.required;
  var cuerpoPeticion = req.body;
  if(data[0].schema.required == undefined)
  {}
  else
  {
    try
    {
      for(var valorDecampoDeRequeridos in listaDeRequeridos)
      {
        var campoRequeridosDeSwagger = listaDeRequeridos[valorDecampoDeRequeridos];
        if(req.body[campoRequeridosDeSwagger] == undefined)
        {
          throw new Error("El campo: " + campoRequeridosDeSwagger + " Esta mal escrito");
        }
        else
        {
          var tipoDeDatoDeSwagger = data[0].schema.properties[campoRequeridosDeSwagger].type;
          var Swagger = data[0].schema.properties[campoRequeridosDeSwagger];
          //Saber si el campo es objeto o array
          if(typeof(cuerpoPeticion[campoRequeridosDeSwagger]) == "object" || typeof(cuerpoPeticion[campoRequeridosDeSwagger]) == undefined)
          {
            var tieneListar = cuerpoPeticion[campoRequeridosDeSwagger].length >= 1 ? true : false;
            //Verifica si es lista

            if(tieneListar)
            {
              for(var variable in cuerpoPeticion[campoRequeridosDeSwagger])
              {
                for(var campoDelBody in cuerpoPeticion[campoRequeridosDeSwagger][variable])
                {
                  if(data[0].schema.properties[campoRequeridosDeSwagger].items.properties[campoDelBody] == undefined)
                  {
                    throw new Error("El campo: " + campoDelBody + " Esta mal escrito");
                  }
                  else
                  {
                    var tipoDeDatoEnArray = data[0].schema.properties[campoRequeridosDeSwagger].items.properties[campoDelBody].type;
                    var existeUnRequiere = data[0].schema.properties[campoRequeridosDeSwagger].items.required;
                    if(cuerpoPeticion[campoRequeridosDeSwagger][variable][campoDelBody] == "" || cuerpoPeticion[campoRequeridosDeSwagger][variable][campoDelBody] == null)
                    {
                      throw new Error("El campo: " + campoDelBody + " No puede ir vacio ");
                    }
                    else
                    {
                      var tipoFloat=Number.isInteger(cuerpoPeticion[campoRequeridosDeSwagger][variable][campoDelBody]);

                      if(tipoFloat==true){
                          var cambioDeNombre=(typeof(cuerpoPeticion[campoRequeridosDeSwagger][variable][campoDelBody])=="number")?"integer":false;

                          var isInteger=(tipoDeDatoEnArray == cambioDeNombre)?true:false;
                          if(isInteger){
                          }else {
                          throw  new Error("El campo: " + campoDelBody + " Espera un tipo de dato " + tipoDeDatoEnArray);
                          }

                      }else {
                        //Validacion con number que es flotante

                        if(JSON.stringify(tipoDeDatoEnArray) == JSON.stringify(typeof(cuerpoPeticion[campoRequeridosDeSwagger][variable][campoDelBody])))
                        {}
                        else
                        {
                          throw new Error("El campo: " + campoDelBody + " Espera un tipo de dato " + tipoDeDatoEnArray);
                        }
                      }
                      }
                  }
                }
              }
            }//Termina si es listaDirecciones

            else
            {
              for(var camposReqXTipoDato in cuerpoPeticion[campoRequeridosDeSwagger])
              {
                if(Swagger.properties[camposReqXTipoDato] == undefined)
                {
                  throw new Error("El campo :" + camposReqXTipoDato + " esta mal escrito");
                }
                else
                {
                  //Este if es para cuando el campo viene vacio

                  if(cuerpoPeticion[campoRequeridosDeSwagger][camposReqXTipoDato] == "" || cuerpoPeticion[campoRequeridosDeSwagger] == null)
                  {
                    throw new Error("El Campo :" + camposReqXTipoDato + " no puede venir vacio:");
                  }
                  //Termina la validacion si el tipo de dato viene vacio
                  else
                  {
                    if(typeof(cuerpoPeticion[campoRequeridosDeSwagger][
                        camposReqXTipoDato
                      ]) == Swagger.properties[camposReqXTipoDato].type)
                    {
                      var validaTamañoMin = data[0].schema.properties[campoRequeridosDeSwagger].minLength;
                      var validaTamañoMax = data[0].schema.properties[campoRequeridosDeSwagger].maxLength;
                      var contieneTamaño = (validaTamañoMin == undefined ? false : true)
                      if(contieneTamaño)
                      {
                        if(validaTamañoMax == undefined)
                        {
                          var minCampo = (validaTamañoMin <= JSON.stringify(parseInt(cuerpoPeticion[campoRequeridosDeSwagger])).length) ? true : false;
                          if(minCampo != true)
                          {
                            throw new Error("Campo " + campoRequeridosDeSwagger + " su tamaño requerido es:" + validaTamañoMin + " y su maximo es:" +
                              validaTamañoMax);
                          }
                        }
                        else
                        {
                          var minCampo = (validaTamañoMin <= JSON.stringify(parseInt(cuerpoPeticion[campoRequeridosDeSwagger])).length && validaTamañoMax >=
                            JSON.stringify(parseInt(cuerpoPeticion[campoRequeridosDeSwagger])).length) ? true : false;
                          if(minCampo != true)
                          {
                            throw new Error("Campo " + campoRequeridosDeSwagger + " su tamaño requerido minimo es:" + validaTamañoMin + " y su maximo es:" +
                              validaTamañoMax);
                          }
                        }
                      }
                    }
                    else
                    {
                      throw new Error("El tipo de dato de : " + camposReqXTipoDato + " es incorrecto esperaba un: " + Swagger.properties[camposReqXTipoDato]
                        .type);
                    }
                  }
                } //Termina la validacion de si esta bien escrito el campo
              }
            }
          } //Termina la validacion de campos con objeto o array
          else
          { //Comienza los campos que viene normal
            if(cuerpoPeticion[campoRequeridosDeSwagger] == "" || cuerpoPeticion[campoRequeridosDeSwagger] == null)
            {
              throw new Error("El Campo :" + campoRequeridosDeSwagger + " no puede venir vacio:");
            }
            else
            {
                var isFloat=Number.isInteger(cuerpoPeticion[campoRequeridosDeSwagger]);
                if(isFloat==true){
                    var cambioDeNombre=(typeof(cuerpoPeticion[campoRequeridosDeSwagger])=="number")?"integer":false;
                            if(cambioDeNombre == tipoDeDatoDeSwagger)
                            {
                              var conversionDeDatos = (tipoDeDatoDeSwagger == "integer") ? true : false;
                              var validaTamañoMin = data[0].schema.properties[campoRequeridosDeSwagger].minLength;
                              var validaTamañoMax = data[0].schema.properties[campoRequeridosDeSwagger].maxLength;
                              var contieneTamaño = (validaTamañoMin == undefined ? false : true)
                              if(contieneTamaño)
                              {
                                if(validaTamañoMax == undefined)
                                {
                                  var minCampo = (validaTamañoMin <= JSON.stringify(parseInt(cuerpoPeticion[campoRequeridosDeSwagger])).length) ? true : false;
                                  if(minCampo != true)
                                  {
                                    throw new Error("Campo " + campoRequeridosDeSwagger + " su tamaño requerido es:" + validaTamañoMin + " y su maximo es:" +
                                      validaTamañoMax);
                                  }
                                }
                                else
                                {
                                  var minCampo = (validaTamañoMin <= JSON.stringify(parseInt(cuerpoPeticion[campoRequeridosDeSwagger])).length && validaTamañoMax >= JSON
                                    .stringify(parseInt(cuerpoPeticion[campoRequeridosDeSwagger])).length) ? true : false;
                                  if(minCampo != true)
                                  {
                                    throw new Error("Campo " + campoRequeridosDeSwagger + " su tamaño requerido minimo es:" + validaTamañoMin + " y su maximo es:" +
                                      validaTamañoMax);
                                  }
                                }
                              }
                            }
                          else
                          {
                            throw new Error("El tipo de dato de :" + campoRequeridosDeSwagger + " no es correcto esperaba un:" + tipoDeDatoDeSwagger);
                          }
                }else {
                        if(typeof(cuerpoPeticion[campoRequeridosDeSwagger]) == tipoDeDatoDeSwagger)
                        {
                          var conversionDeDatos = (tipoDeDatoDeSwagger == "integer") ? true : false;
                          var validaTamañoMin = data[0].schema.properties[campoRequeridosDeSwagger].minLength;
                          var validaTamañoMax = data[0].schema.properties[campoRequeridosDeSwagger].maxLength;
                          var contieneTamaño = (validaTamañoMin == undefined ? false : true)
                          if(contieneTamaño)
                          {
                            if(validaTamañoMax == undefined)
                            {
                              var minCampo = (validaTamañoMin <= JSON.stringify(parseInt(cuerpoPeticion[campoRequeridosDeSwagger])).length) ? true : false;
                              if(minCampo != true)
                              {
                                throw new Error("Campo " + campoRequeridosDeSwagger + " su tamaño requerido es:" + validaTamañoMin + " y su maximo es:" +
                                  validaTamañoMax);
                              }
                            }
                            else
                            {
                              var minCampo = (validaTamañoMin <= JSON.stringify(parseInt(cuerpoPeticion[campoRequeridosDeSwagger])).length && validaTamañoMax >= JSON
                                .stringify(parseInt(cuerpoPeticion[campoRequeridosDeSwagger])).length) ? true : false;
                              if(minCampo != true)
                              {
                                throw new Error("Campo " + campoRequeridosDeSwagger + " su tamaño requerido minimo es:" + validaTamañoMin + " y su maximo es:" +
                                  validaTamañoMax);
                              }
                            }
                          }
                        }
                      else
                      {
                        throw new Error("El tipo de dato de :" + campoRequeridosDeSwagger + " no es correcto esperaba un:" + tipoDeDatoDeSwagger);
                      }
                }



            }
          } //Termina los campos que viene normal
        }
      }
    }
    catch(e)
    {
      mensaje_error = JSON.parse("{\"Error\":\"" + e.message + "\"}")
      res.status(403).send(mensaje_error);
    }
    if(res.statusMessage != "Forbidden")
    {
      var pathFinal = req.path.substring(1);
      var respuesta = modelo.obtenerModelo(pathFinal);
      res.send(respuesta);
    }
  }
});
app.get('/index', function(req, res)
{
  res.sendfile(__dirname + '/public/index.html');
});
// escuchars
app.listen(port);
console.log("Servidor Express escuchando en modo %s", app.settings.env);
console.log("Esta ruta se accede a postman para hacer las peticiones con esta ruta :" + "http://localhost:9090/consultaDatosBasicos");
