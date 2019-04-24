const express = require('express');
const controller = require('./controller');

const app = express();

const PORT = 8080;

app.use(express.static('public'));

app.get('/hours', (req, res) => {
	let timeData = controller.getHours(from, to)
	res.json(timeData)
})
.get('/today', (req, res) => {
	let statsToday = controller.getTodaysStats()
	res.json(statsToday)
})
.get('/employee/:id/stats', (req, res) => {
	let personalStats = controller.getPersonalStats(req.params.id)
	res.json(personalStats)

})

app.listen(PORT, () => {
	console.log(`Listening on port #${PORT}`);
});
