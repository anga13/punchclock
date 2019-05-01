const cloudant = require('cloudant')

module.exports = {
	getEmployees(cb) {
		let employeeDB = cloudant.use('Employee')
		employeeDB.get(cb(err, data))
	},
	getEmployeeById(id, cb) {
		let employeeDB = cloudant.use('Employee')
		employeeDB.get(id, cb(err, data))
	},
	getEmployeeTotalsInInterval(from, to) {
		let employeeDB = cloudant.use('Employee')
	},
	getStampsInInterval(from, to) {
		let stampDB = cloudant.use('Stamp')
		stampDB.get(cb(err,data))
	},
	getStampsById(id) {
		let stampDB = cloudant.use('Stamp')
		stampDB.get(id, cb(err,data))
	}
}

