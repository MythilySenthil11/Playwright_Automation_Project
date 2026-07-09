import {Page, Locator} from "@playwright/test"
import { BasePage } from "./BasePage"


export class loginpage extends BasePage{
    readonly page:Page
    readonly email:Locator
    readonly password:Locator
    readonly loginbutton:Locator
    readonly getErrorMessage:Locator
    readonly profileIcon : Locator
    readonly signOutButton : Locator

    constructor(page:Page) {
        super(page);
        this.page = page
        this.email = page.locator("//input[@id='email']")
        this.password = page.locator("//input[@id='password']")
        this.loginbutton = page.locator("//button[@type='submit']")
        this.getErrorMessage=this.page.locator("//div[@role='status']")
        this.profileIcon = this.page.locator("//div[@class='flex items-center gap-2 relative z-10']/child::button[4]/descendant::img");
        this.signOutButton = this.page.locator("//div[@role='menuitem'][4]");
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
     getErrorMessagefun(){
      return this.getErrorMessage;
    }
    async ClickProfileIcon(){
        await this.Click(this.profileIcon);
    }
    async ClickSignOutButton(){
        await this.Click(this.signOutButton);
    }

}
