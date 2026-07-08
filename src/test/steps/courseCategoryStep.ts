import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../world/CustomWorld';

Given('the user launches the application', async function (this:CustomWorld) {

    await this.courseCategoryPage.Navigate();
    
});

Given('the user is on Dynamic Field Management page', async function (this:CustomWorld) {

    await this.adp.dynamicFieldManagementClick();
    
});

When('the user clicks on the Course category button', async function (this:CustomWorld) {
  
    await this.dfp.ClickCourseCategory();

});

When('the user clicks the Add Category button', async function (this:CustomWorld) {

    await this.courseCategoryPage.ClickAddCategory();

    
});

When('the user enters the category details', async function (this:CustomWorld,dataTable: DataTable) {
    
    let data = dataTable.rowsHash();

    await this.courseCategoryPage.EnterCategoryDetails(
        data.Category_name!,
        data.Course_names!,
        data.Category_description!
    );

});

When('the user clicks Create category button', async function (this:CustomWorld) {
    
    await this.courseCategoryPage.ClickCartegoryButton()

});

Then('the user should see a successful creation message', async function (this:CustomWorld) {

    await expect (this.courseCategoryPage.successMessage).toBeVisible();
   
});