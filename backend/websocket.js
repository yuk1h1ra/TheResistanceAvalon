const http = require('http');

const websocket = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/json'});
    res.end('server connected');
});

var io = require('socket.io').listen(websocket);

websocket.listen(8080);

io.sockets.on('connection', function(socket) {
    console.log('connected');
});
