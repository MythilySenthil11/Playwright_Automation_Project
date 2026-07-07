import {Page, Locator} from "@playwright/test"
import { BasePage } from "./BasePage"


export class loginpage extends BasePage{
    readonly page:Page
    readonly email:Locator
    readonly password:Locator
    readonly loginbutton:Locator

    constructor(page:Page) {
        super(page);
        this.page = page
        this.email = page.locator("//input[@id='email']")
        this.password = page.locator("//input[@id='password']")
        this.loginbutton = page.locator("//button[@type='submit']")
    }
    async Navigatepage(){
        await this.Navigate()
    }
    async enteremail(email:string){
       await this.Fill(this.email,email)
    }
    async enterPassword(password:string){
     await this.Fill(this.password,password)
    }
    async clickLoginButton(){
       await this.Click(this.loginbutton)
    }
}
