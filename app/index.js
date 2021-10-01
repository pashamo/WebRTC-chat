const socket = io('ws://localhost:8000');

socket.on("message", message => {
    let messages = document.querySelector('#messages');
    let newLI = document.createElement('li');
    let content = document.createTextNode(message);
    newLI.appendChild(content);
    messages.appendChild(newLI);
});

document.querySelector("#buhhum").onclick = () => {
    let message = document.querySelector('#message-input').value;
    socket.emit('message', message);
}



//Vanilla WebSocket example
// const socket = new WebSocket('ws://localhost:8000');

// socket.onmessage = ({data}) => {
//     console.log(`Message received by server ${data}`);
//     printData(data);
// };

// document.querySelector('#buhhum').onclick = () => {
//     console.log('Button clicked');
//     socket.send('10-4');
// };

// printData = data => {
//     let messages = document.querySelector('#messages');
//     let newLI = document.createElement('li');
//     let content = document.createTextNode(data);
//     newLI.appendChild(content);
//     messages.appendChild(newLI);
// };
