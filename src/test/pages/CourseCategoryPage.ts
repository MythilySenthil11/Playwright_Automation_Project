import { BasePage } from "./BasePage";
import {Page,Locator} from '@playwright/test';

export class CourseCategory extends BasePage{
    
    readonly page:Page;

    constructor(page:Page){
        super(page);
        this.page = page;
    }



}