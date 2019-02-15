let {server} = require('./config/server');

server.listen(3443, function(){
    console.log('SERVIDOR HTTPS EXECUTANDO NA PORTA '.concat(3443));
});