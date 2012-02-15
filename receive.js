var net = require('net');

var server = net.createServer(function (sock) {
  sock.write("Echo server\r\n");
  //socket.pipe(socket);


   // Add a 'data' event handler to this instance of socket
      sock.on('data', function(data) {
          
          console.log('DATA ' + sock.remoteAddress + ': ' + data);
          // Write the data back to the socket, the client will receive it as data from the server
          sock.write('You said "' + data + '"');
          
      });

});

server.listen(1337, "127.0.0.1");

