import { logger } from './../utilities/logger';
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { TIMEOUTS } from '../constants/timeouts';

export class CourseManagementPage extends BasePage{
    readonly page:Page;
    readonly filterButton:Locator;      
    readonly categoryDropdown:Locator;
    readonly totalAutomationCourse:Locator;
    readonly courseList:Locator;
    readonly levelDropdown:Locator;
    readonly levelList:Locator;
    readonly addCourseStructureButton:Locator
    readonly searchbar:Locator;
    readonly table:Locator;
    readonly noUser:Locator;
    readonly current:Locator;
    readonly nxtbtn:Locator;
    readonly previousbtn:Locator;
    pageno!:Locator;
    constructor(page:Page){
        super(page);
        this.page=page;
        this.filterButton=this.page.locator("//div[@class='flex items-center gap-3 flex-shrink-0']/button[@data-slot='button']");
        this.categoryDropdown=this.page.locator("//option[text()='All Categories']/parent::select")
        this.totalAutomationCourse=this.page.locator("//span[@class='text-sm text-gray-600 dark:text-gray-400 font-medium']")
        this.courseList=this.page.locator("//div/span[@class='text-xs font-medium text-gray-700 dark:text-gray-300 font-sans']")
        this.levelDropdown=this.page.locator("//option[text()='All Levels']/parent::select")
        this.levelList=this.page.locator("//td/span/div/span/following-sibling::span")
        this.addCourseStructureButton=page.locator("(//span[text()='Add Course Structure'])[2]")
        //search
        this.searchbar = page.locator("//input[@data-slot='input']");
        this.table = page.locator("//tbody/tr[1]/td[3]");
        this.noUser = page.getByText('No users found');
        //pagination
        this.nxtbtn =page.getByRole('button', {name:'Next'});
        this.current = page.locator("//button[contains(@class,'bg-blue-600')]");
        this.previousbtn = page.getByRole('button', {name:'Previous'});
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
    async selectLevel(level:string){
        await this.SelectOption(this.levelDropdown,level)
    }
    async getLevelList(){
        return await this.GetAllText(this.levelList)
    }
    async clickAddcourseStrcutureButton(){
        await this.Click(this.addCourseStructureButton)
    }
    //search
    async EnterSearch(searchbar: string) {
           await this.Fill(this.searchbar, searchbar);
           await this.page.waitForTimeout(1000);
        }
    async GetSearchResult() {
        const text = await this.GetText(this.table);
        console.log("Row Text:", text);
        return text.trim();
    }
    async NoUserTxt(){
            return await this.GetText(this.noUser);
    }
    //pagination
    async clickNxtbtn(){
        await this.Click(this.nxtbtn);
    }
    async clickPrebtn(){
        await this.Click(this.previousbtn);
    }
    async CurrentPage(){
        return await this.GetText(this.current);
    }
    async clickPage(pageNo:string){
        this.pageno = this.page.locator(`//button[text()='${pageNo}']`);
        await this.Click(this.pageno);
    }
}