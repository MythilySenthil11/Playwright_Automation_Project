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

    async SelectOption(locator: Locator, value: string){
    try {
        logger.info(`Selecting option: ${value}`);
        await locator.selectOption({ label: value });
        logger.info(`Option "${value}" selected successfully`);
    }
    catch (error) {
        logger.error(`Failed to select option "${value}": ${error}`);
        throw error;
    }

}
async GetAllText(locator: Locator): Promise<string[]> {
    try {
        logger.info("Getting text from all matching elements");
        const texts = await locator.allInnerTexts();
        return texts;
    }
    catch (error) {
        logger.error(`Failed to get text from elements: ${error}`);
        throw error;
    }
}
    async ClickUntilDisabled(nextButtonLocator: Locator): Promise<void> {
        try {
            logger.info('Starting pagination click loop...');
            let pageCount = 1;
            while (true) {
                const isDisabled = await nextButtonLocator.getAttribute('disabled');
                if (isDisabled !== null) {
                    logger.info(`Next button is disabled. Stopped navigating. Total pages processed: ${pageCount}`);
                    break;
                }
                logger.info(`Clicking next button to move past page ${pageCount}`);
                await this.Click(nextButtonLocator);
                pageCount++;
            }
        } 
        catch (error) {
            logger.error(`Error while clicking button until disabled: ${error}`);
            throw error;
        }
    }
}