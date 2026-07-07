import { AddcoursePage } from './../pages/AddcoursePage';
import { logger } from './../utilities/logger';
import {Browser,Page,BrowserContext} from 'playwright'
import {setWorldConstructor, World} from '@cucumber/cucumber'

export class CustomWorld extends World{
    browser!:Browser;
    browserContext!:BrowserContext;
    page!:Page;
    addPage!:AddcoursePage;
    sidebarPage!
    logger=logger;
}

setWorldConstructor(CustomWorld);