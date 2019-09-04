const {Builder, By} = require('selenium-webdriver')
const firefox = require('selenium-webdriver/firefox')

const driver = new Builder()
	.forBrowser('firefox')
	.setFirefoxOptions(new firefox.Options().headless())
	.build()

test('Startpage has app element', async () => {
	driver.get('localhost:8080')
	await expect(driver.findElement(By.id('app'))
		.getTagName()).resolves.toBe('div')
})

test('/today page lists all employees', async () => {
	driver.get('localhost:8080/today')
	const elements = await driver.findElement(By.id('app'))
		.findElements(By.className('employee'))
	expect(elements).toHaveLength(3)
		
})

afterAll(async () => {
	driver.quit()
})

