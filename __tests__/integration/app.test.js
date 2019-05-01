const request = require('supertest')

const app = require('../../app')
const controller = require('../../controller')

jest.mock('../../controller')
controller.getHours.mockImplementation((from,to) => {})
describe('HTTP interface endpoints', () => {
	describe('GET /hours', () => {
		test('returns error code with no query params', async () => {
			let response = await request(app).get('/hours')
			expect(response.statusCode).toBe(400)
		})
		test('returns 200 on valid query params', async () => {
			let response = await request(app).get('/hours?from="2011-04-15"&to="2012-05-12"')
			expect(response.statusCode).toBe(200)
		})
	})
	test.todo('GET /today')
	test.todo('GET /employee/:id/stats')
})

