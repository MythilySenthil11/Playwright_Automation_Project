import {Locator,Page} from '@playwright/test'
import { BasePage } from './BasePage';
import { TIMEOUTS } from '../constants/timeouts';

export class Pagination extends BasePage{
    readonly current:Locator;
    readonly nxtbtn:Locator;
    readonly previousbtn:Locator;
    pageno!:Locator;

    constructor(page:Page){
        super(page);
        this.nxtbtn =page.getByRole('button', {name:'Next'});
        this.current = page.locator("//button[contains(@class,'bg-blue-600')]");
        this.previousbtn = page.getByRole('button', {name:'Previous'});
    }
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