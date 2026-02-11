import test, { Page, Locator } from "@playwright/test";

import HomePage from "../pom/homePage"
import { Forms } from "../pom/formsPage";
import Widgets from "../pom/widgets";
import AlertsFrameWindows from "../pom/AlertsFrameWindows";
import { describe } from "node:test";


let homePages: HomePage;
let formePage: Forms
let widghet: Widgets
let alertsframeWin: AlertsFrameWindows


test.describe("TestPage", () => {

    test("goToHomePage", { tag: ['@homepage'] }, async ({ page }) => {

        homePages = new HomePage(page)

        await homePages.homePage()

        await homePages.elementBtn()

        await homePages.TextsBox()

        await homePages.champsForm()

        await page.pause()

    })

    test("Complete the form", { tag: ['@fomepage'] }, async ({ page }) => {

        homePages = new HomePage(page)

        formePage = new Forms(page);


        await homePages.homePage()

        await formePage.formPage()

        await formePage.practicesForm()


        await formePage.ChampsForm()

        await page.pause()

    })
    test("ElementWighet", { tag: ['@widghet'] }, async ({ page }) => {
        homePages = new HomePage(page)

        widghet = new Widgets(page)

        await homePages.homePage()

        await widghet.widghets()
        await widghet.accordians()
        await widghet.text_Consol()

        await page.pause()

    })

    test("alertWindowFrams", { tag: ['@alertWindow'] }, async ({ page }) => {

        homePages = new HomePage(page)


        alertsframeWin = new AlertsFrameWindows(page)


        await homePages.homePage()

        await alertsframeWin.alertsWindonw()

        await alertsframeWin.alertTest()

        await alertsframeWin.clicksMePromo()

        await alertsframeWin.largeMonidialTextConsol()

        await page.pause()
    })



})
/*
test("goToHomePage",{tag:['@homepage']},  async({page})=>{

homePages=new HomePage(page)
   
formePage=new Forms(page);
    let widghet=new Widgets(page)


alertsframeWin=new AlertsFrameWindows(page)


await homePages.homePage()

await homePages.elementBtn()

await homePages.TextsBox()

await homePages.champsForm()

await formePage.formPage()

await formePage.practicesForm()


await formePage.ChampsForm()

await widghet.widghets()
await widghet.accordians()
await widghet.text_Consol()




await alertsframeWin.alertsWindonw()

await alertsframeWin.alertTest()

await alertsframeWin.clicksMePromo()

await alertsframeWin.largeMonidialTextConsol()




        


await page.pause()

}))
*/