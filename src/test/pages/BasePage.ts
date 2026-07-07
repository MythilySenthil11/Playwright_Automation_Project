import {Locator,Page} from '@playwright/test'
import { logger } from '../utilities/logger';
import {getEnv} from '../utilities/envReader'

export class BasePage{

    constructor(protected page:Page){}

    async Click(locator:Locator):Promise<void>{
        try {
            logger.info('Clicking element');
            await locator.click();
            logger.info('Element clicked successfully');
        } 
        catch(error) {
            logger.error(`Failed to click element: ${error}`);
            throw error;
        }
    }

    async Fill(locator:Locator,message:string):Promise<void>{
        try{
            logger.info('Typing message');
            await locator.fill(message);
            logger.info('Message typed on the locator successfully');
        }
        catch(error) {
            logger.error(`Failed to fill: ${error}`);
            throw error;
        }
    }

    async GetText(locator:Locator):Promise<string>{
        try{
            logger.info('Getting text');
            return await locator.innerText();
        }
        catch(error) {
            logger.error(`Failed to fill: ${error}`);
            throw error;
        }
    }

    async Navigate(){
        try{
            const url = getEnv();
            logger.info(`Application Launching: ${url}`);
            await this.page.goto(url, {
                waitUntil: 'domcontentloaded'
            });
        }
        catch(error) {
            logger.error(`Failed to launch application: ${error}`);
            throw error;
        }
    }

    async Check(locator:Locator):Promise<void>{
        try{
            await locator.click();
            logger.info('Select the check box');
        }
        catch(error){
            logger.error('Failed to select the check box');
            throw error;
        }
    }

    async First(locator:Locator):Promise<void>{
        try{
            locator.first();
            logger.info('Select the select option');
        }
        catch(error){
            logger.error('Failed to select the option');
            throw error;
        }
    }
    
    async selectDropdown(dropdown: Locator, value: string) {
        await this.Click(dropdown);
        await this.page.getByRole('option', { name: value }).click();
    }
}