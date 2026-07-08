import { BasePage } from "./BasePage";
import {Page,Locator} from '@playwright/test';

export class CourseCategoryPage extends BasePage{
    
    readonly page:Page;
    readonly addCategory:Locator;
    readonly categoryName:Locator;
    readonly courseNames:Locator;
    readonly categoryDescription:Locator;
    readonly createCategoryButton:Locator;
    readonly successMessage;

    constructor(page:Page){
        super(page);
        this.page = page;
        this.addCategory = this.page.locator("//div[@class='flex items-start justify-between bg-gray-100 px-3 py-2 rounded-t-2xl']/child::button");
        this.categoryName = this.page.locator("//input[@placeholder='Enter category name']");
        this.courseNames = this.page.locator("//input[@placeholder='Type course name and press Enter...']");
        this.categoryDescription = this.page.locator("//textarea[@placeholder='Enter category description']");
        this.createCategoryButton = this.page.locator("//div[@class='flex justify-end gap-2 pt-2']/child::button[2]");
        this.successMessage = this.page.locator("//h2[@data-slot='dialog-title']");
    }

    async ClickAddCategory(){
        await this.Click(this.addCategory);
    }

    async EnterCategoryDetails(category_Name:string,course_Name:string,category_Description:string){
        await this.Fill(this.categoryName,category_Name);
        await this.Fill(this.courseNames,course_Name);
        await this.Fill(this.categoryDescription,category_Description);
    }

    async ClickCartegoryButton(){
        await this.Click(this.createCategoryButton);
    }

}