const db = require('../../db')
jest.mock('cfenv')
jest.mock('@cloudant/cloudant')

describe('Employee DAO', () => {
	test('Returns all instances of employee', async () => {
		let emps = await db.getEmployees()
		expect(emps).toBeDefined()
		expect(emps).toBeInstanceOf(Array)
	})
        test.each([0,1,2,3])('Returns the instance of employee with id %d', async (id) => {
		let emp = await db.getEmployeeById(id)
		expect(emp).toBeDefined()
		expect(emp.id).toBeDefined()
		expect(emp.name).toBeDefined()
        })
	test('Returns a list of employees and total times', async () => {
		const totals = await db.getEmployeeTotalsInInterval(8, 16) 
		expect(totals).toBeDefined()
	})
})
describe('Timestamp DAO', () => {
        test.each([[0,23],[8,11],[4,9]])('Returns all timestamps in the given interval %d to %d', async (from, to) => {
		let stamps = await db.getStampsInInterval(from, to)
		expect(stamps).toBeDefined()
		expect(stamps).toBeInstanceOf(Array)
        })
        test.each([0,1,2,3])('Returns all timestamps with id %d', async (id) => {
		let stamps = await db.getStampsById(id)
		expect(stamps).toBeDefined()
		expect(stamps).toBeInstanceOf(Array)
        })
})
