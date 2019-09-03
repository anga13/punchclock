const Cloudant = require('@cloudant/cloudant')
const cfenv = require('cfenv')
const logger = require('pino')()

const cloudant = initDB()

function initDB() {
    let vcapLocal

    try {
        vcapLocal = require('./vcap-local.json')
        //console.log('Loaded local VCAP', vcapLocal)
    } catch (e) {
        // No-op
    }

    const appEnvOpts = vcapLocal ? { vcap: vcapLocal} : {}

    const appEnv = cfenv.getAppEnv(appEnvOpts)

    // Initialize database with credentials for CF service named 'cloudantNoSQLDB'
    const credentials = appEnv.services.cloudantNoSQLDB[0].credentials
    return Cloudant(credentials.url)
}

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
		let [employees, totals] = await Promise.all([employeeDb.list(), stampDb.list()])
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
