import { TIMEOUTS } from './../constants/timeouts';
import { BasePage } from "./BasePage";
import {Page,Locator} from '@playwright/test';

export class CourseCategoryPage extends BasePage{
    
    readonly page:Page;
    readonly addCategory:Locator;
    readonly categoryName:Locator;
    readonly courseNames:Locator;
    readonly categoryDescription:Locator;
    readonly CategoryButton:Locator;
    readonly successMessage:Locator;
    readonly searchTab:Locator;
    readonly dropdown:Locator;
    readonly editOption:Locator;
    readonly deleteOption:Locator;
    readonly noUsersMessage:Locator;
    readonly confirmDelete:Locator;
    readonly closeButton:Locator;

    constructor(page:Page){
        super(page);
        this.page = page;
        this.addCategory = this.page.locator("//div[@class='flex items-start justify-between bg-gray-100 px-3 py-2 rounded-t-2xl']/child::button");
        this.categoryName = this.page.locator("//input[@placeholder='Enter category name']");
        this.courseNames = this.page.locator("//input[@placeholder='Type course name and press Enter...']");
        this.categoryDescription = this.page.locator("//textarea[@placeholder='Enter category description']");
        this.CategoryButton = this.page.locator("//div[@class='flex justify-end gap-2 pt-2']/child::button[2]");
        this.successMessage = this.page.locator("//h2[@data-slot='dialog-title']");
        this.searchTab=this.page.locator("//div[@class='relative flex-grow w-full sm:w-auto']/child::input");
        this.dropdown = this.page.locator("//tbody[@data-slot='table-body']/descendant::button").first();
        this.editOption=this.page.locator("//div[@role='menuitem'][1]");
        this.deleteOption=this.page.locator("//div[@role='menuitem'][2]");
        this.confirmDelete=this.page.locator("//div[@class='mt-6 grid grid-cols-2 gap-3']/child::button[2]");
        this.noUsersMessage=this.page.locator("//p[text()='No users found']");
        this.closeButton = this.page.locator("//div[@data-slot='dialog-footer']/child::button");
    }

    async ClickAddCategory(){
        await this.Click(this.addCategory);
    }

    async EnterCategoryDetails(category_Name:string,course_Name:string,category_Description:string){
        await this.Fill(this.categoryName,category_Name);
        await this.Fill(this.courseNames,course_Name);
        await this.Fill(this.categoryDescription,category_Description);
    }

    async UpdateCategoryDetails(category_Name:string,course_Name:string,category_Description:string){
        await this.Clear(this.categoryName);
        await this.Fill(this.categoryName,category_Name);
        await this.Clear(this.courseNames);
        await this.Fill(this.courseNames,course_Name);
        await this.Clear(this.categoryDescription);
        await this.Fill(this.categoryDescription,category_Description);
    }

    async ClickCartegoryButton(){
        await this.Click(this.CategoryButton);
    }

    async SearchCategory(searchItem:string){
        await this.Fill(this.searchTab,searchItem);
    }

    async ClickDropDown(){
        await this.Click(this.dropdown);
    }

    async ClickEditOption(){
        await this.Click(this.editOption);
    }

    async ClickDeleteOption(){
        await this.Click(this.deleteOption);
    }

    async ConfirmDelete(){
        await this.Click(this.confirmDelete);
    }

    async ClickCloseButton(){
        await this.Click(this.closeButton);
    }

}