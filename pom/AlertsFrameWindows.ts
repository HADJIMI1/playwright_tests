import { Locator, Page } from "@playwright/test";
import datas from "../datas/locators.json"


export default class AlertsFrameWindows {


    private page: Page
    private alertsframewindows: Locator
    private alertsElementClick: Locator
    private clickMePromo: Locator
    private modalDialog: Locator
    private showLargeModals: Locator
    private largeMonidialTexts: Locator

    constructor(page: Page) {
        this.page = page

        this.alertsframewindows = this.page.locator(datas.Locator.alertsFrameWindows)
        this.alertsElementClick = this.page.locator(datas.Locator.alertsBtn)
        this.clickMePromo = this.page.locator(datas.Locator.clickMePromo)
        this.modalDialog = this.page.locator(datas.Locator.modalDialogs)
        this.showLargeModals = this.page.locator(datas.Locator.showLargeModal)
        this.largeMonidialTexts = this.page.locator(datas.Locator.largemonidialText)


    }




    async alertsWindonw() {
        await this.alertsframewindows.click()
    }

    async alertTest() {

        await this.alertsElementClick.click()
    }


    async clicksMePromo() {
        await this.clickMePromo.click({ force: true })

        await this.modalDialog.click()

        await this.showLargeModals.click()
    }


    async largeMonidialTextConsol() {

        let textConsols: string | null
        textConsols = await this.largeMonidialTexts.textContent()
        await console.log("affiche moi ce message bien visible :" + textConsols)

    }



}