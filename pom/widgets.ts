import { Locator, Page } from "@playwright/test";
import datas from "../datas/locators.json"



export default class Widgets {
    private page: Page
    private widghet: Locator
    private accordianes: Locator
    private text_Accordians: Locator
    private textConsolLocator: Locator



    constructor(page: Page) {
        this.page = page
        this.widghet = this.page.locator(datas.Locator.widghet)
        this.accordianes = this.page.locator(datas.Locator.accordian)
        this.text_Accordians = this.page.locator(datas.Locator.text_Accordian)
        this.textConsolLocator = this.page.locator("//div[@id='section2Content']")





    }

    async widghets() {
        await this.widghet.click()
    }
    async accordians() {
        await this.accordianes.click()
        await this.text_Accordians.click()
    }

    async text_Consol() {
        let textConsol: string | null
        textConsol = await this.textConsolLocator.textContent()

        console.log("affiche moi le text : ",textConsol)

    }



































}