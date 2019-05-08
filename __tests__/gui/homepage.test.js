const {Builder, By} = require('selenium-webdriver')

const driver = new Builder()
	.forBrowser('chrome')
	.build()

test('Startpage has app', async () => {
	driver.get('localhost:8080')
	let el = await driver.findElement(By.id('app'))
	let name = await el.getTagName()
	expect(name).toBe('div')
	await driver.quit()
})

afterAll(() => {
	driver.quit()
})
