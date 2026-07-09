import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

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
        this.threeDots=page.locator("//td[@title='Enable actions to edit, delete, or change the position of \"Selenium\"']//button[@class='p-1 rounded-full cursor-pointer hover:bg-blue-100 hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-110']");
        this.editOption=page.locator("//span[text()='Edit']/parent::button");
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
}