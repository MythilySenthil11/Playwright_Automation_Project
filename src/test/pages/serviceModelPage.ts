import {Page,Locator} from '@playwright/test'
import { BasePage } from './BasePage';

export class serviceModelPage extends BasePage{
    readonly page:Page
    readonly addServiceButton:Locator
    readonly serviceName:Locator
    readonly description:Locator
    readonly createServiceButton:Locator
    readonly search:Locator
    readonly searchResult:Locator
    readonly deleteButton:Locator
    readonly innerDeleteButton:Locator
    readonly confirmMsg:Locator

    constructor(page:Page){
        super(page)
        this.page = page
        this.addServiceButton = this.page.getByRole('button', { name: 'Add Service' })
        this.serviceName = this.page.getByRole('textbox', { name: 'e.g., \'Software Development\'' })
        this.description = this.page.getByRole('textbox', { name: 'Describe the service...' })
        this.createServiceButton = this.page.getByRole('button', { name: 'Create Service' })
        this.search = this.page.getByRole('textbox', { name: 'Search services...' })
        this.searchResult = this.page.locator("//tr[1]/td[2]/child::*/child::*[2]/child::*[1]")
        this.deleteButton = this.page.getByRole('button', { name: 'Delete Service' }).first()
        this.innerDeleteButton = this.page.getByRole('button', { name: 'Delete', exact: true })
        this.confirmMsg = this.page.getByRole('cell', { name: 'No services found matching' })
    }

    async clickAddService(){
        await this.Click(this.addServiceButton)
    }

    async fillPage(name:string,des:string){
        await this.Fill(this.serviceName,name)
        await this.Fill(this.description,des)
    }

    async clickCreateService(){
        await this.Click(this.createServiceButton)
    }

    async resultText(){
        return await this.GetText(this.searchResult)
    }

    async clickDelete(){
        await this.Click(this.deleteButton)
    }

    async clickInnerDelete(){
        await this.Click(this.innerDeleteButton)
    }

    async msg(){
        return await this.GetText(this.confirmMsg)
    }

    async searchService(string:string){
        await this.Fill(this.search,string)
    }

    
}