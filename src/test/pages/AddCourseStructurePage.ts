import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AddCourseStructurePage extends BasePage{
    readonly page:Page
    readonly moduleButton:Locator
    readonly title:Locator
    readonly description:Locator
    readonly saveButton:Locator
    readonly operationCompleted:Locator
    constructor(page:Page){
        super(page)
        this.page=page
        this.moduleButton=page.locator("//button[@title='Add module']")
        this.title=page.locator("//textarea[@placeholder='Enter title...']")
        this.description=page.locator("//textarea[@placeholder='Brief description ...']")
        this.saveButton=page.locator("//button[@type='submit']")
        this.operationCompleted=page.locator("//span[normalize-space()='Operation completed successfully!']")
    }
    async clickModuleButton(){
        await this.Click(this.moduleButton)
    }
    async setTitle(title:string){
        await this.Fill(this.title,title)
    }
    async setDescription(description:string){
        await this.Fill(this.description,description)
    }
    async clicksaveButton(){
        await this.Click(this.saveButton)
    }
}