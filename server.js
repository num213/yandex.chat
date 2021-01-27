'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;
const HOST = process.env.HOST || '127.0.0.1';

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.get('/readme', function(req, res) {
	res.sendFile(path.join(__dirname + '/README.md'));
});
app.get('/login', function(req, res) {
	res.sendFile(path.join(__dirname + '/static/login.html'));
});
app.get('/register', function(req, res) {
	res.sendFile(path.join(__dirname + '/static/register.html'));
});
app.get('/chats', function(req, res) {
	res.sendFile(path.join(__dirname + '/static/chats.html'));
});
app.get('/chats-select', function(req, res) {
	res.sendFile(path.join(__dirname + '/static/chats-no-selected.html'));
});
app.get('/profile', function(req, res) {
	res.sendFile(path.join(__dirname + '/static/profile.html'));
});
app.get('/profile/update', function(req, res) {
	res.sendFile(path.join(__dirname + '/static/profile-update.html'));
});
app.get('/profile/password', function(req, res) {
	res.sendFile(path.join(__dirname + '/static/profile-password.html'));
});

app.use(express.static(__dirname + '/'));
app.listen(PORT, HOST);