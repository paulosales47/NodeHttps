let express = require('express');
let bodyParser = require('body-parser');
let consign = require('consign');
let fs = require('fs');
let https = require('https');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(requisicao, resposta, next){
    resposta.setHeader('Access-Control-Allow-Origin', '*');
    resposta.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    resposta.setHeader('Access-Control-Allow-Headers', 'content-type');
    resposta.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


let server = https.createServer({
    key: fs.readFileSync('./config/server.key'),
    cert: fs.readFileSync('./config/server.cert')
}, app)


module.exports.app = app;
module.exports.server = server;



