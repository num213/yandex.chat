'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = process.env.HOST || '127.0.0.1';

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(PORT, HOST);
console.log('process.env', process.env);
console.log(`Running on http://${HOST}:${PORT}`);