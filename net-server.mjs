import net from 'net';

const netServer = net.createServer(function (client) {
    console.info("Client connected");
    client.on('data', function (data) {
        console.info(`${new Date()} Received data from: ${data.toString()}`);
        client.write(`Hello ${data.toString()}\r\n`);
    })
});

netServer.listen(3000,"localhost");