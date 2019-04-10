const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// connects the user in a specific room
io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
});

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-g5z0l.mongodb.net/omnistack?retryWrites=true', {
    useNewUrlParser: true
});

app.use((req, res) => {
    req.io = io;

    return next();
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(require('./routes'));

app.listen(3232);