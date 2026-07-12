import {Page, Locator } from '@playwright/test';
import { BasePage } from "./BasePage";
import { TIMEOUTS } from '../constants/timeouts';

export class AddcoursePage extends BasePage{
    readonly addbtn:Locator;
    readonly client:Locator;
    readonly type:Locator;
    readonly model:Locator;
    readonly category:Locator;
    readonly nameDropdown:Locator;
    readonly name:Locator;
    readonly nxtBtn:Locator;
    readonly level:Locator;
    readonly module:Locator;
    readonly sub:Locator;
    readonly topic:Locator;
    readonly subtopic:Locator;
    readonly ido: Locator;
    readonly wedo: Locator;
    readonly youdo: Locator;
    readonly res: Locator;
    readonly core:Locator;
    readonly frontend:Locator;
    readonly database:Locator;
    readonly createBtn:Locator;
    readonly savecourse:Locator;
    readonly notif:Locator;
    readonly clientError: Locator;
    readonly typeError: Locator;
    readonly modelError: Locator;
    readonly categoryError: Locator;
    readonly nameError: Locator;
    constructor(page:Page){
        super(page);
        this.addbtn = page.getByRole('button', {name:'Add Course'});
        this.client = page.locator("//label[contains(normalize-space(),'Course Client')]/following::button[1]");
        this.type = page.getByText("Select service type");
        this.model = page.getByText("Select service model");
        this.category = page.getByRole('combobox').nth(3);
        this.nameDropdown = page.locator("//label[contains(.,'Course Name')]/following::button[1]");
        this.name = page.getByPlaceholder("Enter custom course name");
        this.nxtBtn = page.getByRole('button', {name:'Next'});
        this.level = page.getByText("Select Level");
        this.module = page.locator("#module-checkbox");
        this.sub = page.locator("#submodule-checkbox");
        this.topic = page.locator("#topic-checkbox");
        this.subtopic = page.locator("#subtopic-checkbox");
        this.ido = page.locator("(//button[@role='combobox'])[2]");
        this.wedo = page.locator("(//button[@role='combobox'])[3]");
        this.youdo = page.locator("(//button[@role='combobox'])[4]");
        this.res = page.locator("(//button[@role='switch'])[1]");
        this.core = page.locator("(//input[@type='checkbox'])[6]");
        this.frontend =page.locator("(//input[@type='checkbox'])[11]");
        this.database =page.locator("(//input[@type='checkbox'])[17]");
        this.createBtn =page.getByRole('button', {name:'Preview & Create'});
        this.savecourse = page.getByRole('button', {name: 'Save Course Layout'});
        this.notif = page.getByText("Course created successfully");
        this.clientError = page.getByText("Please select a client");
        this.typeError = page.getByText("Please select a service type");
        this.modelError = page.getByText("Please select a service model");
        this.categoryError = page.getByText("Please select a course category");
        this.nameError = page.getByText("Please enter a course name");
    }
    async clickAddBtn(){
        await this.Click(this.addbtn);
    }
    async FillCourseDetails(client:string, type:string, model:string, category:string, name:string){
        await this.SelectCustomDropdown(this.client, client);
        await this.SelectCustomDropdown(this.type, type);
        await this.SelectCustomDropdown(this.model, model);
        await this.SelectCustomDropdown(this.category, category);
        await this.SelectCustomDropdown(this.nameDropdown, "Custom Name");
        await this.Fill(this.name, name);
    }
    async clickNxtBtn(){
        await this.Wait(TIMEOUTS.SHORT);
        await this.Click(this.nxtBtn);
    }
    async FillLevel(level:string){
        await this.SelectCustomDropdown(this.level,level);
    }
    async SelectHierarchy(){
        await this.Check(this.module);
        await this.Check(this.sub);
        await this.Check(this.topic);
        await this.Check(this.subtopic);
    }
    async pedagogy(ido:string, wedo:string, youdo:string) {
        await this.ido.click();
        await this.page.getByText(ido, { exact: true }).click();

        await this.wedo.click();
        await this.page.getByText(wedo, { exact: true }).click();

        await this.youdo.click();
        await this.page.getByText(youdo, { exact: true }).click();
    }
    async ClickRes(){
        await this.Click(this.res);
    }
    async SelectSkillset(){
        await this.Click(this.core);
        await this.Click(this.frontend);
        await this.Click(this.database);
    }
    async ClickCreateBtn(){
        await this.Click(this.createBtn);
        console.log("Clicking Save Course Layout");
        await this.Click(this.savecourse);

        console.log("Save clicked");
    }
    async VerifyCourseCreated() {
       await this.WaitForVisible(this.notif, TIMEOUTS.MEDIUM);
    }
    async ClickNextWithoutData() {
       await this.Click(this.nxtBtn);
    }

    async VerifyMandatoryFieldValidation() {
        await this.WaitForVisible(this.clientError, TIMEOUTS.SHORT);
        await this.WaitForVisible(this.typeError, TIMEOUTS.SHORT);
        await this.WaitForVisible(this.modelError, TIMEOUTS.SHORT);
        await this.WaitForVisible(this.categoryError, TIMEOUTS.SHORT);
        await this.WaitForVisible(this.nameError, TIMEOUTS.SHORT);
    }
}