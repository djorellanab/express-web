const http = require('http');
const config = require('./config/config');

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type':'application/json'});

    let salida = {
        nombre: 'diego',
        edad: 22,
        url: req.url
    };

    res.write(JSON.stringify(salida));
    //res.write("Hola mundo");
    res.end();
})
.listen(config.port);

console.log(`Escuchando el puerto ${config.port}`);