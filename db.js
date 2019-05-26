const cloudant = {
	use(s){
		return {get(a,b){}}
	}
}

module.exports = {
	async getEmployees() {
		return [...employees]
	},
	async getEmployeeById(id) {
		const index = id
		return employees[index]
	},
	async getEmployeeTotalsInInterval(from, to) {
		let employees = [...employees]
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
