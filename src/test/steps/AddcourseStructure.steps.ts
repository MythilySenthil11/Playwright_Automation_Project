import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { CsvReader } from "../utilities/csvReader";
import { CourseStructureData } from "../types/courseStructure.types";
const courseData = CsvReader.read<CourseStructureData>("moduleData.csv");
When('the user clicks the Add Course Structure button on the Course Management page', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
    await this.cmp.clickAddcourseStrcutureButton();
});

When('the user clicks the Module button on the Course Structure page', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.acsp.clickModuleButton();
});

When('the user fills all the basic information', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
    const data = courseData[0];
    await this.acsp.setTitle(data?.Title!);
    await this.acsp.setDescription(data?.Description!);
});

When('the user clicks the Create & Save button', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.acsp.clicksaveButton();
});

Then("the user should see the message Operation completed successfully",
  async function (this: CustomWorld) {
    const data = courseData[0];
    await expect(this.acsp.operationCompleted).toContainText(data?.SuccessMessage!,{ timeout: 10000 });  }
);