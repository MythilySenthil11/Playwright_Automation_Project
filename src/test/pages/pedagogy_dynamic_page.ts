import {Page,Locator} from '@playwright/test'
import { BasePage } from './BasePage';

export class pedagogy_dynamic_page extends BasePage{
    readonly page:Page
    readonly pedagogyviewelements:Locator
    readonly addElementButton:Locator
    readonly elementNameInput:Locator
    readonly createElementButton:Locator
    readonly nextpagebutton:Locator
    readonly listelements:Locator

    constructor(page:Page){
        super(page);
        this.page = page;
        this.pedagogyviewelements = this.page.locator("//div[@class='space-y-4']/descendant::span[6]");//6,8
        this.addElementButton = this.page.locator("//div[@class='flex items-center gap-2']/child::button[text()='Add Element']");
        this.elementNameInput = this.page.locator("//div[@class='relative']/child::input");
    this.createElementButton = this.page.locator("//div[@class='flex justify-end space-x-3 pt-4']//button[text()='Create Element']");
        this.nextpagebutton = this.page.locator("//span[contains(@class, 'text-gray-600')]/following-sibling::button");
        this.listelements = this.page.locator("//div[@class='font-medium text-gray-900']");
    }

    async clickPedagogyViewElements(){
       await this.Click(this.pedagogyviewelements);
    }
   
     async clickAddElementButton(){
         await this.Click(this.addElementButton);
     }
     async enterElementName(elementName:string){
        await this.Fill(this.elementNameInput,elementName);
     }
     async clickCreateElementButton(){
        await this.Click(this.createElementButton);
        await this.page.waitForLoadState('networkidle');
     }
async clickNextPageButton() {
    await this.ClickUntilDisabled(this.nextpagebutton);
}
     async getElementNamesFromPage(): Promise<string[]> {
        
        const elementNamesList = await this.GetAllText(this.listelements);
        return elementNamesList;

    }
}