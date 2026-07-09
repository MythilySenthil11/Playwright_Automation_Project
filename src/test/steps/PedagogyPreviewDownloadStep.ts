import { CourseStructureData } from './../types/courseStructure.types';
import {When,Then} from '@cucumber/cucumber';
import { CustomWorld } from '../world/CustomWorld';
import { CsvReader } from '../utilities/csvReader';
import {expect} from '@playwright/test'

const courseName = CsvReader.read<CourseStructureData>("moduleData.csv");

When('the user enter course name on the search tab', async function (this:CustomWorld) {

    await this.cmp.EnterSearch(courseName[0]!.Title);
    
});

When('the user clicks the print button', async function (this:CustomWorld) {

    await this.acsp.ClickPrintButton()
 
});

When('the user chooses the excel in export options', async function (this:CustomWorld) {

    await this.acsp.ClickExcelOption();
  
});

Then('the user able to see the downloaded excel file', async function (this:CustomWorld) {

    await this.acsp.isDownloaded();
  
});