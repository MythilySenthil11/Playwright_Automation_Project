import {Page, Locator } from '@playwright/test';
import { BasePage } from "./BasePage";

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
        this.ido = page.locator("(//button[@role='combobox'])[2]").first();
        this.wedo = page.locator("(//button[@role='combobox'])[3]").first();
        this.youdo = page.locator("(//button[@role='combobox'])[4]").first();
        this.res = page.locator("(//button[@role='switch'])[1]");
        this.core = page.locator("(//input[@type='checkbox'])[6]");
        this.frontend =page.locator("(//input[@type='checkbox'])[11]");
        this.database =page.locator("(//input[@type='checkbox'])[17]");
        this.createBtn =page.getByRole('button', {name:'Preview & Create'});
        this.savecourse = page.getByText("Preview & Create");
        this.notif = page.getByText("Course created successfully");
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
    async pedagogy(){
        await this.First(this.ido);
        await this.First(this.wedo);
        await this.First(this.youdo);
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
        await this.Click(this.savecourse);
    }
    async VerifyCourseCreated() {
       await this.WaitForVisible(this.notif, 10000);
    }
}