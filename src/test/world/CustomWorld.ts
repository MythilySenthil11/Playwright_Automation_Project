import { logger } from './../utilities/logger';
import {Browser,Page,BrowserContext} from 'playwright'
import {setWorldConstructor, World} from '@cucumber/cucumber'

export class lmsWorld extends World{
    browser!:Browser;
    browserContext!:BrowserContext;
    page!:Page;

    logger=logger;
}

setWorldConstructor(lmsWorld);