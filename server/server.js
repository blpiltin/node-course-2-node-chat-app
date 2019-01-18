require('./config/config');

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const PUBLIC_PATH = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(PUBLIC_PATH));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'who@ever.com',
    text: 'Hey, how are you?',
    createdAt: new Date()
  });

  socket.on('createMessage', (msg) => {
    console.log('Message created', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
