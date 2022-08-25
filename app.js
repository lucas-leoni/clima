const app = require('./config/server');

const servidor = app.listen(3000, () => {
  console.log('app rodando => http://localhost:3000');
});

const io = require('socket.io')(servidor)

app.set('io', io);

io.on('connection', (socket) => {
  console.log('Conectei');

  socket.on('disconnect', () => {
    console.log('Desconectei');
  });

  /* socket.on('msgParaServidor', (data) => {
    socket.emit('msgParaCliente', {
      apelido: data.apelido,
      mensagem: data.mensagem,
    });
  });

  socket.broadcast.emit('msgParaCliente', {
    apelido: data.apelido,
    mensagem: data.mensagem,
  }); */
});