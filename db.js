require('dotenv').config()

const Cloudant = require('@cloudant/cloudant')

const password = process.env.cloudant_password
const account = process.env.cloudant_username

const cloudant = Cloudant({account, password})


module.exports = {
	async getEmployees() {
		const db = cloudant.use('employees')
		return db.list()
	},
	async getEmployeeById(id) {
		const db = cloudant.use('employees')
		return db.get(id)
	},
	async getEmployeeTotalsInInterval(from, to) {
		const employeeDb = cloudant.use('employees')
		const stampDb = cloudant.use('stamps')
		let [employees, totals] = await Promise.all(employeeDb.list(), stampDb.list())
		return employees.map((empl, index) => {
			empl.hours = totals[index]
			return empl
		})

	},
	async getStampsInInterval(from, to) {
		return [...totals]
	},
	async getStampsById(id) {
		return [...totals]
	}
}

const totals = [8, 9, 44]
const employees = [
	{
		id: 0,
		name: 'Fred'
	}, {
		id: 1,
		name: 'Barney'
	}, {
		id: 2,
		name: 'Wilma'
	}, {
		id: 3,
		name: 'Betty'
	}
]
