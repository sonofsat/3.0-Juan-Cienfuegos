const net = require('net');
const strftime = require("strftime");

const server = net.createServer(function (socket) {
    
    const date = strftime('%Y-%m-%d %H:%M');
    socket.end(date + '\n');
});

server.listen(Number(process.argv[2]));
