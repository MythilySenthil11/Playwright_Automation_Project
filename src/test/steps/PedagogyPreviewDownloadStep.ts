import { CourseData } from './../types/courseData.types';
import {When,Then} from '@cucumber/cucumber';
import { CustomWorld } from '../world/CustomWorld';
import { CsvReader } from '../utilities/csvReader';
import {expect} from '@playwright/test'

const courseName = CsvReader.read<CourseData>("CourseData.csv");

When('the user enter course name on the search tab', async function (this:CustomWorld) {

    await this.cmp.EnterSearch(courseName[0]!.coursename);
    
});

When('the user clicks the Add Course Structure button',async function(this:CustomWorld){

    await this.cmp.clickAddcourseStrcutureButton();

});



When('the user clicks the print button', async function (this: CustomWorld) {
    await this.acsp.clickPrintButton();
});

Then('the user able to see the downloaded excel file', async function (this: CustomWorld) {
    expect(await this.acsp.downloadExcel()).toBeTruthy();
});