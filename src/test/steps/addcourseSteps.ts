import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { TIMEOUTS } from "../constants/timeouts";

interface AddCourse {
    client:string;
    type: string;
    model: string;
    category:string;
    name:string;
    level:string;   
}
When('User clicks on the Course Structure',  async function (this: CustomWorld) {
  await this.adp.clickcoursemanagementlink();
});

When('User clicks on the Add Course tab', async function (this: CustomWorld) {
  await this.addPage.clickAddBtn();
});

When('User enters the required details', async function (this: CustomWorld,dataTable) {
  const user = dataTable.hashes()[0] as AddCourse;
    await this.addPage.FillCourseDetails(
        user.client,
        user.type,
        user.model,
        user.category,
        user.name
    );
});

When('User clicks on the Next button',async function (this: CustomWorld,dataTable) {
  const data = dataTable.hashes()[0];
  await this.addPage.clickNxtBtn();
  await this.addPage.FillLevel(data.level);
});

When('User verifies the course hierarchy',  async function (this: CustomWorld) {
  await this.addPage.SelectHierarchy();
});

When('User selects the pedagogy',  async function (this: CustomWorld) {
  await this.addPage.pedagogy();
});

When('User enables the resource type',  async function (this: CustomWorld) {
  await this.addPage.ClickRes();
});

When('User verifies the skill selection',  async function (this: CustomWorld) {
  await this.addPage.SelectSkillset();
});

When('User clicks the Preview & Create button',  async function (this: CustomWorld) {
  await this.addPage.ClickCreateBtn();
});

Then('User verifies the course is added successfully',  async function (this: CustomWorld) {
  await this.addPage.VerifyCourseCreated();
});