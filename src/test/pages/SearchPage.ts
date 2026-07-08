import {Locator,Page} from '@playwright/test'
import { BasePage } from './BasePage';

export class SearchPage extends BasePage{
    readonly searchbar:Locator;
    readonly table:Locator;
    readonly noUser:Locator;
    constructor(page:Page){
       super(page);
       this.searchbar = page.locator("//input[@data-slot='input']");
       this.table = page.locator("tbody tr:first-child td:nth-child(2)");
       this.noUser = page.locator("//p[text()='No users found']");
    }
    async EnterSearch(searchbar:string){
        await this.Fill(this.searchbar, searchbar);
    }
    async GetSearchResult(){
        return (await this.GetText(this.table)).trim();
    }
    async NoUserTxt(){
        return await this.GetText(this.noUser);
    }
}