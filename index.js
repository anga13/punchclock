const db = require('./db');
const express = require('express');
const stats = require('./stats');

const app = express();

const PORT = 8080;

app.use(express.static('public'));

app.get('/hours', (req, res) => {})
.get('/today', (req, res) => {})
.get('/employee/:id/stats', (req, res) => {})

app.listen(PORT, () => {
	console.log(`Listening on port #${PORT}`);
});
