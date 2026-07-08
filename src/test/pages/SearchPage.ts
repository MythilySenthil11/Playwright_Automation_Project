import {Locator,Page} from '@playwright/test'
import { BasePage } from './BasePage';
import { TIMEOUTS } from '../constants/timeouts';

export class SearchPage extends BasePage{
    readonly searchbar:Locator;
    readonly table:Locator;
    readonly noUser:Locator;
    constructor(page:Page){
       super(page);
       this.searchbar = page.locator("//input[@data-slot='input']");
       this.table = page.locator("//tbody/tr[1]/td[2]");
       this.noUser = page.getByText('No users found');
    }
    async EnterSearch(searchbar: string) {
       await this.Fill(this.searchbar, searchbar);
       await this.table.first().waitFor({ state: "visible", timeout: TIMEOUTS.MEDIUM });
       await this.WaitForNonEmptyText(this.table.first(), TIMEOUTS.MEDIUM);
    }
    async GetSearchResult() {
        return (await this.GetText(this.table)).trim()
    }
    async NoUserTxt(){
        return await this.GetText(this.noUser);
    }
}