const express = require('express')
const controller = require('./controller')

const app = express()

app.use(express.static('public'))

app.get('/hours', (req, res) => {
	if(!(req.query.from && req.query.to)){
		res.status(400).json({error: 'Request need to pass query params from and to'})
	} else {
		controller.getHours(req.query.from, req.query.to).then(timeData => {
			res.json(timeData)
		})
	}
})
.get('/today', (req, res) => {
	controller.getTodaysStats().then(statsToday => { 
		res.json(statsToday)
	})
})
.get('/employee/:id/stats', (req, res) => {
	controller.getPersonalStats(req.params.id).then(personalStats => { 
		res.json(personalStats)
	}).catch(e => {
		res.status(404).json({error: e})
	})
})

module.exports = app

