import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CourseManagementPage extends BasePage{
    readonly page:Page;
    readonly filterButton:Locator;
    readonly categoryDropdown:Locator;
    readonly totalAutomationCourse:Locator;
    readonly courseList:Locator;
    constructor(page:Page){
        super(page);
        this.page=page;
        this.filterButton=this.page.locator("//div[@class='flex items-center gap-3 flex-shrink-0']/button[@data-slot='button']");
        this.categoryDropdown=this.page.locator("//option[text()='All Categories']/parent::select")
        this.totalAutomationCourse=this.page.locator("//span[@class='text-sm text-gray-600 dark:text-gray-400 font-medium']")
        this.courseList=this.page.locator("//div/span[@class='text-xs font-medium text-gray-700 dark:text-gray-300 font-sans']")
    }
    async clickFilterButton(){
        await this.Click(this.filterButton)
    }
    async selectCategory(category:string){
        await this.SelectOption(this.categoryDropdown,category)
    }
    async getTotalCount(){
        return await this.GetText(this.totalAutomationCourse)
    }
    async getCourseList(){
        return await this.GetAllText(this.courseList)
    }

    
}