module.exports = {
	getEmployees: (cb) => {
		cb(employees)
	},
	getEmployeeById: (id, cb) => {
		let employee = employees.find((empl) => empl.id == id)
		cb(employee)
	},
	getStampsInInterval: (from, to) => {},
	getStampsById: (id) => {},
}
