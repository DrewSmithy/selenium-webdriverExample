const chromedriver = require('chromedriver')
const { Builder, Capabilities } = require('selenium-webdriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("My Test's Name", async () => {
    await driver.get('https://www.google.com/')
    
    let searchBar = await driver.findElement(By.css('input[name="q"]'))

    await searchBar.sendKeys('LOTR\n')

    await driver.sleep()
    
    await driver.quit()
})