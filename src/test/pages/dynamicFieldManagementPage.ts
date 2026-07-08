import { BasePage } from "./BasePage";
import {Page,Locator} from '@playwright/test';

export class dynamicFieldManagementPage extends BasePage{

    readonly page:Page;
    readonly Course_cateogory:Locator
    readonly pedagogy:Locator

    constructor(page:Page){
        super(page);
        this.page = page;
        this.Course_cateogory = this.page.locator("//nav[@class='flex space-x-6 px-4']/child::button[3]");
        this.pedagogy = this.page.locator("//nav[@class='flex space-x-6 px-4']/child::button[4]");
    }

    async ClickCourseCategory(){
        await this.Click(this.Course_cateogory);
    }

    async ClickPedagogy(){
        await this.Click(this.pedagogy);
    }

}