const express = require('express');
const hbs = require('hbs');
const app = express();

//Solo hacemos el llamado para ejecutarlo directamente
require('./hbs/helpers');


//process es variable global. env.PORT corriendo localmente no va a existir. Es para la config de Heroku
//Si localmente no existe usara el puerto 3000 que es localmente
const port = process.env.PORT || 3000;


/*
Que pasa si queres desplegar una pagina web, una aplicacion web, cualquier cosa, utilizando
un Web Server montado en 'express'?. 
. Tenemos que crear el folder public. que es lo que se va a mostrar a cualquier usuario. Puede ser .html. css. json, etc. Ej: index.html
. A traves de un Middleware (instruccion o un callback que se va a ejecutar siempre, no importa que url el usuario pida) app.use.
*/


// __dirname: indica la ruta absoluta del directorio
app.use(express.static(__dirname + '/public') /* express.static: Especificamos ubicacion public y statica */ )


//Los partiales es un bloque de codigo html que podremos reutilizar. En este caso crearemos un folder que contengan todos los parciales.
hbs.registerPartials(__dirname + '/views/partials')




//npm i --save hbs. Express HBS engine render
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    /*Tendremos que crear la carpeta views y colocar los documentos .hbs. 
    El res.render() leera el documento a renderizar en dicha carpeta por defecto
    */
    res.render('home', {
        //Enviamos en un objeto variables para que sean interpoladas
        nombre: 'juan carlos javier bugallo',
        //anio: new Date().getFullYear() //Con el Helper solucionamos esto
    });

})


app.get('/about', function(req, res) {
    res.render('about', {
        //anio: new Date().getFullYear() //Con el Helper solucionamos esto
    });
})

app.get('/data', (req, res) => {

    /* res.send('Hello World'); */
    const salida = {
        nombre: 'juan',
        apellido: 'nose',
        //req.url: obtengo la url pasada por parametro
        url: req.url
    }

    //Automaticamente res.send detecta que es un objeto, lo serializara con JSON.stringify y lo muestra 
    res.send(salida);
    //en app-old.js teniamos que indicar en el Content-Type que era un application/json. Con express no es necesario

});

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});