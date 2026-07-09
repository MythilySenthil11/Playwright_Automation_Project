import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../world/CustomWorld';
import { ExistCategory, Update_details } from '../test-data/categoryData.json';
import { TIMEOUTS } from '../constants/timeouts';

Given('the user launches the application', async function (this: CustomWorld) {

    await this.courseCategoryPage.Navigate();

});

Given('the user is on Dynamic Field Management page', async function (this: CustomWorld) {

    await this.adp.dynamicFieldManagementClick();

});

When('the user clicks on the Course category button', async function (this: CustomWorld) {

    await this.dfp.ClickCourseCategory();

});

When('the user clicks the Add Category button', async function (this: CustomWorld) {

    await this.courseCategoryPage.ClickAddCategory();

});

When('the user enters the category details', async function (this: CustomWorld, dataTable: DataTable) {

    let data = dataTable.hashes()[0];

    await this.courseCategoryPage.EnterCategoryDetails(
        data!.Category_name!,
        data!.Course_names!,
        data!.Category_description!
    );
});

When('the user clicks Create category button', async function (this: CustomWorld) {

    await this.courseCategoryPage.ClickCartegoryButton()

});

Then('the user should see a successful creation message', async function (this: CustomWorld) {

    await expect(this.courseCategoryPage.successMessage).toBeVisible({timeout: TIMEOUTS.MEDIUM});

});


When("the user enters the category name in the search tab", async function (this: CustomWorld) {

    await this.courseCategoryPage.SearchCategory(ExistCategory.category_name);

});


When("the user clicks the dropdown button and clicks the edit option", async function (this: CustomWorld) {

        await this.courseCategoryPage.ClickDropDown();
        await this.courseCategoryPage.ClickEditOption();
});

When('the user clicks the dropdown button', async function (this: CustomWorld) {
    await this.courseCategoryPage.ClickDropDown();
});

When("the user updates the details of the category", async function (this: CustomWorld) {

    await this.courseCategoryPage.UpdateCategoryDetails(Update_details.category_name, Update_details.course_name, Update_details.category_description);

});

When("the user clicks the update category button", async function (this: CustomWorld) {

    await this.courseCategoryPage.ClickCartegoryButton();

});

Then("the user should see a successful updation message", async function (this: CustomWorld) {

    await expect(this.courseCategoryPage.successMessage).toBeVisible({timeout: TIMEOUTS.MEDIUM});

});

When('the user enters the updated category name in the search tab', async function (this: CustomWorld) {

    await this.courseCategoryPage.SearchCategory(Update_details.category_name);

});

When('the user clicks the delete option', async function (this: CustomWorld) {

    await this.courseCategoryPage.ClickDeleteOption();

});

When('the user clicks the delete button in the confirmation pop up', async function (this: CustomWorld) {

    await this.courseCategoryPage.ConfirmDelete();

});

When('the user searches the deleted category', async function (this: CustomWorld) {

    await this.courseCategoryPage.SearchCategory(Update_details.category_name);

});

Then('the user should see a not found message', async function (this: CustomWorld) {

    await expect(this.courseCategoryPage.noUsersMessage).toBeVisible({timeout: TIMEOUTS.MEDIUM});

});