const cloudant = {
	use(dbName) {
		if (dbName === 'employees') {
			return employeeDB
		} else if (dbName ==='stamps') {
			return stampDB
		} else throw 'Invalid DB'
	}
}

const employeeDB = {
	async get(id) {
		return employeeData[id]
	},
	async list() {
		return employeeData
	}
}

const stampDB = {
	async list() {
		return stampData
	}
}

const getEmployeeById = (id) => {
	let found = employeeData.find(employee => employee.id === id)
	return found
}


const getStampsInInterval = (from, to) => {
	let returned = stampData.filter(stamp => ((stamp.time >= from) || (stamp.time <= to)))
	return returned
}

const getStampsById = (id) => {
	let found = stampData.filter(stamp => stamp.id === id)
	return found
}


const employeeData = [
	{id:0, name:"Fred Flintstone"},
	{id:1, name:"Barney Rubble"},
	{id:2, name:"Mister Kill"},
	{id:3, name:"Muscles McBoulder"}
]

const stampData = [
	{id:0, in:true, time:9},
	{id:0, in:false, time:11},
	{id:0, in:true, time:13},
	{id:1, in:true, time:8},
	{id:1, in:false, time:11},
	{id:1, in:true, time:13},
	{id:2, in:true, time:9},
	{id:2, in:false, time:12},
	{id:3, in:true, time:8}
]

module.exports = (data) => cloudant
