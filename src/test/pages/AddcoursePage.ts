import {Page, Locator } from '@playwright/test';
import { BasePage } from "./BasePage";

export class AddcoursePage extends BasePage{
    readonly addbtn:Locator;
    readonly type:Locator;
    readonly model:Locator;
    readonly category:Locator;
    readonly name:Locator;
    readonly nxtBtn:Locator;
    readonly coursecount:Locator;
    constructor(page:Page){
        super(page);
        this.addbtn = page.getByRole('button', {name:'Add Course'});
        this.type = page.getByRole('button', {name:'Select service type'});
        this.model = page.getByRole('button', {name:'Select service model'});
        this.category = page.getByRole('button', {name:'Select category'});
        this.name = page.getByRole('button', {name:'Select category first'});
        this.nxtBtn = page.getByRole('button', {name:'Next'});
        this.coursecount = page.locator(" //table/tbody[1]'");
    }
    async clickAddBtn(){
        await this.Click(this.addbtn);
    }
    async FillCourseDetails(type:string, model:string, category:string, name:string){
        await this.Fill(this.type,type);
        await this.Fill(this.model, model);
        await this.Fill(this.category, category);
        await this.Fill(this.name, name);
    }
    async clickNxtBtn(){
        await this.Click(this.nxtBtn);
    }
    async GetCourseCount(){
        return await this.coursecount.count();
    }
}