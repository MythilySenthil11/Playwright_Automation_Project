import { AddcoursePage } from './../pages/AddcoursePage';
import { dynamicFieldManagementPage } from './../pages/dynamicFieldManagementPage';
import { CourseCategoryPage } from './../pages/CourseCategoryPage';
import { logger } from './../utilities/logger';
import {Browser,Page,BrowserContext} from 'playwright'
import {setWorldConstructor, World} from '@cucumber/cucumber'
import { loginpage } from '../pages/loginpage';
import { BasePage } from '../pages/BasePage';
import { admindashboardpage } from '../pages/admindashboardpage';
import { SideBarPage } from '../pages/SideBarPage';
import { CourseManagementPage } from '../pages/CourseManagementPage';

export class CustomWorld extends World{
    browser!:Browser;
    browserContext!:BrowserContext;
    page!:Page;
    addPage!:AddcoursePage;
    sP!:SideBarPage;
    logger=logger;
    bp!:BasePage;
    lp!:loginpage;
    adp!:admindashboardpage;
    public initialCount!: number;
    dfp!:dynamicFieldManagementPage
    courseCategoryPage!:CourseCategoryPage;
    cmp!:CourseManagementPage;
}

setWorldConstructor(CustomWorld);