import { logger } from './../utilities/logger';
import {Browser,Page,BrowserContext} from 'playwright'
import {setWorldConstructor, World} from '@cucumber/cucumber'
import { loginpage } from '../pages/loginpage';
import { BasePage } from '../pages/BasePage';
import { admindashboardpage } from '../pages/admindashboardpage';

export class CustomWorld extends World{
    browser!:Browser;
    browserContext!:BrowserContext;
    page!:Page;

    logger=logger;
    bp!:BasePage;
    lp!:loginpage;
    adp!:admindashboardpage;
}

setWorldConstructor(CustomWorld);