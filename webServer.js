/**
 * Created by zirak on 6/9/2016.
 */

// Okay so I have an HTML file which my server needs to serve

const http = require('http')
const jade = require('jade')
const fs = require('fs')
const EIGHTK = 8000;
const express = require('express')
var router = express.Router();
var path = __dirname + '/views/';

const app = express()
app.set('views','./views');
app.set('view engine', 'jade')


app.get('/', (request, response) => {
    "use strict";
    response.render('index', {
        title: 'Welcome'
    })

});


app.get('/projects', function(req, res ) {
    res.render('project');
});

app.get('/home', function(req, res ) {
    res.render('index');
});

app.get('/misc', function(req, res ) {
    res.send('Coming Soon!');
});


app.get('/resume', function(req, res ) {
    res.render('index');
});

// app.use((req, res) => {
//     "use strict";
//     var data = '<h1>hello world</h1>'
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end(data)
// })
app.use(express.static(__dirname + '/public'));

// const io = require('socket.io').listen(app.listen(EIGHTK));

// io.on('connection', (socket) => {
//     "use strict";
//     // socket.on('send', (data) => {
//     //     socket.emit('message', 'afdfasgf')
//     // })
// })