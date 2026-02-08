import test from "@playwright/test"
import { HomePage } from "../pom/homePage"





let homePages:HomePage

test("goToHomePage", {tag:['@homepage']} , async({page})=>{


homePages=new HomePage(page)
//skdjqisjdnjnjnjnj

await homePages.homePage()

await homePages.elementBtn()

await homePages.TextsBox()

await homePages.champsForm()



await page.pause()
})