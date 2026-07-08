import {Page, Locator } from '@playwright/test';
import { BasePage } from "./BasePage";

export class AddcoursePage extends BasePage{
    readonly addbtn:Locator;
    readonly client:Locator;
    readonly type:Locator;
    readonly model:Locator;
    readonly category:Locator;
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
    readonly coursecount:Locator;
    readonly createBtn:Locator;
    constructor(page:Page){
        super(page);
        this.addbtn = page.getByRole('button', {name:'Add Course'});
        this.client = page.getByRole('button', {name:'Select client'});
        this.type = page.getByRole('button', {name:'Select service type'});
        this.model = page.getByRole('button', {name:'Select service model'});
        this.category = page.getByRole('button', {name:'Select category'});
        this.name = page.getByRole('button', {name:'Select category first'});
        this.nxtBtn = page.getByRole('button', {name:'Next'});
        this.level = page.getByRole('button', {name:'Select Level'});
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
        this.coursecount = page.locator("//table/tbody[1]");
    }
    async clickAddBtn(){
        await this.Click(this.addbtn);
    }
    async FillCourseDetails(client:string, type:string, model:string, category:string, name:string){
        await this.SelectOption(this.client, client);
        await this.SelectOption(this.type, type);
        await this.SelectOption(this.model, model);
        await this.SelectOption(this.category, category);
        await this.SelectOption(this.name, name);
    }
    async clickNxtBtn(){
        await this.Click(this.nxtBtn);
    }
    async FillLevel(level:string){
        await this.Fill(this.level,level);
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
    }
    async GetCourseCount(){
        return await this.coursecount.count();
    }
}