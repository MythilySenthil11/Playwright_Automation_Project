import {Locator,Page} from '@playwright/test'
import { BasePage } from './BasePage';

export class SideBarPage extends BasePage{
    readonly adminDashboard:Locator;
    readonly courseManage:Locator;
    readonly dynamicSetting:Locator;
    constructor(page:Page){
       super(page);
       this.adminDashboard = page.locator("(//div[@class='p-1.5'])[1]");
       this.courseManage = page.locator('[title="Course Management"]');
       this.dynamicSetting = page.locator("(//div[@class='p-1.5'])[2]");
    }
    async clickAdminDashboard(){
        await this.Click(this.adminDashboard);
    }
    async clickCourseManage() {
    await this.page.waitForSelector('text=Synchronizing Dashboard', { state: 'hidden', timeout: 30000 });
    await this.Click(this.courseManage);
    }
    async clickDynamicSetting(){
        await this.Click(this.dynamicSetting);
    }
}