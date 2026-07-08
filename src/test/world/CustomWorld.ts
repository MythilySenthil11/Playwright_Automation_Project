import { dynamicFieldManagementPage } from './../pages/dynamicFieldManagementPage';
import { CourseCategoryPage } from './../pages/CourseCategoryPage';
import { logger } from './../utilities/logger';
import {Browser,Page,BrowserContext} from 'playwright'
import {setWorldConstructor, World} from '@cucumber/cucumber'
import { loginpage } from '../pages/loginpage';
import { BasePage } from '../pages/BasePage';
import { admindashboardpage } from '../pages/admindashboardpage';
import { CourseManagementPage } from '../pages/CourseManagementPage';

export class CustomWorld extends World{
    browser!:Browser;
    browserContext!:BrowserContext;
    page!:Page;
    logger=logger;
    bp!:BasePage;
    lp!:loginpage;
    adp!:admindashboardpage;
    dfp!:dynamicFieldManagementPage
    courseCategoryPage!:CourseCategoryPage;
    cmp!:CourseManagementPage;
}

setWorldConstructor(CustomWorld);