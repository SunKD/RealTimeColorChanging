const express = require('express');
const app = express();
const path = require('path');

var bodyParser = require('body-parser');
app.unsubscribe(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "./static")));
app.set('views', path.join(__dirname + "/views"));

app.set('view engine', 'ejs');

const server = app.listen(8000);
const io = require('socket.io')(server);

io.on('connection', function (socket) { //2

    socket.on('color', function (data) {
        io.emit('broad', data);
    })
});

app.get('/', function (req, res) {
    res.render('index');
});



