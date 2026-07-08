import {Locator,Page} from '@playwright/test'
import { BasePage } from './BasePage';

export class SideBarPage extends BasePage{
    readonly adminDashboard:Locator;
    readonly slide:Locator;
    readonly courseManage:Locator;
    readonly dynamicSetting:Locator;
    constructor(page:Page){
       super(page);
       this.adminDashboard = page.locator("(//div[@class='p-1.5'])[1]");
       this.slide= page.locator("(//button[@data-slot='button'])[6]");
       this.courseManage = page.locator("div[title='Course Management']");
       this.dynamicSetting = page.locator("(//div[@class='p-1.5'])[2]");
    }
    async clickAdminDashboard(){
        await this.Click(this.adminDashboard);
    }
    async clickCourseManage() {     
        //await this.courseManage.scrollIntoViewIfNeeded();
        await this.Click(this.slide);
        await this.Click(this.courseManage);
    }
    async clickDynamicSetting(){
        await this.Click(this.dynamicSetting);
    }
}