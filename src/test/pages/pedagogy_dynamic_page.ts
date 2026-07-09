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
    readonly updatebutton : Locator
    readonly deleteconfirmationbutton:Locator
    readonly deletedelement:Locator

    constructor(page:Page){
        super(page);
        this.page = page;
        this.pedagogyviewelements = this.page.locator("//div[@class='space-y-4']/descendant::span[4]");//6,8
        this.addElementButton = this.page.locator("//div[@class='flex items-center gap-2']/child::button[text()='Add Element']");
        this.elementNameInput = this.page.locator("//div[@class='relative']/child::input");
    this.createElementButton = this.page.locator("//div[@class='flex justify-end space-x-3 pt-4']//button[text()='Create Element']");
        this.nextpagebutton = this.page.locator("//span[contains(@class, 'text-gray-600')]/following-sibling::button");
        this.listelements = this.page.locator("//div[@class='font-medium text-gray-900']");
        this.updatebutton=this.page.locator("//div[@class='flex justify-end space-x-3 pt-4']//button[text()='Update Element']")
        this.deleteconfirmationbutton=this.page.locator("//button[text()='Delete']")
        this.deletedelement=this.page.locator("//tbody[@class='bg-white divide-y divide-gray-200']/descendant::div[1]")

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
     async editElementName(elementname:string){
        await this.Fill(this.elementNameInput,"")
        await this.Fill(this.elementNameInput,elementname)
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

    async clickEditButton(index: number){
            const editbutton=this.page.locator("//tbody[@class='bg-white divide-y divide-gray-200']/descendant::button[@title='Edit Element']").nth(index);
        await this.Click(editbutton)
    }

    async clickUpdateElementButton(){
        await this.Click(this.updatebutton)
    }

async clickDeletesvgButton(index: number) {
    const deleteButton = this.page.locator(
        "(//tbody[@class='bg-white divide-y divide-gray-200']//button[@title='Delete Element'])"
    ).nth(index);

    await deleteButton.click();
}
    async clickDeleteConfirmationButton(){
        await this.Click(this.deleteconfirmationbutton) 
    }
    async getDeletedElementFromPage() {
        return await this.GetText(this.deletedelement);
    }
    }