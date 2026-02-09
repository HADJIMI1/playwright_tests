import { Locator, Page } from "@playwright/test";
import datas from "../datas/locators.json"




export class Forms {

    private page: Page;
    private fomsBtn: Locator;
    private practiceForms: Locator
    private fristName: Locator
    private lastName: Locator
    private email: Locator
    private userNumber: Locator
    private subject: Locator
    private hobies: Locator
    private selectCity: Locator
    private selectState: Locator
    private dateOfBirth: Locator
    private months: Locator
    private years: Locator
    private day: Locator





    constructor(page: Page) {
        this.page = page
        this.fomsBtn = this.page.locator(datas.Locator.Forms)
        this.practiceForms = this.page.locator(datas.Locator.practiceForm)
        this.fristName = this.page.locator(datas.Locator.fristeName);
        this.lastName = this.page.locator(datas.Locator.lastName);
        this.email = this.page.locator(datas.Locator.email)

        this.userNumber = this.page.locator(datas.Locator.userNumber)
        this.dateOfBirth = this.page.locator(datas.Locator.dateOfBrith)

        this.months = this.page.locator(datas.Locator.month)
        this.years = this.page.locator(datas.Locator.day)
        this.day = this.page.locator(datas.Locator.years)
        this.subject = this.page.locator(datas.Locator.subject)
        this.hobies = this.page.locator(datas.Locator.hobies)
        this.selectCity = this.page.locator(datas.Locator.selectcity)
        this.selectState = this.page.locator(datas.Locator.selectstate)


    }


    async formPage() {
        await this.fomsBtn.waitFor({ state: "visible" })
        await this.fomsBtn.click()

    }
    async practicesForm() {
        await this.practiceForms.waitFor({ state: "visible" })

        await this.practiceForms.click()

    }
    async ChampsForm() {



        await this.page.locator('//div[@id="adplus-anchor"]').evaluate((element) => {
            element.remove()
        })

        await this.page.locator('//section[@id="RightSide_Advertisement"]').evaluate((element) => {
            element.remove()
        })




        await this.fristName.fill("HADJIMI")

        await this.lastName.fill("salim")

        await this.email.fill("salimhadjimi@gmail.com")

        await this.page.locator(datas.Locator.gendre).click();



        await this.userNumber.fill("0745294140")

        await this.dateOfBirth.click()


        await this.months.selectOption("May")

        await this.years.selectOption("1902")

        await this.day.click({ force: true })


        await this.subject.click

        await this.subject.scrollIntoViewIfNeeded()

        await this.subject.fill("Maths")

        await this.page.keyboard.press("Enter")


        await this.page.waitForSelector("#hobbies-checkbox-2")


        await this.hobies.click({ force: true });


        await this.page.locator("#currentAddress").fill("4 rue darnouville 95400 villier le bel ")




        await this.selectCity.scrollIntoViewIfNeeded()
        await this.selectCity.waitFor({ state: "visible" })
        await this.selectCity.fill("NCR")
        await this.selectCity.press("Enter")

        await this.selectState.waitFor({ state: "visible" })
        await this.selectState.fill("Delhi")
        await this.selectState.press("Enter")

        await this.page.locator("#submit").click()




        await this.page.locator("#closeLargeModal").scrollIntoViewIfNeeded()
        await this.page.locator("#closeLargeModal").click()



    }






















}