import { logger } from './../utilities/logger';
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { TIMEOUTS } from '../constants/timeouts';
import {expect} from '@playwright/test'

export class AddCourseStructurePage extends BasePage{
    readonly page:Page
    readonly moduleButton:Locator
    readonly title:Locator
    readonly description:Locator
    readonly saveButton:Locator
    readonly operationCompleted:Locator
    readonly titleRequired:Locator
    readonly similarCourseButton:Locator
    readonly allcourses:Locator
    readonly filterByCategory:Locator
    readonly searchBox:Locator
    readonly levels:Locator
    readonly duplicateStructureButton:Locator
    readonly confirmationPage:Locator;
    readonly moreButton:Locator
    readonly hierarchyActions:Locator
    readonly threeDots:Locator
    readonly editOption:Locator
    readonly teachingElementsDropdown:Locator
    readonly iDoActivities:Locator
    readonly weDoActivities:Locator
    readonly youDoActivities:Locator
    readonly allTeachingElements:Locator
    readonly SelectAllTeachingElements:Locator
    readonly SelectiDoActivities:Locator
    readonly SelectweDoActivities:Locator
    readonly SelectyouDoActivities:Locator
    readonly normalizeSpace:Locator
    readonly printButton: Locator;
    readonly excelOption: Locator;
    constructor(page:Page){
        super(page)
        this.page=page
        this.moduleButton=page.locator("//button[@title='Add module']")
        this.title=page.locator("//textarea[@placeholder='Enter title...']")
        this.description=page.locator("//textarea[@placeholder='Brief description ...']")
        this.saveButton=page.locator("//button[@type='submit']")
        this.operationCompleted=page.locator("//span[normalize-space()='Operation completed successfully!']")
        this.titleRequired=page.getByText("Title is required for module");
        this.similarCourseButton=page.locator("//span[normalize-space()='Similar Courses']")
        this.allcourses=page.locator("//button[normalize-space()='All Courses']")
        this.filterByCategory=page.locator("//span[text()='All Categories']/parent::button")
        this.searchBox=page.locator("//input[@placeholder='Search for any course...']")
        this.levels=page.locator("//button[@id='select-all-hierarchy']")
        this.duplicateStructureButton=page.getByRole('button', {name: 'Duplicate Structure'});
        this.confirmationPage=page.getByRole('button', {name: 'Confirm Duplicate'});
        this.moreButton=page.locator("//span[@class='hidden sm:inline tracking-tight']");
        this.hierarchyActions=page.locator("//span[normalize-space()='Hierarchy Actions']");
        this.threeDots=page.locator("(//button[@class='p-1 rounded-full cursor-pointer hover:bg-blue-100 hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-110'])[1]");
        this.editOption=page.locator("//span[text()='Edit']/parent::button");
        this.teachingElementsDropdown=page.locator("//span[text()='Select elements']/parent::button[@data-slot='select-trigger']");
        this.iDoActivities=page.locator("(//th[text()='I Do Activities'])[1]");
        this.weDoActivities=page.locator("(//th[text()='We Do Activities'])[1]");
        this.youDoActivities=page.locator("(//th[text()='You Do Activities'])[1]");
        this.allTeachingElements=page.locator("(//th[text()='All Teaching Elements'])[1]");
        this.SelectAllTeachingElements=page.getByText('All Teaching Elements');
        this.SelectiDoActivities=page.getByText('I Do Activities');
        this.SelectweDoActivities=page.getByText('We Do Activities');
        this.SelectyouDoActivities=page.getByText('You Do Activities');
        this.normalizeSpace=page.locator("//div[@class='fixed inset-0 z-20']");
        this.printButton = page.locator("//div[@class='flex items-center gap-1 sm:gap-2 flex-wrap'][2]/child::button");
        this.excelOption = page.locator("//div[@class='flex gap-2']/child::button[2]");
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
    async getTitleRequired(){
        return await this.GetText(this.titleRequired)
    }
    async clickSimilarCourse(){
        await this.Click(this.similarCourseButton)
    }
    async clickAllCourses(){
        await this.Click(this.allcourses)
    }
    async selectFilterCategory(category:string){
        await this.SelectCustomDropdown(this.filterByCategory,category)
    }
    async setCourseName(keyword:string){
        await this.Fill(this.searchBox,keyword)
        await this.Enter()
    }
    async clcikLevels(){
        await this.Click(this.levels)
    }
    async clickDuplicateStructure() {

    await this.Click(this.duplicateStructureButton);
  
}
    async clickConfirm(){
        await this.Click(this.confirmationPage)
    }
    async clickMoreButton(){
        await this.Click(this.moreButton)
    }
    async clickHierarchyActions(){
        await this.Click(this.hierarchyActions)
    }
    async clickThreeDots(){
        await this.Click(this.threeDots)
    }
    async clickEditOption(){
        await this.Click(this.editOption)
    }
    async clickTeachingElementsDropdown(){
        await this.Click(this.teachingElementsDropdown)
    }
    async selectTeachingElement(element:string){
        switch(element){
            case "I Do Activities":
                await this.Click(this.SelectiDoActivities);
                break;
            case "We Do Activities":
                await this.Click(this.SelectweDoActivities);
                break;
            case "You Do Activities":
                await this.Click(this.SelectyouDoActivities);
                break;
            case "All Teaching Elements":
                await this.Click(this.SelectAllTeachingElements);
                break;
        }
    }
    async normalClick(){
        await this.Click(this.normalizeSpace)
    }
    async clickPrintButton() {
        await this.Click(this.printButton);
    }

    async clickExcelOption() {
        await this.Click(this.excelOption);
    }

    async isDownloaded() {
        const downloadPromise = this.page.waitForEvent('download');
        await this.clickExcelOption();
        const download = await downloadPromise;
        expect(download).toBeTruthy();
    }
    
}