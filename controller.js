const stats = require('./stats')
const db = require('./db')

module.exports = {	
	async getHours(from, to) {
		let employees = await db.getEmployeeTotalsInInterval(from, to)
		employees.forEach((employee) => {
			employee.hours = stats.calculateHours(employee.stamps)
			
		})
		return employees
	},
	async getTodaysStats() {},
	async getPersonalStats(id) {}
}
