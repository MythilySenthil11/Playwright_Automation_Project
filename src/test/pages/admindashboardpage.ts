import{Page,Locator} from "@playwright/test"
import { BasePage } from "./BasePage"

export class admindashboardpage extends BasePage{
    readonly page:Page
    readonly profileavatar:Locator
    readonly dashboardtext:Locator
    readonly coursemanagementlink:Locator
    constructor(page:Page){
        super(page)
        this.page=page
        this.profileavatar=this.page.locator("//span[@data-slot='avatar']/ancestor::button")
        this.dashboardtext=this.page.locator("//div[@class='flex flex-col']/p[text()='testing@gmail.com']")
        this.coursemanagementlink = this.page.locator("//div[@title='Course Management']");
    }
    async profileclick(){
        await this.Click(this.profileavatar)

    }
     getuseremail(){
        return this.dashboardtext
    }
    async clickcoursemanagementlink(){
        await this.Click(this.coursemanagementlink)
    }
}
