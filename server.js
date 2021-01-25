'use strict';

const express = require('express');
const path = require('path');
const PORT = 8080;
const HOST = process.env.HOST || '127.0.0.1';
const app = express();

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/login', function(req, res){
	res.sendFile(path.join(__dirname + '/login.html'));
});
app.get('/register', function(req, res){
	res.sendFile(path.join(__dirname + '/register.html'));
});
app.get('/chats', function(req, res){
	res.sendFile(path.join(__dirname + '/chats.html'));
});

app.use(express.static(__dirname + '/'));
app.listen(PORT, HOST);