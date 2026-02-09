import { Locator, Page } from "@playwright/test";
import datas from "../datas/locators.json";


export class HomePage {


    private page: Page;
    private elmementPage: Locator;
    private TextBox: Locator;
    private userName: Locator;
    private userEmail: Locator;
    private currentAddress: Locator;
    private permanentAddress: Locator;






    constructor(page: Page) {
        this.page = page

        this.elmementPage = this.page.locator(datas.Locator.element1)
        this.TextBox = this.page.locator(datas.Locator.TextBox)
        this.userName = this.page.locator(datas.Locator.name)
        this.userEmail = this.page.locator(datas.Locator.mail)
        this.currentAddress = this.page.locator(datas.Locator.currentAddress)
        this.permanentAddress = this.page.locator(datas.Locator.permanentAddress)












    }

    


    async homePage() {
        
        await this.page.goto(datas.Locator.url);
        
            


    }

    async elementBtn() {

        await this.elmementPage.waitFor({ state: "visible" })

        await this.elmementPage.click()
    }

    async TextsBox() {
        await this.TextBox.scrollIntoViewIfNeeded();

        await this.TextBox.waitFor({ state: "visible" })
        await this.TextBox.click()


    }


    async champsForm() {
        await this.userName.fill("HADJIMI")

        await this.userEmail.fill("Salimhadjimi10@gmail.com")


        await this.currentAddress.fill("4 rue d 'arnouville")


        await this.permanentAddress.fill("95400 villier le bel ")


        await this.page.locator(datas.Locator.btn).click()
    }









}
