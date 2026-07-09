import {When,Then} from '@cucumber/cucumber';
import { CustomWorld } from '../world/CustomWorld';

When('the user navigate to the Course Management page', async function (this:CustomWorld) {

    await this.adp.clickcoursemanagementlink();
  
});

When('the user enter course name on the search tab', async function (this:CustomWorld) {

  
});

When('the user clicks the add course structure option', async function () {
  
});

When('the user clicks the print button', async function () {
 
});

When('the user chooses the excel in export options', async function () {
  
});

Then('the user able to see the downloaded excel', async function () {
  
});