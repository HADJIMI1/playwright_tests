import test, { Locator } from "@playwright/test"
import { HomePage } from "../pom/homePage"
import { Forms } from "../pom/formsPage";
import Widgets from "../pom/widgets";



    let homePages:HomePage;
    let formePage: Forms
    let widghet:Widgets

test("goToHomePage",{tag:['@homepage']},  async({page})=>{


   



homePages=new HomePage(page)

formePage=new Forms(page);

widghet=new Widgets(page)
//skdjqisjdnjnjnjnj

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





        


await page.pause()
})