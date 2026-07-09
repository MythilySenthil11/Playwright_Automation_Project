import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CourseManagementPage extends BasePage{
    readonly page:Page;
    readonly filterButton:Locator;      
    readonly categoryDropdown:Locator;
    readonly totalAutomationCourse:Locator;
    readonly courseList:Locator;
    readonly levelDropdown:Locator;
    readonly levelList:Locator;
    readonly addCourseStructureButton:Locator

    readonly kebabButton:Locator
    readonly editCourseButton:Locator
    readonly courseClientDropDown:Locator
    readonly serviceTypeDropDown:Locator
    readonly serviceModelDropDown:Locator
    readonly courseCategoryDropDown:Locator
    readonly courseNameDropDown:Locator
    readonly courseLevelDropDown:Locator
    readonly nextButton:Locator
    readonly saveLayoutButton:Locator
    readonly tostMsg:Locator
    readonly previewButton:Locator
    readonly dateSort:Locator
    readonly clientSort:Locator
    readonly courseSort:Locator
    readonly dateList:Locator
    readonly clientList:Locator
    readonly courseSortList:Locator

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

        this.kebabButton = this.page.locator("//tbody/tr[1]/td[7]/span/div/div/child::*")
        this.editCourseButton = this.page.locator("//tbody/tr[1]/td[7]/span/div/div/div/child::button[2]")
        this.courseClientDropDown = this.page.locator("//div[@id='radix-«r6»']/child::div/child::*[2]/child::*/child::*/child::*[1]/child::*[1]/button")
        this.serviceTypeDropDown = this.page.locator("//div[@id='radix-«r6»']/child::div/child::*[2]/child::*/child::*/child::*[1]/child::*[2]/button")
        this.serviceModelDropDown = this.page.locator("//div[@id='radix-«r6»']/child::div/child::*[2]/child::*/child::*/child::*[1]/child::*[3]/button")
        this.courseCategoryDropDown = this.page.locator("//div[@id='radix-«r6»']/child::div/child::*[2]/child::*/child::*/child::*[2]/child::*[1]/button")
        this.courseNameDropDown = this.page.locator("//div[@id='radix-«r6»']/child::div/child::*[2]/child::*/child::*/child::*[2]/child::*[2]/button")
        this.courseLevelDropDown = this.page.locator("//div[@id='radix-«r6»']/child::div/child::*[2]/child::*/child::*/child::*[1]/child::*[1]/child::*[2]")
        this.nextButton = this.page.locator("//div[@id='radix-«r6»']/child::div/child::*[3]/child::*/child::*[2]")
        this.saveLayoutButton = this.page.locator("//div[@id='radix-«rc»']/child::*[2]/child::*[2]/child::*[2]/child::*[2]")
        this.tostMsg = this.page.locator("//section[@class='Toastify']")
        this.previewButton =this.page.locator("//button[text()='Preview & Update']")
        this.dateSort = this.page.locator("//th[1]/span")
        this.clientSort = this.page.locator("//th[2]/span")
        this.courseSort = this.page.locator("//th[3]/span")
        this.dateList = this.page.locator("//td[1]/span/div")
        this.clientList = this.page.locator("//td[2]/span/div")
        this.courseSortList = this.page.locator("//td[3]/span/div")
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


    //actions for editCourse Feature
    async clickKebabButton(){
        await this.Click(this.kebabButton)
    }

    async clickEditCourse(){
        await this.Click(this.editCourseButton)
    }
    
    async clickNext(){
        await this.Click(this.nextButton)
    }

    async clickSaveLayout(){
        await this.Click(this.saveLayoutButton)
    }
    async clickPreview(){
        await this.Click(this.previewButton)
    }

    async fillFirstPage(){
        await this.Click(this.courseClientDropDown)
        await this.page.getByText('PSG Tech', { exact: true }).click();
        await this.Click(this.serviceTypeDropDown)
        await this.page.getByText('Business to institution', { exact: true }).click();
        await this.Click(this.serviceModelDropDown)
        await this.page.getByText('HTD', { exact: true }).click();
        await this.Click(this.courseCategoryDropDown)
        await this.page.getByText('Software Development', { exact: true }).click();
        await this.Click(this.courseNameDropDown)
        await this.page.getByText('Frontend', { exact: true }).click();
    }

    async fillSecondPage(){
        await this.Click(this.courseLevelDropDown)
        await this.page.getByText('Expert', { exact: true }).click();
    }

    // sort course actions
    async clickDateSort(){
        await this.Click(this.dateSort)
    }

    async clickClientSort(){
        await this.Click(this.clientSort)
    }

    async clickCourseSort(){
        await this.Click(this.courseSort)
    }

    async sortedlist(locator:Locator){
        const list = locator.allTextContents() 
        return list
    }
    
}