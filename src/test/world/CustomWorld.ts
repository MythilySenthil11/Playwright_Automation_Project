import { AddcoursePage } from './../pages/AddcoursePage';
import { logger } from './../utilities/logger';
import {Browser,Page,BrowserContext} from 'playwright'
import {setWorldConstructor, World} from '@cucumber/cucumber'
import { BasePage } from './../pages/BasePage';
import { SideBarPage } from '../pages/SideBarPage';

export class CustomWorld extends World{
    browser!:Browser;
    browserContext!:BrowserContext;
    page!:Page;
    addPage!:AddcoursePage;
    sP!:SideBarPage;
    logger=logger;

    bp!:BasePage;
}

setWorldConstructor(CustomWorld);