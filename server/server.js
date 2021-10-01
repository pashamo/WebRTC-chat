const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on("connection", socket => {
    console.log(`${socket.id} has connected`);

    socket.on("message", message => {
        console.log(message);
        io.emit('message', `${socket.id} said ${message}`);
    })
})

http.listen(8000, () => console.log('listening on port 8000'));


//Vanilla WebSocket example
// const WebSocket = require('ws');
// const server = new WebSocket.Server({ port: 8000 });

// server.on("connection", socket => {

//     socket.on("message", message => {
//         socket.send(`Message received from client: ${message}`);
//     });

// });