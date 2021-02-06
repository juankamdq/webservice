//#region HTTP 

/*
Este codigo es relativamente grande, es complicado. Y si quiero hacer mas de una peticion o quiero mostrar contenido
HTTP y evitar realizar todo el codigo de arriba, existe un paquete de terceros llamado "EXPRESS". 

*/


const http = require('http');


//Para escuchar peticiones http crearemos el servidor
http.createServer((req, res) => { //req: obtener solicitudes, res: respuesta a enviar al usuario


    //Envio informacion al head de que tipo de aplicacion se va a tratar
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const salida = {
        nombre: 'juan',
        apellido: 'nose',
        //req.url: obtengo la url pasada por parametro
        url: req.url
    }
    res.write(JSON.stringify(salida));
    //Indicamos que finalice la respuesta
    res.end();

}).listen(8080);

console.log('Escuchando el puerto 8080');